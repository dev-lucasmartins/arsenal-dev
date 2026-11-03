export type Locale = 'pt-BR' | 'en' | 'es'

export const LOCALES: { id: Locale; label: string; flag: string }[] = [
  { id: 'pt-BR', label: 'PT-BR', flag: '🇧🇷' },
  { id: 'en', label: 'EN', flag: '🇺🇸' },
  { id: 'es', label: 'ES', flag: '🇪🇸' },
]

export const DEFAULT_LOCALE: Locale = 'pt-BR'
