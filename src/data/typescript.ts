import type { StudyItem } from '../types/study-item'

export const typescriptItems: StudyItem[] = [
  // Starter - Tipagem básica
  {
    id: 'ts-basic-types',
    language: 'typescript',
    category: 'Tipagem básica',
    tier: 'starter',
    icon: 'Type',
    declaration: `let nome: string = "Ana"
let idade: number = 30
let ativo: boolean = true`,
    example: `function saudacao(nome: string): string {
  return \`Olá, \${nome}!\`
}

console.log(saudacao("Ana")) // "Olá, Ana!"`,
    buildsInto: [
      'ts-interfaces-vs-types',
      'ts-typed-functions',
    ],
    tags: [
      'tipos',
      'fundamentos',
      'primitivos',
    ],
  },
  {
    id: 'ts-enums',
    language: 'typescript',
    category: 'Tipagem básica',
    tier: 'starter',
    icon: 'ListOrdered',
    declaration: `enum StatusPedido {
  Pendente = "PENDENTE",
  Pago = "PAGO",
  Enviado = "ENVIADO",
}`,
    example: `function processar(status: StatusPedido) {
  if (status === StatusPedido.Pago) {
    console.log("Liberar envio")
  }
}

processar(StatusPedido.Pago)`,
    buildsInto: [
      'ts-narrowing',
    ],
    tags: [
      'enum',
      'constantes',
    ],
  },
  {
    id: 'ts-arrays-tuples',
    language: 'typescript',
    category: 'Tipagem básica',
    tier: 'starter',
    icon: 'Rows3',
    declaration: `let numeros: number[] = [1, 2, 3]
let par: [string, number] = ["idade", 30]`,
    example: `function useToggle(): [boolean, () => void] {
  let estado = false
  const alternar = () => { estado = !estado }
  return [estado, alternar]
}

const [ativo, alternar] = useToggle()`,
    buildsInto: [
      'ts-generics',
    ],
    tags: [
      'array',
      'tupla',
      'tipos',
    ],
  },
  {
    id: 'ts-literal-types',
    language: 'typescript',
    category: 'Tipagem básica',
    tier: 'starter',
    icon: 'Quote',
    declaration: `type Direcao = "norte" | "sul" | "leste" | "oeste"

let proxima: Direcao = "norte"`,
    example: `function mover(direcao: Direcao) {
  console.log(\`Movendo para \${direcao}\`)
}

mover("sul")
// mover("cima") // Erro: "cima" não é uma Direcao válida`,
    buildsInto: [
      'ts-discriminated-unions',
    ],
    tags: [
      'literal',
      'union',
      'tipos',
    ],
  },
  // Basic - Tipagem de objetos
  {
    id: 'ts-interfaces-vs-types',
    language: 'typescript',
    category: 'Tipagem de objetos',
    tier: 'basic',
    icon: 'Layers',
    declaration: `interface Usuario {
  nome: string
  idade: number
}

type Usuario2 = {
  nome: string
  idade: number
}`,
    example: `interface Admin extends Usuario {
  permissoes: string[]
}

const admin: Admin = {
  nome: "Lucas",
  idade: 28,
  permissoes: ["editar", "deletar"],
}`,
    buildsInto: [
      'ts-generics',
      'ts-utility-types',
    ],
    tags: [
      'interface',
      'type',
      'objetos',
    ],
  },
  {
    id: 'ts-readonly-optional',
    language: 'typescript',
    category: 'Tipagem de objetos',
    tier: 'basic',
    icon: 'Lock',
    declaration: `interface Config {
  readonly id: string
  nome: string
  descricao?: string
}`,
    example: `const config: Config = { id: "abc123", nome: "Produção" }
// config.id = "outro" // Erro: id é readonly

function exibir(config: Config) {
  console.log(config.descricao ?? "Sem descrição")
}`,
    tags: [
      'readonly',
      'optional',
      'objetos',
    ],
  },
  {
    id: 'ts-type-assertions',
    language: 'typescript',
    category: 'Tipagem de objetos',
    tier: 'basic',
    icon: 'Stamp',
    declaration: `const input = document.querySelector("#email") as HTMLInputElement`,
    example: `function processarResposta(dados: unknown) {
  const usuario = dados as { nome: string; email: string }
  console.log(usuario.nome)
}`,
    buildsInto: [
      'ts-type-predicates',
    ],
    tags: [
      'as',
      'assertion',
      'cast',
    ],
  },
  {
    id: 'ts-index-signatures',
    language: 'typescript',
    category: 'Tipagem de objetos',
    tier: 'basic',
    icon: 'Hash',
    declaration: `interface Precos {
  [produto: string]: number
}`,
    example: `const precos: Precos = {
  mouse: 50,
  teclado: 150,
}

function totalDoCarrinho(precos: Precos, itens: string[]): number {
  return itens.reduce((soma, item) => soma + (precos[item] ?? 0), 0)
}`,
    buildsInto: [
      'ts-utility-types',
    ],
    tags: [
      'index signature',
      'record',
      'dicionário',
    ],
  },
  // Basic - Funções
  {
    id: 'ts-typed-functions',
    language: 'typescript',
    category: 'Funções',
    tier: 'basic',
    icon: 'FunctionSquare',
    declaration: `function somar(a: number, b: number = 0): number {
  return a + b
}

const multiplicar = (a: number, b: number): number => a * b`,
    example: `function formatarPreco(valor: number, moeda = "BRL"): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: moeda,
  }).format(valor)
}

formatarPreco(99.9) // "R$ 99,90"`,
    buildsInto: [
      'ts-generics',
    ],
    tags: [
      'funções',
      'parâmetros',
    ],
  },
  {
    id: 'ts-arrow-functions-typed',
    language: 'typescript',
    category: 'Funções',
    tier: 'basic',
    icon: 'ArrowRight',
    declaration: `const somar = (a: number, b: number): number => a + b`,
    example: `const numeros = [1, 2, 3]
const dobrados = numeros.map((n): number => n * 2)
// aqui "n" já é inferido como number pelo tipo do array`,
    tags: [
      'arrow function',
      'funções',
      'this',
    ],
  },
  {
    id: 'ts-optional-rest-params',
    language: 'typescript',
    category: 'Funções',
    tier: 'basic',
    icon: 'Ellipsis',
    declaration: `function log(mensagem: string, nivel?: "info" | "erro") {}

function somarTodos(...numeros: number[]): number {
  return numeros.reduce((a, b) => a + b, 0)
}`,
    example: `somarTodos(1, 2, 3, 4) // 10

function criarUsuario(nome: string, idade: number = 18) {
  return { nome, idade }
}

criarUsuario("Ana") // { nome: "Ana", idade: 18 }`,
    buildsInto: [
      'ts-function-overloads',
    ],
    tags: [
      'parâmetros',
      'rest',
      'default',
    ],
  },
  {
    id: 'ts-function-overloads',
    language: 'typescript',
    category: 'Funções',
    tier: 'basic',
    icon: 'Copy',
    declaration: `function criarElemento(tag: "a"): HTMLAnchorElement
function criarElemento(tag: "img"): HTMLImageElement
function criarElemento(tag: string): HTMLElement {
  return document.createElement(tag)
}`,
    example: `const link = criarElemento("a")   // tipo: HTMLAnchorElement
const img = criarElemento("img")  // tipo: HTMLImageElement`,
    tags: [
      'overload',
      'assinatura',
      'funções',
    ],
  },
  // Epic - Reuso de tipos
  {
    id: 'ts-generics',
    language: 'typescript',
    category: 'Reuso de tipos',
    tier: 'epic',
    icon: 'Boxes',
    declaration: `function primeiro<T>(lista: T[]): T | undefined {
  return lista[0]
}`,
    example: `const numeros = primeiro([1, 2, 3])        // number | undefined
const nomes = primeiro(["Ana", "Bruno"])   // string | undefined

interface Caixa<T> {
  conteudo: T
}

const caixaDeTexto: Caixa<string> = { conteudo: "oi" }`,
    buildsInto: [
      'ts-utility-types',
      'ts-generic-constraints',
    ],
    tags: [
      'generics',
      'reuso',
    ],
  },
  {
    id: 'ts-utility-types',
    language: 'typescript',
    category: 'Reuso de tipos',
    tier: 'epic',
    icon: 'Wrench',
    declaration: `interface Usuario {
  id: string
  nome: string
  email: string
}

type UsuarioParcial = Partial<Usuario>
type SomenteContato = Pick<Usuario, "nome" | "email">
type SemId = Omit<Usuario, "id">`,
    example: `function atualizarUsuario(id: string, dados: Partial<Usuario>) {
  // dados pode conter só os campos que vão mudar
}

atualizarUsuario("1", { nome: "Novo Nome" })`,
    buildsInto: [
      'ts-mapped-types',
    ],
    tags: [
      'utility types',
      'partial',
      'pick',
      'omit',
    ],
  },
  {
    id: 'ts-generic-constraints',
    language: 'typescript',
    category: 'Reuso de tipos',
    tier: 'epic',
    icon: 'ShieldCheck',
    declaration: `function getNome<T extends { nome: string }>(item: T): string {
  return item.nome
}`,
    example: `getNome({ nome: "Ana", idade: 30 }) // "Ana"
// getNome({ idade: 30 }) // Erro: falta a propriedade "nome"`,
    buildsInto: [
      'ts-mapped-types',
    ],
    tags: [
      'generics',
      'constraints',
      'extends',
    ],
  },
  {
    id: 'ts-mapped-types',
    language: 'typescript',
    category: 'Reuso de tipos',
    tier: 'epic',
    icon: 'Map',
    declaration: `type SomenteLeitura<T> = {
  readonly [K in keyof T]: T[K]
}`,
    example: `interface Usuario {
  nome: string
  idade: number
}

type UsuarioImutavel = SomenteLeitura<Usuario>
// { readonly nome: string; readonly idade: number }`,
    tags: [
      'mapped types',
      'keyof',
      'utility types',
    ],
  },
  // Legendary - Controle de fluxo de tipos
  {
    id: 'ts-narrowing',
    language: 'typescript',
    category: 'Controle de fluxo de tipos',
    tier: 'legendary',
    icon: 'Filter',
    declaration: `function formatar(valor: string | number) {
  if (typeof valor === "string") {
    return valor.toUpperCase() // valor é string aqui
  }
  return valor.toFixed(2) // valor é number aqui
}`,
    example: `interface Cachorro { tipo: "cachorro"; latir(): void }
interface Gato { tipo: "gato"; miar(): void }

function fazerSom(animal: Cachorro | Gato) {
  if (animal.tipo === "cachorro") {
    animal.latir()
  } else {
    animal.miar()
  }
}`,
    buildsInto: [
      'ts-discriminated-unions',
    ],
    tags: [
      'narrowing',
      'type guards',
      'union',
    ],
  },
  {
    id: 'ts-discriminated-unions',
    language: 'typescript',
    category: 'Controle de fluxo de tipos',
    tier: 'legendary',
    icon: 'GitFork',
    declaration: `interface Carregando { status: "carregando" }
interface Sucesso { status: "sucesso"; dados: string[] }
interface Erro { status: "erro"; mensagem: string }

type Estado = Carregando | Sucesso | Erro`,
    example: `function renderizar(estado: Estado) {
  switch (estado.status) {
    case "carregando": return "Carregando..."
    case "sucesso": return estado.dados.join(", ")
    case "erro": return estado.mensagem
  }
}`,
    buildsInto: [
      'ts-type-predicates',
    ],
    tags: [
      'discriminated union',
      'switch',
      'narrowing',
    ],
  },
  {
    id: 'ts-type-predicates',
    language: 'typescript',
    category: 'Controle de fluxo de tipos',
    tier: 'legendary',
    icon: 'BadgeCheck',
    declaration: `interface Gato { tipo: "gato"; miar(): void }
interface Cachorro { tipo: "cachorro"; latir(): void }

function ehGato(animal: Gato | Cachorro): animal is Gato {
  return animal.tipo === "gato"
}`,
    example: `function fazerSom(animal: Gato | Cachorro) {
  if (ehGato(animal)) {
    animal.miar() // TypeScript sabe que é Gato aqui
  } else {
    animal.latir()
  }
}`,
    tags: [
      'type predicate',
      'type guard',
      'is',
    ],
  },
  // Legendary - Tipos avançados
  {
    id: 'ts-conditional-types',
    language: 'typescript',
    category: 'Tipos avançados',
    tier: 'legendary',
    icon: 'GitBranch',
    declaration: `type EhString<T> = T extends string ? true : false

type A = EhString<"oi">   // true
type B = EhString<42>     // false`,
    example: `type RetornoDe<T> = T extends (...args: never[]) => infer R ? R : never

function criarUsuario() {
  return { id: "1", nome: "Ana" }
}

type Usuario = RetornoDe<typeof criarUsuario>
// { id: string; nome: string }`,
    buildsInto: [
      'ts-template-literal-types',
    ],
    tags: [
      'conditional types',
      'infer',
      'avançado',
    ],
  },
  {
    id: 'ts-template-literal-types',
    language: 'typescript',
    category: 'Tipos avançados',
    tier: 'legendary',
    icon: 'Braces',
    declaration: `type Tamanho = "sm" | "md" | "lg"
type ClasseBotao = \`botao-\${Tamanho}\`
// "botao-sm" | "botao-md" | "botao-lg"`,
    example: `type EventoClique = \`on\${Capitalize<"click" | "hover">}\`
// "onClick" | "onHover"

function registrar(evento: EventoClique) {}
registrar("onClick")`,
    tags: [
      'template literal',
      'string',
      'avançado',
    ],
  },
  {
    id: 'ts-decorators',
    language: 'typescript',
    category: 'Tipos avançados',
    tier: 'legendary',
    icon: 'Sparkles',
    declaration: `function Log(alvo: any, nomeMetodo: string, descritor: PropertyDescriptor) {
  const original = descritor.value
  descritor.value = function (...args: any[]) {
    console.log(\`Chamando \${nomeMetodo}\`)
    return original.apply(this, args)
  }
}`,
    example: `class Servico {
  @Log
  buscarDados() {
    return "dados"
  }
}

new Servico().buscarDados() // loga "Chamando buscarDados" antes de retornar`,
    tags: [
      'decorator',
      'classe',
      'avançado',
    ],
  },
]
