import { useCallback, useEffect, useMemo, useState } from "react";
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

const BACKGROUND_IMAGE = "/courtyard.webp";

function isValidCategory(id: string): boolean {
  return id === "all" || categories.some((c) => c.id === id);
}

function readCategoryFromUrl(): string {
  const cat = new URLSearchParams(window.location.search).get("cat");
  if (cat && isValidCategory(cat)) return cat;
  return "all";
}

function writeCategoryToUrl(category: string) {
  const url = new URL(window.location.href);
  if (category === "all") {
    url.searchParams.delete("cat");
  } else {
    url.searchParams.set("cat", category);
  }
  window.history.replaceState(null, "", url);
}

export default function App() {
  const { lang } = useLanguage();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(readCategoryFromUrl);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleCategoryChange = useCallback((id: string) => {
    setActiveCategory(id);
    writeCategoryToUrl(id);

    if (id !== "all") {
      window.setTimeout(() => {
        document.getElementById(`cat-${id}`)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const handleWelcomeSelect = (id: string) => {
    setShowWelcome(false);
    handleCategoryChange(id);
  };

  useEffect(() => {
    const onPopState = () => {
      setActiveCategory(readCategoryFromUrl());
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const normalizedQuery = query.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const category = categories.find((c) => c.id === item.category);
      const categoryLabelTr = category?.label.tr.toLowerCase() ?? "";
      const categoryLabelEn = category?.label.en.toLowerCase() ?? "";
      const categoryDescTr = category?.description?.tr.toLowerCase() ?? "";
      const categoryDescEn = category?.description?.en.toLowerCase() ?? "";

      const matchesCategory =
        isSearching ||
        activeCategory === "all" ||
        item.category === activeCategory;

      const matchesQuery =
        !isSearching ||
        item.name.tr.toLowerCase().includes(normalizedQuery) ||
        item.name.en.toLowerCase().includes(normalizedQuery) ||
        item.description.tr.toLowerCase().includes(normalizedQuery) ||
        item.description.en.toLowerCase().includes(normalizedQuery) ||
        categoryLabelTr.includes(normalizedQuery) ||
        categoryLabelEn.includes(normalizedQuery) ||
        categoryDescTr.includes(normalizedQuery) ||
        categoryDescEn.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [normalizedQuery, isSearching, activeCategory]);

  return (
    <div className="relative min-h-[100dvh] bg-cream">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BACKGROUND_IMAGE}')` }}
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

        <main className="relative mx-auto max-w-2xl px-4 pb-[max(6rem,env(safe-area-inset-bottom))] sm:px-6">
          <div className="safe-top sticky top-0 z-20 -mx-4 rounded-b-2xl bg-parchment/95 px-4 pb-3 shadow-soft backdrop-blur-sm sm:-mx-6 sm:px-6">
            <div className="flex items-stretch gap-2">
              <div className="min-w-0 flex-1">
                <SearchBar value={query} onChange={setQuery} />
              </div>
              <LanguageToggle />
            </div>
            <div className="mt-3">
              <CategoryTabs
                categories={categories}
                active={activeCategory}
                onChange={handleCategoryChange}
                disabled={isSearching}
              />
              {isSearching && (
                <p className="type-caption mt-2 text-warmgray/80">
                  {tUi("searchingAllCategories", lang)}
                </p>
              )}
            </div>
          </div>

          <section className="mt-5" aria-live="polite">
            {filteredItems.length > 0 ? (
              <ProductList
                items={filteredItems}
                categories={categories}
                activeCategory={isSearching ? "all" : activeCategory}
              />
            ) : (
              <EmptyState query={query.trim()} />
            )}
          </section>
        </main>

        <footer className="safe-bottom mx-auto mt-6 max-w-2xl px-4 sm:px-6">
          <div className="rounded-2xl bg-parchment py-7 text-center shadow-soft">
            <div className="menu-divider-short mb-4" />
            <p className="type-section-title text-lg">
              {cafeInfo.name}
            </p>
            <p className="type-label type-label-wide mt-2 text-espresso/55">
              {tUi("footer", lang)}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
