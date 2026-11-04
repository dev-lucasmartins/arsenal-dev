import { useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useTooltipPosition } from '../../hooks/useTooltipPosition'

interface TooltipPortalProps {
  anchorEl: HTMLElement | null
  isOpen: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  children: ReactNode
}

export function TooltipPortal({
  anchorEl,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  children,
}: TooltipPortalProps) {
  const tooltipRef = useRef<HTMLDivElement>(null)
  const position = useTooltipPosition(anchorEl, tooltipRef, isOpen)

  if (!isOpen) return null

  return createPortal(
    <div
      ref={tooltipRef}
      data-tooltip-portal=""
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed z-50"
      style={{ top: position.top, left: position.left }}
    >
      {children}
    </div>,
    document.body,
  )
}
