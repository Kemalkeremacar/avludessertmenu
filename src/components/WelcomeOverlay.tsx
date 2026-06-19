import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import type { MenuCategory } from "../data/menu-types";
import { useLanguage } from "../i18n/LanguageContext";
import { pickLocalized } from "../i18n/types";
import { tUi } from "../i18n/translations";
import CategoryIcon from "./CategoryIcon";
import DiscountPromoBanner from "./DiscountPromoBanner";

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
    const scrollY = window.scrollY;
    const { style } = document.body;
    const previous = {
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      overflow: style.overflow,
    };

    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.overflow = "hidden";

    return () => {
      style.position = previous.position;
      style.top = previous.top;
      style.left = previous.left;
      style.right = previous.right;
      style.overflow = previous.overflow;
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 touch-pan-y animate-fade-in overflow-x-hidden overflow-y-auto overscroll-y-contain bg-espresso">
      <div className="relative min-h-[100dvh]">
        <div
          className="pointer-events-none absolute inset-0 min-h-full bg-espresso"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 min-h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/courtyard.webp')" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 min-h-full bg-gradient-to-b from-espresso/95 via-espresso/90 to-espresso/95 md:from-espresso/90 md:via-espresso/85 md:to-espresso/90"
          aria-hidden="true"
        />

        <div className="relative flex min-h-[100dvh] w-full justify-center px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1.5rem,env(safe-area-inset-top))] sm:px-6 md:p-8">
        <div className="flex w-full max-w-md flex-col md:my-auto md:max-w-3xl md:rounded-3xl md:border md:border-cream/15 md:bg-espresso/50 md:p-8 md:shadow-2xl md:backdrop-blur-md lg:max-w-4xl lg:p-10">
          <div className="text-center">
            <Ornament />
            <h1 className="type-welcome-title mt-3 sm:mt-4">{cafeName}</h1>
            <p className="type-body mx-auto mt-2 max-w-xs text-cream/75 md:max-w-md">
              {tUi("welcomeSubtitle", lang)}
            </p>
            <div className="mt-3 sm:mt-4">
              <Ornament />
            </div>

            <DiscountPromoBanner />
          </div>

          <div className="mt-4 sm:mt-5">
            <div className="welcome-category-grid grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
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

          <div className="pt-3 text-center sm:pt-4 md:pt-5">
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
    </div>
  );
}
