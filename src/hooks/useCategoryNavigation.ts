import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { categoryAnchorId } from '../lib/utils'
import type { Language } from '../types/study-item'

interface CategoryHighlight {
  category: string
  nonce: number
}

/** Controla qual linguagem está ativa e, quando a navegação veio de um clique
 * numa linguagem/categoria da sidebar, volta para a grade (se necessário) e rola
 * até a categoria, marcando um "nonce" para disparar o flash de destaque mesmo se
 * for a mesma categoria de novo. */
export function useCategoryNavigation(initialLanguage: Language) {
  const [activeLanguage, setActiveLanguage] = useState<Language>(initialLanguage)
  const [categoryHighlight, setCategoryHighlight] = useState<CategoryHighlight | null>(null)
  const navigate = useNavigate()
  const location = useLocation()

  function selectLanguage(language: Language) {
    if (location.pathname !== '/') navigate('/')
    setActiveLanguage(language)
    setCategoryHighlight(null)
  }

  function selectCategory(language: Language, category: string) {
    if (location.pathname !== '/') navigate('/')
    setActiveLanguage(language)
    setCategoryHighlight({ category, nonce: Date.now() })
  }

  useEffect(() => {
    if (!categoryHighlight || location.pathname !== '/') return
    document
      .getElementById(categoryAnchorId(activeLanguage, categoryHighlight.category))
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [activeLanguage, categoryHighlight, location.pathname])

  return {
    activeLanguage,
    activeCategory: categoryHighlight?.category ?? null,
    highlightNonce: categoryHighlight?.nonce ?? null,
    selectLanguage,
    selectCategory,
  }
}
