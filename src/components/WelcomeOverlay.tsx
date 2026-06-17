import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import type { MenuCategory } from "../data/menu-types";
import { useLanguage } from "../i18n/LanguageContext";
import { pickLocalized } from "../i18n/types";
import { tUi } from "../i18n/translations";
import CategoryIcon from "./CategoryIcon";

type Props = {
  cafeName: string;
  categories: MenuCategory[];
  onSelect: (id: string) => void;
};

function Ornament() {
  return (
    <svg
      className="mx-auto h-5 w-24 text-gold-light/70"
      viewBox="0 0 96 20"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 10h30M66 10h30M42 10h12" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="36" cy="10" r="2" fill="currentColor" />
      <circle cx="60" cy="10" r="2" fill="currentColor" />
      <circle cx="48" cy="10" r="3" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

export default function WelcomeOverlay({ cafeName, categories, onSelect }: Props) {
  const { lang } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col animate-fade-in">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/courtyard.png')" }}
        aria-hidden="true"
      />
      {/* Dark tint for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-espresso/85 via-espresso/75 to-espresso/90"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative flex h-full flex-col px-5 pb-6 pt-8 sm:px-8">
        {/* Header */}
        <div className="shrink-0 text-center">
          <Ornament />
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-cream drop-shadow-lg sm:text-5xl">
            {cafeName}
          </h1>
          <p className="mx-auto mt-2 max-w-xs text-sm text-cream/70 sm:text-base">
            {tUi("welcomeSubtitle", lang)}
          </p>
          <div className="mt-4">
            <Ornament />
          </div>
        </div>

        {/* Category grid */}
        <div className="no-scrollbar mx-auto mt-6 w-full max-w-md flex-1 overflow-y-auto">
          <div className="flex flex-wrap justify-center gap-3 pb-2">
            {categories.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => onSelect(c.id)}
                style={{ animationDelay: `${i * 35}ms` }}
                className="group flex w-[calc(50%-0.375rem)] animate-fade-in flex-col items-center justify-center gap-2.5 rounded-2xl border border-cream/15 bg-cream/[0.07] px-3 py-5 text-center backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-cream/[0.14] active:scale-95"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold-light transition-colors group-hover:bg-gold/30">
                  <CategoryIcon categoryId={c.id} className="h-5 w-5" />
                </span>
                <span className="text-[0.8rem] font-medium leading-tight text-cream sm:text-sm">
                  {pickLocalized(c.label, lang)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* View all */}
        <div className="shrink-0 pt-4 text-center">
          <button
            type="button"
            onClick={() => onSelect("all")}
            className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3 text-sm font-semibold tracking-wide text-espresso shadow-lg transition-all duration-200 hover:bg-gold-light active:scale-95"
          >
            {tUi("viewAll", lang)}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
