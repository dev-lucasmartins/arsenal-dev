import { groupByTierAndCategory } from "../../data";
import { useLocale } from "../../hooks/useLocale";
import { LANGUAGES, type Language } from "../../types/study-item";
import { TierSection } from "./TierSection";

function buildTierGroups(language: Language, matchedIds: Set<string> | null) {
  return groupByTierAndCategory(language)
    .map((tierGroup) => ({
      tier: tierGroup.tier,
      categories: tierGroup.categories
        .map((cat) => ({
          category: cat.category,
          items: matchedIds
            ? cat.items.filter((item) => matchedIds.has(item.id))
            : cat.items,
        }))
        .filter((cat) => cat.items.length > 0),
    }))
    .filter((tierGroup) => tierGroup.categories.length > 0);
}

export function ConceptGrid({
  language,
  matchedIds,
  highlightedCategory,
  highlightNonce,
}: {
  language: Language;
  matchedIds: Set<string> | null;
  highlightedCategory: string | null;
  highlightNonce: number | null;
}) {
  const { t } = useLocale();

  if (matchedIds !== null) {
    const languageSections = LANGUAGES.map((lang) => ({
      lang,
      tierGroups: buildTierGroups(lang.id, matchedIds),
    })).filter((section) => section.tierGroups.length > 0);

    return (
      <main className="flex-1 overflow-y-auto overscroll-contain px-4 py-6 sm:px-6">
        <h2 className="mb-4 border-b border-accent/30 pb-2 text-xl font-semibold text-accent-text">
          {t.searchResultsHeading}
        </h2>
        {languageSections.length === 0 ? (
          <p className="py-16 text-center text-slate-500 light:text-slate-500">
            {t.noResults}
          </p>
        ) : (
          languageSections.map(({ lang, tierGroups }) => (
            <section key={lang.id} className="mb-10 last:mb-0">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500">
                {lang.label}
              </h3>
              {tierGroups.map((tierGroup) => (
                <TierSection
                  key={tierGroup.tier}
                  tier={tierGroup.tier}
                  categories={tierGroup.categories}
                  language={lang.id}
                  highlightedCategory={highlightedCategory}
                  highlightNonce={highlightNonce}
                />
              ))}
            </section>
          ))
        )}
      </main>
    );
  }

  const languageLabel =
    LANGUAGES.find((lang) => lang.id === language)?.label ?? language;
  const tierGroups = buildTierGroups(language, null);

  return (
    <main className="flex-1 overflow-y-auto overscroll-contain px-4 py-6 sm:px-6">
      <h2 className="mb-4 border-b border-accent/30 pb-2 text-xl font-semibold text-accent-text">
        {languageLabel}
      </h2>
      {tierGroups.map((tierGroup) => (
        <TierSection
          key={tierGroup.tier}
          tier={tierGroup.tier}
          categories={tierGroup.categories}
          language={language}
          highlightedCategory={highlightedCategory}
          highlightNonce={highlightNonce}
        />
      ))}
    </main>
  );
}
