import { ChevronDown, ChevronRight, FileText } from 'lucide-react'
import { getCategoriesByLanguage } from '../../data'
import { useLocale } from '../../hooks/useLocale'
import { translateCategory } from '../../i18n/category-labels'
import { cn } from '../../lib/utils'
import { LANGUAGES, type Language } from '../../types/study-item'
import { LocaleSwitcher } from '../LocaleSwitcher'

export function Sidebar({
  activeLanguage,
  activeCategory,
  onSelectLanguage,
  onSelectCategory,
}: {
  activeLanguage: Language
  activeCategory: string | null
  onSelectLanguage: (language: Language) => void
  onSelectCategory: (language: Language, category: string) => void
}) {
  const { locale } = useLocale()

  return (
    <nav className="flex w-64 shrink-0 flex-col border-r border-slate-700/60 light:border-slate-200 bg-surface px-3 py-4">
      <div className="flex h-full min-h-0 flex-col rounded-2xl bg-surface-raised shadow-sm">
        <div className="min-h-0 flex-1 space-y-1 overflow-y-auto p-3">
          {LANGUAGES.map((lang) => {
            const isLanguageActive = lang.id === activeLanguage
            const categories = getCategoriesByLanguage(lang.id)

            return (
              <div key={lang.id}>
                <button
                  type="button"
                  onClick={() => onSelectLanguage(lang.id)}
                  aria-current={isLanguageActive ? 'true' : undefined}
                  className={cn(
                    'flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-sm font-semibold transition-colors',
                    isLanguageActive
                      ? 'text-amber-200 light:text-amber-700'
                      : 'text-slate-200 light:text-slate-700 hover:text-amber-200 light:hover:text-amber-700',
                  )}
                >
                  {lang.label}
                  {isLanguageActive ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
                </button>

                {isLanguageActive && (
                  <ul className="relative my-1 space-y-0.5 pl-3">
                    <div
                      aria-hidden
                      className="absolute bottom-2 left-1 top-1 w-px bg-slate-700/60 light:bg-slate-200"
                    />
                    {categories.map((category) => {
                      const isCategoryActive = category === activeCategory
                      return (
                        <li key={category}>
                          <button
                            type="button"
                            onClick={() => onSelectCategory(lang.id, category)}
                            aria-current={isCategoryActive ? 'true' : undefined}
                            className={cn(
                              'flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-all',
                              isCategoryActive
                                ? 'bg-surface-card border border-slate-600/50 light:border-slate-200 text-amber-200 light:text-amber-700 shadow-sm'
                                : 'border border-transparent text-slate-300 light:text-slate-600 hover:bg-surface-sunken hover:text-amber-200 light:hover:text-amber-700',
                            )}
                          >
                            <FileText
                              size={14}
                              className={cn(
                                'shrink-0',
                                isCategoryActive
                                  ? 'text-amber-300 light:text-amber-600'
                                  : 'text-slate-500 light:text-slate-400',
                              )}
                            />
                            <span className="truncate">{translateCategory(category, locale)}</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            )
          })}
        </div>

        <div className="border-t border-slate-700/60 light:border-slate-200 p-3">
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  )
}
