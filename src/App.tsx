import { useCallback, useEffect, useMemo, useState } from "react";
import CafeHeader from "./components/CafeHeader";
import SearchBar from "./components/SearchBar";
import LanguageToggle from "./components/LanguageToggle";
import CategoryTabs from "./components/CategoryTabs";
import ProductList from "./components/ProductList";
import EmptyState from "./components/EmptyState";
import WelcomeOverlay from "./components/WelcomeOverlay";
import { getCategories, getCafeInfo, getMenuItems } from "./api/menu";
import {
  cafeInfo as staticCafeInfo,
  categories as staticCategories,
  menuItems as staticMenuItems,
} from "./data/menu-data";
import { useLanguage } from "./i18n/LanguageContext";
import { tUi } from "./i18n/translations";
import type { CafeInfo, MenuCategory, MenuItem } from "./data/menu-types";

const BACKGROUND_IMAGE = "/courtyard.webp";

function isValidCategory(id: string, categories: MenuCategory[]): boolean {
  return id === "all" || categories.some((c) => c.id === id);
}

function readCategoryFromUrl(categories: MenuCategory[]): string {
  const cat = new URLSearchParams(window.location.search).get("cat");
  if (cat && isValidCategory(cat, categories)) return cat;
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
  const [cafeInfo, setCafeInfo] = useState<CafeInfo>(staticCafeInfo);
  const [categories, setCategories] = useState<MenuCategory[]>(staticCategories);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(staticMenuItems);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(() =>
    readCategoryFromUrl(staticCategories)
  );
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setIsLoading(true);
        const [loadedCategories, loadedCafeInfo, loadedItems] = await Promise.all(
          [getCategories(), getCafeInfo(), getMenuItems()]
        );
        if (cancelled) return;

        setCategories(loadedCategories);
        setCafeInfo(loadedCafeInfo);
        setMenuItems(loadedItems);
        setActiveCategory((current) =>
          isValidCategory(current, loadedCategories) ? current : "all"
        );
        setError(null);
      } catch (err) {
        if (cancelled) return;
        console.error("Failed to load menu data:", err);
        setError("Menü verileri yüklenemedi. Statik veriler gösteriliyor.");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleCategoryChange = useCallback(
    (id: string) => {
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
    },
    []
  );

  const handleWelcomeSelect = (id: string) => {
    setShowWelcome(false);
    handleCategoryChange(id);
  };

  useEffect(() => {
    const onPopState = () => {
      setActiveCategory(readCategoryFromUrl(categories));
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [categories]);

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
  }, [menuItems, categories, normalizedQuery, isSearching, activeCategory]);

  return (
    <div className="relative min-h-[100dvh] bg-cream">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${BACKGROUND_IMAGE}')` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 hidden bg-espresso/10 md:block"
        aria-hidden="true"
      />

      {showWelcome && (
        <WelcomeOverlay
          cafeName={cafeInfo.name}
          categories={categories}
          onSelect={handleWelcomeSelect}
        />
      )}

      <div
        className={[
          "relative z-10 mx-auto w-full max-w-lg px-4 sm:max-w-xl sm:px-6 md:max-w-2xl lg:max-w-6xl lg:px-8",
          showWelcome && "invisible pointer-events-none",
        ]
          .filter(Boolean)
          .join(" ")}
        {...(showWelcome ? { "aria-hidden": "true" as const } : {})}
      >
        <CafeHeader cafe={cafeInfo} />

        <main className="pb-[max(5rem,env(safe-area-inset-bottom))] lg:grid lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-8">
          <aside className="hidden lg:block lg:min-h-0">
            <div className="sticky top-4 z-30 max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl border border-gold/15 bg-parchment/95 p-3 shadow-soft backdrop-blur-sm">
              <p className="type-caption mb-2 px-2 text-warmgray/80">
                {tUi("categories", lang)}
              </p>
              <CategoryTabs
                categories={categories}
                active={activeCategory}
                onChange={handleCategoryChange}
                disabled={isSearching}
                layout="sidebar"
              />
            </div>
          </aside>

          <div className="min-w-0">
            <div className="safe-top sticky top-0 z-20 rounded-2xl border border-gold/10 bg-parchment/95 p-3 shadow-soft backdrop-blur-sm sm:p-4 lg:top-4 lg:rounded-3xl">
              <div className="flex items-stretch gap-2 sm:gap-3">
                <div className="min-w-0 flex-1">
                  <SearchBar value={query} onChange={setQuery} />
                </div>
                <LanguageToggle />
              </div>

              <div className="mt-3 lg:hidden">
                <CategoryTabs
                  categories={categories}
                  active={activeCategory}
                  onChange={handleCategoryChange}
                  disabled={isSearching}
                  layout="auto"
                />
                {isSearching && (
                  <p className="type-caption mt-2 text-warmgray/80">
                    {tUi("searchingAllCategories", lang)}
                  </p>
                )}
              </div>
            </div>

            {isLoading && (
              <div className="mt-6 flex items-center justify-center lg:mt-8">
                <p className="type-body text-espresso/60">Yükleniyor...</p>
              </div>
            )}

            {!isLoading && error && (
              <div className="mt-4 rounded-lg bg-red-100 px-4 py-3 text-sm text-red-700 sm:mt-5 lg:mt-6">
                {error}
              </div>
            )}

            {!isLoading && (
              <section
                className="mt-4 sm:mt-5 lg:mt-6 lg:rounded-3xl lg:border lg:border-gold/15 lg:bg-parchment/92 lg:p-5 lg:shadow-soft lg:backdrop-blur-sm xl:p-6"
                aria-live="polite"
              >
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
            )}
          </div>
        </main>

        <footer className="safe-bottom mt-6 lg:mt-8">
          <div className="rounded-2xl border border-gold/10 bg-parchment/95 py-7 text-center shadow-soft backdrop-blur-sm lg:py-8">
            <div className="menu-divider-short mb-4" />
            <p className="type-section-title text-lg">{cafeInfo.name}</p>
            <p className="type-label type-label-wide mt-2 text-espresso/55">
              {tUi("footer", lang)}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
