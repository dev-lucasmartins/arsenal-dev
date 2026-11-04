import { ChevronDown, ChevronRight, FileText, Info, X } from "lucide-react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getCategoriesByLanguage } from "../../data";
import { useLocale } from "../../hooks/useLocale";
import { translateCategory } from "../../i18n/category-labels";
import { cn } from "../../lib/utils";
import { LANGUAGES, type Language } from "../../types/study-item";
import { LocaleSwitcher } from "../LocaleSwitcher";

export function Sidebar({
  activeLanguage,
  activeCategory,
  onSelectLanguage,
  onSelectCategory,
  isOpen,
  onClose,
}: {
  activeLanguage: Language;
  activeCategory: string | null;
  onSelectLanguage: (language: Language) => void;
  onSelectCategory: (language: Language, category: string) => void;
  isOpen: boolean;
  onClose: () => void;
}) {
  const { locale, t } = useLocale();

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  function selectLanguage(lang: Language) {
    onSelectLanguage(lang);
    onClose();
  }

  function selectCategory(lang: Language, category: string) {
    onSelectCategory(lang, category);
    onClose();
  }

  return (
    <>
      {isOpen && (
        <div
          aria-hidden
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <nav
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 -translate-x-full flex-col bg-surface px-3 py-4 transition-transform duration-200",
          "lg:static lg:z-auto lg:w-64 lg:shrink-0 lg:translate-x-0 lg:border-r lg:border-slate-700/60 lg:light:border-slate-200",
          isOpen && "translate-x-0",
        )}
      >
        <div className="flex h-full min-h-0 flex-col rounded-2xl bg-surface-raised shadow-sm">
          <div className="flex items-center justify-between px-3 pt-3 lg:hidden">
            <span className="text-sm font-bold uppercase tracking-wider text-slate-400 light:text-slate-500">
              {t.aboutNavLabel}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.closeMenu}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 light:text-slate-600 hover:bg-surface-sunken hover:text-accent-text"
            >
              <X size={16} />
            </button>
          </div>

          <div className="min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain p-3">
            <NavLink
              to="/about"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "mb-2 flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-accent/15 text-accent-text"
                    : "text-slate-200 light:text-slate-700 hover:text-accent-text",
                )
              }
            >
              <Info size={15} />
              {t.aboutNavLabel}
            </NavLink>
            <div className="mb-2 border-b border-slate-700/60 light:border-slate-200" />

            {LANGUAGES.map((lang) => {
              const isLanguageActive = lang.id === activeLanguage;
              const categories = getCategoriesByLanguage(lang.id);

              return (
                <div key={lang.id}>
                  <button
                    type="button"
                    onClick={() => selectLanguage(lang.id)}
                    aria-current={isLanguageActive ? "true" : undefined}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-sm font-semibold transition-colors",
                      isLanguageActive
                        ? "text-accent-text"
                        : "text-slate-200 light:text-slate-700 hover:text-accent-text",
                    )}
                  >
                    {lang.label}
                    {isLanguageActive ? (
                      <ChevronDown size={15} />
                    ) : (
                      <ChevronRight size={15} />
                    )}
                  </button>

                  {isLanguageActive && (
                    <ul className="relative my-1 space-y-0.5 pl-3">
                      <div
                        aria-hidden
                        className="absolute bottom-2 left-1 top-1 w-px bg-slate-700/60 light:bg-slate-200"
                      />
                      {categories.map((category) => {
                        const isCategoryActive = category === activeCategory;
                        return (
                          <li key={category}>
                            <button
                              type="button"
                              onClick={() => selectCategory(lang.id, category)}
                              aria-current={
                                isCategoryActive ? "true" : undefined
                              }
                              className={cn(
                                "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-all",
                                isCategoryActive
                                  ? "bg-surface-card border border-slate-600/50 light:border-slate-200 text-accent-text shadow-sm"
                                  : "border border-transparent text-slate-300 light:text-slate-600 hover:bg-surface-sunken hover:text-accent-text",
                              )}
                            >
                              <FileText
                                size={14}
                                className={cn(
                                  "shrink-0",
                                  isCategoryActive
                                    ? "text-accent-text-strong"
                                    : "text-slate-500 light:text-slate-500",
                                )}
                              />
                              <span className="truncate">
                                {translateCategory(category, locale)}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          <div className="border-t border-slate-700/60 light:border-slate-200 p-3">
            <LocaleSwitcher />
          </div>
        </div>
      </nav>
    </>
  );
}
