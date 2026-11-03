import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLocale } from '../hooks/useLocale'
import { cn } from '../lib/utils'
import { LOCALES } from '../types/locale'

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const current = LOCALES.find((item) => item.id === locale) ?? LOCALES[0]

  useEffect(() => {
    if (!isOpen) return
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex w-full items-center gap-2 rounded-lg border border-slate-700 light:border-slate-300 bg-surface-sunken px-2.5 py-2 text-sm font-medium text-slate-200 light:text-slate-700 transition-colors hover:border-accent"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="flex-1 text-left">{current.label}</span>
        <ChevronDown size={14} className={cn('transition-transform', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute bottom-full left-0 z-20 mb-1.5 w-full overflow-hidden rounded-lg border border-slate-700 light:border-slate-200 bg-surface-card shadow-lg"
        >
          {LOCALES.map(({ id, label, flag }) => (
            <li key={id}>
              <button
                type="button"
                role="option"
                aria-selected={id === locale}
                onClick={() => {
                  setLocale(id)
                  setIsOpen(false)
                }}
                className={cn(
                  'flex w-full items-center gap-2 px-2.5 py-2 text-left text-sm transition-colors',
                  id === locale
                    ? 'bg-accent/15 font-semibold text-accent-text'
                    : 'text-slate-300 light:text-slate-600 hover:bg-surface-sunken',
                )}
              >
                <span className="text-base leading-none">{flag}</span>
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
