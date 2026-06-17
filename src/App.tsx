import { useMemo, useState } from "react";
import CafeHeader from "./components/CafeHeader";
import SearchBar from "./components/SearchBar";
import LanguageToggle from "./components/LanguageToggle";
import CategoryTabs from "./components/CategoryTabs";
import ProductList from "./components/ProductList";
import EmptyState from "./components/EmptyState";
import WelcomeOverlay from "./components/WelcomeOverlay";
import { cafeInfo, categories, menuItems } from "./data/menu-data";
import { useLanguage } from "./i18n/LanguageContext";
import { tUi } from "./i18n/translations";

export default function App() {
  const { lang } = useLanguage();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeSelect = (id: string) => {
    setActiveCategory("all");
    setShowWelcome(false);
    if (id !== "all") {
      window.setTimeout(() => {
        const el = document.getElementById(`cat-${id}`);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
    <div className="relative min-h-screen bg-cream">
      {/* Fixed background image with 0.5 opacity */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/courtyard.png')" }}
        aria-hidden="true"
      />

      {showWelcome && (
        <WelcomeOverlay
          cafeName={cafeInfo.name}
          categories={categories}
          onSelect={handleWelcomeSelect}
        />
      )}

      <div className="relative z-10">
      <CafeHeader cafe={cafeInfo} />

      <main className="relative mx-auto max-w-2xl px-4 pb-24 sm:px-6">
        <div className="sticky top-0 z-10 -mx-4 rounded-b-2xl bg-cream/95 px-4 pb-3 pt-4 shadow-soft backdrop-blur-md supports-[backdrop-filter]:bg-cream/85 sm:-mx-6 sm:px-6">
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

      <footer className="mx-auto mt-6 max-w-2xl px-4 pb-12 sm:px-6">
        <div className="rounded-2xl bg-cream/90 py-7 text-center shadow-soft backdrop-blur-sm">
          <div className="menu-divider-short mb-4" />
          <p className="font-display text-lg font-semibold tracking-tight text-black">
            {cafeInfo.name}
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-black/55">
            {tUi("footer", lang)}
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}
