import { Moon, Sun } from 'lucide-react'
import { useLocale } from '../hooks/useLocale'
import { useTheme } from '../hooks/useTheme'
import { cn } from '../lib/utils'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLocale()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isDark ? t.toggleToLight : t.toggleToDark}
      aria-label={isDark ? t.toggleToLight : t.toggleToDark}
      className={cn(
        'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors',
        isDark
          ? 'border-slate-600 bg-surface-raised text-accent-text hover:border-accent'
          : 'border-slate-300 bg-white text-amber-500 shadow-sm hover:border-accent',
      )}
    >
      {isDark ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}
