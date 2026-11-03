import { useMemo, useState } from 'react'
import { translateCategory } from '../i18n/category-labels'
import { getItemContent } from '../i18n/content'
import type { Locale } from '../types/locale'
import type { StudyItem } from '../types/study-item'

interface UseSearchResult {
  query: string
  setQuery: (value: string) => void
  /** null significa "nenhum filtro ativo" (mostrar tudo) */
  matchedIds: Set<string> | null
}

export function useSearch(items: StudyItem[], locale: Locale): UseSearchResult {
  const [query, setQuery] = useState('')

  const matchedIds = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return null

    const ids = new Set<string>()
    for (const item of items) {
      const haystack = [
        getItemContent(item.id, locale).name,
        translateCategory(item.category, locale),
        ...(item.tags ?? []),
      ]
        .join(' ')
        .toLowerCase()
      if (haystack.includes(q)) ids.add(item.id)
    }
    return ids
  }, [items, query, locale])

  return { query, setQuery, matchedIds }
}
