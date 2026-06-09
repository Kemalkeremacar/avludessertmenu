import { useMemo, useState } from "react";
import CafeHeader from "./components/CafeHeader";
import SearchBar from "./components/SearchBar";
import CategoryTabs from "./components/CategoryTabs";
import ProductList from "./components/ProductList";
import EmptyState from "./components/EmptyState";
import { cafeInfo, categories, menuItems } from "./data/menu-data";

export default function App() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      const matchesQuery =
        normalizedQuery === "" ||
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-cream">
      <CafeHeader cafe={cafeInfo} />

      <main className="mx-auto -mt-6 max-w-2xl px-5 pb-16">
        <div className="sticky top-0 z-10 space-y-3 bg-cream/95 py-3 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
          <SearchBar value={query} onChange={setQuery} />
          <CategoryTabs
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <section className="mt-4" aria-live="polite">
          <p className="mb-3 text-xs uppercase tracking-widest text-mocha/60">
            {filteredItems.length}{" "}
            {filteredItems.length === 1 ? "item" : "items"}
          </p>

          {filteredItems.length > 0 ? (
            <ProductList items={filteredItems} />
          ) : (
            <EmptyState query={query.trim()} />
          )}
        </section>
      </main>

      <footer className="pb-8 text-center text-xs text-mocha/50">
        {cafeInfo.name} · Digital Menu
      </footer>
    </div>
  );
}
