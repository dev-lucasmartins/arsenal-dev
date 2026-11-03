export type Language = 'typescript' | 'javascript' | 'react' | 'tailwind'

export type Tier = 'starter' | 'basic' | 'epic' | 'legendary'

export interface StudyItemContent {
  name: string
  stats: string[]
  passive: string
  whenToUse: string
  avoidWhen?: string
}

export interface StudyItem {
  id: string
  language: Language
  /** Chave de categoria em pt-BR — traduzida via `src/i18n/category-labels.ts`. */
  category: string
  tier: Tier
  icon: string
  /** Snippets de código — não traduzidos entre idiomas. */
  declaration: string
  example: string
  buildsInto?: string[]
  tags?: string[]
}

export const LANGUAGES: { id: Language; label: string }[] = [
  { id: 'typescript', label: 'TypeScript' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'react', label: 'React' },
  { id: 'tailwind', label: 'Tailwind CSS' },
]
