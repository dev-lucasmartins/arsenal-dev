import { useLayoutEffect, useState, type RefObject } from 'react'

interface Position {
  top: number
  left: number
}

const MARGIN = 12

/** Calcula a posição do tooltip ancorado a `anchorEl`, evitando que ele saia da viewport. */
export function useTooltipPosition(
  anchorEl: HTMLElement | null,
  tooltipRef: RefObject<HTMLElement | null>,
  isOpen: boolean,
): Position {
  const [position, setPosition] = useState<Position>({ top: -9999, left: -9999 })

  useLayoutEffect(() => {
    if (!isOpen || !anchorEl || !tooltipRef.current) return

    const anchorRect = anchorEl.getBoundingClientRect()
    const tooltipRect = tooltipRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    let left = anchorRect.right + MARGIN
    if (left + tooltipRect.width > viewportWidth - MARGIN) {
      left = anchorRect.left - tooltipRect.width - MARGIN
    }
    left = Math.max(MARGIN, Math.min(left, viewportWidth - tooltipRect.width - MARGIN))

    let top = anchorRect.top
    if (top + tooltipRect.height > viewportHeight - MARGIN) {
      top = viewportHeight - tooltipRect.height - MARGIN
    }
    top = Math.max(MARGIN, top)

    setPosition({ top, left })
  }, [anchorEl, isOpen, tooltipRef])

  return position
}
