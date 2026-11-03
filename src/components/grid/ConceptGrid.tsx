import { groupByTierAndCategory } from '../../data'
import { useLocale } from '../../hooks/useLocale'
import { LANGUAGES, type Language } from '../../types/study-item'
import { TierSection } from './TierSection'

export function ConceptGrid({
  language,
  matchedIds,
  highlightedCategory,
  highlightNonce,
}: {
  language: Language
  matchedIds: Set<string> | null
  highlightedCategory: string | null
  highlightNonce: number | null
}) {
  const { t } = useLocale()
  const languageLabel = LANGUAGES.find((lang) => lang.id === language)?.label ?? language
  const tierGroups = groupByTierAndCategory(language)
    .map((tierGroup) => ({
      tier: tierGroup.tier,
      categories: tierGroup.categories
        .map((cat) => ({
          category: cat.category,
          items: matchedIds ? cat.items.filter((item) => matchedIds.has(item.id)) : cat.items,
        }))
        .filter((cat) => cat.items.length > 0),
    }))
    .filter((tierGroup) => tierGroup.categories.length > 0)

  return (
    <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
      <h2 className="mb-4 border-b border-accent/30 pb-2 text-xl font-semibold text-accent-text">
        {languageLabel}
      </h2>
      {tierGroups.length === 0 ? (
        <p className="py-16 text-center text-slate-500 light:text-slate-500">{t.noResults}</p>
      ) : (
        tierGroups.map((tierGroup) => (
          <TierSection
            key={tierGroup.tier}
            tier={tierGroup.tier}
            categories={tierGroup.categories}
            language={language}
            highlightedCategory={highlightedCategory}
            highlightNonce={highlightNonce}
          />
        ))
      )}
    </main>
  )
}
