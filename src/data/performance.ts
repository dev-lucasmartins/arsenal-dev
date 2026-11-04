import type { StudyItem } from '../types/study-item'

export const performanceItems: StudyItem[] = [
  {
    id: 'perf-web-vitals',
    language: 'performance',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'Gauge',
    declaration: `LCP: Largest Contentful Paint   (carregamento)
INP: Interaction to Next Paint  (responsividade)
CLS: Cumulative Layout Shift    (estabilidade visual)`,
    example: `// LCP bom: < 2.5s
// INP bom: < 200ms
// CLS bom: < 0.1
// Medidos de verdade (não em laboratório) via Chrome User Experience Report`,
    buildsInto: ['perf-bundle-size'],
    tags: ['web vitals', 'lcp', 'inp', 'cls'],
  },
  {
    id: 'perf-image-optimization',
    language: 'performance',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'Images',
    declaration: `<img src="foto.webp" width={400} height={300} loading="lazy" />`,
    example: `<img
  src="banner.webp"
  width={1200}
  height={400}
  loading="lazy"
  decoding="async"
  alt="Banner promocional"
/>`,
    tags: ['webp', 'loading lazy', 'width height', 'cls'],
  },
  {
    id: 'perf-critical-rendering-path',
    language: 'performance',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'Layers',
    declaration: `HTML -> DOM -> CSSOM -> Render Tree -> Layout -> Paint`,
    example: `// CSS no <head> bloqueia a primeira renderização até carregar
// Scripts com "defer" não bloqueiam o parsing do HTML
<script src="app.js" defer></script>`,
    tags: ['render tree', 'parsing', 'defer', 'blocking'],
  },
  {
    id: 'perf-bundle-size',
    language: 'performance',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'Package',
    declaration: `npx vite-bundle-visualizer`,
    example: `// package.json
{
  "scripts": {
    "analyze": "vite-bundle-visualizer"
  }
}
// Mostra o peso de cada dependência no bundle final`,
    tags: ['bundle size', 'tree-shaking', 'vite-bundle-visualizer'],
  },

  {
    id: 'perf-code-splitting',
    language: 'performance',
    category: 'Carregamento',
    tier: 'epic',
    icon: 'Scissors',
    declaration: `const routes = [
  { path: '/item/:id', component: lazy(() => import('./ItemDetailPage')) },
]`,
    example: `// cada rota gera seu próprio chunk JS
// o usuário só baixa o código da página que está visitando
const ItemDetailPage = lazy(() => import('./pages/ItemDetailPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))`,
    tags: ['chunks', 'route-based splitting', 'vite'],
  },
  {
    id: 'perf-font-loading',
    language: 'performance',
    category: 'Carregamento',
    tier: 'epic',
    icon: 'Type',
    declaration: `@font-face {
  font-family: 'Roboto';
  src: url('/roboto.woff2') format('woff2');
  font-display: swap;
}`,
    example: `<link rel="preload" href="/fonts/roboto.woff2" as="font" type="font/woff2" crossorigin />
// font-display: swap evita o "flash de texto invisível" (FOIT)
// mostra a fonte de fallback até a fonte customizada carregar`,
    tags: ['font-display', 'foit', 'fout', 'preload'],
  },
  {
    id: 'perf-service-worker-cache',
    language: 'performance',
    category: 'Carregamento',
    tier: 'epic',
    icon: 'Server',
    declaration: `self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((res) => res ?? fetch(event.request)))
})`,
    example: `// estratégia cache-first: tenta o cache, só vai à rede se não encontrar
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => cache.addAll(['/', '/app.js', '/app.css'])),
  )
})`,
    buildsInto: ['perf-caching-strategies'],
    tags: ['service worker', 'cache api', 'offline', 'pwa'],
  },
  {
    id: 'perf-prefetch',
    language: 'performance',
    category: 'Carregamento',
    tier: 'epic',
    icon: 'Rocket',
    declaration: `<link rel="prefetch" href="/assets/item-detail.js" />`,
    example: `function ConceptIconButton({ item }: { item: StudyItem }) {
  function handleMouseEnter() {
    // pré-carrega o chunk da página de detalhe no hover
    void import('../../pages/ItemDetailPage')
  }
  return <Link onMouseEnter={handleMouseEnter} to={\`/item/\${item.id}\`} />
}`,
    tags: ['prefetch', 'preload', 'hover intent'],
  },

  {
    id: 'perf-virtualization',
    language: 'performance',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'Rows3',
    declaration: `import { useVirtualizer } from '@tanstack/react-virtual'`,
    example: `const virtualizer = useVirtualizer({
  count: items.length,
  getScrollElement: () => scrollRef.current,
  estimateSize: () => 80,
})
// só renderiza os itens visíveis na tela, mesmo com 10.000 linhas`,
    tags: ['virtualização', 'react-virtual', 'listas grandes'],
  },
  {
    id: 'perf-debounce-throttle',
    language: 'performance',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'Timer',
    declaration: `const debouncedSearch = debounce((query: string) => setQuery(query), 300)`,
    example: `function useDebouncedValue(value: string, delayMs: number) {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delayMs)
    return () => clearTimeout(timer)
  }, [value, delayMs])

  return debounced
}`,
    tags: ['debounce', 'throttle', 'input de busca'],
  },
  {
    id: 'perf-web-workers',
    language: 'performance',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'Cpu',
    declaration: `const worker = new Worker(new URL('./worker.ts', import.meta.url))
worker.postMessage(dadosGrandes)`,
    example: `// worker.ts
self.onmessage = (event) => {
  const resultado = processarDadosPesados(event.data)
  self.postMessage(resultado)
}
// roda numa thread separada, sem travar a UI`,
    tags: ['web worker', 'thread separada', 'main thread'],
  },
  {
    id: 'perf-caching-strategies',
    language: 'performance',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'HardDrive',
    declaration: `const { data } = useQuery({ queryKey: ['items'], queryFn: fetchItems, staleTime: 60_000 })`,
    example: `// staleTime: tempo que o cache é considerado "fresco" sem refazer a requisição
// cacheTime/gcTime: tempo que o dado fica em memória após não ser mais usado
useQuery({
  queryKey: ['item', id],
  queryFn: () => fetchItem(id),
  staleTime: 5 * 60_000,
})`,
    tags: ['cache', 'react-query', 'stale-while-revalidate'],
  },
]
