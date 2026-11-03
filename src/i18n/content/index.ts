import type { Locale } from '../../types/locale'
import type { StudyItemContent } from '../../types/study-item'
import { enContent } from './en'
import { esContent } from './es'
import { ptBRContent } from './pt-BR'

export const contentByLocale: Record<Locale, Record<string, StudyItemContent>> = {
  'pt-BR': ptBRContent,
  en: enContent,
  es: esContent,
}

export function getItemContent(itemId: string, locale: Locale): StudyItemContent {
  return contentByLocale[locale][itemId]
}
