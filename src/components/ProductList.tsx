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
    <div className="animate-fade-in space-y-8">
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
            <div className="overflow-hidden rounded-2xl border border-gold/20 bg-parchment shadow-soft">
              <header className="flex items-center gap-3 border-b border-gold/15 bg-cream px-4 py-3 sm:px-5 sm:py-3.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-parchment text-gold">
                  <CategoryIcon categoryId={section.category.id} className="h-3.5 w-3.5" />
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

              <ul className="px-3 py-2 sm:px-4 sm:py-3">
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
