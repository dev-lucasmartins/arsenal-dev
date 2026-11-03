import type { StudyItem } from '../types/study-item'

export const tailwindItems: StudyItem[] = [
  // Starter — Fundamentos
  {
    id: 'tw-spacing',
    language: 'tailwind',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'Ruler',
    declaration: `<div className="p-4 mx-auto my-6">...</div>`,
    example: `<div className="flex flex-col gap-2 p-6">
  <h2 className="mb-2">Título</h2>
  <p className="px-4 py-2">Conteúdo com respiro interno</p>
</div>`,
    buildsInto: [
      'tw-flexbox',
    ],
    tags: [
      'spacing',
      'margin',
      'padding',
      'gap',
    ],
  },
  {
    id: 'tw-sizing',
    language: 'tailwind',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'Maximize2',
    declaration: `<div className="w-full max-w-md h-64">...</div>`,
    example: `<img className="w-12 h-12 rounded-full" src="/avatar.png" />
<div className="w-full max-w-screen-lg mx-auto">Conteúdo centralizado</div>`,
    tags: [
      'width',
      'height',
      'sizing',
    ],
  },
  {
    id: 'tw-colors',
    language: 'tailwind',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'Palette',
    declaration: `<div className="bg-slate-900 text-amber-300 border border-slate-700">...</div>`,
    example: `<button className="bg-blue-600 text-white hover:bg-blue-700">
  Salvar
</button>
<div className="bg-black/40 backdrop-blur-sm">Overlay</div>`,
    buildsInto: [
      'tw-theme-config',
    ],
    tags: [
      'cores',
      'opacity',
      'background',
      'text color',
    ],
  },
  {
    id: 'tw-typography',
    language: 'tailwind',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'CaseSensitive',
    declaration: `<h1 className="text-2xl font-bold tracking-tight">Título</h1>`,
    example: `<article className="text-base leading-relaxed">
  <h2 className="text-xl font-semibold mb-2">Subtítulo</h2>
  <p className="text-slate-400">Texto do parágrafo...</p>
</article>`,
    tags: [
      'typography',
      'font',
      'text',
    ],
  },
  // Basic — Layout
  {
    id: 'tw-flexbox',
    language: 'tailwind',
    category: 'Layout',
    tier: 'basic',
    icon: 'AlignHorizontalSpaceBetween',
    declaration: `<div className="flex items-center justify-between gap-4">...</div>`,
    example: `<nav className="flex items-center justify-between px-6 py-3">
  <span>Logo</span>
  <div className="flex gap-4">
    <a href="#">Início</a>
    <a href="#">Sobre</a>
  </div>
</nav>`,
    buildsInto: [
      'tw-grid',
    ],
    tags: [
      'flexbox',
      'flex',
      'layout',
    ],
  },
  {
    id: 'tw-grid',
    language: 'tailwind',
    category: 'Layout',
    tier: 'basic',
    icon: 'Grid3x3',
    declaration: `<div className="grid grid-cols-3 gap-4">...</div>`,
    example: `<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="col-span-1 md:col-span-2">Principal</div>
  <div>Sidebar</div>
</div>`,
    tags: [
      'grid',
      'layout',
      'colunas',
    ],
  },
  {
    id: 'tw-position',
    language: 'tailwind',
    category: 'Layout',
    tier: 'basic',
    icon: 'Move',
    declaration: `<div className="relative">
  <span className="absolute top-2 right-2 z-10">Badge</span>
</div>`,
    example: `<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
  <div className="bg-white rounded-lg p-6">Modal</div>
</div>`,
    tags: [
      'position',
      'absolute',
      'z-index',
    ],
  },
  {
    id: 'tw-display-overflow',
    language: 'tailwind',
    category: 'Layout',
    tier: 'basic',
    icon: 'Scroll',
    declaration: `<p className="truncate max-w-xs">Texto muito longo que será cortado...</p>`,
    example: `<div className="h-48 overflow-y-auto">
  Conteúdo rolável dentro de uma altura fixa
</div>

<button className="hidden md:block">Só aparece em telas médias+</button>`,
    tags: [
      'display',
      'overflow',
      'truncate',
    ],
  },
  // Epic — Interatividade
  {
    id: 'tw-states',
    language: 'tailwind',
    category: 'Interatividade',
    tier: 'epic',
    icon: 'MousePointer2',
    declaration: `<button className="bg-blue-600 hover:bg-blue-700 focus:ring-2 disabled:opacity-50">
  Enviar
</button>`,
    example: `<div className="group cursor-pointer">
  <img className="group-hover:scale-105 transition" src="/card.png" />
  <p className="opacity-0 group-hover:opacity-100 transition">Ver mais</p>
</div>`,
    buildsInto: [
      'tw-transitions-animations',
    ],
    tags: [
      'hover',
      'focus',
      'pseudo-classes',
      'states',
    ],
  },
  {
    id: 'tw-responsive',
    language: 'tailwind',
    category: 'Interatividade',
    tier: 'epic',
    icon: 'Smartphone',
    declaration: `<div className="flex flex-col md:flex-row gap-4">...</div>`,
    example: `<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* 1 coluna no mobile, 2 no tablet, 4 no desktop */}
</div>`,
    tags: [
      'responsive',
      'breakpoints',
      'mobile-first',
    ],
  },
  {
    id: 'tw-dark-mode',
    language: 'tailwind',
    category: 'Interatividade',
    tier: 'epic',
    icon: 'Moon',
    declaration: `<div className="bg-white text-black dark:bg-slate-900 dark:text-white">...</div>`,
    example: `<button className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
  Alternar tema
</button>`,
    tags: [
      'dark mode',
      'tema',
      'theming',
    ],
  },
  {
    id: 'tw-borders-shadows',
    language: 'tailwind',
    category: 'Interatividade',
    tier: 'epic',
    icon: 'Square',
    declaration: `<div className="border border-slate-700 rounded-lg shadow-md">...</div>`,
    example: `<div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
  Card com elevação
</div>`,
    tags: [
      'border',
      'rounded',
      'shadow',
    ],
  },
  // Legendary — Avançado
  {
    id: 'tw-transitions-animations',
    language: 'tailwind',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'Wand',
    declaration: `<button className="transition-colors duration-200 hover:bg-blue-700">...</button>`,
    example: `<div className="transition-transform duration-300 hover:scale-105">
  Card com zoom suave
</div>

<svg className="animate-spin h-5 w-5">...</svg>`,
    tags: [
      'transition',
      'animation',
      'duration',
    ],
  },
  {
    id: 'tw-arbitrary-values',
    language: 'tailwind',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'Brackets',
    declaration: `<div className="w-[327px] bg-[#1da1f2] top-[calc(100%+8px)]">...</div>`,
    example: `<div className="grid grid-cols-[200px_1fr] gap-4">
  <aside>Sidebar de largura fixa</aside>
  <main>Conteúdo flexível</main>
</div>`,
    buildsInto: [
      'tw-theme-config',
    ],
    tags: [
      'arbitrary values',
      'colchetes',
      'customização',
    ],
  },
  {
    id: 'tw-theme-config',
    language: 'tailwind',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'SlidersHorizontal',
    declaration: `@theme {
  --color-brand: #fbbf24;
  --font-display: "Cinzel", serif;
}`,
    example: `<h1 className="font-display text-brand">Título customizado</h1>`,
    tags: [
      'theme',
      '@theme',
      'customização',
      'tokens',
    ],
  },
  {
    id: 'tw-apply-components',
    language: 'tailwind',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'Component',
    declaration: `.btn-primary {
  @apply bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700;
}`,
    example: `function BotaoPrimario({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
      {children}
    </button>
  )
}`,
    tags: [
      '@apply',
      'componentização',
      'css',
    ],
  },
]
