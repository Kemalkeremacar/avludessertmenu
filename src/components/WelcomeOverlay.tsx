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
    <div className="fixed inset-0 z-50 flex animate-fade-in">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/courtyard.webp')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-espresso/85 via-espresso/75 to-espresso/90 md:from-espresso/70 md:via-espresso/55 md:to-espresso/70"
        aria-hidden="true"
      />

      <div className="relative flex h-[100dvh] w-full items-center justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(1.5rem,env(safe-area-inset-top))] sm:px-6 md:p-8">
        <div className="flex w-full max-w-md flex-col overflow-hidden md:max-w-3xl md:rounded-3xl md:border md:border-cream/15 md:bg-espresso/50 md:p-8 md:shadow-2xl md:backdrop-blur-md lg:max-w-4xl lg:p-10">
          <div className="shrink-0 text-center">
            <Ornament />
            <h1 className="type-welcome-title mt-3 sm:mt-4">{cafeName}</h1>
            <p className="type-body mx-auto mt-2 max-w-xs text-cream/75 md:max-w-md">
              {tUi("welcomeSubtitle", lang)}
            </p>
            <div className="mt-3 sm:mt-4">
              <Ornament />
            </div>
          </div>

          <div className="no-scrollbar mt-4 max-h-[calc(100dvh-15.5rem)] overflow-y-auto overscroll-y-contain sm:mt-6 md:max-h-[min(58vh,26rem)]">
            <div className="welcome-category-grid grid grid-cols-2 gap-2.5 pb-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
              {categories.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => onSelect(c.id)}
                  style={{ animationDelay: `${i * 35}ms` }}
                  className="group touch-manipulation animate-fade-in flex min-h-[5.75rem] flex-col items-center justify-center gap-2 rounded-2xl border border-cream/15 bg-cream/[0.07] px-2 py-3 text-center backdrop-blur-md transition-all duration-200 hover:border-gold/40 hover:bg-cream/[0.12] active:scale-[0.98] active:border-gold/50 active:bg-cream/[0.14] sm:min-h-[6.5rem] sm:gap-2.5 sm:px-3 sm:py-4 md:min-h-[7.25rem]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-light sm:h-11 sm:w-11">
                    <CategoryIcon categoryId={c.id} className="h-5 w-5" />
                  </span>
                  <span className="type-ui line-clamp-3 text-[11px] leading-snug text-cream sm:text-xs">
                    {pickLocalized(c.label, lang)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="safe-bottom shrink-0 pt-3 text-center sm:pt-4 md:pt-5">
            <button
              type="button"
              onClick={() => onSelect("all")}
              className="type-ui touch-manipulation mx-auto flex min-h-[48px] w-full max-w-md items-center justify-center gap-2 rounded-full bg-cream px-7 py-3 font-semibold tracking-wide text-espresso shadow-lg transition-all duration-200 hover:bg-gold-light active:scale-[0.98] md:w-auto md:min-w-[14rem]"
            >
              {tUi("viewAll", lang)}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
