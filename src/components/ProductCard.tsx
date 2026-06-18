import { Sparkles } from "lucide-react";
import type { MenuItem } from "../data/menu-types";
import { useLanguage } from "../i18n/LanguageContext";
import { tUi } from "../i18n/translations";
import { pickLocalized } from "../i18n/types";

type Props = {
  item: MenuItem;
};

export default function ProductCard({ item }: Props) {
  const { lang } = useLanguage();
  const name = pickLocalized(item.name, lang);
  const description = pickLocalized(item.description, lang);
  const hasDesc = description.trim().length > 0;
  const hasPrice = item.price.trim().length > 0;
  const unavailable = item.isAvailable === false;
  const isFeatured = item.isPopular === true;

  return (
    <li
      className={[
        "group mb-2 last:mb-0",
        isFeatured
          ? "rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/[0.08] to-parchment/50 p-3.5 sm:p-4"
          : "rounded-xl px-1 py-3 sm:px-2 sm:py-2.5 lg:px-3 lg:py-3",
        unavailable ? "opacity-55 saturate-50" : "",
      ].join(" ")}
    >
      <div className="flex items-baseline gap-2">
        <h3
          className={[
            "type-item-name min-w-0 flex-1",
            isFeatured ? "text-lg sm:text-xl" : "",
          ].join(" ")}
        >
          {name}
        </h3>

        {hasPrice && <span className="menu-leader" aria-hidden="true" />}

        {hasPrice && (
          <span
            className={[
              "shrink-0 whitespace-nowrap",
              isFeatured ? "type-item-price-featured text-lg sm:text-xl" : "type-item-price",
            ].join(" ")}
          >
            {item.price}
          </span>
        )}
      </div>

      {hasDesc && (
        <p className="type-section-desc mt-0.5 leading-snug text-warmgray/85">
          {description}
        </p>
      )}

      {(isFeatured || unavailable) && (
        <div className="mt-1.5 flex flex-wrap items-center gap-2">
          {isFeatured && (
            <span className="type-badge inline-flex items-center gap-1 rounded-full bg-gold/15 px-2 py-0.5 text-gold">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              {tUi("popular", lang)}
            </span>
          )}
          {unavailable && (
            <span className="type-badge rounded-full bg-espresso/8 px-2 py-0.5 text-espresso/55">
              {tUi("unavailable", lang)}
            </span>
          )}
        </div>
      )}

      {item.image && (
        <div className="mt-3 aspect-[2.2/1] overflow-hidden rounded-xl border border-gold/15">
          <img
            src={item.image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}
    </li>
  );
}
