# Arsenal Dev

Biblioteca visual de estudos para TypeScript, JavaScript, React, Tailwind CSS e Testes Unitários,
inspirada na página
["List of Items"](https://wiki.leagueoflegends.com/en-us/List_of_items): uma grade de ícones
agrupados por categoria e tier, onde cada ícone é um conceito de programação em vez de um item
de jogo. Passar o mouse mostra um preview rápido; clicar abre a página de detalhe do conceito
(`/item/:id`).

## Rodando o projeto

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

Testes:

```bash
npm run test         # roda uma vez e sai (CI)
npm run test:watch   # modo watch, para desenvolvimento
```

## Stack

- React + TypeScript + Vite
- `react-router-dom` para a navegação entre a grade (`/`) e a página de detalhe de cada
  conceito (`/item/:id`)
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- `lucide-react` para os ícones
- `prism-react-renderer` para o syntax highlight dos snippets
- i18n próprio (sem lib externa) para PT-BR / EN / ES, e tema claro/escuro via a variante
  customizada `light:` (ver `src/index.css`)
- Vitest + Testing Library para os testes (ver seção [Testes](#testes))

## Testes

Arquivos `*.test.ts(x)` ficam ao lado do código que testam (ex.: `src/lib/utils.test.ts`
testa `src/lib/utils.ts`). `src/test/setup.ts` carrega os matchers do jest-dom; use
`renderWithProviders` de `src/test/test-utils.tsx` em vez do `render` padrão para
qualquer componente que use `useLocale()` (ele já embrulha em `LocaleProvider` +
`BrowserRouter`).

O teste mais importante do projeto é `src/data/index.test.ts`: ele confere que **todo
item** em `src/data/*.ts` tem uma entrada correspondente nos **três** arquivos de
`src/i18n/content/` - isso é uma relação que o TypeScript não valida sozinho (explicado
na seção [Como adicionar um novo conceito](#como-adicionar-um-novo-conceito)), então
rode `npm run test` depois de adicionar ou editar conceitos para pegar qualquer `id`
fora de sincronia antes que vire um bug em runtime.

## Como adicionar um novo conceito

O conteúdo é dividido em duas partes, separadas dos componentes de UI:

- **Estrutura** (não traduzida): `src/data/typescript.ts`, `javascript.ts`, `react.ts`,
  `tailwind.ts`, `testing.ts` - um item por conceito, com `id`, `language`, `category`,
  `tier`, `icon`, os snippets de código (`declaration`/`example`) e `buildsInto`/`tags`.
- **Conteúdo textual** (traduzido): `src/i18n/content/pt-BR.ts`, `en.ts`, `es.ts` - um
  arquivo por idioma, cada um um mapa `id do item -> { name, stats, passive, whenToUse,
  avoidWhen }`. Todo item precisa de uma entrada em **todos os três** arquivos (o `id` é
  a chave que liga as duas partes; nada é verificado pelo TypeScript se a chave não bater
  - o teste `src/data/index.test.ts` cobre exatamente isso, rode `npm run test` depois de
  editar conceitos).

Passo a passo para adicionar um conceito novo:

1. Abra o arquivo estrutural da linguagem correspondente e adicione o item:

```ts
// src/data/typescript.ts
{
  id: 'ts-meu-conceito',          // único, prefixado com a linguagem (ts-, js-, react-, tw-)
  language: 'typescript',          // 'typescript' | 'javascript' | 'react' | 'tailwind'
  category: 'Minha Categoria',     // chave em pt-BR - traduza em src/i18n/category-labels.ts
  tier: 'basic',                   // 'starter' | 'basic' | 'epic' | 'legendary'
  icon: 'Type',                    // nome de um ícone do lucide-react (ver abaixo)
  declaration: `const exemplo = true`,   // snippet de "como declarar"
  example: `console.log(exemplo)`,      // snippet de "exemplo de uso"
  buildsInto: ['ts-outro-conceito'],    // ids de conceitos relacionados (opcional)
  tags: ['tag1', 'tag2'],               // usado pela busca (opcional)
}
```

2. Adicione a entrada correspondente nos três arquivos de conteúdo, usando o mesmo `id`
   como chave:

```ts
// src/i18n/content/pt-BR.ts
'ts-meu-conceito': {
  name: 'Meu Conceito',
  stats: ['Benefício 1', 'Benefício 2'],
  passive: 'Explicação curta de como o conceito funciona.',
  whenToUse: 'Quando usar esse conceito.',
  avoidWhen: 'Armadilha comum (opcional).',
},
```

   Repita em `en.ts` e `es.ts` com a tradução (`stats` precisa ter a mesma quantidade de
   itens nos três idiomas).

3. Se a `category` ainda não existir em nenhum outro item, adicione sua tradução em
   `src/i18n/category-labels.ts` (a chave é o texto em pt-BR usado em `category`).
4. Se usar um ícone do lucide-react que ainda não está no projeto, registre-o em
   `src/components/grid/ConceptIcon.tsx`: importe o ícone de `lucide-react` e adicione-o
   ao objeto `iconMap`.

Não é necessário tocar em nenhum componente além disso - a sidebar, a grade e os tooltips
são todos derivados automaticamente dos dados.

## i18n e tema

- **Idioma**: `src/context/LocaleContext.tsx` guarda o idioma ativo (persistido em
  `localStorage`). Três fontes de texto, cada uma com seu papel:
  - `src/i18n/ui-text.ts` - textos fixos da interface (botões, placeholders, cabeçalhos).
  - `src/i18n/category-labels.ts` - tradução dos rótulos de categoria.
  - `src/i18n/content/{pt-BR,en,es}.ts` - conteúdo dos 75 conceitos, acessado via
    `getItemContent(itemId, locale)` (`src/i18n/content/index.ts`).

  O seletor fica no header (`src/components/LocaleSwitcher.tsx`).
- **Tema**: `src/context/ThemeContext.tsx` alterna uma classe `light` em `<html>`
  (persistida em `localStorage`). O padrão sem prefixo continua sendo o tema escuro;
  classes `light:algumaCoisa` (variante customizada definida em `src/index.css`) definem
  o equivalente claro. Tokens de superfície (`bg-surface`, `bg-surface-sunken` etc.) trocam
  de valor automaticamente porque são CSS custom properties redefinidas em `:root.light`.

## Tiers

Cada tier tem uma cor própria (ver `src/lib/tier-styles.ts`):

| Tier | Uso sugerido |
|---|---|
| `starter` | Fundamentos |
| `basic` | Essenciais do dia a dia |
| `epic` | Intermediário |
| `legendary` | Avançado |

## Estrutura

```
src/
├── types/
│   ├── study-item.ts      # tipos StudyItem, StudyItemContent, Language, Tier
│   └── locale.ts          # tipo Locale, LOCALES
├── data/                  # estrutura (sem texto traduzido): typescript.ts, javascript.ts,
│                          # react.ts, tailwind.ts, testing.ts, index.ts
├── i18n/
│   ├── ui-text.ts         # textos fixos da interface, por locale
│   ├── category-labels.ts # tradução dos rótulos de categoria
│   └── content/           # conteúdo dos conceitos, um arquivo por idioma:
│                          # pt-BR.ts, en.ts, es.ts, index.ts (getItemContent)
├── context/               # LocaleContext, ThemeContext
├── pages/
│   ├── AboutPage.tsx      # página "Sobre o Projeto" (rota /about)
│   └── ItemDetailPage.tsx # página de detalhe de um conceito (rota /item/:id)
├── components/
│   ├── sidebar/           # árvore de navegação lateral
│   ├── grid/               # grade de ícones (ícone + nome) por linguagem/tier/categoria
│   ├── tooltip/            # card flutuante com o preview do conceito (hover)
│   ├── SearchBar.tsx
│   ├── LocaleSwitcher.tsx
│   ├── ThemeToggle.tsx
│   └── TierBadge.tsx
├── hooks/                 # useCategoryNavigation, useSearch, useLocale, useTheme, useHoverIntent...
├── lib/                    # utilitários e estilos de tier
└── test/                  # setup.ts (jest-dom) e test-utils.tsx (renderWithProviders)
```

Arquivos `*.test.ts(x)` ficam espalhados ao lado do código que testam (não aparecem
nessa árvore).
