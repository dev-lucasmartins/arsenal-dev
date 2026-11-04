import type { StudyItem } from "../types/study-item";

export const reactItems: StudyItem[] = [
  {
    id: "react-components-jsx",
    language: "react",
    category: "Fundamentos",
    tier: "starter",
    icon: "Component",
    declaration: `function Saudacao() {
  return <h1>Olá, mundo!</h1>
}`,
    example: `function Cartao({ titulo }: { titulo: string }) {
  return (
    <div className="cartao">
      <h2>{titulo}</h2>
      <p>Criado em {new Date().toLocaleDateString()}</p>
    </div>
  )
}`,
    buildsInto: ["react-props"],
    tags: ["jsx", "componente", "fundamentos"],
  },
  {
    id: "react-props",
    language: "react",
    category: "Fundamentos",
    tier: "starter",
    icon: "ArrowRightLeft",
    declaration: `interface BotaoProps {
  texto: string
  onClick: () => void
}

function Botao({ texto, onClick }: BotaoProps) {
  return <button onClick={onClick}>{texto}</button>
}`,
    example: `function App() {
  return <Botao texto="Salvar" onClick={() => console.log("Salvo!")} />
}`,
    buildsInto: ["react-usestate"],
    tags: ["props", "componente"],
  },
  {
    id: "react-conditional-rendering",
    language: "react",
    category: "Fundamentos",
    tier: "starter",
    icon: "GitFork",
    declaration: `{estaLogado && <PainelUsuario />}
{estaCarregando ? <Spinner /> : <Conteudo />}`,
    example: `function Notificacoes({ itens }: { itens: string[] }) {
  if (itens.length === 0) return null

  return (
    <ul>
      {itens.map(item => <li key={item}>{item}</li>)}
    </ul>
  )
}`,
    buildsInto: ["react-usestate"],
    tags: ["jsx", "condicional", "renderização"],
  },
  {
    id: "react-event-handling",
    language: "react",
    category: "Fundamentos",
    tier: "starter",
    icon: "MousePointerClick",
    declaration: `<button onClick={() => console.log("clicado")}>Clique</button>
<input onChange={(e) => setValor(e.target.value)} />`,
    example: `function Formulario() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log("Formulário enviado")
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Enviar</button>
    </form>
  )
}`,
    buildsInto: ["react-controlled-forms"],
    tags: ["eventos", "onclick", "onchange"],
  },
  {
    id: "react-usestate",
    language: "react",
    category: "Hooks básicos",
    tier: "basic",
    icon: "ToggleLeft",
    declaration: `const [contador, setContador] = useState(0)`,
    example: `function Contador() {
  const [contador, setContador] = useState(0)

  return (
    <button onClick={() => setContador(c => c + 1)}>
      Cliques: {contador}
    </button>
  )
}`,
    buildsInto: ["react-useeffect", "react-controlled-forms"],
    tags: ["usestate", "hooks", "estado"],
  },
  {
    id: "react-list-keys",
    language: "react",
    category: "Hooks básicos",
    tier: "basic",
    icon: "List",
    declaration: `{itens.map(item => (
  <li key={item.id}>{item.nome}</li>
))}`,
    example: `function ListaDeTarefas({ tarefas }: { tarefas: { id: string; titulo: string }[] }) {
  return (
    <ul>
      {tarefas.map(tarefa => (
        <li key={tarefa.id}>{tarefa.titulo}</li>
      ))}
    </ul>
  )
}`,
    buildsInto: ["react-useeffect"],
    tags: ["lista", "key", "map"],
  },
  {
    id: "react-useref",
    language: "react",
    category: "Hooks básicos",
    tier: "basic",
    icon: "Crosshair",
    declaration: `const inputRef = useRef<HTMLInputElement>(null)`,
    example: `function CampoComFoco() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return <input ref={inputRef} />
}`,
    buildsInto: ["react-forwardref"],
    tags: ["useref", "dom", "hooks"],
  },
  {
    id: "react-controlled-forms",
    language: "react",
    category: "Hooks básicos",
    tier: "basic",
    icon: "ClipboardList",
    declaration: `const [email, setEmail] = useState("")

<input value={email} onChange={(e) => setEmail(e.target.value)} />`,
    example: `function FormularioLogin() {
  const [email, setEmail] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log("Enviando:", email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Entrar</button>
    </form>
  )
}`,
    buildsInto: ["react-useeffect"],
    tags: ["formulário", "input", "controlled"],
  },
  {
    id: "react-useeffect",
    language: "react",
    category: "Hooks de ciclo de vida",
    tier: "epic",
    icon: "Waves",
    declaration: `useEffect(() => {
  const id = setInterval(() => console.log("tick"), 1000)
  return () => clearInterval(id)
}, [])`,
    example: `function PerfilUsuario({ userId }: { userId: string }) {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    let ativo = true
    fetch(\`/api/usuarios/\${userId}\`)
      .then(res => res.json())
      .then(data => { if (ativo) setUsuario(data) })
    return () => { ativo = false }
  }, [userId])

  return <p>{usuario?.nome ?? "Carregando..."}</p>
}`,
    buildsInto: ["react-usememo-usecallback", "react-uselayouteffect"],
    tags: ["useeffect", "hooks", "efeito colateral"],
  },
  {
    id: "react-uselayouteffect",
    language: "react",
    category: "Hooks de ciclo de vida",
    tier: "epic",
    icon: "Layers",
    declaration: `useLayoutEffect(() => {
  const altura = elementoRef.current?.offsetHeight ?? 0
  setAltura(altura)
}, [])`,
    example: `function Tooltip({ texto }: { texto: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [largura, setLargura] = useState(0)

  useLayoutEffect(() => {
    setLargura(ref.current?.offsetWidth ?? 0)
  }, [texto])

  return <div ref={ref}>{texto} ({largura}px)</div>
}`,
    tags: ["uselayouteffect", "dom", "layout"],
  },
  {
    id: "react-error-boundaries",
    language: "react",
    category: "Hooks de ciclo de vida",
    tier: "epic",
    icon: "ShieldAlert",
    declaration: `class ErroBoundary extends React.Component {
  state = { temErro: false }
  static getDerivedStateFromError() {
    return { temErro: true }
  }
  render() {
    if (this.state.temErro) return <p>Algo deu errado.</p>
    return this.props.children
  }
}`,
    example: `function App() {
  return (
    <ErroBoundary>
      <Dashboard />
    </ErroBoundary>
  )
}`,
    tags: ["error boundary", "erro", "fallback"],
  },
  {
    id: "react-usememo-usecallback",
    language: "react",
    category: "Hooks de performance",
    tier: "epic",
    icon: "Gauge",
    declaration: `const total = useMemo(() => calcularTotal(itens), [itens])
const handleClick = useCallback(() => enviar(id), [id])`,
    example: `function ListaCara({ itens }: { itens: number[] }) {
  const total = useMemo(
    () => itens.reduce((soma, n) => soma + n, 0),
    [itens]
  )

  return <p>Total: {total}</p>
}`,
    buildsInto: ["react-react-memo"],
    tags: ["usememo", "usecallback", "performance"],
  },
  {
    id: "react-react-memo",
    language: "react",
    category: "Hooks de performance",
    tier: "epic",
    icon: "Copy",
    declaration: `const ItemLista = React.memo(function ItemLista({ titulo }: { titulo: string }) {
  return <li>{titulo}</li>
})`,
    example: `function Lista({ itens }: { itens: string[] }) {
  return (
    <ul>
      {itens.map(item => <ItemLista key={item} titulo={item} />)}
    </ul>
  )
}`,
    buildsInto: ["react-lazy-suspense"],
    tags: ["react.memo", "performance", "re-render"],
  },
  {
    id: "react-lazy-suspense",
    language: "react",
    category: "Hooks de performance",
    tier: "epic",
    icon: "PackageOpen",
    declaration: `const Dashboard = React.lazy(() => import("./Dashboard"))`,
    example: `function App() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Dashboard />
    </Suspense>
  )
}`,
    tags: ["lazy", "suspense", "code splitting"],
  },
  {
    id: "react-context",
    language: "react",
    category: "Compartilhamento de estado",
    tier: "legendary",
    icon: "Share2",
    declaration: `const TemaContext = createContext<"claro" | "escuro">("claro")

function App() {
  return (
    <TemaContext.Provider value="escuro">
      <Pagina />
    </TemaContext.Provider>
  )
}`,
    example: `function BotaoTemado() {
  const tema = useContext(TemaContext)
  return <button className={tema}>Clique aqui</button>
}`,
    buildsInto: ["react-usereducer", "react-compound-components"],
    tags: ["context", "provider", "prop drilling"],
  },
  {
    id: "react-usereducer",
    language: "react",
    category: "Compartilhamento de estado",
    tier: "legendary",
    icon: "GitMerge",
    declaration: `function reducer(estado: number, acao: { type: "incrementar" | "decrementar" }) {
  switch (acao.type) {
    case "incrementar": return estado + 1
    case "decrementar": return estado - 1
  }
}

const [contador, dispatch] = useReducer(reducer, 0)`,
    example: `function Contador() {
  const [contador, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <button onClick={() => dispatch({ type: "decrementar" })}>-</button>
      <span>{contador}</span>
      <button onClick={() => dispatch({ type: "incrementar" })}>+</button>
    </>
  )
}`,
    tags: ["usereducer", "estado", "reducer"],
  },
  {
    id: "react-compound-components",
    language: "react",
    category: "Compartilhamento de estado",
    tier: "legendary",
    icon: "Group",
    declaration: `const TabsContext = createContext<{ ativa: string; selecionar: (id: string) => void } | null>(null)

function Tabs({ children, inicial }: { children: React.ReactNode; inicial: string }) {
  const [ativa, selecionar] = useState(inicial)
  return (
    <TabsContext.Provider value={{ ativa, selecionar }}>
      {children}
    </TabsContext.Provider>
  )
}`,
    example: `function Tab({ id, children }: { id: string; children: React.ReactNode }) {
  const ctx = useContext(TabsContext)!
  return (
    <button onClick={() => ctx.selecionar(id)}>
      {children}
    </button>
  )
}

<Tabs inicial="perfil">
  <Tab id="perfil">Perfil</Tab>
  <Tab id="config">Configurações</Tab>
</Tabs>`,
    tags: ["compound components", "context", "padrão"],
  },
  {
    id: "react-custom-hooks",
    language: "react",
    category: "Composição avançada",
    tier: "legendary",
    icon: "Puzzle",
    declaration: `function useContador(inicial = 0) {
  const [valor, setValor] = useState(inicial)
  const incrementar = () => setValor(v => v + 1)
  return { valor, incrementar }
}`,
    example: `function Contador() {
  const { valor, incrementar } = useContador(10)
  return <button onClick={incrementar}>Total: {valor}</button>
}`,
    buildsInto: ["react-render-props"],
    tags: ["custom hook", "hooks", "reuso"],
  },
  {
    id: "react-render-props",
    language: "react",
    category: "Composição avançada",
    tier: "legendary",
    icon: "Code",
    declaration: `function Mouse({ children }: { children: (pos: { x: number; y: number }) => React.ReactNode }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <div onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      {children(pos)}
    </div>
  )
}`,
    example: `<Mouse>
  {({ x, y }) => <p>Posição: {x}, {y}</p>}
</Mouse>`,
    tags: ["render props", "padrão", "children"],
  },
  {
    id: "react-forwardref",
    language: "react",
    category: "Composição avançada",
    tier: "legendary",
    icon: "Forward",
    declaration: `const Campo = forwardRef<HTMLInputElement, { label: string }>(
  function Campo({ label }, ref) {
    return (
      <label>
        {label}
        <input ref={ref} />
      </label>
    )
  }
)`,
    example: `function Formulario() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <Campo label="Nome" ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Focar</button>
    </>
  )
}`,
    tags: ["forwardref", "ref", "componente"],
  },
];
