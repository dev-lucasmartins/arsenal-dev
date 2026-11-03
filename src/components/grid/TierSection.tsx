import type { CategoryGroup } from "../../data";
import { translateCategory } from "../../i18n/category-labels";
import { useLocale } from "../../hooks/useLocale";
import { categoryAnchorId, cn } from "../../lib/utils";
import { tierStyles } from "../../lib/tier-styles";
import type { Tier } from "../../types/study-item";
import { TierBadge } from "../TierBadge";
import { ConceptIconButton } from "./ConceptIconButton";

export function TierSection({
  tier,
  categories,
  language,
  highlightedCategory,
  highlightNonce,
}: {
  tier: Tier;
  categories: CategoryGroup[];
  language: string;
  highlightedCategory: string | null;
  highlightNonce: number | null;
}) {
  const style = tierStyles[tier];
  const { locale } = useLocale();

  return (
    <section className="mb-8">
      <div
        className={`mb-3 flex items-center gap-2 border-b pb-1.5 ${style.border}`}
      >
        <TierBadge tier={tier} />
      </div>

      {categories.map((group) => {
        const isHighlighted = group.category === highlightedCategory;
        return (
          <div
            // remonta o elemento quando a mesma categoria é selecionada de novo,
            // para o flash de destaque reiniciar mesmo sem mudar de seção
            key={
              isHighlighted
                ? `${group.category}-${highlightNonce}`
                : group.category
            }
            id={categoryAnchorId(language, group.category)}
            className={cn(
              "mb-5 scroll-mt-6 rounded-md last:mb-0",
              isHighlighted && "category-highlight",
            )}
          >
            <h3 className="mb-2 text-[13px] font-medium text-slate-400 light:text-slate-600">
              {translateCategory(group.category, locale)}
            </h3>
            <div className="flex flex-wrap gap-x-2 gap-y-3">
              {group.items.map((item) => (
                <ConceptIconButton key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
