import { describe, expect, it } from 'vitest'
import { contentByLocale } from '../i18n/content'
import { categoryLabels } from '../i18n/category-labels'
import { LOCALES } from '../types/locale'
import { allItems, getCategoriesByLanguage, getItemsByLanguage, groupByTierAndCategory, itemsById } from './index'

describe('allItems', () => {
  it('has no duplicate ids', () => {
    const ids = allItems.map((item) => item.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('is fully indexed in itemsById', () => {
    expect(itemsById.size).toBe(allItems.length)
    for (const item of allItems) {
      expect(itemsById.get(item.id)).toBe(item)
    }
  })

  it('only references buildsInto ids that actually exist', () => {
    const danglingRefs: string[] = []
    for (const item of allItems) {
      for (const relatedId of item.buildsInto ?? []) {
        if (!itemsById.has(relatedId)) danglingRefs.push(`${item.id} -> ${relatedId}`)
      }
    }
    expect(danglingRefs).toEqual([])
  })

  // Regressão: isso já aconteceu nesta base de código - o TypeScript não valida que o
  // `id` de um item em data/ tem uma entrada correspondente nos 3 arquivos de locale,
  // já que content é um `Record<string, StudyItemContent>` (chave livre).
  it.each(LOCALES.map((l) => l.id))('has i18n content for every item in "%s"', (locale) => {
    const missing = allItems.filter((item) => contentByLocale[locale][item.id] === undefined).map((item) => item.id)
    expect(missing).toEqual([])
  })

  it('has the same number of stats across all three locales, per item', () => {
    const mismatched: string[] = []
    for (const item of allItems) {
      const counts = LOCALES.map((l) => contentByLocale[l.id][item.id]?.stats.length)
      if (new Set(counts).size > 1) mismatched.push(item.id)
    }
    expect(mismatched).toEqual([])
  })

  it('only uses categories that have a translation entry', () => {
    const untranslated = [...new Set(allItems.map((item) => item.category))].filter(
      (category) => !(category in categoryLabels),
    )
    expect(untranslated).toEqual([])
  })
})

describe('getItemsByLanguage', () => {
  it('returns only items for the requested language', () => {
    const items = getItemsByLanguage('tailwind')
    expect(items.length).toBeGreaterThan(0)
    expect(items.every((item) => item.language === 'tailwind')).toBe(true)
  })
})

describe('getCategoriesByLanguage', () => {
  it('returns each category once, in first-appearance order', () => {
    const categories = getCategoriesByLanguage('react')
    expect(new Set(categories).size).toBe(categories.length)
    expect(categories.length).toBeGreaterThan(0)
  })
})

describe('groupByTierAndCategory', () => {
  it('only includes tiers that actually have items', () => {
    const groups = groupByTierAndCategory('typescript')
    for (const group of groups) {
      expect(group.categories.length).toBeGreaterThan(0)
      for (const category of group.categories) {
        expect(category.items.length).toBeGreaterThan(0)
      }
    }
  })

  it('places every item from a language into exactly one tier/category bucket', () => {
    const items = getItemsByLanguage('javascript')
    const groups = groupByTierAndCategory('javascript')
    const bucketed = groups.flatMap((g) => g.categories.flatMap((c) => c.items))
    expect(bucketed.length).toBe(items.length)
  })
})
