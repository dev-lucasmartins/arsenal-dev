import type { StudyItem } from '../types/study-item'

export const accessibilityItems: StudyItem[] = [
  {
    id: 'a11y-semantic-html',
    language: 'accessibility',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'LayoutGrid',
    declaration: `<nav>...</nav>
<main>...</main>
<button>Enviar</button>`,
    example: `<header>
  <nav aria-label="Navegação principal">
    <a href="/">Início</a>
  </nav>
</header>
<main>
  <article>...</article>
</main>`,
    buildsInto: ['a11y-heading-hierarchy'],
    tags: ['semantic html', 'landmarks', 'nav', 'main'],
  },
  {
    id: 'a11y-alt-text',
    language: 'accessibility',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'Images',
    declaration: `<img src="grafico.png" alt="Gráfico de vendas crescendo 20% em março" />`,
    example: `function Avatar({ user }: { user: User }) {
  return <img src={user.photoUrl} alt={\`Foto de perfil de \${user.name}\`} />
}`,
    tags: ['alt text', 'imagens', 'screen reader'],
  },
  {
    id: 'a11y-labels',
    language: 'accessibility',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'FormInput',
    declaration: `<label htmlFor="email">E-mail</label>
<input id="email" type="email" />`,
    example: `function CampoEmail() {
  return (
    <>
      <label htmlFor="email">E-mail</label>
      <input id="email" type="email" name="email" />
    </>
  )
}`,
    buildsInto: ['a11y-form-errors'],
    tags: ['label', 'htmlfor', 'formulário'],
  },
  {
    id: 'a11y-heading-hierarchy',
    language: 'accessibility',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'Heading1',
    declaration: `<h1>Título da página</h1>
  <h2>Seção</h2>
    <h3>Subseção</h3>`,
    example: `<article>
  <h1>Arsenal Dev</h1>
  <section>
    <h2>TypeScript</h2>
    <h3>Tipagem básica</h3>
  </section>
</article>`,
    tags: ['heading', 'h1', 'hierarquia', 'outline'],
  },

  {
    id: 'a11y-focus-visible',
    language: 'accessibility',
    category: 'Teclado e Foco',
    tier: 'basic',
    icon: 'Focus',
    declaration: `button:focus-visible {
  outline: 2px solid var(--color-accent);
}`,
    example: `<button className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
  Salvar
</button>`,
    buildsInto: ['a11y-tab-order'],
    tags: ['focus-visible', 'outline', 'anel de foco'],
  },
  {
    id: 'a11y-tab-order',
    language: 'accessibility',
    category: 'Teclado e Foco',
    tier: 'basic',
    icon: 'ListOrdered',
    declaration: `<input tabIndex={0} />
<div tabIndex={-1} />
<input tabIndex={1} />`,
    example: `// tabIndex={-1}: focável só via JS (ex: depois de abrir um modal)
// tabIndex={0}: entra na ordem natural do DOM
// tabIndex > 0: quase sempre uma má ideia, quebra a ordem natural
<div ref={modalRef} tabIndex={-1} role="dialog" />`,
    tags: ['tabindex', 'ordem de tabulação', 'teclado'],
  },
  {
    id: 'a11y-skip-link',
    language: 'accessibility',
    category: 'Teclado e Foco',
    tier: 'basic',
    icon: 'SkipForward',
    declaration: `<a href="#conteudo" className="sr-only focus:not-sr-only">
  Pular para o conteúdo
</a>`,
    example: `function Layout() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2">
        Pular para o conteúdo
      </a>
      <Sidebar />
      <main id="conteudo">...</main>
    </>
  )
}`,
    tags: ['skip link', 'sr-only', 'navegação por teclado'],
  },
  {
    id: 'a11y-keyboard-nav',
    language: 'accessibility',
    category: 'Teclado e Foco',
    tier: 'basic',
    icon: 'Keyboard',
    declaration: `function onKeyDown(event: React.KeyboardEvent) {
  if (event.key === 'Escape') close()
  if (event.key === 'Enter') select()
}`,
    example: `function MenuItem({ onSelect }: { onSelect: () => void }) {
  return (
    <li
      role="menuitem"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelect()
      }}
    >
      Opção
    </li>
  )
}`,
    tags: ['keydown', 'enter', 'escape', 'navegação'],
  },

  {
    id: 'a11y-aria-label',
    language: 'accessibility',
    category: 'ARIA',
    tier: 'epic',
    icon: 'ScanEye',
    declaration: `<button aria-label="Fechar modal">
  <X />
</button>`,
    example: `<button
  type="button"
  onClick={onRequestClose}
  aria-label={t.closeTooltip}
>
  <X size={18} />
</button>`,
    buildsInto: ['a11y-roles'],
    tags: ['aria-label', 'aria-labelledby', 'botão sem texto'],
  },
  {
    id: 'a11y-aria-live',
    language: 'accessibility',
    category: 'ARIA',
    tier: 'epic',
    icon: 'Megaphone',
    declaration: `<div aria-live="polite">{mensagemDeStatus}</div>`,
    example: `function Toast({ message }: { message: string }) {
  return (
    <div role="status" aria-live="polite" className="toast">
      {message}
    </div>
  )
}`,
    tags: ['aria-live', 'região dinâmica', 'leitor de tela'],
  },
  {
    id: 'a11y-aria-expanded',
    language: 'accessibility',
    category: 'ARIA',
    tier: 'epic',
    icon: 'ToggleLeft',
    declaration: `<button aria-expanded={isOpen} aria-controls="painel">
  Opções
</button>
<div id="painel" hidden={!isOpen}>...</div>`,
    example: `function Accordion({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <>
      <button aria-expanded={isOpen} aria-controls="painel-conteudo" onClick={onToggle}>
        Detalhes
      </button>
      <div id="painel-conteudo" hidden={!isOpen}>
        Conteúdo expansível
      </div>
    </>
  )
}`,
    tags: ['aria-expanded', 'aria-controls', 'accordion'],
  },
  {
    id: 'a11y-roles',
    language: 'accessibility',
    category: 'ARIA',
    tier: 'epic',
    icon: 'Blocks',
    declaration: `<div role="dialog" aria-modal="true">...</div>
<ul role="listbox">...</ul>`,
    example: `function Modal({ children }: { children: ReactNode }) {
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="titulo-modal">
      <h2 id="titulo-modal">Confirmar ação</h2>
      {children}
    </div>
  )
}`,
    tags: ['role', 'aria-modal', 'semântica artificial'],
  },

  {
    id: 'a11y-color-contrast',
    language: 'accessibility',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'Contrast',
    declaration: `/* WCAG AA: contraste mínimo 4.5:1 para texto normal */
color: #1e293b;
background: #f8fafc;`,
    example: `// slate-800 sobre slate-50: contraste ~15:1, passa fácil
// slate-400 sobre slate-50: contraste ~2.5:1, falha no WCAG AA
<p className="text-slate-800">Texto legível</p>
<p className="text-slate-400">Texto com contraste insuficiente</p>`,
    tags: ['contraste', 'wcag', 'contrast ratio'],
  },
  {
    id: 'a11y-reduced-motion',
    language: 'accessibility',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'Activity',
    declaration: `@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}`,
    example: `.category-highlight {
  animation: category-flash 2s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .category-highlight {
    animation: none;
  }
}`,
    tags: ['prefers-reduced-motion', 'animação', 'enjoo'],
  },
  {
    id: 'a11y-form-errors',
    language: 'accessibility',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'CircleAlert',
    declaration: `<input aria-invalid={hasError} aria-describedby="email-erro" />
<span id="email-erro" role="alert">E-mail inválido</span>`,
    example: `function CampoComErro({ error }: { error?: string }) {
  return (
    <>
      <input aria-invalid={!!error} aria-describedby={error ? 'email-erro' : undefined} />
      {error && (
        <span id="email-erro" role="alert" className="text-rose-400">
          {error}
        </span>
      )}
    </>
  )
}`,
    tags: ['aria-invalid', 'aria-describedby', 'mensagem de erro'],
  },
  {
    id: 'a11y-screen-reader-testing',
    language: 'accessibility',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'Eye',
    declaration: `// VoiceOver (Mac): Cmd + F5
// NVDA (Windows): gratuito, open source
// axe DevTools: extensão de auditoria automática`,
    example: `test('não tem violações básicas de acessibilidade', async () => {
  const { container } = render(<SearchBar value="" onChange={() => {}} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})`,
    tags: ['voiceover', 'nvda', 'axe', 'auditoria'],
  },
]
