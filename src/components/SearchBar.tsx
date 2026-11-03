import { Search } from "lucide-react";
import { useLocale } from "../hooks/useLocale";

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const { t } = useLocale();

  return (
    <div className="relative w-[400px] max-w-sm ">
      <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 light:text-slate-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t.searchPlaceholder}
        className="w-full rounded-full border border-slate-700 light:border-slate-300 bg-surface-sunken py-1.5 pl-8 pr-3 text-sm text-slate-200 light:text-slate-800 placeholder:text-slate-500 light:placeholder:text-slate-400 focus:border-amber-400 focus:outline-none"
      />
    </div>
  );
}
