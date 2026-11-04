import { useEffect, useRef, useState } from 'react'
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

const LONG_PRESS_MS = 500
const TOUCH_ECHO_MS = 500

export function ConceptIconButton({ item }: { item: StudyItem }) {
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null)
  const [isPinned, setIsPinned] = useState(false)
  const { isHovering, open, close, openImmediately, closeImmediately, cancelTimers } = useHoverIntent()
  const { locale } = useLocale()

  const lastTouchAt = useRef(0)
  const isLongPress = useRef(false)
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  // depois de um long-press, o tooltip fica "fixado" (não fecha ao soltar o
  // dedo) até o usuário tocar fora dele - dá tempo de rolar conteúdo longo
  useEffect(() => {
    if (!isPinned) return

    function handleOutsideTouch(event: TouchEvent) {
      const target = event.target as Node
      if (target instanceof Element && target.closest('[data-tooltip-portal]')) return

      setIsPinned(false)
      closeImmediately()
      if (anchorEl?.contains(target)) event.preventDefault()
    }

    document.addEventListener('touchstart', handleOutsideTouch, { passive: false })
    return () => document.removeEventListener('touchstart', handleOutsideTouch)
  }, [isPinned, anchorEl, closeImmediately])

  const isOpen = isHovering
  const style = tierStyles[item.tier]
  const content = getItemContent(item.id, locale)
  const activeText = isOpen ? 'text-accent-text' : undefined

  function isTouchEcho() {
    return Date.now() - lastTouchAt.current < TOUCH_ECHO_MS
  }

  function handleMouseEnter() {
    if (isTouchEcho()) return
    open()
  }

  function handleFocus() {
    if (isTouchEcho()) return
    openImmediately()
  }

  function handleTouchStart() {
    lastTouchAt.current = Date.now()
    isLongPress.current = false
    longPressTimer.current = setTimeout(() => {
      isLongPress.current = true
      openImmediately()
    }, LONG_PRESS_MS)
  }

  function handleTouchMove() {
    clearTimeout(longPressTimer.current)
  }

  function handleTouchEnd(event: React.TouchEvent) {
    clearTimeout(longPressTimer.current)
    if (isLongPress.current) {
      event.preventDefault()
      setIsPinned(true)
      isLongPress.current = false
    }
  }

  function handleTouchCancel() {
    clearTimeout(longPressTimer.current)
    isLongPress.current = false
  }

  function handleContextMenu(event: React.MouseEvent) {
    if (isLongPress.current) event.preventDefault()
  }

  function handleMouseLeave() {
    setIsPinned(false)
    close()
  }

  function handleBlur() {
    setIsPinned(false)
    closeImmediately()
  }

  return (
    <>
      <Link
        ref={setAnchorEl}
        to={`/item/${item.id}`}
        title={content.name}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
        onContextMenu={handleContextMenu}
        className={cn(
          'flex w-20 flex-col items-center gap-1 rounded-sm p-1 transition-transform duration-150 select-none [-webkit-touch-callout:none]',
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
            activeText ?? 'text-slate-400 light:text-slate-600',
          )}
        >
          {content.name}
        </span>
      </Link>

      <TooltipPortal anchorEl={anchorEl} isOpen={isOpen} onMouseEnter={cancelTimers} onMouseLeave={handleMouseLeave}>
        <ConceptTooltip item={item} />
      </TooltipPortal>
    </>
  )
}
