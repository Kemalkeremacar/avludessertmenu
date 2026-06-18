import { useMemo } from "react";
import type { MenuCategory, MenuItem } from "../data/menu-types";
import { useLanguage } from "../i18n/LanguageContext";
import { tItemsCount } from "../i18n/translations";
import { pickLocalized } from "../i18n/types";
import CategoryIcon from "./CategoryIcon";
import ProductCard from "./ProductCard";

type Props = {
  items: MenuItem[];
  categories: MenuCategory[];
  activeCategory: string;
};

export default function ProductList({
  items,
  categories,
  activeCategory,
}: Props) {
  const { lang } = useLanguage();

  const sections = useMemo(() => {
    if (activeCategory !== "all") {
      const category = categories.find((c) => c.id === activeCategory);
      return [{ category, items }];
    }

    return categories
      .map((category) => ({
        category,
        items: items.filter((item) => item.category === category.id),
      }))
      .filter((section) => section.items.length > 0);
  }, [items, categories, activeCategory]);

  return (
    <div className="animate-fade-in space-y-8 lg:space-y-10">
      {sections.map((section, sectionIndex) => {
        if (!section.category) return null;

        const label = pickLocalized(section.category.label, lang);
        const description = section.category.description
          ? pickLocalized(section.category.description, lang)
          : null;

        return (
          <section
            key={section.category.id}
            id={`cat-${section.category.id}`}
            className={sectionIndex > 0 ? "scroll-anchor pt-1" : "scroll-anchor"}
          >
            <div className="overflow-hidden rounded-2xl border border-gold/20 bg-cream/80 shadow-soft lg:border-0 lg:bg-transparent lg:shadow-none">
              <header className="flex items-center gap-3 border-b border-gold/15 bg-cream px-4 py-3 sm:px-5 sm:py-3.5 lg:rounded-2xl lg:border lg:border-gold/15 lg:bg-cream lg:px-5 lg:py-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-parchment text-gold lg:h-9 lg:w-9">
                  <CategoryIcon categoryId={section.category.id} className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                    <h2 className="type-section-title break-words">
                      {label}
                    </h2>
                    <span className="type-caption">
                      {tItemsCount(lang, section.items.length)}
                    </span>
                  </div>
                  {description && (
                    <p className="type-section-desc mt-0.5">
                      {description}
                    </p>
                  )}
                </div>
              </header>

              <ul className="divide-y divide-gold/10 px-2 py-1 sm:px-3 sm:py-2 lg:rounded-2xl lg:border lg:border-gold/15 lg:bg-parchment/80 lg:px-4 lg:py-2">
                {section.items.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}
