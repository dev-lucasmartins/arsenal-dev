import type { Language, StudyItem, Tier } from '../types/study-item'
import { javascriptItems } from './javascript'
import { reactItems } from './react'
import { tailwindItems } from './tailwind'
import { typescriptItems } from './typescript'

export const allItems: StudyItem[] = [
  ...typescriptItems,
  ...javascriptItems,
  ...reactItems,
  ...tailwindItems,
]

export const itemsById = new Map(allItems.map((item) => [item.id, item]))

export function getItemsByLanguage(language: Language): StudyItem[] {
  return allItems.filter((item) => item.language === language)
}

export interface CategoryGroup {
  category: string
  items: StudyItem[]
}

export interface TierGroup {
  tier: Tier
  categories: CategoryGroup[]
}

/** Agrupa os itens de uma linguagem por tier e, dentro do tier, por categoria —
 * na ordem em que aparecem nos arquivos de dados. */
export function groupByTierAndCategory(language: Language): TierGroup[] {
  const items = getItemsByLanguage(language)
  const tierOrder: Tier[] = ['starter', 'basic', 'epic', 'legendary']

  return tierOrder
    .map((tier) => {
      const tierItems = items.filter((item) => item.tier === tier)
      const categories: CategoryGroup[] = []

      for (const item of tierItems) {
        const existing = categories.find((c) => c.category === item.category)
        if (existing) {
          existing.items.push(item)
        } else {
          categories.push({ category: item.category, items: [item] })
        }
      }

      return { tier, categories }
    })
    .filter((group) => group.categories.length > 0)
}

export function getCategoriesByLanguage(language: Language): string[] {
  const items = getItemsByLanguage(language)
  const seen: string[] = []
  for (const item of items) {
    if (!seen.includes(item.category)) seen.push(item.category)
  }
  return seen
}
