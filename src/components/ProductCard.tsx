import { useState } from "react";
import { Info } from "lucide-react";
import type { MenuItem } from "../data/menu-types";
import { useLanguage } from "../i18n/LanguageContext";
import { pickLocalized } from "../i18n/types";

type Props = {
  item: MenuItem;
};

export default function ProductCard({ item }: Props) {
  const { lang } = useLanguage();
  const [showDesc, setShowDesc] = useState(false);
  const name = pickLocalized(item.name, lang);
  const description = pickLocalized(item.description, lang);
  const hasDesc = description.trim().length > 0;

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-cream to-parchment pl-5 pr-4 py-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-md"
      aria-label={name}
    >
      {/* Gold accent bar */}
      <span
        className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gold-light to-gold"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-1.5">
          <h3 className="font-display text-lg font-semibold leading-snug text-espresso sm:text-xl">
            {name}
          </h3>
          {hasDesc && (
            <button
              type="button"
              onClick={() => setShowDesc((v) => !v)}
              aria-label="Açıklama"
              aria-expanded={showDesc}
              className={[
                "mt-1 shrink-0 rounded-full p-0.5 transition-colors",
                showDesc ? "text-gold" : "text-mocha/40 hover:text-gold",
              ].join(" ")}
            >
              <Info className="h-[15px] w-[15px]" aria-hidden="true" />
            </button>
          )}
        </div>
        <span className="mt-0.5 shrink-0 whitespace-nowrap rounded-full bg-espresso px-3 py-1 font-display text-sm font-bold tabular-nums text-cream shadow-sm sm:text-base">
          {item.price}
        </span>
      </div>

      {hasDesc && showDesc && (
        <div className="mt-3 flex items-start gap-2 rounded-xl border border-gold/20 bg-espresso/95 px-3.5 py-2.5 text-[0.875rem] leading-relaxed text-cream shadow-lg animate-fade-in">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-light" aria-hidden="true" />
          <span>{description}</span>
        </div>
      )}

      {item.image && (
        <div className="mt-4 aspect-[2.4/1] overflow-hidden rounded-xl">
          <img
            src={item.image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
    </article>
  );
}
