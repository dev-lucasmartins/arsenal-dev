import { useLocale } from '../hooks/useLocale'
import { cn } from '../lib/utils'
import { tierStyles } from '../lib/tier-styles'
import type { Tier } from '../types/study-item'

export function TierBadge({ tier, className }: { tier: Tier; className?: string }) {
  const style = tierStyles[tier]
  const { t } = useLocale()
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider',
        style.border,
        style.text,
        style.bg,
        className,
      )}
    >
      {t.tierLabels[tier]}
    </span>
  )
}
