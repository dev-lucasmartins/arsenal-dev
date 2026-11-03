import { Route, Routes } from "react-router-dom";
import { ConceptGrid } from "./components/grid/ConceptGrid";
import { SearchBar } from "./components/SearchBar";
import { Sidebar } from "./components/sidebar/Sidebar";
import { allItems } from "./data";
import { useCategoryNavigation } from "./hooks/useCategoryNavigation";
import { useLocale } from "./hooks/useLocale";
import { useSearch } from "./hooks/useSearch";
import { ItemDetailPage } from "./pages/ItemDetailPage";

export default function App() {
  const {
    activeLanguage,
    activeCategory,
    highlightNonce,
    selectLanguage,
    selectCategory,
  } = useCategoryNavigation("typescript");
  const { locale, t } = useLocale();
  const { query, setQuery, matchedIds } = useSearch(allItems, locale);

  return (
    <div className="flex h-screen flex-col bg-surface text-slate-200 light:text-slate-800">
      <header className="z-10 flex items-center justify-between gap-4 border-b border-slate-700/60 light:border-slate-200 bg-surface-sunken px-6 py-3 shadow-sm">
        <div className="flex items-center gap-4">
          <img
            src="/images/arsenaldev-icon.png"
            alt="Arsenal Dev"
            className="h-20 w-20 shrink-0 object-contain"
          />
          <div>
            <h1 className="text-lg font-bold tracking-wide text-amber-300 light:text-[#16576b]">
              Arsenal Dev
            </h1>
            <p className="text-xs text-slate-400 light:text-slate-500">
              {t.appSubtitle}
            </p>
          </div>
        </div>
        <div className="flex min-w-0 items-center gap-3">
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          activeLanguage={activeLanguage}
          activeCategory={activeCategory}
          onSelectLanguage={selectLanguage}
          onSelectCategory={selectCategory}
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
        </Routes>
      </div>
    </div>
  );
}
