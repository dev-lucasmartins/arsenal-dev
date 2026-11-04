import { useMemo, useState } from "react";
import { translateCategory } from "../i18n/category-labels";
import { getItemContent } from "../i18n/content";
import type { Locale } from "../types/locale";
import type { StudyItem } from "../types/study-item";

interface UseSearchResult {
  query: string;
  setQuery: (value: string) => void;

  matchedIds: Set<string> | null;
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function useSearch(items: StudyItem[], locale: Locale): UseSearchResult {
  const [query, setQuery] = useState("");

  const matchedIds = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return null;

    const ids = new Set<string>();
    for (const item of items) {
      const haystack = normalize(
        [
          getItemContent(item.id, locale).name,
          translateCategory(item.category, locale),
          ...(item.tags ?? []),
        ].join(" "),
      );
      if (haystack.includes(q)) ids.add(item.id);
    }
    return ids;
  }, [items, query, locale]);

  return { query, setQuery, matchedIds };
}
