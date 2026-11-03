import type { Locale } from '../types/locale'
import type { Tier } from '../types/study-item'

export interface AboutContent {
  tagline: string
  introHeading: string
  intro: string
  howToUseHeading: string
  howToUseSteps: string[]
  stackHeading: string
  stackItems: string[]
  tiersHeading: string
  tiersIntro: string
  tierDescriptions: Record<Tier, string>
  ctaLabel: string
}

export const aboutContent: Record<Locale, AboutContent> = {
  'pt-BR': {
    tagline: 'Uma biblioteca visual de estudos para quem aprende programação por associação visual.',
    introHeading: 'O que é',
    intro:
      'Arsenal Dev nasceu de uma ideia simples: e se aprender TypeScript, JavaScript, React, Tailwind CSS e testes unitários fosse parecido com explorar a página de itens de um jogo? Cada conceito de programação vira um ícone, agrupado por categoria e por nível de dificuldade.',
    howToUseHeading: 'Como usar',
    howToUseSteps: [
      'Passe o mouse sobre um ícone para ver um preview rápido: atributos, o que é, e um exemplo de código.',
      'Clique no ícone para abrir a página de detalhe completa, com tudo em um só lugar.',
      'Use a busca no topo para encontrar um conceito pelo nome ou por uma tag.',
      'Navegue pela sidebar: escolha a linguagem e depois a categoria que quer estudar.',
      'Troque o idioma (PT-BR/EN/ES) e o tema (claro/escuro) a qualquer momento, nas opções da sidebar.',
    ],
    stackHeading: 'Tecnologias',
    stackItems: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'react-router-dom',
      'lucide-react',
      'prism-react-renderer',
      'Vitest',
      'Testing Library',
    ],
    tiersHeading: 'Tiers',
    tiersIntro: 'Os conceitos são organizados em 4 níveis de dificuldade:',
    tierDescriptions: {
      starter: 'Fundamentos - o básico que você usa todo dia.',
      basic: 'Essenciais - ainda simples, mas um passo além do básico.',
      epic: 'Intermediário - conceitos que já pedem mais prática.',
      legendary: 'Avançado - para quando quiser ir fundo de verdade.',
    },
    ctaLabel: 'Começar a explorar',
  },
  en: {
    tagline: 'A visual study library for people who learn programming by visual association.',
    introHeading: 'What it is',
    intro:
      "Arsenal Dev started from a simple idea: what if learning TypeScript, JavaScript, React, Tailwind CSS, and unit testing felt like browsing a game's item wiki? Every programming concept becomes an icon, grouped by category and difficulty.",
    howToUseHeading: 'How to use it',
    howToUseSteps: [
      'Hover over an icon for a quick preview: attributes, what it is, and a code example.',
      'Click the icon to open the full detail page, with everything in one place.',
      'Use the search bar at the top to find a concept by name or tag.',
      'Browse the sidebar: pick a language, then the category you want to study.',
      'Switch language (PT-BR/EN/ES) and theme (light/dark) anytime from the sidebar.',
    ],
    stackHeading: 'Tech stack',
    stackItems: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'react-router-dom',
      'lucide-react',
      'prism-react-renderer',
      'Vitest',
      'Testing Library',
    ],
    tiersHeading: 'Tiers',
    tiersIntro: 'Concepts are organized into 4 difficulty levels:',
    tierDescriptions: {
      starter: 'Fundamentals - the basics you use every day.',
      basic: 'Essentials - still simple, one step beyond the basics.',
      epic: 'Intermediate - concepts that call for more practice.',
      legendary: 'Advanced - for when you want to go deep.',
    },
    ctaLabel: 'Start exploring',
  },
  es: {
    tagline: 'Una biblioteca visual de estudio para quienes aprenden programación por asociación visual.',
    introHeading: 'Qué es',
    intro:
      'Arsenal Dev nació de una idea simple: ¿y si aprender TypeScript, JavaScript, React, Tailwind CSS y pruebas unitarias se pareciera a explorar la página de objetos de un juego? Cada concepto de programación se convierte en un ícono, agrupado por categoría y nivel de dificultad.',
    howToUseHeading: 'Cómo usarlo',
    howToUseSteps: [
      'Pasa el mouse sobre un ícono para ver un preview rápido: atributos, qué es, y un ejemplo de código.',
      'Haz clic en el ícono para abrir la página de detalle completa, con todo en un solo lugar.',
      'Usa la búsqueda en la parte superior para encontrar un concepto por nombre o etiqueta.',
      'Navega por la barra lateral: elige el lenguaje y luego la categoría que quieras estudiar.',
      'Cambia el idioma (PT-BR/EN/ES) y el tema (claro/oscuro) en cualquier momento, desde la barra lateral.',
    ],
    stackHeading: 'Tecnologías',
    stackItems: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'react-router-dom',
      'lucide-react',
      'prism-react-renderer',
      'Vitest',
      'Testing Library',
    ],
    tiersHeading: 'Tiers',
    tiersIntro: 'Los conceptos están organizados en 4 niveles de dificultad:',
    tierDescriptions: {
      starter: 'Fundamentos - lo básico que usas todos los días.',
      basic: 'Esenciales - todavía simple, un paso más allá de lo básico.',
      epic: 'Intermedio - conceptos que ya requieren más práctica.',
      legendary: 'Avanzado - para cuando quieras profundizar de verdad.',
    },
    ctaLabel: 'Empezar a explorar',
  },
}
