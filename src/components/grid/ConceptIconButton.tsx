import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHoverIntent } from '../../hooks/useHoverIntent'
import { useLocale } from '../../hooks/useLocale'
import { getItemContent } from '../../i18n/content'
import { tierStyles } from '../../lib/tier-styles'
import { cn } from '../../lib/utils'
import type { StudyItem } from '../../types/study-item'
import { ConceptTooltip } from '../tooltip/ConceptTooltip'
import { TooltipPortal } from '../tooltip/TooltipPortal'
import { ConceptIcon } from './ConceptIcon'

export function ConceptIconButton({ item }: { item: StudyItem }) {
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null)
  const { isHovering, open, close, openImmediately, closeImmediately, cancelTimers } = useHoverIntent()
  const { locale } = useLocale()

  const isOpen = isHovering
  const style = tierStyles[item.tier]
  const content = getItemContent(item.id, locale)
  const activeText = isOpen ? 'text-amber-200 light:text-amber-700' : undefined

  return (
    <>
      <Link
        ref={setAnchorEl}
        to={`/item/${item.id}`}
        title={content.name}
        onMouseEnter={open}
        onMouseLeave={close}
        onFocus={openImmediately}
        onBlur={closeImmediately}
        className={cn(
          'flex w-20 flex-col items-center gap-1 rounded-sm p-1 transition-transform duration-150',
          'hover:scale-105 focus-visible:outline-none focus-visible:ring-2',
          style.ring,
        )}
      >
        <span
          className={cn(
            'flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border-2 bg-surface-raised transition-colors',
            activeText ?? 'text-slate-300 light:text-slate-600',
            style.border,
            isOpen && style.glow,
          )}
        >
          <ConceptIcon name={item.icon} className="h-6 w-6" />
        </span>
        <span
          className={cn(
            'line-clamp-2 text-center text-[10px] leading-tight',
            activeText ?? 'text-slate-400 light:text-slate-500',
          )}
        >
          {content.name}
        </span>
      </Link>

      <TooltipPortal anchorEl={anchorEl} isOpen={isOpen} onMouseEnter={cancelTimers} onMouseLeave={close}>
        <ConceptTooltip item={item} />
      </TooltipPortal>
    </>
  )
}
