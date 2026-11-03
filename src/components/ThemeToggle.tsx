import { Moon, Sun } from 'lucide-react'
import { useLocale } from '../hooks/useLocale'
import { useTheme } from '../hooks/useTheme'
import { cn } from '../lib/utils'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLocale()
  const isDark = theme === 'dark'

  const thumb = (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
      {isDark ? <Moon size={12} className="text-slate-700" /> : <Sun size={12} className="text-amber-500" />}
    </span>
  )

  const text = (
    <span
      className={cn(
        'px-2 text-[10px] font-bold uppercase leading-tight tracking-wider',
        isDark ? 'text-slate-300' : 'text-slate-500',
      )}
    >
      {isDark ? t.darkModeLabel : t.lightModeLabel}
    </span>
  )

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isDark ? t.toggleToLight : t.toggleToDark}
      aria-label={isDark ? t.toggleToLight : t.toggleToDark}
      className={cn(
        'mx-auto flex w-fit items-center justify-between rounded-full p-1 transition-colors',
        isDark ? 'bg-surface-sunken' : 'bg-slate-200',
      )}
    >
      {isDark ? (
        <>
          {text}
          {thumb}
        </>
      ) : (
        <>
          {thumb}
          {text}
        </>
      )}
    </button>
  )
}
