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
        className="w-full rounded-xl border border-espresso/[0.06] bg-white/80 py-3.5 pl-11 pr-11 text-base text-espresso shadow-soft outline-none transition-all duration-200 placeholder:text-warmgray/45 focus:border-gold/25 focus:shadow-glow sm:py-3.5 sm:text-[0.95rem]"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label={tUi("clearSearch", lang)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-warmgray/50 transition hover:bg-parchment hover:text-espresso"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
