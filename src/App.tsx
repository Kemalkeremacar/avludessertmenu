import { useMemo, useState } from "react";
import CafeHeader from "./components/CafeHeader";
import SearchBar from "./components/SearchBar";
import LanguageToggle from "./components/LanguageToggle";
import CategoryTabs from "./components/CategoryTabs";
import ProductList from "./components/ProductList";
import EmptyState from "./components/EmptyState";
import { cafeInfo, categories, menuItems } from "./data/menu-data";
import { useLanguage } from "./i18n/LanguageContext";
import { tUi } from "./i18n/translations";

export default function App() {
  const { lang } = useLanguage();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      const matchesQuery =
        normalizedQuery === "" ||
        item.name.tr.toLowerCase().includes(normalizedQuery) ||
        item.name.en.toLowerCase().includes(normalizedQuery) ||
        item.description.tr.toLowerCase().includes(normalizedQuery) ||
        item.description.en.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-cream">
      <CafeHeader cafe={cafeInfo} />

      <main className="mx-auto max-w-2xl px-4 pb-24 sm:px-6">
        <div className="sticky top-0 z-10 -mx-4 bg-cream/95 px-4 pb-3 pt-3 backdrop-blur-md supports-[backdrop-filter]:bg-cream/85 sm:-mx-6 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="min-w-0 flex-1">
              <SearchBar value={query} onChange={setQuery} />
            </div>
            <LanguageToggle />
          </div>
          <div className="mt-3">
            <CategoryTabs
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </div>

        <section className="mt-4" aria-live="polite">
          {filteredItems.length > 0 ? (
            <ProductList
              items={filteredItems}
              categories={categories}
              activeCategory={activeCategory}
            />
          ) : (
            <EmptyState query={query.trim()} />
          )}
        </section>
      </main>

      <footer className="border-t border-espresso/[0.04] pb-12 pt-8 text-center">
        <div className="menu-divider-short mb-5" />
        <p className="font-display text-lg font-medium tracking-tight text-espresso/80">
          {cafeInfo.name}
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-warmgray/60">
          {tUi("footer", lang)}
        </p>
      </footer>
    </div>
  );
}
