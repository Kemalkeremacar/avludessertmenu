import { Search, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { tUi } from "../i18n/translations";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  const { lang } = useLanguage();

  return (
    <div className="relative">
      <label htmlFor="menu-search" className="sr-only">
        {tUi("searchLabel", lang)}
      </label>
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-warmgray/50"
        aria-hidden="true"
      />
      <input
        id="menu-search"
        type="search"
        inputMode="search"
        placeholder={tUi("searchPlaceholder", lang)}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="type-input min-h-[48px] w-full rounded-xl border border-gold/15 bg-cream py-3 pl-11 pr-12 shadow-soft outline-none transition-all duration-200 focus:border-gold/30 focus:shadow-glow"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label={tUi("clearSearch", lang)}
          className="touch-target touch-manipulation absolute right-1 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full text-warmgray/50 transition active:bg-parchment active:text-espresso"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
