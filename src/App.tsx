import { Menu } from "lucide-react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ConceptGrid } from "./components/grid/ConceptGrid";
import { SearchBar } from "./components/SearchBar";
import { Sidebar } from "./components/sidebar/Sidebar";
import { allItems } from "./data";
import { useCategoryNavigation } from "./hooks/useCategoryNavigation";
import { useLocale } from "./hooks/useLocale";
import { useSearch } from "./hooks/useSearch";
import { AboutPage } from "./pages/AboutPage";
import { ItemDetailPage } from "./pages/ItemDetailPage";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {
    activeLanguage,
    activeCategory,
    highlightNonce,
    selectLanguage,
    selectCategory,
  } = useCategoryNavigation("typescript");
  const { locale, t } = useLocale();
  const { query, setQuery, matchedIds } = useSearch(allItems, locale);

  function handleSelectLanguage(lang: Parameters<typeof selectLanguage>[0]) {
    setQuery("");
    selectLanguage(lang);
  }

  function handleSelectCategory(...args: Parameters<typeof selectCategory>) {
    setQuery("");
    selectCategory(...args);
  }

  return (
    <div className="flex h-screen flex-col bg-surface text-slate-200 light:text-slate-800">
      <header className="z-10 flex flex-col gap-3 border-b border-slate-700/60 light:border-slate-200 bg-surface-sunken px-4 py-3 shadow-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            aria-label={t.openMenu}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-300 light:text-slate-600 hover:bg-surface-raised hover:text-accent-text lg:hidden"
          >
            <Menu size={20} />
          </button>
          <img
            src={`${import.meta.env.BASE_URL}images/arsenaldev-icon.png`}
            alt="Arsenal Dev"
            className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
          />
          <div className="min-w-0">
            <h1 className="truncate text-base font-bold tracking-wide text-accent-text-strong sm:text-lg">
              Arsenal Dev
            </h1>
            <p className="hidden truncate text-xs text-slate-400 light:text-slate-600 sm:block">
              {t.appSubtitle}
            </p>
          </div>
          <div className="ml-auto lg:hidden">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <SearchBar value={query} onChange={setQuery} />
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          activeLanguage={activeLanguage}
          activeCategory={activeCategory}
          onSelectLanguage={handleSelectLanguage}
          onSelectCategory={handleSelectCategory}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ConceptGrid
                language={activeLanguage}
                matchedIds={matchedIds}
                highlightedCategory={activeCategory}
                highlightNonce={highlightNonce}
              />
            }
          />
          <Route path="/item/:id" element={<ItemDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}
