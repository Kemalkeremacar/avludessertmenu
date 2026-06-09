import { Search, X } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative">
      <label htmlFor="menu-search" className="sr-only">
        Search the menu
      </label>
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-mocha/60"
        aria-hidden="true"
      />
      <input
        id="menu-search"
        type="search"
        inputMode="search"
        placeholder="Search coffee, desserts…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-espresso/10 bg-white py-3.5 pl-12 pr-12 text-base text-espresso shadow-card outline-none transition placeholder:text-mocha/50 focus:border-latte focus:ring-2 focus:ring-latte/40"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-mocha/60 transition hover:bg-cream hover:text-espresso"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
