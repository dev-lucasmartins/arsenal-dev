import { useEffect, useState, type ReactNode } from 'react'
import { DEFAULT_LOCALE, type Locale } from '../types/locale'
import { LocaleContext } from './locale-context'

const STORAGE_KEY = 'arsenal-dev:locale'

function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'pt-BR' || stored === 'en' || stored === 'es') return stored
  } catch {
    // localStorage indisponível (modo privado, etc.) — usa o padrão
  }
  return DEFAULT_LOCALE
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(readStoredLocale)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // ignora silenciosamente
    }
  }, [locale])

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}
