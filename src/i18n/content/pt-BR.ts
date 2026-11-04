import type { StudyItemContent } from "../../types/study-item";

export const ptBRContent: Record<string, StudyItemContent> = {
  "ts-basic-types": {
    name: "Tipagem Básica",
    stats: [
      "Erros pegos em tempo de compilação",
      "Autocomplete mais preciso no editor",
      "Documentação implícita do código",
    ],
    passive:
      "TypeScript infere o tipo de uma variável a partir do valor inicial, mas você também pode declarar o tipo explicitamente. Os tipos primitivos (string, number, boolean etc.) formam a base de todo o sistema de tipos.",
    whenToUse:
      "Sempre que declarar variáveis, parâmetros ou retornos de função - é a base de tudo no TypeScript.",
    avoidWhen:
      "Evite anotar tipos que o TypeScript já infere sozinho (ex.: `let x: number = 5`), isso só adiciona ruído visual.",
  },
  "ts-enums": {
    name: "Enums",
    stats: [
      "Conjunto fixo de valores nomeados",
      "Mais legível que strings ou números mágicos",
      "Autocomplete nos valores possíveis",
    ],
    passive:
      "Um enum define um conjunto nomeado de constantes relacionadas. Por padrão os valores são numéricos (0, 1, 2...), mas você pode usar string enums para valores mais legíveis em debug.",
    whenToUse:
      "Quando você tem um conjunto fixo e conhecido de opções (status, categorias, direções).",
    avoidWhen:
      'Para casos simples, um union de string literais (`type Status = "pendente" | "pago"`) costuma ser mais leve que um enum.',
  },
  "ts-arrays-tuples": {
    name: "Arrays & Tuplas Tipados",
    stats: [
      "Arrays homogêneos com `Tipo[]` ou `Array<Tipo>`",
      "Tuplas fixam quantidade e tipo de cada posição",
      "Tuplas documentam o papel de cada elemento",
    ],
    passive:
      "Um array tipado (`number[]`) aceita qualquer quantidade de elementos do mesmo tipo. Uma tupla (`[string, number]`) é um array de tamanho fixo onde cada posição tem seu próprio tipo - útil para retornos como `[valor, erro]`.",
    whenToUse:
      "Arrays para coleções de tamanho variável; tuplas quando a posição de cada valor tem um significado fixo (como o retorno de `useState`).",
    avoidWhen:
      "Não use tuplas longas (4+ posições) - a essa altura um objeto nomeado é mais legível que lembrar a ordem.",
  },
  "ts-literal-types": {
    name: "Literal Types",
    stats: [
      "Restringe um valor a um conjunto exato de literais",
      'Combinado com union, cria "enums" leves de string',
      "Autocomplete mostra exatamente os valores aceitos",
    ],
    passive:
      'Um literal type usa um valor específico (uma string, número ou boolean exatos) como tipo, em vez do tipo genérico. Combinados em union (`"a" | "b"`), descrevem um conjunto fechado de opções válidas.',
    whenToUse:
      "Para representar um conjunto fixo e pequeno de valores válidos, como alternativa leve a enums.",
    avoidWhen:
      "Se o conjunto de valores pode crescer dinamicamente em tempo de execução, literal types não ajudam - isso é dado, não tipo.",
  },
  "ts-interfaces-vs-types": {
    name: "Interfaces vs Types",
    stats: [
      "Modelam a forma de objetos",
      "Interfaces podem ser estendidas (extends) e mescladas",
      "Types aceitam uniões, interseções e tipos primitivos",
    ],
    passive:
      "`interface` e `type` descrevem a forma de um objeto e, na maioria dos casos, são intercambiáveis. Interfaces favorecem herança (`extends`) e declaration merging; `type` é mais flexível para unions, tuplas e tipos utilitários.",
    whenToUse:
      "Use `interface` para formas de objetos que podem ser estendidas; use `type` quando precisar de unions, interseções ou aliases de tipos primitivos.",
    avoidWhen:
      "Não crie uma interface só para um union de strings - isso é trabalho para `type`.",
  },
  "ts-readonly-optional": {
    name: "Readonly & Optional Properties",
    stats: [
      "`readonly` impede reatribuição da propriedade após criada",
      "`?` marca uma propriedade como opcional",
      "Ajuda a modelar objetos parcialmente preenchidos",
    ],
    passive:
      "Prefixar uma propriedade com `readonly` impede que ela seja reatribuída depois que o objeto é criado (apenas em tempo de compilação). O sufixo `?` marca uma propriedade como opcional, permitindo omiti-la ao criar o objeto.",
    whenToUse:
      "`readonly` para dados que não devem mudar depois de criados (ids, configs); `?` para campos genuinamente opcionais.",
    avoidWhen:
      'Não marque tudo como opcional só para evitar erros de tipo - isso empurra validações de "campo existe?" para todo lugar que usa o objeto.',
  },
  "ts-type-assertions": {
    name: "Type Assertions (as)",
    stats: [
      'Diz ao compilador "confie em mim, eu sei o tipo real"',
      "Não faz nenhuma conversão em tempo de execução",
      "Útil ao lidar com APIs do DOM ou dados externos",
    ],
    passive:
      "`as` força o TypeScript a tratar um valor como um tipo específico, sem nenhuma verificação ou conversão real - é só uma instrução para o compilador. Diferente de narrowing, não existe checagem em runtime por trás.",
    whenToUse:
      "Quando você tem certeza do tipo real (vindo do DOM, de uma lib sem tipos, de JSON.parse) e o TypeScript não tem como inferir isso sozinho.",
    avoidWhen:
      'Não use `as` para "calar" um erro de tipo legítimo - se o compilador está certo, o bug é seu, não dele.',
  },
  "ts-index-signatures": {
    name: "Index Signatures",
    stats: [
      "Tipa objetos usados como dicionário (chave dinâmica)",
      "Garante que todo valor acessado tenha o mesmo tipo",
      "Alternativa mais explícita ao `Record<K, V>`",
    ],
    passive:
      "Uma index signature (`[chave: string]: Tipo`) descreve objetos cujas chaves não são conhecidas de antemão, mas cujos valores seguem sempre o mesmo tipo - como um dicionário ou mapa de configuração.",
    whenToUse:
      "Quando a quantidade e o nome das chaves do objeto não são fixos, mas todo valor tem o mesmo formato.",
    avoidWhen:
      "Se as chaves são conhecidas e fixas, prefira uma interface normal - index signatures perdem o autocomplete dos nomes de campo.",
  },
  "ts-typed-functions": {
    name: "Funções Tipadas",
    stats: [
      "Parâmetros e retorno com contrato claro",
      "Parâmetros opcionais e valores padrão",
      "Overloads para múltiplas assinaturas",
    ],
    passive:
      "Tipar uma função significa anotar o tipo de cada parâmetro e, quando necessário, o tipo de retorno. O TypeScript geralmente infere o retorno, mas anotá-lo explicitamente documenta a intenção e evita retornos incorretos.",
    whenToUse:
      "Em toda função pública/exportada - garante que quem chama saiba exatamente o que passar e o que recebe de volta.",
    avoidWhen:
      "Em funções internas muito simples, deixar o TypeScript inferir o retorno é aceitável.",
  },
  "ts-arrow-functions-typed": {
    name: "Arrow Functions Tipadas",
    stats: [
      "Sintaxe curta para funções, com tipos nos parâmetros",
      "Tipo pode ser inferido do contexto (callbacks)",
      "Não têm `this` próprio - herdam do escopo externo",
    ],
    passive:
      "Arrow functions podem ser tipadas da mesma forma que funções normais, anotando parâmetros e retorno. Quando usadas como callback de uma função já tipada (como `.map`), o TypeScript geralmente infere os tipos sozinho, sem anotação explícita.",
    whenToUse:
      "Para callbacks curtos e funções que precisam herdar o `this` do escopo onde foram criadas.",
    avoidWhen:
      "Evite anotar tipos que o contexto já infere (como `n: number` dentro de `.map` de um array de `number[]`) - é redundante.",
  },
  "ts-optional-rest-params": {
    name: "Parâmetros Opcionais & Rest",
    stats: [
      "`?` marca um parâmetro como opcional",
      "Valores padrão evitam checagem manual de `undefined`",
      "Rest parameters (`...args`) aceitam quantidade variável de argumentos",
    ],
    passive:
      "Um parâmetro opcional (`nome?: tipo`) pode ser omitido na chamada e vem como `undefined` se não informado. Um valor padrão (`nome = valor`) substitui isso automaticamente. Rest parameters recolhem todos os argumentos restantes em um array tipado.",
    whenToUse:
      "Parâmetros opcionais/padrão para argumentos configuráveis; rest parameters quando a função aceita uma quantidade variável de valores do mesmo tipo.",
    avoidWhen:
      "Parâmetros opcionais devem vir depois dos obrigatórios - não dá para tornar um parâmetro do meio opcional sem reorganizar a assinatura.",
  },
  "ts-function-overloads": {
    name: "Function Overloads",
    stats: [
      "Mesma função com assinaturas diferentes dependendo dos argumentos",
      "Cada overload documenta uma combinação válida de parâmetros",
      "A implementação real fica escondida, só as assinaturas são públicas",
    ],
    passive:
      "Overloads declaram múltiplas assinaturas para a mesma função, cada uma com tipos de entrada/saída diferentes. O TypeScript escolhe a assinatura certa com base nos argumentos passados na chamada; por baixo, existe só uma implementação compatível com todas elas.",
    whenToUse:
      "Quando o tipo de retorno de uma função depende do valor (não só do tipo) de um dos argumentos.",
    avoidWhen:
      "Se as assinaturas puderem ser unificadas com generics ou union types de forma mais simples, prefira isso - overloads têm sintaxe mais verbosa.",
  },
  "ts-generics": {
    name: "Generics",
    stats: [
      "Funções e tipos reutilizáveis sem perder tipagem",
      "Relaciona o tipo de entrada com o de saída",
      "Base de praticamente toda lib tipada (Array, Promise etc.)",
    ],
    passive:
      "Generics permitem escrever código que funciona com qualquer tipo, mas mantendo a relação entre os tipos de entrada e saída. É como um parâmetro, só que para tipos em vez de valores.",
    whenToUse:
      "Quando uma função ou tipo precisa funcionar com vários tipos diferentes, mas sem perder a informação de qual tipo está sendo usado.",
    avoidWhen:
      "Se a função só funciona com um tipo específico, generics são complexidade desnecessária - tipe direto.",
  },
  "ts-utility-types": {
    name: "Utility Types",
    stats: [
      "Transformam tipos existentes sem repetir código",
      "`Partial`, `Pick`, `Omit`, `Record` prontos da linguagem",
      "Evitam duplicar interfaces parecidas",
    ],
    passive:
      "Utility types são tipos genéricos embutidos no TypeScript que transformam outros tipos: tornam propriedades opcionais, selecionam ou removem campos, criam dicionários tipados, entre outros.",
    whenToUse:
      "Quando precisar de uma variação de um tipo já existente (versão parcial, sem um campo, só com alguns campos) em vez de criar outra interface do zero.",
    avoidWhen:
      "Se a variação muda completamente a forma do dado, provavelmente é melhor um tipo novo e explícito.",
  },
  "ts-generic-constraints": {
    name: "Generic Constraints",
    stats: [
      "Limita quais tipos um generic pode aceitar",
      '`extends` nesse contexto significa "deve ter esse formato"',
      "Permite acessar propriedades com segurança dentro da função genérica",
    ],
    passive:
      "Por padrão, um generic (`T`) aceita qualquer tipo. Uma constraint (`T extends Algo`) restringe isso, garantindo que `T` tenha pelo menos a forma de `Algo` - o que permite acessar propriedades de `Algo` dentro da função com segurança de tipo.",
    whenToUse:
      "Quando uma função genérica precisa acessar alguma propriedade ou método específico do tipo recebido.",
    avoidWhen:
      "Se a constraint termina exigindo quase todas as propriedades de um tipo concreto, talvez generics não sejam necessários ali.",
  },
  "ts-mapped-types": {
    name: "Mapped Types",
    stats: [
      "Gera um novo tipo transformando as propriedades de outro",
      "Base de como `Partial`, `Readonly` e `Pick` funcionam por dentro",
      "Permite aplicar a mesma transformação a todas as chaves",
    ],
    passive:
      "Um mapped type itera sobre as chaves de um tipo existente (`[K in keyof T]`) e aplica uma transformação a cada uma, gerando um novo tipo. É o mecanismo por trás da maioria dos utility types embutidos.",
    whenToUse:
      "Ao criar seus próprios utility types que precisam transformar todas as propriedades de outro tipo de forma consistente.",
    avoidWhen:
      "Para as transformações mais comuns, prefira os utility types já prontos (`Partial`, `Readonly`) em vez de reescrever o mapped type do zero.",
  },
  "ts-narrowing": {
    name: "Narrowing",
    stats: [
      "Reduz um tipo amplo (union) para um mais específico",
      "Baseado em checagens em tempo de execução",
      "Deixa o código livre de casts manuais (`as`)",
    ],
    passive:
      "Narrowing é o processo pelo qual o TypeScript 'estreita' o tipo de uma variável dentro de um bloco de código, a partir de checagens como `typeof`, `instanceof`, `in` ou comparações diretas. Dentro do bloco, o compilador já sabe o tipo mais específico.",
    whenToUse:
      "Sempre que trabalhar com union types e precisar acessar algo específico de um dos membros da união.",
    avoidWhen:
      "Não use `as` para forçar um tipo quando um narrowing correto resolveria o problema de forma segura.",
  },
  "ts-discriminated-unions": {
    name: "Discriminated Unions",
    stats: [
      'Union de objetos com um campo literal em comum ("discriminante")',
      "Narrowing automático e seguro baseado nesse campo",
      "Evita bugs de acessar uma propriedade que não existe no tipo atual",
    ],
    passive:
      "Uma discriminated union é uma union de interfaces que compartilham um campo com valores literais diferentes (o 'discriminante'). Ao checar esse campo, o TypeScript automaticamente estreita o tipo para a interface correta dentro daquele bloco.",
    whenToUse:
      "Para modelar estados mutuamente exclusivos (carregando/sucesso/erro, formas geométricas diferentes) de forma que o compilador garanta que você tratou todos os casos.",
    avoidWhen:
      "Se os estados compartilham quase todos os campos e diferem só em um detalhe opcional, uma única interface com campos opcionais pode ser mais simples.",
  },
  "ts-type-predicates": {
    name: "Type Predicates (is)",
    stats: [
      "Função que funciona como um type guard reutilizável",
      "Retorna `boolean`, mas informa ao compilador o tipo estreitado",
      "Reaproveita a mesma checagem em vários lugares do código",
    ],
    passive:
      "Um type predicate é uma função cujo tipo de retorno é `parametro is Tipo` em vez de só `boolean`. Quando ela retorna `true`, o TypeScript estreita o tipo da variável testada em todo o bloco onde a função foi chamada, exatamente como um `typeof` faria.",
    whenToUse:
      "Quando a mesma lógica de narrowing é usada em vários lugares, ou quando a checagem é complexa demais para um `typeof`/`in` simples.",
    avoidWhen:
      'Para checagens simples de uma linha, um type guard inline (`typeof x === "string"`) já resolve sem precisar de uma função nomeada.',
  },
  "ts-conditional-types": {
    name: "Conditional Types",
    stats: [
      "Tipos que mudam de acordo com uma condição",
      "Base de muitos utility types internos (`Exclude`, `ReturnType`)",
      "Permite inferência com `infer`",
    ],
    passive:
      "Conditional types aplicam uma lógica de `extends ? :` no nível de tipos: dependendo se um tipo satisfaz uma condição, o resultado é um tipo ou outro. Combinados com `infer`, permitem extrair tipos de dentro de outros tipos.",
    whenToUse:
      "Ao construir tipos utilitários próprios que precisam se comportar diferente dependendo do tipo recebido.",
    avoidWhen:
      "Para o dia a dia de aplicação, prefira os utility types já prontos - conditional types manuais geralmente aparecem em código de bibliotecas.",
  },
  "ts-template-literal-types": {
    name: "Template Literal Types",
    stats: [
      "Constrói tipos string combinando literais e unions",
      "Gera todas as combinações possíveis automaticamente",
      "Útil para tipar nomes de eventos, rotas ou classes CSS",
    ],
    passive:
      "Template literal types usam a mesma sintaxe de template strings no nível de tipos, combinando literais fixos com unions para gerar automaticamente todas as strings possíveis resultantes.",
    whenToUse:
      "Ao tipar valores de string que seguem um padrão previsível (nomes de evento, rotas de API, variantes de classe CSS).",
    avoidWhen:
      "Se as combinações geradas forem muito numerosas, o autocomplete e as mensagens de erro do editor podem ficar lentos ou poluídos.",
  },
  "ts-decorators": {
    name: "Decorators",
    stats: [
      "Anotam e modificam classes, métodos ou propriedades",
      "Sintaxe `@decorator` aplicada declarativamente",
      "Base de frameworks como Angular e NestJS",
    ],
    passive:
      "Um decorator é uma função especial que intercepta a definição de uma classe, método ou propriedade, podendo observar ou substituir seu comportamento. São aplicados com a sintaxe `@nome` diretamente acima do elemento decorado.",
    whenToUse:
      "Ao trabalhar com frameworks que já usam decorators (Angular, NestJS, TypeORM) ou para aplicar o mesmo comportamento transversal (log, validação) em várias classes.",
    avoidWhen:
      "Em código de aplicação comum, sem um framework que já use decorators, a complexidade extra raramente compensa um helper de função simples.",
  },
  "js-variables-primitives": {
    name: "Variáveis & Tipos Primitivos",
    stats: [
      "`let`/`const` com escopo de bloco",
      "7 tipos primitivos: string, number, boolean, null, undefined, symbol, bigint",
      "Base para entender comparação e coerção de tipos",
    ],
    passive:
      "Variáveis declaradas com `let` podem ser reatribuídas; `const` não pode ser reatribuída (mas objetos/arrays dentro dela ainda podem ser mutados). Evite `var`, que tem escopo de função e comportamentos confusos de hoisting.",
    whenToUse:
      "Use `const` por padrão; troque para `let` só quando a variável realmente precisar ser reatribuída.",
    avoidWhen:
      "Evite `var` em código novo - seu escopo de função (em vez de bloco) causa bugs sutis em loops e condicionais.",
  },
  "js-functions": {
    name: "Funções",
    stats: [
      "Declaração, expressão e arrow functions",
      "Parâmetros padrão e rest parameters",
      "Arrow functions não têm `this` próprio",
    ],
    passive:
      "Funções são valores de primeira classe em JavaScript: podem ser armazenadas em variáveis, passadas como argumento e retornadas de outras funções. Arrow functions têm sintaxe curta e herdam o `this` do contexto onde foram criadas.",
    whenToUse:
      "Declarações de função para funções nomeadas reaproveitáveis; arrow functions para callbacks curtos e quando precisar herdar `this`.",
    avoidWhen:
      "Evite arrow functions como métodos de objeto se precisar que `this` aponte para o próprio objeto.",
  },
  "js-operators-coercion": {
    name: "Operadores & Coerção de Tipos",
    stats: [
      "`===`/`!==` comparam sem converter tipos",
      "`==`/`!=` convertem os tipos antes de comparar",
      "Coerção implícita é fonte clássica de bugs sutis",
    ],
    passive:
      'JavaScript converte tipos automaticamente em certas operações (coerção implícita) - por exemplo, `"5" + 1` resulta em `"51"`, mas `"5" - 1` resulta em `4`. Usar `===` em vez de `==` evita que essas conversões aconteçam na comparação.',
    whenToUse:
      "Use `===`/`!==` sempre, por padrão - é mais previsível e evita bugs de coerção.",
    avoidWhen:
      'Evite depender de coerção implícita em condições (`if (valor)`) quando `0`, `""` ou `NaN` puderem ser valores válidos - eles são "falsy" e entram no mesmo branch que `null`/`undefined`.',
  },
  "js-conditionals-loops": {
    name: "Condicionais & Loops",
    stats: [
      "`if/else` e `switch` para decisões",
      "`for`, `while` e `for...of` para repetição",
      "`for...of` itera valores; `for...in` itera chaves",
    ],
    passive:
      "Condicionais decidem qual bloco de código executa com base em uma expressão booleana. Loops repetem um bloco até que uma condição pare de ser verdadeira. `for...of` é o loop preferido para percorrer os valores de arrays e outros iteráveis.",
    whenToUse:
      "Condicionais para ramificar a lógica; `for...of` para percorrer listas; `while` quando o número de repetições não é conhecido de antemão.",
    avoidWhen:
      "Evite `for...in` em arrays - ele itera índices como strings e pode incluir propriedades herdadas; use `for...of` ou métodos de array.",
  },
  "js-destructuring": {
    name: "Destructuring & Spread/Rest",
    stats: [
      "Extrai valores de arrays/objetos em uma linha",
      "Spread (`...`) copia e combina estruturas",
      "Rest (`...`) agrupa o que sobrou em parâmetros/arrays",
    ],
    passive:
      "Destructuring 'desempacota' valores de arrays ou propriedades de objetos direto em variáveis. Spread expande um iterável em elementos individuais; rest faz o inverso, juntando múltiplos valores em um array ou objeto.",
    whenToUse:
      "Ao extrair props de um objeto, parâmetros de função, ou ao criar cópias imutáveis de objetos/arrays.",
    avoidWhen:
      "Evite destructuring profundo demais (vários níveis) - fica difícil de ler; prefira passos intermediários.",
  },
  "js-array-methods": {
    name: "Array Methods",
    stats: [
      "`map`, `filter`, `reduce` evitam loops manuais",
      "Não mutam o array original (retornam um novo)",
      "Encadeáveis para pipelines de transformação de dados",
    ],
    passive:
      "`map` transforma cada item em outro valor, `filter` seleciona itens que passam um teste, e `reduce` acumula os itens em um único resultado. Juntos, substituem a maioria dos `for` loops manuais de forma mais declarativa.",
    whenToUse:
      "Sempre que precisar transformar, filtrar ou agregar dados de uma lista de forma legível.",
    avoidWhen:
      "Se precisar interromper a iteração no meio (`break`), um `for...of` tradicional é mais direto que `forEach`/`reduce`.",
  },
  "js-template-literals": {
    name: "Template Literals",
    stats: [
      "Interpolação de variáveis direto na string com `${}`",
      "Suporta strings multi-linha sem concatenação",
      "Mais legível que concatenar com `+`",
    ],
    passive:
      "Template literals (delimitados por crases) permitem embutir expressões dentro da string usando `${}`, e também permitem quebras de linha literais, sem precisar de `\\n` ou concatenação com `+`.",
    whenToUse:
      "Sempre que precisar misturar texto fixo com variáveis, ou escrever strings multi-linha.",
    avoidWhen:
      "Para strings simples sem nenhuma interpolação, aspas simples/duplas continuam igualmente válidas e um pouco mais diretas.",
  },
  "js-optional-chaining-nullish": {
    name: "Optional Chaining & Nullish Coalescing",
    stats: [
      "`?.` acessa propriedades sem quebrar se algo no meio for `null`/`undefined`",
      "`??` dá um valor padrão só quando o valor é `null`/`undefined`",
      "Evita correntes de `&&` só para checar existência",
    ],
    passive:
      '`?.` interrompe o acesso e retorna `undefined` caso qualquer parte anterior da cadeia seja `null` ou `undefined`, em vez de lançar um erro. `??` retorna o valor da direita apenas quando o da esquerda é `null`/`undefined` - diferente de `||`, que também cairia em valores como `0` ou `""`.',
    whenToUse:
      "Ao acessar propriedades que podem não existir (dados de API, objetos opcionais) e ao definir valores padrão que só devem entrar em cena para `null`/`undefined`.",
    avoidWhen:
      'Não troque `??` por `||` quando `0`, `""` ou `false` forem valores válidos - `||` os substituiria incorretamente pelo padrão.',
  },
  "js-closures": {
    name: "Closures",
    stats: [
      "Função 'lembra' variáveis do escopo onde foi criada",
      "Permite estado privado sem classes",
      "Base de padrões como factory functions e memoization",
    ],
    passive:
      "Uma closure é a combinação de uma função com as variáveis do escopo léxico em que ela foi declarada. Mesmo depois que a função externa termina de executar, a função interna continua tendo acesso a essas variáveis.",
    whenToUse:
      "Para criar estado privado/encapsulado, factory functions, ou guardar configuração que uma função vai usar repetidamente (ex.: debounce, memoization).",
    avoidWhen:
      "Cuidado em loops: capturar a variável errada por closure é uma fonte clássica de bugs (hoje evitado usando `let` no lugar de `var`).",
  },
  "js-higher-order-functions": {
    name: "Higher-Order Functions",
    stats: [
      "Função que recebe e/ou retorna outra função",
      "Base de `map`, `filter`, `reduce` e dos callbacks",
      "Permite compor comportamento sem duplicar código",
    ],
    passive:
      "Uma higher-order function é qualquer função que recebe outra função como argumento, retorna uma função, ou ambos. Como funções são valores de primeira classe em JavaScript, esse padrão aparece o tempo todo - em `map`/`filter`, em debounce, em middlewares.",
    whenToUse:
      "Para adicionar comportamento comum (log, cache, validação) a várias funções sem repetir código, ou para parametrizar o comportamento de uma função com outra.",
    avoidWhen:
      "Não encadeie várias higher-order functions a ponto de o fluxo real da lógica ficar difícil de seguir - simplicidade também conta.",
  },
  "js-callbacks": {
    name: "Callbacks",
    stats: [
      "Função passada como argumento para ser chamada depois",
      "Base histórica do assincronismo em JavaScript, antes de Promises",
      "Ainda usada em APIs de eventos e timers",
    ],
    passive:
      "Um callback é uma função passada como argumento para outra, que a invoca em um momento apropriado - imediatamente, depois de um evento, ou depois de uma operação assíncrona terminar. Antes das Promises, era o único jeito de lidar com código assíncrono.",
    whenToUse:
      "Em APIs de eventos (`addEventListener`) e timers, onde a própria plataforma espera um callback.",
    avoidWhen:
      'Para encadear múltiplas operações assíncronas, callbacks aninhados geram "callback hell" - prefira Promises ou async/await.',
  },
  "js-promises": {
    name: "Promises",
    stats: [
      "Código assíncrono mais legível que callbacks",
      "Tratamento de erro centralizado com `.catch`",
      "Encadeável com `.then` para múltiplos passos",
    ],
    passive:
      "Uma Promise representa um valor que pode estar disponível agora, no futuro, ou nunca (erro). Ela tem três estados - pendente, resolvida (fulfilled) ou rejeitada (rejected) - e permite encadear passos assíncronos sem aninhar callbacks.",
    whenToUse:
      "Para qualquer operação assíncrona: chamadas de API, leitura de arquivos, timers encapsulados.",
    avoidWhen:
      "Para múltiplos passos sequenciais, `async/await` costuma ser mais legível que encadear vários `.then`.",
  },
  "js-promise-combinators": {
    name: "Promise.all & Combinators",
    stats: [
      "`Promise.all` executa várias Promises em paralelo",
      "`Promise.allSettled` espera todas, mesmo que alguma falhe",
      "`Promise.race` resolve com a primeira que terminar",
    ],
    passive:
      "Esses métodos estáticos combinam múltiplas Promises em uma só. `Promise.all` rejeita assim que qualquer uma falhar; `Promise.allSettled` sempre espera todas e retorna o resultado (sucesso ou erro) de cada uma individualmente.",
    whenToUse:
      "`Promise.all` quando todas as operações precisam ter sucesso; `allSettled` quando você quer o resultado de cada uma independente de falhas.",
    avoidWhen:
      "Não use `Promise.all` se uma falha isolada não deveria interromper as outras operações - isso é exatamente o caso de uso do `allSettled`.",
  },
  "js-fetch-api": {
    name: "Fetch API",
    stats: [
      "API nativa do browser para requisições HTTP",
      "Retorna uma Promise que resolve com a Response",
      "`response.ok` precisa ser checado manualmente",
    ],
    passive:
      "`fetch` inicia uma requisição HTTP e retorna uma Promise que resolve com um objeto `Response` assim que os cabeçalhos chegam. É preciso chamar `.json()` ou `.text()` (que também retornam Promises) para ler o corpo da resposta.",
    whenToUse:
      "Para qualquer chamada HTTP no browser sem precisar de uma lib extra.",
    avoidWhen:
      "Fetch não rejeita a Promise em respostas de erro HTTP (404, 500) - sempre cheque `response.ok` manualmente, ou use uma lib que faça isso por você.",
  },
  "js-async-await": {
    name: "Async/Await",
    stats: [
      "Código assíncrono com aparência de código síncrono",
      "`try/catch` para tratar erros em vez de `.catch`",
      "Fácil de combinar com `Promise.all` para paralelismo",
    ],
    passive:
      "`async/await` é açúcar sintático sobre Promises: uma função `async` sempre retorna uma Promise, e `await` pausa a execução daquela função até a Promise ser resolvida, sem bloquear o restante da aplicação.",
    whenToUse:
      "Quando há vários passos assíncronos sequenciais - o código fica muito mais fácil de ler do que encadeando `.then`.",
    avoidWhen:
      "Se as operações são independentes entre si, usar `await` uma por uma perde paralelismo - use `Promise.all` nesse caso.",
  },
  "js-event-loop": {
    name: "Event Loop",
    stats: [
      "Explica por que JS assíncrono não bloqueia a thread",
      "Diferencia microtasks (Promises) de macrotasks (setTimeout)",
      "Essencial para prever a ordem de execução do código",
    ],
    passive:
      "JavaScript é single-threaded, mas o event loop permite comportamento assíncrono: operações terminam e colocam seus callbacks em filas. A fila de microtasks (Promises, `queueMicrotask`) é sempre esvaziada antes da fila de macrotasks (`setTimeout`, eventos de I/O).",
    whenToUse:
      'Para debugar ordens de execução inesperadas envolvendo Promises e timers, ou entender por que uma UI não "congela" durante operações assíncronas.',
    avoidWhen:
      'Não é algo para "usar" diretamente no dia a dia - é um modelo mental para entender o comportamento do runtime.',
  },
  "js-generators-iterators": {
    name: "Generators & Iterators",
    stats: [
      "Função que pode pausar (`yield`) e retomar sua execução",
      "Produz valores um a um, sob demanda, em vez de todos de uma vez",
      "Base de bibliotecas de programação assíncrona avançada",
    ],
    passive:
      "Uma função generator (`function*`) pode pausar sua execução em cada `yield` e retomar de onde parou na próxima chamada de `.next()`. Isso permite produzir sequências de valores - potencialmente infinitas - sem calculá-las todas de antemão.",
    whenToUse:
      "Para gerar sequências sob demanda (paginação, valores infinitos) sem guardar tudo em memória de uma vez.",
    avoidWhen:
      "Para transformações simples de arrays já existentes, os métodos de array (`map`/`filter`) são mais diretos que um generator.",
  },
  "react-components-jsx": {
    name: "Componentes & JSX",
    stats: [
      "UI declarada como funções que retornam JSX",
      "JSX compila para `React.createElement`",
      "Componentes são reutilizáveis e composáveis",
    ],
    passive:
      "Um componente React é uma função que recebe props e retorna JSX descrevendo o que deve aparecer na tela. JSX parece HTML, mas é JavaScript - por isso pode usar `{}` para embutir expressões.",
    whenToUse:
      "Para qualquer pedaço de UI que você queira reutilizar ou isolar - é a unidade básica de uma app React.",
    avoidWhen:
      "Não quebre em componentes separados pedaços de UI tão pequenos e específicos que nunca serão reaproveitados - isso só adiciona indireção.",
  },
  "react-props": {
    name: "Props",
    stats: [
      "Forma de passar dados de um componente pai para o filho",
      "Somente leitura - o filho não deve modificá-las",
      "Tipadas com TypeScript para contratos claros",
    ],
    passive:
      "Props (properties) são os 'parâmetros' de um componente. Fluem em uma única direção, do componente pai para o filho, e qualquer mudança nelas deve vir de fora, não de dentro do próprio componente.",
    whenToUse:
      "Toda vez que um componente precisa de dados ou comportamento definidos por quem o usa.",
    avoidWhen:
      "Evite passar muitas props soltas quando elas formam um objeto coeso - agrupe em um único prop de objeto.",
  },
  "react-conditional-rendering": {
    name: "Renderização Condicional",
    stats: [
      "`&&` renderiza algo só quando uma condição é verdadeira",
      "Ternário (`? :`) escolhe entre dois elementos",
      "`return null` não renderiza nada",
    ],
    passive:
      "Como JSX é só JavaScript, qualquer expressão condicional pode decidir o que renderizar: `&&` mostra o elemento da direita só se a condição for verdadeira, o ternário escolhe entre dois elementos, e retornar `null` faz o componente não renderizar nada.",
    whenToUse:
      "Ternário quando há duas alternativas visuais; `&&` quando só há um caso 'mostrar ou nada'; early return no topo do componente para guard clauses.",
    avoidWhen:
      "Evite `&&` com números que podem ser `0` (ex.: `{contador && <Badge />}`) - `0` é renderizado literalmente na tela em vez de nada.",
  },
  "react-event-handling": {
    name: "Manipulação de Eventos",
    stats: [
      "Handlers em camelCase (`onClick`, `onChange`)",
      "Recebem um SyntheticEvent, com a mesma API do evento nativo",
      "Passar uma função, não o resultado de chamá-la",
    ],
    passive:
      "Eventos em JSX são atributos em camelCase que recebem uma função. O React usa um sistema próprio de eventos (SyntheticEvent) que funciona de forma consistente entre navegadores, mas com a mesma API que você já conhece (`event.target`, `event.preventDefault()`).",
    whenToUse:
      "Para reagir a qualquer interação do usuário: cliques, digitação, envio de formulário, scroll.",
    avoidWhen:
      "Não chame a função diretamente no JSX (`onClick={fazerAlgo()}`) - isso executa na renderização, não no clique. Passe a referência (`onClick={fazerAlgo}`) ou uma arrow function.",
  },
  "react-usestate": {
    name: "useState",
    stats: [
      "Adiciona estado local a um componente funcional",
      "Re-renderiza o componente quando o estado muda",
      "Cada chamada de `setState` é independente das outras",
    ],
    passive:
      "`useState` retorna um par: o valor atual do estado e uma função para atualizá-lo. Chamar a função de atualização agenda uma nova renderização do componente com o valor atualizado.",
    whenToUse:
      "Quando um componente precisa 'lembrar' um valor entre renderizações e reagir a mudanças dele (inputs, toggles, contadores).",
    avoidWhen:
      "Não duplique em estado um valor que pode ser derivado de props ou de outro estado - calcule na hora da renderização.",
  },
  "react-list-keys": {
    name: "Listas & Key",
    stats: [
      "Renderiza coleções de dados com `.map`",
      "A prop `key` ajuda o React a identificar cada item entre renders",
      'Evita bugs de estado "vazando" entre itens reordenados',
    ],
    passive:
      "Para renderizar uma lista, mapeia-se um array de dados para um array de elementos JSX. A prop `key` deve ser um identificador estável e único de cada item - sem ela, o React pode confundir itens ao reordenar, inserir ou remover.",
    whenToUse:
      "Toda vez que renderizar uma lista de itens vinda de um array - use um id estável dos dados como `key`.",
    avoidWhen:
      "Evite usar o índice do array como `key` se a lista pode ser reordenada, filtrada ou ter itens inseridos no meio.",
  },
  "react-useref": {
    name: "useRef",
    stats: [
      "Guarda um valor mutável que não causa re-render ao mudar",
      "Acessa diretamente um elemento do DOM",
      "Mantém valor entre renders sem disparar novo render",
    ],
    passive:
      "`useRef` retorna um objeto com uma propriedade `.current` que pode ser lida e alterada livremente sem provocar uma nova renderização. É usado tanto para guardar uma referência a um elemento do DOM quanto para armazenar qualquer valor mutável entre renders.",
    whenToUse:
      "Para acessar um elemento do DOM diretamente (foco, medir tamanho, scroll) ou guardar um valor que muda mas não deve causar re-render (como um id de timer).",
    avoidWhen:
      "Não use `useRef` para dados que a UI precisa refletir visualmente - mudanças em `.current` não disparam renderização; para isso, use `useState`.",
  },
  "react-controlled-forms": {
    name: "Formulários Controlados",
    stats: [
      "O valor do input vive no estado do React, não no DOM",
      "`value` + `onChange` mantêm os dois sincronizados",
      "Permite validar ou transformar o valor a cada digitação",
    ],
    passive:
      "Em um formulário controlado, o valor de cada campo é armazenado no estado do componente (`useState`) e passado de volta para o input via a prop `value`. O `onChange` atualiza esse estado a cada digitação, tornando o React a única fonte de verdade sobre o valor atual.",
    whenToUse:
      "Quando você precisa validar, formatar ou reagir ao valor do input a cada digitação, ou mantê-lo sincronizado com outras partes da UI.",
    avoidWhen:
      "Para formulários simples e grandes sem necessidade de validação em tempo real, inputs não controlados (`useRef` + `defaultValue`) exigem menos re-renders.",
  },
  "react-useeffect": {
    name: "useEffect",
    stats: [
      "Sincroniza o componente com sistemas externos (API, DOM, timers)",
      "Roda depois da renderização, não durante",
      "Função de cleanup evita memory leaks",
    ],
    passive:
      "`useEffect` executa um efeito colateral depois que o componente renderiza, e pode retornar uma função de 'limpeza' que roda antes do próximo efeito ou quando o componente desmonta. O array de dependências controla quando o efeito roda de novo.",
    whenToUse:
      "Para sincronizar com algo fora do React: requisições de API, subscriptions, timers, manipulação direta do DOM.",
    avoidWhen:
      "Não use `useEffect` para calcular valores derivados de props/estado - isso pode ser feito direto no corpo do componente ou com `useMemo`.",
  },
  "react-uselayouteffect": {
    name: "useLayoutEffect",
    stats: [
      "Roda de forma síncrona, antes do navegador pintar a tela",
      'Evita o "flash" visual de um useEffect comum',
      "Usado quase sempre para medir ou ajustar o DOM",
    ],
    passive:
      "`useLayoutEffect` tem a mesma assinatura de `useEffect`, mas executa de forma síncrona imediatamente depois do React atualizar o DOM e antes do navegador pintar a tela - útil quando o efeito precisa medir ou ajustar algo visualmente antes do usuário ver qualquer flash.",
    whenToUse:
      "Quando o efeito mede ou altera o layout do DOM e precisa acontecer antes da próxima pintura, para evitar um flash visual perceptível.",
    avoidWhen:
      "Para a maioria dos efeitos (requisições, subscriptions, logs), `useEffect` é suficiente e não bloqueia a pintura da tela.",
  },
  "react-error-boundaries": {
    name: "Error Boundaries",
    stats: [
      "Captura erros de renderização na árvore de componentes filhos",
      "Mostra uma UI alternativa em vez de quebrar a aplicação inteira",
      "Só existe como componente de classe - não há hook equivalente",
    ],
    passive:
      "Um Error Boundary é um componente que implementa `componentDidCatch`/`getDerivedStateFromError` para capturar erros lançados durante a renderização de seus componentes filhos, exibindo uma UI de fallback em vez de deixar a aplicação toda quebrar.",
    whenToUse:
      "Ao redor de partes isoladas da UI onde um erro de renderização não deveria derrubar a aplicação inteira (um widget, um gráfico, uma seção de terceiros).",
    avoidWhen:
      "Error boundaries não capturam erros em handlers de evento, código assíncrono ou no próprio boundary - para esses casos, trate o erro com `try/catch` normal.",
  },
  "react-usememo-usecallback": {
    name: "useMemo & useCallback",
    stats: [
      "`useMemo` memoriza o resultado de um cálculo",
      "`useCallback` memoriza a referência de uma função",
      "Evitam recomputações e re-renders desnecessários",
    ],
    passive:
      "Ambos recebem uma função e um array de dependências, recalculando o valor só quando as dependências mudam. `useMemo` guarda o valor retornado; `useCallback` guarda a própria função, útil para não quebrar memoização em componentes filhos (`React.memo`).",
    whenToUse:
      "Quando um cálculo é comprovadamente caro, ou quando passar uma função estável evita re-renders em componentes filhos memoizados.",
    avoidWhen:
      "Não memoize tudo por padrão - tem custo de memória/comparação, e na maioria dos componentes simples não traz ganho mensurável.",
  },
  "react-react-memo": {
    name: "React.memo",
    stats: [
      "Evita re-renderizar um componente se as props não mudaram",
      "Faz uma comparação superficial (shallow) das props por padrão",
      "Só ajuda se o componente pai re-renderiza com frequência",
    ],
    passive:
      "`React.memo` envolve um componente e faz o React pular sua renderização se as props recebidas forem superficialmente iguais às da renderização anterior. Combinado com `useCallback`/`useMemo` no componente pai, evita trabalho desnecessário em listas grandes ou componentes caros.",
    whenToUse:
      "Em componentes que renderizam com frequência (listas, grids) e recebem as mesmas props na maioria das vezes.",
    avoidWhen:
      "Não envolva todo componente em `React.memo` por padrão - a comparação de props também tem custo, e sem um pai re-renderizando muito, não há ganho real.",
  },
  "react-lazy-suspense": {
    name: "Code Splitting (lazy + Suspense)",
    stats: [
      "Carrega um componente só quando ele é realmente necessário",
      "Reduz o tamanho do bundle inicial da aplicação",
      "`Suspense` define o que mostrar enquanto o componente carrega",
    ],
    passive:
      "`React.lazy` transforma um `import()` dinâmico em um componente que o React só carrega quando ele é renderizado pela primeira vez. Como esse carregamento é assíncrono, é preciso envolver o componente em `<Suspense>`, que mostra um fallback enquanto o código ainda está sendo baixado.",
    whenToUse:
      "Para páginas ou componentes grandes que não são necessários no carregamento inicial (rotas, modais, abas não ativas).",
    avoidWhen:
      "Não vale a pena para componentes pequenos - a divisão extra do bundle pode custar mais em requisições do que economiza em tamanho.",
  },
  "react-context": {
    name: "Context API",
    stats: [
      "Compartilha dados entre componentes sem passar props manualmente",
      "Evita 'prop drilling' em árvores profundas",
      "Qualquer componente dentro do Provider pode consumir o valor",
    ],
    passive:
      "Context cria um canal de dados que qualquer componente descendente pode ler com `useContext`, sem precisar que cada nível intermediário repasse a prop. Um `Provider` define o valor para toda a sua subárvore.",
    whenToUse:
      "Para dados realmente globais à árvore de componentes (tema, usuário autenticado, idioma) consumidos em muitos níveis diferentes.",
    avoidWhen:
      "Não use Context para estado que só dois ou três componentes próximos precisam - props simples resolvem com menos complexidade.",
  },
  "react-usereducer": {
    name: "useReducer",
    stats: [
      "Centraliza lógica de atualização de estado em uma função reducer",
      "Alternativa ao `useState` para estados complexos com várias transições",
      "Mesma ideia do Redux, só que local a um componente",
    ],
    passive:
      "useReducer guarda o estado e delega toda a lógica de como ele muda para uma função reducer `(estado, ação) => novoEstado`. Em vez de várias chamadas de `setState` espalhadas, você despacha ações nomeadas e toda transição fica centralizada em um só lugar.",
    whenToUse:
      "Quando um estado tem várias transições relacionadas e complexas, ou quando a próxima atualização depende de qual 'ação' ocorreu, não só do valor anterior.",
    avoidWhen:
      "Para um estado simples (um boolean, uma string), `useState` é mais direto - `useReducer` adiciona cerimônia que só paga em casos mais complexos.",
  },
  "react-compound-components": {
    name: "Compound Components",
    stats: [
      "Vários componentes que trabalham juntos compartilhando estado implícito",
      "API declarativa e flexível, como `<select><option>` do HTML",
      "Compartilha estado via Context sem expor isso nas props",
    ],
    passive:
      "No padrão compound components, um componente 'pai' guarda o estado e o compartilha implicitamente (geralmente via Context) com componentes 'filhos' relacionados, que juntos formam uma API declarativa - como `<Tabs><Tab /><Tab /></Tabs>` em vez de uma única prop de configuração gigante.",
    whenToUse:
      "Ao construir componentes de UI reutilizáveis com múltiplas partes relacionadas (tabs, accordions, menus) que precisam compartilhar estado sem uma API de props gigante.",
    avoidWhen:
      "Para um componente simples de uma peça só, esse padrão adiciona Context e indireção sem necessidade.",
  },
  "react-external-state": {
    name: "Estado Externo (Zustand)",
    stats: [
      "Store vive fora da árvore de componentes, sem precisar de Provider",
      "Componentes só re-renderizam quando o pedaço de estado que leem muda",
      "Evita o prop drilling e o Context re-renderizando a árvore inteira",
    ],
    passive:
      "Bibliotecas como Zustand criam um store centralizado fora do ciclo de vida do React. Diferente do Context (que re-renderiza todo consumidor quando qualquer parte do valor muda), cada componente escolhe exatamente qual pedaço do estado ler, evitando re-renders desnecessários em stores grandes.",
    whenToUse:
      "Quando o estado é compartilhado por partes distantes da árvore de componentes, muda com frequência, ou o Context começa a causar re-renders perceptíveis.",
    avoidWhen:
      "Para estado usado por poucos componentes próximos, useState/useReducer local (ou Context, no máximo) já resolve sem a dependência extra.",
  },
  "react-custom-hooks": {
    name: "Custom Hooks",
    stats: [
      "Extrai lógica com estado para funções reutilizáveis",
      "Composto a partir de hooks nativos (useState, useEffect...)",
      "Convenção de nome: sempre começa com `use`",
    ],
    passive:
      "Um custom hook é simplesmente uma função que usa outros hooks por dentro, permitindo reaproveitar lógica com estado entre vários componentes sem repetir código nem criar componentes extras só para isso.",
    whenToUse:
      "Quando a mesma lógica com estado/efeitos se repete em mais de um componente, ou quando quer isolar uma lógica complexa do JSX.",
    avoidWhen:
      "Não crie um custom hook para uma única linha de lógica usada em um só lugar - isso é indireção sem benefício.",
  },
  "react-render-props": {
    name: "Render Props",
    stats: [
      "Compartilha lógica passando uma função como prop/children",
      "O componente decide O QUE renderizar com os dados fornecidos",
      "Precede os custom hooks como forma de reaproveitar lógica com estado",
    ],
    passive:
      "No padrão render props, um componente recebe uma função (geralmente via `children` ou uma prop chamada `render`) e a chama passando algum estado interno, deixando quem usa o componente decidir exatamente como renderizar esse estado.",
    whenToUse:
      "Para compartilhar lógica com estado entre componentes com UIs completamente diferentes - hoje, na maioria dos casos, um custom hook resolve o mesmo problema de forma mais simples.",
    avoidWhen:
      "Se a lógica não depende de renderizar algo diferente a cada uso, um custom hook é mais direto e evita o aninhamento extra de JSX.",
  },
  "react-forwardref": {
    name: "forwardRef",
    stats: [
      "Permite que um componente receba um `ref` e o repasse a um elemento interno",
      "Por padrão, componentes de função não aceitam `ref` diretamente",
      "Essencial ao construir componentes de UI reutilizáveis (inputs, botões)",
    ],
    passive:
      "Componentes de função não recebem `ref` como uma prop normal - `forwardRef` resolve isso, permitindo que um componente encaminhe o `ref` recebido de fora para um elemento do DOM específico dentro dele, como o `<input>` real por trás de um componente `Campo` customizado.",
    whenToUse:
      "Ao criar componentes de UI reutilizáveis (inputs, botões, cards) que quem os usa pode precisar referenciar diretamente, como faria com o elemento HTML nativo.",
    avoidWhen:
      "Se ninguém de fora do componente precisa de acesso direto ao DOM interno, `forwardRef` é indireção sem necessidade.",
  },
  "react-form-validation": {
    name: "Validação de Formulários",
    stats: [
      "React Hook Form gerencia o estado do formulário sem re-renderizar a cada tecla",
      "Zod define o schema de validação e infere o tipo TypeScript automaticamente",
      "`resolver` conecta o schema do Zod à validação do React Hook Form",
    ],
    passive:
      "Em formulários maiores, controlar cada input com `useState` individual fica repetitivo e causa re-renders a cada tecla. React Hook Form resolve isso com inputs não controlados por padrão, enquanto o Zod declara as regras de validação uma única vez e gera o tipo TypeScript correspondente.",
    whenToUse:
      "Em formulários com várias regras de validação, mensagens de erro específicas por campo, ou que precisam validar o mesmo formato em vários lugares (frontend e backend, por exemplo).",
    avoidWhen:
      "Para um formulário de um ou dois campos com validação trivial, `useState` + uma função de validação simples já resolve sem a dependência extra.",
  },
  "tw-spacing": {
    name: "Espaçamento (Margin & Padding)",
    stats: [
      "`p-` controla padding, `m-` controla margin",
      "Sufixos t/r/b/l/x/y miram um lado ou eixo específico",
      "Escala numérica consistente (4 = 1rem, 2 = 0.5rem...)",
    ],
    passive:
      "Tailwind usa uma escala de espaçamento baseada em múltiplos de 0.25rem: `p-4` é padding de 1rem em todos os lados. Sufixos como `px-`, `py-`, `mt-`, `mb-` aplicam o espaçamento só no eixo ou lado indicado, e valores negativos (`-mt-2`) criam margens negativas.",
    whenToUse:
      "Para qualquer espaçamento entre ou dentro de elementos - é a classe mais usada no dia a dia do Tailwind.",
    avoidWhen:
      "Evite empilhar margin em excesso para alinhar layouts complexos - para isso, flexbox/grid com `gap-` costuma ser mais previsível.",
  },
  "tw-sizing": {
    name: "Dimensões (Width & Height)",
    stats: [
      "`w-` e `h-` controlam largura e altura",
      "Valores fracionários (`w-1/2`) e por viewport (`w-screen`)",
      "`max-w-`/`min-h-` limitam sem fixar o tamanho exato",
    ],
    passive:
      "`w-` e `h-` aceitam valores da escala de espaçamento, frações (`w-1/3`), palavras-chave (`w-full`, `h-screen`) ou valores arbitrários entre colchetes. `max-w-` e `min-w-` (e as versões de altura) definem limites sem travar o tamanho em um valor fixo.",
    whenToUse:
      "Para controlar o tamanho de qualquer elemento, especialmente containers responsivos (`max-w-` + `mx-auto`).",
    avoidWhen:
      "Evite `w-screen` dentro de containers que já têm scroll horizontal controlado - ele ignora o padding do pai e pode estourar a largura.",
  },
  "tw-colors": {
    name: "Cores & Opacidade",
    stats: [
      "`bg-`, `text-`, `border-` aplicam cor a fundo, texto e borda",
      "Escala de 50 a 950 por tonalidade (`blue-500`)",
      "Modificador `/opacidade` direto na classe (`bg-black/50`)",
    ],
    passive:
      "Cada cor da paleta do Tailwind vem em uma escala de intensidade (50 = quase branco, 950 = quase preto). O modificador de opacidade com `/` (`bg-blue-500/30`) aplica transparência sem precisar de uma cor RGBA separada.",
    whenToUse:
      "Para aplicar qualquer cor de fundo, texto ou borda de forma consistente com uma paleta pré-definida.",
    avoidWhen:
      "Evite cravar a mesma cor exata repetida em dezenas de lugares sem um padrão - prefira tokens de tema (`@theme`) para cores que representam um papel (ex.: perigo, sucesso).",
  },
  "tw-typography": {
    name: "Tipografia",
    stats: [
      "`text-` controla tamanho da fonte",
      "`font-` controla peso (bold, medium, semibold...)",
      "`tracking-`/`leading-` ajustam espaçamento entre letras/linhas",
    ],
    passive:
      "Classes de tipografia cobrem tamanho (`text-sm` a `text-9xl`), peso (`font-light` a `font-black`), alinhamento (`text-center`), espaçamento entre letras (`tracking-wide`) e altura de linha (`leading-relaxed`).",
    whenToUse:
      "Para qualquer texto na interface - é a base de uma hierarquia visual consistente.",
    avoidWhen:
      "Evite misturar muitos tamanhos de fonte diferentes numa mesma tela - defina uma escala curta e reaproveite.",
  },
  "tw-flexbox": {
    name: "Flexbox",
    stats: [
      "`flex` ativa o container flexível",
      "`items-`/`justify-` alinham nos eixos cruzado e principal",
      "`gap-` espaça os filhos sem precisar de margin manual",
    ],
    passive:
      "`flex` transforma o elemento num container flexbox. `flex-row`/`flex-col` define a direção, `items-center`/`justify-between` alinham os filhos, e `gap-` adiciona espaço uniforme entre eles sem a necessidade de margin em cada filho.",
    whenToUse:
      "Para alinhar elementos em linha ou coluna, distribuir espaço entre eles, ou centralizar conteúdo - o layout mais comum do dia a dia.",
    avoidWhen:
      "Para grades bidimensionais (linhas E colunas controladas juntas), `grid` costuma ser mais direto que flexbox com wrap.",
  },
  "tw-grid": {
    name: "Grid",
    stats: [
      "`grid` + `grid-cols-` define colunas",
      "`col-span-`/`row-span-` fazem um item ocupar mais espaço",
      "Controla layout bidimensional (linhas e colunas juntas)",
    ],
    passive:
      "`grid-cols-3` divide o container em 3 colunas de largura igual. Itens filhos podem usar `col-span-2` para ocupar múltiplas colunas, e `gap-` espaça tanto linhas quanto colunas de uma vez.",
    whenToUse:
      "Para grades de cards, dashboards, ou qualquer layout onde linhas e colunas precisam se alinhar juntas.",
    avoidWhen:
      "Para um único eixo de alinhamento (uma barra de botões, por exemplo), flexbox é mais simples que grid.",
  },
  "tw-position": {
    name: "Posicionamento",
    stats: [
      "`relative`/`absolute`/`fixed`/`sticky` controlam o modo de posicionamento",
      "`top-`/`right-`/`bottom-`/`left-`/`inset-` posicionam o elemento",
      "`z-` controla a ordem de empilhamento (stacking)",
    ],
    passive:
      "`absolute` posiciona o elemento relativo ao ancestral mais próximo com `relative` (ou `absolute`/`fixed`). `inset-0` é um atalho para `top-0 right-0 bottom-0 left-0`. `z-` resolve qual elemento fica por cima quando eles se sobrepõem.",
    whenToUse:
      "Para badges sobre elementos, modais, tooltips, headers fixos - qualquer coisa que precise sair do fluxo normal do layout.",
    avoidWhen:
      "Não use `absolute` para layouts gerais de página - isso tira o elemento do fluxo e costuma gerar bugs de sobreposição; prefira flexbox/grid.",
  },
  "tw-display-overflow": {
    name: "Display & Overflow",
    stats: [
      "`hidden`/`block`/`inline-block` controlam o tipo de exibição",
      "`overflow-hidden`/`overflow-auto` controlam conteúdo que extrapola",
      "`truncate` corta texto longo com reticências",
    ],
    passive:
      "`display` controla como um elemento participa do fluxo do layout (`block`, `inline`, `hidden` etc.). `overflow-` controla o que acontece quando o conteúdo é maior que o container - esconder, rolar, ou vazar. `truncate` é um atalho que combina `overflow-hidden`, `text-ellipsis` e `whitespace-nowrap`.",
    whenToUse:
      "`overflow-auto`/`overflow-y-auto` para áreas de scroll controlado; `truncate` para texto de tamanho imprevisível em espaços fixos (cards, tabelas).",
    avoidWhen:
      'Evite `overflow-hidden` para "resolver" um bug de layout sem entender a causa - ele só esconde o sintoma, o conteúdo continua maior que deveria.',
  },
  "tw-states": {
    name: "Pseudo-classes (hover, focus...)",
    stats: [
      "Prefixos como `hover:`, `focus:`, `active:`, `disabled:`",
      "`group-hover:` reage ao hover de um ancestral marcado com `group`",
      "Qualquer utilitário pode ser condicionado a um estado",
    ],
    passive:
      "Prefixar qualquer classe com um estado (`hover:bg-blue-700`) aplica aquele estilo só quando a condição for verdadeira. `group` no elemento pai + `group-hover:` no filho permite que o hover em um elemento altere o estilo de outro dentro dele.",
    whenToUse:
      "Para feedback visual em interações: hover em botões/cards, foco em inputs, estados desabilitados.",
    avoidWhen:
      "Não dependa só de `hover:` para informação importante - em telas touch não existe hover, garanta que a informação também esteja acessível sem ele.",
  },
  "tw-responsive": {
    name: "Breakpoints Responsivos",
    stats: [
      "Prefixos `sm:`, `md:`, `lg:`, `xl:`, `2xl:`",
      "Abordagem mobile-first: a classe sem prefixo vale para todos os tamanhos",
      "Cada prefixo se aplica 'a partir daquele breakpoint'",
    ],
    passive:
      "Tailwind é mobile-first: uma classe sem prefixo (`flex-col`) vale por padrão, e um prefixo como `md:flex-row` sobrescreve a partir daquela largura de tela pra cima. Não existe prefixo para 'só até' um tamanho - você pensa sempre 'a partir daqui'.",
    whenToUse:
      "Sempre que o layout precisar se adaptar a diferentes tamanhos de tela - comece pensando no mobile e adicione prefixos para telas maiores.",
    avoidWhen:
      "Evite empilhar prefixos demais na mesma classe (`sm: md: lg: xl:` todos diferentes) - se o padrão muda muito a cada breakpoint, considere repensar o layout.",
  },
  "tw-dark-mode": {
    name: "Dark Mode",
    stats: [
      "Prefixo `dark:` aplica estilos só no tema escuro",
      "Pode seguir a preferência do sistema ou ser controlado manualmente",
      "Funciona junto com qualquer outro prefixo (`dark:hover:bg-slate-700`)",
    ],
    passive:
      "O prefixo `dark:` aplica a classe apenas quando o dark mode está ativo - seja pela preferência do sistema operacional (`prefers-color-scheme`) ou, configurando `darkMode: 'class'`, por uma classe `dark` adicionada manualmente no `<html>` para alternância controlada pelo usuário.",
    whenToUse:
      "Em qualquer projeto que precise suportar tema claro e escuro sem duplicar folhas de estilo inteiras.",
    avoidWhen:
      "Não esqueça de testar contraste em ambos os temas - uma cor que funciona bem no claro pode ficar ilegível no escuro sem o par `dark:` correspondente.",
  },
  "tw-borders-shadows": {
    name: "Bordas, Raio & Sombras",
    stats: [
      "`border`/`border-` definem espessura e cor da borda",
      "`rounded-` controla o raio dos cantos",
      "`shadow-` aplica sombras pré-definidas (sm a 2xl)",
    ],
    passive:
      "`border` adiciona uma borda de 1px por padrão; `border-2`, `border-dashed` etc. ajustam espessura e estilo. `rounded-` vai de cantos sutis (`rounded-sm`) a totalmente circulares (`rounded-full`). `shadow-` aplica elevação visual com sombras predefinidas.",
    whenToUse:
      "Para dar forma e profundidade a cards, botões, inputs e modais.",
    avoidWhen:
      "Evite empilhar várias sombras fortes na mesma tela - isso tira a hierarquia visual que a sombra deveria estar criando.",
  },
  "tw-transitions-animations": {
    name: "Transições & Animações",
    stats: [
      "`transition` ativa a interpolação suave de propriedades",
      "`duration-`/`ease-` controlam velocidade e curva",
      "`animate-` aplica animações prontas (spin, pulse, bounce)",
    ],
    passive:
      "`transition` (ou `transition-colors`, `transition-transform` etc.) faz propriedades CSS mudarem suavemente em vez de instantaneamente, geralmente combinado com um estado (`hover:`). `animate-` aplica keyframes prontos do Tailwind, como `animate-spin` para loaders.",
    whenToUse:
      "Para suavizar qualquer mudança de estado visual (hover, abrir/fechar) e dar feedback de carregamento (`animate-spin`/`animate-pulse`).",
    avoidWhen:
      "Evite animar `width`/`height`/`top` diretamente - são custosas para o navegador recalcular; prefira `transform` e `opacity` quando possível.",
  },
  "tw-arbitrary-values": {
    name: "Arbitrary Values",
    stats: [
      "Colchetes `[]` aceitam qualquer valor CSS válido",
      "Escapa da escala padrão sem sair do Tailwind",
      "Funciona em praticamente qualquer utilitário (`w-`, `bg-`, `top-`...)",
    ],
    passive:
      "Quando a escala padrão do Tailwind não tem o valor exato que você precisa, a notação `propriedade-[valor]` aceita qualquer valor CSS literal - um pixel específico, uma cor hex, até uma expressão `calc()`.",
    whenToUse:
      "Para o caso pontual onde nenhum valor da escala padrão serve - um pixel exato vindo de um design, uma cor de marca específica.",
    avoidWhen:
      "Se você está usando o mesmo valor arbitrário repetidas vezes, é sinal de que ele deveria virar um token no tema (`@theme`) em vez de ficar espalhado em colchetes.",
  },
  "tw-theme-config": {
    name: "Customizando o Tema (@theme)",
    stats: [
      "Define cores, fontes e espaçamentos próprios do projeto",
      "Gera utilitários novos automaticamente (`bg-brand`, `font-display`)",
      "Centraliza decisões de design em um só lugar",
    ],
    passive:
      "No Tailwind v4, o bloco `@theme` no CSS declara tokens de design como variáveis (`--color-brand: #...`), e o Tailwind gera automaticamente as classes utilitárias correspondentes (`bg-brand`, `text-brand`). Isso substitui a necessidade de editar `tailwind.config.js` nas versões anteriores.",
    whenToUse:
      "Quando o design tem cores, fontes ou espaçamentos próprios que se repetem no projeto inteiro - centralize em vez de repetir valores soltos.",
    avoidWhen:
      "Não crie um token de tema para um valor usado uma única vez - isso é trabalho melhor resolvido com arbitrary values (`[valor]`).",
  },
  "tw-apply-components": {
    name: "@apply & Componentização",
    stats: [
      "`@apply` agrupa várias classes utilitárias em uma classe CSS só",
      "Útil para estilos repetidos em muitos lugares",
      "Em React, extrair um componente geralmente é preferível",
    ],
    passive:
      "`@apply` permite escrever uma classe CSS tradicional que por baixo aplica um conjunto de utilitários do Tailwind, reduzindo repetição em HTML puro. Em frameworks de componentes (como React), costuma ser mais comum extrair um componente reutilizável do que usar `@apply`, já que o componente também encapsula comportamento, não só estilo.",
    whenToUse:
      "`@apply` em projetos sem componentização (HTML/CSS puro, ou classes repetidas em muitos arquivos não-React); em React, prefira extrair um componente.",
    avoidWhen:
      "Não abuse de `@apply` em um projeto React - isso recria o problema que o Tailwind resolve (CSS separado do markup) sem o benefício de um componente reutilizável de verdade.",
  },

  "test-what-is-unit-test": {
    name: "O que é um Teste Unitário",
    stats: [
      "Verifica uma unidade pequena de código isoladamente",
      "Roda rápido - não depende de rede, banco ou UI real",
      "Dá segurança pra refatorar sem medo de quebrar algo",
    ],
    passive:
      "Um teste unitário verifica se uma função, hook ou componente se comporta como esperado, de forma isolada do resto do sistema. É a base da pirâmide de testes: muitos testes pequenos e rápidos, em vez de poucos testes grandes e lentos.",
    whenToUse:
      "Para qualquer lógica que tenha um resultado previsível - funções puras, hooks, componentes, utilitários.",
    avoidWhen:
      "Não tente testar tudo de uma vez num teste só - se o teste precisa de muito setup, provavelmente ele está testando mais de uma coisa.",
  },
  "test-structure": {
    name: "Estrutura de um Teste (describe/it/expect)",
    stats: [
      "`describe` agrupa testes relacionados",
      "`it`/`test` descreve um comportamento específico",
      "`expect` faz a verificação (assertion)",
    ],
    passive:
      'Um teste segue o padrão "arrange, act, assert": prepara os dados, executa a ação, e verifica o resultado. `describe` organiza testes relacionados num grupo; cada `it` dentro dele testa um comportamento específico com um nome descritivo.',
    whenToUse: "Sempre - é a estrutura básica de qualquer arquivo de teste.",
    avoidWhen:
      'Evite nomes de teste vagos como "funciona" - escreva o que especificamente está sendo verificado.',
  },
  "test-assertions": {
    name: "Assertions Básicas",
    stats: [
      "`toBe` compara por igualdade estrita (===)",
      "`toEqual` compara objetos/arrays por valor",
      "`toContain`, `toThrow`, `toBeNull` cobrem casos comuns",
    ],
    passive:
      "Assertions são as verificações reais dentro de um teste - elas decidem se o teste passa ou falha. `expect(valor)` retorna um objeto com dezenas de matchers (`toBe`, `toEqual`, `toContain`...) para comparar o resultado com o esperado.",
    whenToUse:
      "`toBe` para primitivos (números, strings, booleans); `toEqual` para objetos e arrays, já que `toBe` compararia a referência, não o conteúdo.",
    avoidWhen:
      "Não use `toBe` para comparar objetos/arrays - `{} !== {}` em JavaScript, o teste falharia mesmo com o conteúdo idêntico.",
  },
  "test-running": {
    name: "Rodando os Testes",
    stats: [
      "`vitest run` roda uma vez e sai (bom para CI)",
      "`vitest` (sem run) fica em modo watch, reroda ao salvar",
      "Scripts no `package.json` padronizam os comandos",
    ],
    passive:
      "O test runner descobre os arquivos de teste (geralmente `*.test.ts`), executa cada um, e reporta quais passaram ou falharam. O modo watch é o mais usado durante o desenvolvimento, já que reroda os testes afetados automaticamente a cada salvamento.",
    whenToUse:
      "Modo watch (`npm run test:watch`) enquanto codifica; `npm run test` (roda uma vez) em scripts de CI/build.",
  },
  "test-setup-teardown": {
    name: "Setup & Teardown",
    stats: [
      "`beforeEach`/`afterEach` rodam antes/depois de cada teste",
      "`beforeAll`/`afterAll` rodam uma vez para o arquivo todo",
      "Evita duplicar a mesma preparação em cada teste",
    ],
    passive:
      "Setup e teardown preparam e limpam o estado ao redor de cada teste, garantindo que um teste não interfira no outro. `beforeEach` roda antes de cada `it`; `beforeAll` roda só uma vez, antes de todos os testes do arquivo.",
    whenToUse:
      "Quando vários testes do mesmo arquivo precisam da mesma preparação (resetar um mock, recriar um objeto) - evita repetir código.",
    avoidWhen:
      "Não coloque lógica de teste dentro do `beforeEach` - ele deve só preparar o terreno, a verificação fica no `it`.",
  },
  "test-fixtures": {
    name: "Fixtures & Dados de Teste",
    stats: [
      "Dados de exemplo reutilizáveis entre testes",
      "Funções fábrica permitem customizar só o que importa",
      "Deixa o teste focado no comportamento, não nos dados",
    ],
    passive:
      'Uma fixture é um dado de teste pré-montado e reutilizável - em vez de criar um objeto "usuário" do zero em cada teste, uma função fábrica gera um padrão razoável que cada teste pode sobrescrever só no que precisa.',
    whenToUse:
      "Quando vários testes precisam de dados parecidos (um usuário, um pedido, uma lista de itens) - centraliza a forma do dado em um só lugar.",
    avoidWhen:
      "Evite fixtures genéricas demais tentando servir todo caso - às vezes um objeto literal direto no teste é mais claro que uma fixture complicada.",
  },
  "test-pure-functions": {
    name: "Testando Funções Puras",
    stats: [
      "Mesma entrada sempre produz a mesma saída",
      "Mais fáceis de testar - sem mocks, sem efeitos colaterais",
      "Bom ponto de partida para quem está começando com testes",
    ],
    passive:
      "Funções puras (sem efeitos colaterais, sem dependência de estado externo) são o caso mais simples de testar: você só precisa chamar a função com entradas conhecidas e comparar a saída com o valor esperado.",
    whenToUse:
      "Para utilitários, helpers, formatadores, validadores - qualquer função que só transforma entrada em saída.",
  },
  "test-coverage": {
    name: "Cobertura de Testes",
    stats: [
      "Mede qual % do código é executado pelos testes",
      "Vitest usa o provider `v8` nativamente, sem instalar nada extra",
      "Gera relatório em texto, HTML ou outros formatos",
    ],
    passive:
      "Cobertura de testes mede quantas linhas, branches e funções do código são de fato executadas quando os testes rodam. É um indicador útil, mas não garante que o comportamento está correto - só que o código foi executado.",
    whenToUse:
      "Para identificar partes do código sem nenhum teste, especialmente antes de uma refatoração grande.",
    avoidWhen:
      'Não persiga 100% de cobertura como meta em si - 100% de cobertura com assertions fracas não garante nada; prefira poucos testes bons a muitos testes que só "tocam" o código.',
  },
  "test-testing-library": {
    name: "Testing Library (render, screen, queries)",
    stats: [
      "`render` monta o componente num DOM virtual (jsdom)",
      "`screen` dá acesso a tudo que foi renderizado",
      "Queries (`getByRole`, `getByText`...) buscam elementos como um usuário faria",
    ],
    passive:
      'A Testing Library renderiza componentes React num ambiente de teste e permite consultá-los do jeito que um usuário "veria" a tela - por texto visível, papel semântico (role), ou label - em vez de depender de detalhes de implementação como nomes de classe.',
    whenToUse:
      "Para testar que um componente renderiza o que deveria, com o texto e a estrutura semântica certos.",
    avoidWhen:
      "Evite testar detalhes de implementação (nome de uma variável de estado interna, estrutura exata do DOM) - teste o que o usuário vê e faz.",
  },
  "test-user-event": {
    name: "Simulando Interação do Usuário",
    stats: [
      "`userEvent.setup()` cria uma sessão de interação",
      "Simula eventos reais (digitação, clique, foco) de forma realista",
      "Funções assíncronas - sempre use `await`",
    ],
    passive:
      "`user-event` simula interações do usuário de forma mais fiel que disparar eventos DOM diretamente - digitar um caractere de cada vez, por exemplo, em vez de setar o valor inteiro de uma vez.",
    whenToUse:
      "Para testar comportamento que depende de interação: digitar num campo, clicar num botão, navegar com teclado.",
  },
  "test-hooks": {
    name: "Testando Hooks",
    stats: [
      "`renderHook` executa um hook fora de um componente",
      "`result.current` dá acesso ao valor retornado pelo hook",
      "`act` garante que atualizações de estado sejam processadas",
    ],
    passive:
      "`renderHook` permite testar um custom hook isoladamente, sem precisar montar um componente só para isso. Qualquer atualização de estado disparada no teste (como chamar uma função retornada pelo hook) precisa ser envolvida em `act` para o React processar corretamente.",
    whenToUse:
      "Para testar a lógica de um custom hook (como `useSearch` ou `useCategoryNavigation`) sem acoplar o teste a um componente específico.",
  },
  "test-mocks-spies": {
    name: "Mocks & Spies",
    stats: [
      "`vi.fn()` cria uma função falsa que grava as chamadas",
      "`vi.mock()` substitui um módulo inteiro por uma versão falsa",
      "Permite testar sem depender de rede, banco ou APIs externas",
    ],
    passive:
      "Um mock substitui uma dependência real por uma versão controlada pelo teste. `vi.fn()` cria uma função que grava quantas vezes foi chamada e com quais argumentos, útil para verificar que um callback foi de fato acionado.",
    whenToUse:
      "Quando o código testado depende de algo externo (API, banco, timer) que você não quer (ou não pode) executar de verdade durante o teste.",
    avoidWhen:
      "Não abuse de mocks a ponto de o teste só verificar que você configurou o mock certo - isso testa o mock, não o seu código.",
  },
  "test-async": {
    name: "Testes Assíncronos",
    stats: [
      "`await` dentro do teste espera uma Promise resolver",
      "`waitFor` espera até uma condição ser verdadeira",
      'Evita testes "flaky" que passam ou falham aleatoriamente',
    ],
    passive:
      'Testes que envolvem código assíncrono (fetch, timers, efeitos) precisam esperar o resultado antes de fazer a assertion. `waitFor` repete a verificação em intervalos curtos até ela passar ou até um timeout, em vez de usar um `setTimeout` fixo e torcer pra ser tempo suficiente.',
    whenToUse:
      "Sempre que o componente ou função testada depende de uma operação assíncrona (requisição, efeito, debounce).",
    avoidWhen:
      'Evite `setTimeout` fixo dentro de um teste pra "esperar" algo acontecer - isso é lento e ainda pode falhar se a operação demorar mais que o esperado.',
  },
  "test-doubles": {
    name: "Test Doubles (mock vs stub vs spy)",
    stats: [
      "Stub: retorna um valor fixo, sem lógica",
      "Spy: grava como a função real foi chamada, sem mudar seu comportamento",
      "Mock: substitui o comportamento real por um falso configurável",
    ],
    passive:
      '"Test double" é o termo geral para qualquer substituto de uma dependência real num teste. Os termos variam por nuance: um stub só retorna um valor fixo; um spy observa chamadas à função real sem alterá-la; um mock substitui o comportamento inteiro por uma versão controlada.',
    whenToUse:
      "Spy quando você quer manter o comportamento real mas verificar como ele foi chamado; mock quando quer substituir o comportamento por completo; stub para respostas simples e previsíveis.",
  },
  "test-snapshot": {
    name: "Snapshot Testing",
    stats: [
      "`toMatchSnapshot` salva a saída atual como referência",
      "Testes seguintes comparam contra esse snapshot salvo",
      "Boa para pegar mudanças acidentais, não para validar comportamento",
    ],
    passive:
      "Um snapshot test salva a saída de um componente (ou valor) num arquivo na primeira execução, e nas próximas compara a saída atual com a salva, avisando se algo mudou. É mais sobre detectar mudanças do que validar se o resultado está correto.",
    whenToUse:
      "Para pegar mudanças não intencionais na estrutura de um componente complexo que mudaria raramente.",
    avoidWhen:
      'Evite depender só de snapshots - é fácil "aceitar" uma mudança quebrada sem perceber, só porque o snapshot atualizado parece razoável de relance.',
  },
  "test-ci": {
    name: "Integração Contínua (CI)",
    stats: [
      "Roda os testes automaticamente a cada push/PR",
      "Pega regressões antes de chegarem à branch principal",
      "Comum usar GitHub Actions, GitLab CI, etc.",
    ],
    passive:
      "Integração contínua (CI) roda a suíte de testes automaticamente sempre que há uma mudança no repositório, geralmente antes de permitir o merge de um pull request. Isso garante que ninguém quebre os testes sem perceber.",
    whenToUse:
      "Em qualquer projeto com mais de uma pessoa (ou mais de um dia) trabalhando nele - CI pega erros antes que virem um problema em produção.",
  },
  "a11y-semantic-html": {
    name: "HTML Semântico",
    stats: [
      "Leitores de tela entendem a estrutura da página automaticamente",
      "Elementos como <nav>, <main> e <button> já vêm com comportamento e semântica",
      "Reduz a necessidade de ARIA - o HTML certo já comunica o papel do elemento",
    ],
    passive:
      "HTML semântico usa elementos que descrevem o significado do conteúdo, não só sua aparência. <nav>, <main>, <article> e <button> informam ao navegador e a tecnologias assistivas qual é o papel de cada parte da página, sem precisar de atributos extras.",
    whenToUse:
      "Sempre, como primeira escolha antes de usar uma <div> genérica - reserve ARIA para os casos que o HTML puro não cobre.",
  },
  "a11y-alt-text": {
    name: "Texto Alternativo (alt)",
    stats: [
      "Descreve a imagem para quem usa leitor de tela",
      'alt="" (vazio) sinaliza imagem puramente decorativa, que deve ser ignorada',
      "Imagens sem alt são anunciadas pelo nome do arquivo, o que confunde",
    ],
    passive:
      "O atributo alt fornece uma descrição textual de uma imagem, usada por leitores de tela quando a imagem não pode ser exibida ou interpretada visualmente. Deve descrever a função da imagem no contexto, não apenas o que ela mostra.",
    whenToUse:
      "Em toda <img> que carrega informação relevante para entender o conteúdo da página.",
    avoidWhen:
      'Evite alt genérico como "imagem" ou "foto" - isso não ajuda ninguém; é melhor descrever o conteúdo real.',
  },
  "a11y-labels": {
    name: "Labels em Formulários",
    stats: [
      "htmlFor conecta o <label> ao <input> pelo id",
      "Clicar no texto do label também foca o campo",
      "Leitores de tela anunciam o label ao focar o input",
    ],
    passive:
      "Um <label> associado corretamente a um <input> via htmlFor/id garante que o campo tenha um nome acessível, lido em voz alta por leitores de tela e clicável para expandir a área de toque.",
    whenToUse:
      "Em todo campo de formulário - mesmo quando o design visual usa só um placeholder.",
    avoidWhen:
      "Não use placeholder como substituto de label - ele desaparece ao digitar e muitos leitores de tela não o anunciam da mesma forma.",
  },
  "a11y-heading-hierarchy": {
    name: "Hierarquia de Headings",
    stats: [
      "Só deve existir um <h1> por página",
      "Níveis não devem saltar (de h2 direto para h4, por exemplo)",
      "Leitores de tela navegam a página pulando entre headings",
    ],
    passive:
      "A hierarquia de headings (h1 a h6) funciona como o sumário de um documento. Tecnologias assistivas permitem navegar diretamente entre headings, então a ordem e o nível importam tanto quanto o texto em si.",
    whenToUse:
      "Ao estruturar qualquer página ou seção de conteúdo com título e subtítulos.",
    avoidWhen:
      "Evite escolher o nível do heading pelo tamanho de fonte desejado - use CSS para estilo e a hierarquia semântica para a estrutura.",
  },
  "a11y-focus-visible": {
    name: "Foco Visível",
    stats: [
      ":focus-visible mostra o anel de foco só para navegação por teclado",
      "Diferente de :focus, não aparece ao clicar com o mouse",
      "Remover o outline sem substituir é uma das falhas de acessibilidade mais comuns",
    ],
    passive:
      ":focus-visible é uma pseudo-classe CSS que aplica estilo de foco apenas quando o navegador entende que o usuário está navegando via teclado (ou tecnologia assistiva), evitando o anel de foco aparecer em todo clique de mouse.",
    whenToUse:
      "Em qualquer elemento interativo customizado (botões, links, itens de menu) que remova o outline padrão do navegador.",
    avoidWhen:
      "Nunca remova outline: none sem adicionar um estilo de foco visível equivalente no lugar.",
  },
  "a11y-tab-order": {
    name: "Ordem de Tabulação",
    stats: [
      'tabIndex="0" inclui o elemento na ordem natural do DOM',
      'tabIndex="-1" remove da navegação por Tab, mas permite foco via JS',
      "tabIndex positivo (1, 2...) quase sempre quebra a ordem esperada",
    ],
    passive:
      "A ordem de tabulação determina em que sequência o Tab move o foco entre elementos. Por padrão, segue a ordem do DOM - a forma mais previsível e recomendada de garantir uma navegação coerente.",
    whenToUse:
      "tabIndex={-1} para focar um elemento programaticamente (ex: abrir um modal); tabIndex={0} para tornar um elemento não interativo nativamente (como uma <div>) focável.",
    avoidWhen:
      "Evite tabIndex positivo - ele cria uma ordem paralela que confunde mais do que ajuda.",
  },
  "a11y-skip-link": {
    name: "Skip Link",
    stats: [
      "Permite pular a navegação repetitiva e ir direto ao conteúdo",
      "Fica invisível até receber foco pelo teclado",
      "É o primeiro elemento focável da página",
    ],
    passive:
      "Um skip link é um atalho, geralmente oculto visualmente, que aparece ao navegar por teclado e permite pular direto para o conteúdo principal, sem precisar passar por todos os itens do menu a cada página.",
    whenToUse:
      "Em qualquer página com navegação, sidebar ou cabeçalho extenso antes do conteúdo principal.",
  },
  "a11y-keyboard-nav": {
    name: "Navegação por Teclado",
    stats: [
      "Enter e Espaço ativam botões; Enter ativa links",
      "Escape fecha modais, dropdowns e tooltips",
      "Setas navegam dentro de menus, abas e listas (roving tabindex)",
    ],
    passive:
      'Todo elemento interativo customizado precisa responder ao teclado da mesma forma que o elemento nativo equivalente responderia - um "botão" feito com <div onClick> não é operável por teclado sem esse trabalho extra.',
    whenToUse:
      "Sempre que construir um componente interativo customizado (menu, modal, tooltip, carrossel) que não seja um elemento HTML nativo.",
  },
  "a11y-aria-label": {
    name: "aria-label / aria-labelledby",
    stats: [
      "aria-label define um nome acessível direto na string",
      "aria-labelledby referencia o id de outro elemento como nome",
      "Essencial em botões de ícone, sem texto visível",
    ],
    passive:
      "Quando um elemento interativo não tem texto visível suficiente para descrevê-lo (como um botão só com ícone), aria-label ou aria-labelledby fornecem esse nome para leitores de tela, sem alterar a aparência visual.",
    whenToUse:
      "Em botões de ícone, campos de busca sem label visível, ou quando o texto visível é ambíguo fora de contexto.",
    avoidWhen:
      "Não use aria-label para duplicar um texto que já está visível - isso pode gerar leitura repetida ou inconsistente.",
  },
  "a11y-aria-live": {
    name: "aria-live",
    stats: [
      "polite espera o leitor de tela terminar a fala atual",
      "assertive interrompe imediatamente para anunciar",
      "Usado para notificações, toasts e mensagens de status dinâmicas",
    ],
    passive:
      "aria-live marca uma região da página como dinâmica, fazendo o leitor de tela anunciar automaticamente qualquer mudança de conteúdo dentro dela, mesmo sem o usuário mover o foco até lá.",
    whenToUse:
      "Para notificar sobre eventos que acontecem sem interação direta: resultado de busca atualizado, toast de sucesso, contador de carrinho.",
    avoidWhen:
      "Evite assertive para mensagens não urgentes - interromper a leitura constantemente é uma má experiência.",
  },
  "a11y-aria-expanded": {
    name: "aria-expanded / aria-controls",
    stats: [
      "aria-expanded informa se um painel está aberto ou fechado",
      "aria-controls aponta para o id do elemento controlado",
      "Comum em accordions, dropdowns e menus colapsáveis",
    ],
    passive:
      "aria-expanded comunica o estado (aberto/fechado) de um elemento controlador para leitores de tela, enquanto aria-controls estabelece a relação entre o botão e o painel que ele controla.",
    whenToUse:
      "Em qualquer botão que abra ou feche outro elemento na tela (accordion, menu dropdown, painel colapsável).",
  },
  "a11y-roles": {
    name: "Roles ARIA",
    stats: [
      'role="dialog" + aria-modal="true" define um modal',
      'role="listbox"/"option" define uma lista selecionável customizada',
      "Só deve ser usado quando o HTML nativo não cobre o caso",
    ],
    passive:
      "Roles ARIA redefinem o papel semântico de um elemento para tecnologias assistivas, permitindo construir componentes como modais, abas e comboboxes customizados que o HTML nativo não oferece - mas é um reforço, não substitui o comportamento real do componente.",
    whenToUse:
      "Ao construir um widget customizado (modal, tabs, combobox) que não tem um elemento HTML nativo equivalente.",
    avoidWhen:
      'Evite redefinir o role de um elemento que já tem a semântica certa (ex: role="button" numa <button> é redundante e inútil).',
  },
  "a11y-color-contrast": {
    name: "Contraste de Cores",
    stats: [
      "WCAG AA exige 4.5:1 para texto normal, 3:1 para texto grande",
      "WCAG AAA (mais estrito) exige 7:1 para texto normal",
      "Ferramentas como o DevTools do Chrome calculam o contraste automaticamente",
    ],
    passive:
      "Contraste de cor mede a diferença de luminosidade entre o texto e o fundo. Contraste insuficiente torna o texto difícil de ler para pessoas com baixa visão, daltonismo, ou simplesmente sob luz solar direta.",
    whenToUse:
      "Ao definir qualquer combinação de cor de texto e fundo, especialmente em temas customizados.",
    avoidWhen:
      'Evite confiar só na cor para transmitir informação (ex: "campos em vermelho têm erro") sem outro indicador visual, como ícone ou texto.',
  },
  "a11y-reduced-motion": {
    name: "prefers-reduced-motion",
    stats: [
      "Media query que detecta a preferência do sistema operacional do usuário",
      "Animações grandes podem causar enjoo ou desconforto (distúrbios vestibulares)",
      "Normalmente não é para remover a animação, mas reduzi-la ou simplificá-la",
    ],
    passive:
      "prefers-reduced-motion é uma media query CSS que reflete uma configuração do sistema operacional, permitindo reduzir ou remover animações para usuários sensíveis a movimento, sem afetar quem não ativou essa preferência.",
    whenToUse:
      "Em qualquer animação grande, parallax, ou transição não essencial à funcionalidade.",
  },
  "a11y-form-errors": {
    name: "Mensagens de Erro Acessíveis",
    stats: [
      "aria-invalid marca o campo como inválido para leitores de tela",
      "aria-describedby conecta o campo à mensagem de erro",
      'role="alert" anuncia a mensagem automaticamente ao aparecer',
    ],
    passive:
      "Uma mensagem de erro só visível ao lado do campo não é suficiente - aria-invalid e aria-describedby garantem que o leitor de tela também comunique qual campo falhou e por quê, no momento certo.",
    whenToUse:
      "Em qualquer validação de formulário que exiba uma mensagem de erro junto a um campo.",
  },
  "a11y-screen-reader-testing": {
    name: "Testando com Leitor de Tela",
    stats: [
      "VoiceOver (Mac/iOS) e NVDA (Windows, gratuito) são os mais usados para testar",
      "axe DevTools audita violações automáticas de acessibilidade na página",
      "Testar manualmente com o mouse desconectado revela problemas reais de navegação",
    ],
    passive:
      "Ferramentas automáticas (como axe) pegam só uma fração dos problemas de acessibilidade - testar de fato com um leitor de tela revela problemas de ordem de leitura, foco e anúncios que nenhuma ferramenta automática detecta.",
    whenToUse:
      "Antes de lançar qualquer fluxo crítico (checkout, cadastro, formulário principal) e periodicamente durante o desenvolvimento.",
  },
  "perf-web-vitals": {
    name: "Core Web Vitals",
    stats: [
      "LCP mede o tempo até o maior elemento visível carregar",
      "INP mede a responsividade a interações do usuário",
      'CLS mede o quanto o layout "pula" durante o carregamento',
    ],
    passive:
      "Core Web Vitals são as métricas que o Google usa para avaliar a experiência real de carregamento e interatividade de uma página, e também influenciam o ranking de busca.",
    whenToUse:
      "Como referência para priorizar qualquer trabalho de performance - comece sempre medindo o que já está ruim.",
  },
  "perf-image-optimization": {
    name: "Otimização de Imagens",
    stats: [
      "WebP/AVIF geram arquivos bem menores que JPEG/PNG com qualidade similar",
      'width/height explícitos evitam o layout "saltar" quando a imagem carrega (CLS)',
      'loading="lazy" atrasa o carregamento de imagens fora da tela inicial',
    ],
    passive:
      "Imagens costumam ser o maior peso de uma página. Formatos modernos, dimensões corretas e carregamento adiado (lazy) reduzem drasticamente o tempo de carregamento sem sacrificar qualidade perceptível.",
    whenToUse:
      "Em toda imagem que não seja crítica para o primeiro paint (above the fold).",
    avoidWhen:
      'Não use loading="lazy" na imagem principal (hero) da página - isso atrasa justamente o LCP.',
  },
  "perf-critical-rendering-path": {
    name: "Critical Rendering Path",
    stats: [
      "CSS no <head> bloqueia a primeira renderização até ser totalmente baixado",
      "Scripts com defer esperam o HTML terminar de parsear antes de executar",
      "Scripts com async executam assim que carregam, sem ordem garantida",
    ],
    passive:
      "O caminho crítico de renderização é a sequência de passos que o navegador precisa completar antes de pintar os primeiros pixels na tela: baixar HTML, construir o DOM, baixar e processar CSS, montar a árvore de renderização.",
    whenToUse:
      'Ao decidir onde colocar <script> e <link rel="stylesheet">, e o que é realmente crítico para o primeiro render.',
  },
  "perf-bundle-size": {
    name: "Tamanho do Bundle",
    stats: [
      "Ferramentas de análise mostram o peso real de cada dependência",
      "Tree-shaking remove código não utilizado de bibliotecas",
      "Importar a biblioteca inteira em vez de uma função específica aumenta o bundle sem necessidade",
    ],
    passive:
      "O tamanho do bundle JavaScript final afeta diretamente o tempo de download e parsing antes da página ficar interativa. Visualizar o que compõe esse bundle é o primeiro passo para reduzi-lo.",
    whenToUse:
      "Periodicamente, e sempre antes de adicionar uma nova dependência pesada ao projeto.",
  },
  "perf-code-splitting": {
    name: "Code Splitting por Rota",
    stats: [
      "Cada rota gera seu próprio arquivo JS (chunk)",
      "O usuário baixa só o código da página que está visitando",
      "Ferramentas de build como Vite fazem isso automaticamente com import() dinâmico",
    ],
    passive:
      "Code splitting divide o bundle único em vários arquivos menores, carregados conforme necessário. Dividir por rota é a estratégia mais comum, já que o usuário raramente precisa do código de todas as páginas de uma vez.",
    whenToUse:
      "Em qualquer aplicação com múltiplas rotas/páginas, especialmente se algumas usam bibliotecas pesadas que as outras não usam.",
  },
  "perf-font-loading": {
    name: "Carregamento de Fontes",
    stats: [
      "font-display: swap mostra uma fonte de fallback até a customizada carregar",
      "<link rel=\"preload\"> prioriza o download de uma fonte crítica",
      "Fontes variáveis (variable fonts) reduzem a quantidade de arquivos baixados",
    ],
    passive:
      "Sem font-display, o navegador pode deixar o texto invisível (FOIT) até a fonte customizada carregar. font-display: swap troca isso por mostrar uma fonte de sistema imediatamente e substituir assim que a fonte real estiver pronta (FOUT), evitando um bloqueio visual do conteúdo.",
    whenToUse:
      "Em qualquer fonte customizada carregada via @font-face, especialmente a usada no texto principal da página.",
  },
  "perf-service-worker-cache": {
    name: "Cache com Service Worker",
    stats: [
      "Service Worker roda em paralelo à página, interceptando requisições de rede",
      "Cache API armazena respostas de rede para reuso, inclusive offline",
      "Estratégia cache-first prioriza velocidade; network-first prioriza dados atualizados",
    ],
    passive:
      "Um Service Worker é um script que o navegador executa em segundo plano, separado da página, e que pode interceptar requisições de rede para servir respostas de um cache local - permitindo carregamento instantâneo em visitas repetidas e até funcionamento offline.",
    whenToUse:
      "Em aplicações que precisam funcionar offline (PWA) ou que se beneficiam de carregamento instantâneo de assets já visitados.",
    avoidWhen:
      "Evite cachear respostas que mudam com frequência (ex: dados de usuário) com uma estratégia cache-first sem uma forma de invalidação.",
  },
  "perf-prefetch": {
    name: "Prefetch / Preload",
    stats: [
      "Prefetch baixa um recurso que provavelmente será necessário em breve, com baixa prioridade",
      "Preload baixa um recurso crítico para o carregamento atual, com alta prioridade",
      "Pré-carregar no hover de um link antecipa a navegação, reduzindo a espera percebida",
    ],
    passive:
      "Prefetch e preload são dicas para o navegador priorizar o download de recursos antes deles serem estritamente necessários, aproveitando momentos de ociosidade de rede para acelerar a próxima interação do usuário.",
    whenToUse:
      "No hover de um link para uma rota pesada, ou em recursos que você sabe com alta confiança que serão usados em seguida.",
    avoidWhen:
      "Evite prefetch agressivo demais em conexões lentas ou limitadas (dados móveis) - pode desperdiçar dados do usuário.",
  },
  "perf-virtualization": {
    name: "Virtualização de Listas",
    stats: [
      "Renderiza só os itens visíveis na janela de rolagem, mais uma margem pequena",
      "Permite listas de milhares de itens sem travar a UI",
      "Bibliotecas comuns: react-virtual, react-window, react-virtualized",
    ],
    passive:
      "Virtualização renderiza apenas os elementos de uma lista que estão (ou estão próximos de estar) visíveis na tela, substituindo os demais por espaço vazio calculado, mantendo a contagem de nós DOM baixa independente do tamanho real da lista.",
    whenToUse:
      "Em listas ou tabelas muito grandes (centenas ou milhares de itens) onde renderizar tudo de uma vez causa lentidão perceptível.",
    avoidWhen:
      "Evite virtualizar listas pequenas - a complexidade extra não compensa o ganho, que é imperceptível.",
  },
  "perf-debounce-throttle": {
    name: "Debounce & Throttle",
    stats: [
      "Debounce espera um período de silêncio antes de executar a ação",
      "Throttle executa a ação no máximo uma vez por intervalo de tempo",
      "Essenciais para inputs de busca, resize e scroll, que disparam eventos em alta frequência",
    ],
    passive:
      'Debounce e throttle controlam a frequência com que uma função é executada em resposta a eventos disparados repetidamente. Debounce é ideal para "esperar o usuário parar de digitar"; throttle é ideal para "no máximo uma vez a cada X ms", como num scroll.',
    whenToUse:
      "Em campos de busca (debounce), e em listeners de scroll/resize (throttle).",
  },
  "perf-web-workers": {
    name: "Web Workers",
    stats: [
      "Executa JavaScript numa thread separada da thread principal (UI)",
      "Não tem acesso direto ao DOM - comunica por mensagens (postMessage)",
      "Ideal para processamento pesado que não deve travar a interface",
    ],
    passive:
      "A thread principal do navegador é responsável tanto por executar JavaScript quanto por renderizar a UI - um cálculo pesado nela trava a interface. Web Workers rodam em paralelo, numa thread isolada, liberando a thread principal para continuar responsiva.",
    whenToUse:
      "Em processamento de dados pesado (parsing de arquivo grande, cálculos complexos) que, de outra forma, congelaria a interface.",
    avoidWhen:
      "Evite para tarefas rápidas - o custo de comunicação entre threads pode ser maior que o próprio processamento.",
  },
  "perf-caching-strategies": {
    name: "Estratégias de Cache",
    stats: [
      'staleTime define por quanto tempo um dado em cache é considerado "fresco"',
      "Dados frescos não disparam nova requisição ao remontar o componente",
      "stale-while-revalidate mostra o cache antigo e atualiza em segundo plano",
    ],
    passive:
      "Bibliotecas de data fetching como o React Query mantêm um cache de respostas de requisições, evitando refazer a mesma chamada de rede repetidamente e permitindo mostrar dados instantaneamente enquanto atualiza em segundo plano.",
    whenToUse:
      "Em qualquer dado buscado via rede que é reutilizado em múltiplos componentes ou remontagens de tela.",
  },
};
