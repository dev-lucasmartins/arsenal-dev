import type { StudyItem } from '../types/study-item'

export const javascriptItems: StudyItem[] = [
  // Starter - Fundamentos
  {
    id: 'js-variables-primitives',
    language: 'javascript',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'Box',
    declaration: `const nome = "Ana"
let idade = 30
const ativo = true`,
    example: `let contador = 0
contador += 1
console.log(contador) // 1

const pessoa = { nome: "Ana" }
pessoa.nome = "Bruna" // válido: o objeto mudou, a referência não`,
    buildsInto: [
      'js-destructuring',
      'js-closures',
    ],
    tags: [
      'let',
      'const',
      'var',
      'fundamentos',
    ],
  },
  {
    id: 'js-functions',
    language: 'javascript',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'FunctionSquare',
    declaration: `function somar(a, b) {
  return a + b
}

const multiplicar = (a, b) => a * b`,
    example: `function saudacao(nome, saudacaoBase = "Olá") {
  return \`\${saudacaoBase}, \${nome}!\`
}

console.log(saudacao("Ana"))       // "Olá, Ana!"
console.log(saudacao("Ana", "Oi")) // "Oi, Ana!"`,
    buildsInto: [
      'js-higher-order-functions',
    ],
    tags: [
      'funções',
      'arrow function',
    ],
  },
  {
    id: 'js-operators-coercion',
    language: 'javascript',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'Divide',
    declaration: `console.log("5" + 1)   // "51"
console.log("5" - 1)   // 4
console.log(5 === "5") // false
console.log(5 == "5")  // true`,
    example: `function ehValido(valor) {
  return valor !== null && valor !== undefined && valor !== ""
}

ehValido(0) // true - 0 é um valor válido, diferente de "" ou null`,
    tags: [
      'operadores',
      'coerção',
      'comparação',
    ],
  },
  {
    id: 'js-conditionals-loops',
    language: 'javascript',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'Repeat',
    declaration: `for (const item of lista) {
  console.log(item)
}

let i = 0
while (i < 3) {
  console.log(i)
  i++
}`,
    example: `function classificar(nota) {
  if (nota >= 7) return "aprovado"
  if (nota >= 5) return "recuperação"
  return "reprovado"
}

classificar(8) // "aprovado"`,
    buildsInto: [
      'js-array-methods',
    ],
    tags: [
      'if',
      'for',
      'while',
      'loops',
    ],
  },
  // Basic - Sintaxe moderna
  {
    id: 'js-destructuring',
    language: 'javascript',
    category: 'Sintaxe moderna',
    tier: 'basic',
    icon: 'Split',
    declaration: `const { nome, idade } = usuario
const [primeiro, segundo] = lista
const copia = { ...usuario, idade: 31 }`,
    example: `function criarUsuario({ nome, email, ...resto }) {
  return { nome, email, extras: resto }
}

const u = criarUsuario({ nome: "Ana", email: "a@a.com", idade: 30 })
// { nome: "Ana", email: "a@a.com", extras: { idade: 30 } }`,
    buildsInto: [
      'js-array-methods',
    ],
    tags: [
      'destructuring',
      'spread',
      'rest',
    ],
  },
  {
    id: 'js-array-methods',
    language: 'javascript',
    category: 'Sintaxe moderna',
    tier: 'basic',
    icon: 'ListChecks',
    declaration: `const dobrados = numeros.map(n => n * 2)
const pares = numeros.filter(n => n % 2 === 0)
const total = numeros.reduce((soma, n) => soma + n, 0)`,
    example: `const pedidos = [
  { produto: "Mouse", valor: 50 },
  { produto: "Teclado", valor: 150 },
]

const totalGasto = pedidos
  .filter(p => p.valor > 40)
  .reduce((soma, p) => soma + p.valor, 0)

console.log(totalGasto) // 200`,
    buildsInto: [
      'js-closures',
    ],
    tags: [
      'map',
      'filter',
      'reduce',
      'arrays',
    ],
  },
  {
    id: 'js-template-literals',
    language: 'javascript',
    category: 'Sintaxe moderna',
    tier: 'basic',
    icon: 'Quote',
    declaration: `const nome = "Ana"
const mensagem = \`Olá, \${nome}! Hoje é \${new Date().toLocaleDateString()}.\``,
    example: `function criarCardHtml(produto) {
  return \`
    <div class="card">
      <h3>\${produto.nome}</h3>
      <span>R$ \${produto.preco.toFixed(2)}</span>
    </div>
  \`
}`,
    tags: [
      'template literal',
      'string',
      'interpolação',
    ],
  },
  {
    id: 'js-optional-chaining-nullish',
    language: 'javascript',
    category: 'Sintaxe moderna',
    tier: 'basic',
    icon: 'CircleSlash',
    declaration: `const cidade = usuario?.endereco?.cidade
const nome = usuario?.nome ?? "Visitante"`,
    example: `function saudacao(usuario) {
  const nome = usuario?.nome ?? "Visitante"
  return \`Olá, \${nome}!\`
}

saudacao(null) // "Olá, Visitante!"
saudacao({ nome: "Ana" }) // "Olá, Ana!"`,
    tags: [
      'optional chaining',
      'nullish coalescing',
    ],
  },
  // Epic - Funções avançadas
  {
    id: 'js-closures',
    language: 'javascript',
    category: 'Funções avançadas',
    tier: 'epic',
    icon: 'Lock',
    declaration: `function criarContador() {
  let contagem = 0
  return function incrementar() {
    contagem += 1
    return contagem
  }
}`,
    example: `const contador = criarContador()
console.log(contador()) // 1
console.log(contador()) // 2

const outroContador = criarContador()
console.log(outroContador()) // 1 (estado independente)`,
    buildsInto: [
      'js-promises',
    ],
    tags: [
      'closure',
      'escopo',
      'estado',
    ],
  },
  {
    id: 'js-higher-order-functions',
    language: 'javascript',
    category: 'Funções avançadas',
    tier: 'epic',
    icon: 'Layers2',
    declaration: `function comLog(fn) {
  return function (...args) {
    console.log("chamando com", args)
    return fn(...args)
  }
}`,
    example: `function somar(a, b) {
  return a + b
}

const somarComLog = comLog(somar)
somarComLog(2, 3) // loga "chamando com [2, 3]" e retorna 5`,
    buildsInto: [
      'js-callbacks',
    ],
    tags: [
      'higher-order function',
      'funções',
      'composição',
    ],
  },
  {
    id: 'js-callbacks',
    language: 'javascript',
    category: 'Funções avançadas',
    tier: 'epic',
    icon: 'Reply',
    declaration: `function buscarUsuario(id, callback) {
  setTimeout(() => {
    callback({ id, nome: "Ana" })
  }, 500)
}`,
    example: `buscarUsuario(1, (usuario) => {
  console.log(usuario.nome) // "Ana", depois de ~500ms
})

botao.addEventListener("click", () => console.log("Clicado!"))`,
    buildsInto: [
      'js-promises',
    ],
    tags: [
      'callback',
      'assíncrono',
      'eventos',
    ],
  },
  // Epic - Assincronismo
  {
    id: 'js-promises',
    language: 'javascript',
    category: 'Assincronismo',
    tier: 'epic',
    icon: 'Hourglass',
    declaration: `function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    fetch(\`/api/usuarios/\${id}\`)
      .then(res => resolve(res.json()))
      .catch(reject)
  })
}`,
    example: `buscarUsuario(1)
  .then(usuario => console.log(usuario.nome))
  .catch(erro => console.error("Falhou:", erro))`,
    buildsInto: [
      'js-async-await',
      'js-promise-combinators',
    ],
    tags: [
      'promise',
      'assíncrono',
      'fetch',
    ],
  },
  {
    id: 'js-promise-combinators',
    language: 'javascript',
    category: 'Assincronismo',
    tier: 'epic',
    icon: 'Combine',
    declaration: `const [usuario, pedidos] = await Promise.all([
  buscarUsuario(id),
  buscarPedidos(id),
])`,
    example: `const resultados = await Promise.allSettled([
  fetch("/api/a"),
  fetch("/api/b"),
])

resultados.forEach(r => {
  if (r.status === "fulfilled") console.log("OK:", r.value)
  else console.log("Falhou:", r.reason)
})`,
    tags: [
      'promise.all',
      'promise.allsettled',
      'paralelismo',
    ],
  },
  {
    id: 'js-fetch-api',
    language: 'javascript',
    category: 'Assincronismo',
    tier: 'epic',
    icon: 'Globe',
    declaration: `const response = await fetch("/api/usuarios")
const usuarios = await response.json()`,
    example: `async function buscarUsuarios() {
  const response = await fetch("/api/usuarios")
  if (!response.ok) {
    throw new Error(\`Erro HTTP: \${response.status}\`)
  }
  return response.json()
}`,
    buildsInto: [
      'js-async-await',
    ],
    tags: [
      'fetch',
      'http',
      'api',
    ],
  },
  // Legendary - Assincronismo
  {
    id: 'js-async-await',
    language: 'javascript',
    category: 'Assincronismo',
    tier: 'legendary',
    icon: 'Zap',
    declaration: `async function buscarUsuario(id) {
  const res = await fetch(\`/api/usuarios/\${id}\`)
  return res.json()
}`,
    example: `async function carregarPerfil(id) {
  try {
    const usuario = await buscarUsuario(id)
    console.log(usuario.nome)
  } catch (erro) {
    console.error("Falhou:", erro)
  }
}`,
    buildsInto: [
      'js-event-loop',
    ],
    tags: [
      'async',
      'await',
      'assíncrono',
    ],
  },
  {
    id: 'js-event-loop',
    language: 'javascript',
    category: 'Assincronismo',
    tier: 'legendary',
    icon: 'RefreshCw',
    declaration: `console.log("1")
setTimeout(() => console.log("2 (macrotask)"), 0)
Promise.resolve().then(() => console.log("3 (microtask)"))
console.log("4")`,
    example: `// Ordem de saída real:
// 1
// 4
// 3 (microtask)
// 2 (macrotask)`,
    buildsInto: [
      'js-generators-iterators',
    ],
    tags: [
      'event loop',
      'microtask',
      'macrotask',
    ],
  },
  {
    id: 'js-generators-iterators',
    language: 'javascript',
    category: 'Assincronismo',
    tier: 'legendary',
    icon: 'RotateCw',
    declaration: `function* contador() {
  let n = 1
  while (true) {
    yield n++
  }
}`,
    example: `const gerador = contador()
console.log(gerador.next().value) // 1
console.log(gerador.next().value) // 2

for (const n of contador()) {
  if (n > 3) break
  console.log(n) // 1, 2, 3
}`,
    tags: [
      'generator',
      'yield',
      'iterator',
    ],
  },
]
