import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { itemsById } from "../../data";
import { useLocale } from "../../hooks/useLocale";
import { getItemContent } from "../../i18n/content";
import { tierStyles } from "../../lib/tier-styles";
import { cn } from "../../lib/utils";
import type { StudyItem } from "../../types/study-item";
import { ConceptIcon } from "../grid/ConceptIcon";
import { TierBadge } from "../TierBadge";
import { CodeBlock } from "./CodeBlock";

export function ConceptTooltip({ item }: { item: StudyItem }) {
  const style = tierStyles[item.tier];
  const { locale, t } = useLocale();
  const content = getItemContent(item.id, locale);

  return (
    <div
      className={cn(
        "w-[620px] max-w-[90vw] overflow-hidden rounded-md border bg-surface-card shadow-2xl",
        style.border,
      )}
    >
      <header
        className={cn(
          "flex items-center gap-3 border-b px-3 py-2.5",
          style.border,
          style.bg,
        )}
      >
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border bg-surface-sunken",
            style.border,
            style.text,
          )}
        >
          <ConceptIcon name={item.icon} className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-[15px] font-semibold text-amber-200 light:text-amber-700">
            {content.name}
          </h3>
          <TierBadge tier={item.tier} className="mt-1" />
        </div>
      </header>

      <div className="max-h-[70vh] overflow-y-auto px-3 py-3 text-[13px] text-slate-300 light:text-slate-700">
        <Section title={t.sectionAttributes}>
          <ul className="space-y-1">
            {content.stats.map((stat) => (
              <li key={stat} className="flex gap-1.5">
                <span className="text-emerald-400 light:text-emerald-600">
                  +
                </span>
                <span>{stat}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={t.sectionPassive}>
          <p className="italic text-slate-400 light:text-slate-500">
            {content.passive}
          </p>
        </Section>

        <Section title={t.sectionDeclaration}>
          <CodeBlock code={item.declaration} />
        </Section>

        <Section title={t.sectionExample}>
          <CodeBlock code={item.example} />
        </Section>

        <Section title={t.sectionWhenToUse}>
          <p>{content.whenToUse}</p>
        </Section>

        {content.avoidWhen && (
          <Section title={t.sectionAvoidWhen}>
            <p className="text-rose-300/90 light:text-rose-600">
              {content.avoidWhen}
            </p>
          </Section>
        )}

        {item.buildsInto && item.buildsInto.length > 0 && (
          <Section title={t.sectionBuildsInto}>
            <div className="flex flex-wrap gap-1.5">
              {item.buildsInto.map((id) => {
                const related = itemsById.get(id);
                if (!related) return null;
                return (
                  <Link
                    key={id}
                    to={`/item/${id}`}
                    className="rounded-sm border border-slate-600 light:border-slate-300 px-2 py-0.5 text-[11px] text-slate-300 light:text-slate-600 transition-colors hover:border-amber-400 hover:text-amber-300 light:hover:text-amber-700"
                  >
                    {getItemContent(related.id, locale).name}
                  </Link>
                );
              })}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-3 last:mb-0">
      <h4 className="mb-1 text-[10px] font-bold uppercase tracking-wider text-amber-400/80 light:text-amber-600">
        {title}
      </h4>
      {children}
    </div>
  );
}
