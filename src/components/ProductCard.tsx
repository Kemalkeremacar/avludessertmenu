import type { MenuItem } from "../data/menu-types";
import { useLanguage } from "../i18n/LanguageContext";
import { pickLocalized } from "../i18n/types";

type Props = {
  item: MenuItem;
};

export default function ProductCard({ item }: Props) {
  const { lang } = useLanguage();
  const name = pickLocalized(item.name, lang);
  const description = pickLocalized(item.description, lang);

  return (
    <article className="group py-5" aria-label={name}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-medium leading-snug text-espresso sm:text-xl">
          {name}
        </h3>
        <span className="mt-0.5 shrink-0 whitespace-nowrap font-display text-base font-medium tabular-nums text-mocha sm:text-lg">
          {item.price}
        </span>
      </div>

      <p className="mt-1.5 text-[0.925rem] leading-relaxed text-warmgray sm:text-base sm:leading-relaxed">
        {description}
      </p>

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
