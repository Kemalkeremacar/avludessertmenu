import { useMemo } from "react";
import type { MenuCategory, MenuItem } from "../data/menu-types";
import { useLanguage } from "../i18n/LanguageContext";
import { pickLocalized } from "../i18n/types";
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
    <div className="animate-fade-in">
      {sections.map((section, sectionIndex) => (
        <section
          key={section.category?.id ?? "results"}
          className={sectionIndex > 0 ? "mt-10" : ""}
        >
          {section.category && activeCategory === "all" && (
            <header className="mb-1 flex items-center gap-4 pt-2">
              <h2 className="font-display text-2xl font-medium tracking-tight text-espresso sm:text-[1.7rem]">
                {pickLocalized(section.category.label, lang)}
              </h2>
              <span
                className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent"
                aria-hidden="true"
              />
            </header>
          )}

          {section.category?.description && (
            <p className="mb-2 text-sm italic text-warmgray/70 sm:text-[0.9rem]">
              {pickLocalized(section.category.description, lang)}
            </p>
          )}

          <div className="divide-y divide-espresso/[0.06]">
            {section.items.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                featured={item.isPopular}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
