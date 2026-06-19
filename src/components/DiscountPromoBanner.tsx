import { Sparkles, Tag } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { tUi } from "../i18n/translations";

export default function DiscountPromoBanner() {
  const { lang } = useLanguage();

  return (
    <div
      className="relative mt-4 animate-scale-in overflow-hidden rounded-2xl border-2 border-gold-light/80 bg-gradient-to-br from-gold via-gold-light to-[#e8c98a] px-4 py-5 shadow-[0_12px_40px_rgba(176,141,87,0.45)] animate-promo-glow sm:mt-5 sm:rounded-3xl sm:px-6 sm:py-7"
      role="note"
      aria-label={`%15 ${tUi("discountHeadline", lang)} — ${tUi("discountApplied", lang)}`}
    >
      <div
        className="pointer-events-none absolute inset-0 animate-promo-shimmer bg-gradient-to-r from-transparent via-cream/35 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-8 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-cream/20 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-8 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-espresso/10 blur-2xl"
        aria-hidden="true"
      />

      <Sparkles
        className="pointer-events-none absolute left-3 top-3 h-5 w-5 animate-promo-float text-espresso/25"
        aria-hidden="true"
      />
      <Sparkles
        className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 animate-promo-float text-espresso/25 [animation-delay:600ms]"
        aria-hidden="true"
      />
      <Tag
        className="pointer-events-none absolute right-4 top-4 h-4 w-4 rotate-12 text-espresso/20 sm:h-5 sm:w-5"
        aria-hidden="true"
      />

      <div className="relative text-center">
        <p className="type-label type-label-wide inline-flex items-center justify-center gap-1.5 rounded-full border border-espresso/10 bg-cream/25 px-3 py-1 text-espresso/75 backdrop-blur-sm">
          <Sparkles className="h-3 w-3" aria-hidden="true" />
          {tUi("discountBadge", lang)}
        </p>

        <div className="mt-3 flex items-center justify-center gap-1 sm:mt-4">
          <span
            className="font-display font-bold leading-none tracking-tighter text-espresso drop-shadow-[0_2px_0_rgba(255,255,255,0.35)]"
            style={{ fontSize: "clamp(4rem, 18vw, 6.5rem)" }}
          >
            %15
          </span>
        </div>

        <p
          className="font-display font-semibold uppercase tracking-[0.28em] text-espresso sm:text-lg"
          style={{ fontSize: "clamp(1.125rem, 4.5vw, 1.5rem)" }}
        >
          {tUi("discountHeadline", lang)}
        </p>

        <p className="mt-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-espresso/85 sm:text-base">
          {tUi("discountApplied", lang)}
        </p>
      </div>
    </div>
  );
}
