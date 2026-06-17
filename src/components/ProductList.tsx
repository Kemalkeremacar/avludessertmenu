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
          id={section.category ? `cat-${section.category.id}` : undefined}
          className={[
            "scroll-mt-36",
            sectionIndex > 0 ? "mt-10" : "",
          ].join(" ")}
        >
          {section.category && activeCategory === "all" && (
            <header className="mb-3 flex justify-center pt-2">
              <h2 className="inline-flex items-center gap-2.5 rounded-full bg-espresso px-5 py-2 font-display text-lg font-bold tracking-tight text-cream shadow-md sm:text-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-light" aria-hidden="true" />
                {pickLocalized(section.category.label, lang)}
              </h2>
            </header>
          )}

          <div className="flex flex-col gap-2.5">
            {section.items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
