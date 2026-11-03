import { useContext } from 'react'
import { LocaleContext } from '../context/locale-context'
import { uiText } from '../i18n/ui-text'

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale deve ser usado dentro de LocaleProvider')
  return { ...ctx, t: uiText[ctx.locale] }
}
