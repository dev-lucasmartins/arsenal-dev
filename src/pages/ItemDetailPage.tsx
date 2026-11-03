import { ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ConceptIcon } from '../components/grid/ConceptIcon'
import { TierBadge } from '../components/TierBadge'
import { CodeBlock } from '../components/tooltip/CodeBlock'
import { itemsById } from '../data'
import { useLocale } from '../hooks/useLocale'
import { translateCategory } from '../i18n/category-labels'
import { getItemContent } from '../i18n/content'
import { tierStyles } from '../lib/tier-styles'
import { cn } from '../lib/utils'

export function ItemDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { locale, t } = useLocale()
  const item = id ? itemsById.get(id) : undefined

  if (!item) {
    return (
      <main className="flex-1 overflow-y-auto px-6 py-6">
        <BackLink />
        <p className="mt-6 text-slate-400 light:text-slate-500">{t.itemNotFound}</p>
      </main>
    )
  }

  const style = tierStyles[item.tier]
  const content = getItemContent(item.id, locale)

  return (
    <main className="flex-1 overflow-y-auto px-6 py-6">
      <div className="mx-auto max-w-2xl">
        <BackLink />

        <header className="mt-4 flex items-start gap-4 border-b border-slate-700/60 light:border-slate-200 pb-6">
          <span
            className={cn(
              'flex h-20 w-20 shrink-0 items-center justify-center rounded-md border-2 bg-surface-raised',
              style.border,
              style.glow,
            )}
          >
            <ConceptIcon name={item.icon} className="h-10 w-10 text-amber-200 light:text-amber-700" />
          </span>
          <div className="min-w-0">
            <h1 className="text-2xl font-bold text-amber-200 light:text-amber-700">{content.name}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <TierBadge tier={item.tier} />
              <span className="text-xs uppercase tracking-widest text-slate-500 light:text-slate-400">
                {translateCategory(item.category, locale)}
              </span>
            </div>
          </div>
        </header>

        <div className="mt-6 space-y-6 text-sm text-slate-300 light:text-slate-700">
          <Section title={t.sectionPassive}>
            <p className="leading-relaxed">{content.passive}</p>
          </Section>

          <Section title={t.sectionAttributes}>
            <ul className="space-y-1.5">
              {content.stats.map((stat) => (
                <li key={stat} className="flex gap-2">
                  <span className="text-emerald-400 light:text-emerald-600">+</span>
                  <span>{stat}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title={t.sectionDeclaration}>
            <CodeBlock code={item.declaration} />
          </Section>

          <Section title={t.sectionExample}>
            <CodeBlock code={item.example} />
          </Section>

          <Section title={t.sectionWhenToUse}>
            <p className="leading-relaxed">{content.whenToUse}</p>
          </Section>

          {content.avoidWhen && (
            <Section title={t.sectionAvoidWhen}>
              <p className="leading-relaxed text-rose-300/90 light:text-rose-600">{content.avoidWhen}</p>
            </Section>
          )}

          {item.buildsInto && item.buildsInto.length > 0 && (
            <Section title={t.sectionBuildsInto}>
              <div className="flex flex-wrap gap-2">
                {item.buildsInto.map((relatedId) => {
                  const related = itemsById.get(relatedId)
                  if (!related) return null
                  const relatedContent = getItemContent(related.id, locale)
                  const relatedStyle = tierStyles[related.tier]
                  return (
                    <Link
                      key={relatedId}
                      to={`/item/${relatedId}`}
                      className={cn(
                        'flex items-center gap-2 rounded-sm border bg-surface-raised px-2.5 py-1.5 text-[13px] transition-colors hover:border-amber-400',
                        relatedStyle.border,
                      )}
                    >
                      <ConceptIcon name={related.icon} className="h-4 w-4 text-slate-300 light:text-slate-600" />
                      {relatedContent.name}
                    </Link>
                  )
                })}
              </div>
            </Section>
          )}
        </div>
      </div>
    </main>
  )
}

function BackLink() {
  const { t } = useLocale()
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-1.5 text-sm text-slate-400 light:text-slate-500 transition-colors hover:text-amber-300 light:hover:text-amber-700"
    >
      <ArrowLeft size={15} />
      {t.backToGrid}
    </Link>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-amber-400/80 light:text-amber-600">
        {title}
      </h2>
      {children}
    </section>
  )
}
