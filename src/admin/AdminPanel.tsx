import { useEffect, useMemo, useState } from "react";
import { useAuth } from "./AuthContext";
import {
  getCategories,
  getMenuItems,
  updateMenuItemPrice,
  updateMenuItemAvailability,
} from "../api/menu";
import type { MenuCategory, MenuItem } from "../data/menu-types";

export default function AdminPanel() {
  const { signOut, isLoading: isAuthLoading } = useAuth();
  const [items, setItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [savingId, setSavingId] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const [cats, loadedItems] = await Promise.all([
        getCategories(),
        getMenuItems(),
      ]);
      setCategories(cats);
      setItems(loadedItems);
    } catch (err) {
      setError("Veriler yüklenirken hata oluştu.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesQuery =
        !q ||
        item.name.tr.toLowerCase().includes(q) ||
        item.name.en.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [items, query, activeCategory]);

  const handlePriceChange = async (id: string, price: string) => {
    setSavingId(id);
    try {
      await updateMenuItemPrice(id, price);
      setItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, price } : item))
      );
    } catch (err) {
      console.error(err);
      setError("Fiyat güncellenirken hata oluştu.");
    } finally {
      setSavingId(null);
    }
  };

  const handleAvailabilityChange = async (
    id: string,
    isAvailable: boolean
  ) => {
    try {
      await updateMenuItemAvailability(id, isAvailable);
      setItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, isAvailable } : item))
      );
    } catch (err) {
      console.error(err);
      setError("Durum güncellenirken hata oluştu.");
    }
  };

  if (isLoading || isAuthLoading) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center bg-cream">
        <p className="type-body text-espresso/60">Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-cream p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="type-section-title text-2xl">Admin Panel</h1>
            <p className="type-body text-espresso/60">
              Ürün fiyatlarını ve durumunu güncelle
            </p>
          </div>
          <button
            onClick={signOut}
            className="rounded-xl border border-gold/20 bg-parchment px-4 py-2 text-sm font-medium text-espresso transition hover:bg-gold/10"
          >
            Çıkış Yap
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-red-100 px-4 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="mb-6 space-y-3 sm:flex sm:items-center sm:gap-4 sm:space-y-0">
          <input
            type="text"
            placeholder="Ürün ara..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-gold/20 bg-parchment px-4 py-2 text-espresso outline-none focus:border-gold sm:max-w-xs"
          />

          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full rounded-xl border border-gold/20 bg-parchment px-4 py-2 text-espresso outline-none focus:border-gold sm:w-auto"
          >
            <option value="all">Tüm kategoriler</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label.tr}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-3xl border border-gold/10 bg-parchment p-4 shadow-soft sm:p-6">
          <div className="mb-3 hidden grid-cols-[1fr_8rem_6rem] gap-4 text-sm font-medium text-espresso/60 sm:grid">
            <span>Ürün</span>
            <span>Fiyat</span>
            <span>Durum</span>
          </div>

          <div className="space-y-3">
            {filteredItems.map((item) => (
              <AdminProductRow
                key={item.id}
                item={item}
                category={categories.find((c) => c.id === item.category)}
                isSaving={savingId === item.id}
                onPriceChange={handlePriceChange}
                onAvailabilityChange={handleAvailabilityChange}
              />
            ))}

            {filteredItems.length === 0 && (
              <p className="py-8 text-center text-espresso/60">
                Ürün bulunamadı.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

type AdminProductRowProps = {
  item: MenuItem;
  category: MenuCategory | undefined;
  isSaving: boolean;
  onPriceChange: (id: string, price: string) => Promise<void>;
  onAvailabilityChange: (id: string, isAvailable: boolean) => Promise<void>;
};

function AdminProductRow({
  item,
  category,
  isSaving,
  onPriceChange,
  onAvailabilityChange,
}: AdminProductRowProps) {
  const [price, setPrice] = useState(item.price);

  return (
    <div className="grid grid-cols-1 gap-3 rounded-xl border border-gold/10 bg-cream p-3 sm:grid-cols-[1fr_8rem_6rem] sm:items-center sm:gap-4">
      <div>
        <p className="font-medium text-espresso">{item.name.tr}</p>
        <p className="text-sm text-espresso/60">
          {category?.label.tr ?? item.category}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full rounded-lg border border-gold/20 bg-parchment px-3 py-2 text-espresso outline-none focus:border-gold"
        />
        <button
          onClick={() => onPriceChange(item.id, price)}
          disabled={isSaving || price === item.price}
          className="rounded-lg bg-espresso px-3 py-2 text-sm font-medium text-cream transition hover:bg-espresso/90 disabled:opacity-50"
        >
          {isSaving ? "..." : "Kaydet"}
        </button>
      </div>

      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          checked={item.isAvailable ?? true}
          onChange={(e) => onAvailabilityChange(item.id, e.target.checked)}
          className="h-4 w-4 rounded border-gold/20 text-espresso"
        />
        <span className="text-sm text-espresso">
          {item.isAvailable ?? true ? "Satışta" : "Tükendi"}
        </span>
      </label>
    </div>
  );
}
