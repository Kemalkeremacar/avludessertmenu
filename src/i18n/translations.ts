import type { Language } from "./types";

const ui = {
  searchLabel: { tr: "Menüde ara", en: "Search the menu" },
  searchPlaceholder: {
    tr: "Ürün veya kategori ara…",
    en: "Search items or categories…",
  },
  clearSearch: { tr: "Aramayı temizle", en: "Clear search" },
  all: { tr: "Tümü", en: "All" },
  categories: { tr: "Menü kategorileri", en: "Menu categories" },
  emptyTitle: {
    tr: "Sonuç bulunamadı",
    en: "No results found",
  },
  emptyCategory: {
    tr: "Bu kategoride ürün bulunmuyor.",
    en: "No items in this category.",
  },
  footer: { tr: "Menü", en: "Menu" },
  language: { tr: "Dil", en: "Language" },
  welcomeTitle: { tr: "Hoş Geldiniz", en: "Welcome" },
  welcomeSubtitle: {
    tr: "Bir kategori seçerek menüyü keşfedin",
    en: "Choose a category to explore the menu",
  },
  selectCategory: { tr: "Kategori Seçin", en: "Select a category" },
  close: { tr: "Kapat", en: "Close" },
  searchingAllCategories: {
    tr: "Arama tüm kategorilerde yapılıyor",
    en: "Searching all categories",
  },
  viewAll: { tr: "Tüm Menü", en: "Full Menu" },
  discountBadge: { tr: "Özel Fırsat", en: "Special Offer" },
  discountHeadline: { tr: "İNDİRİM", en: "OFF" },
  discountApplied: {
    tr: "AÇILIŞA ÖZEL TÜM ÜRÜNLERDE",
    en: "OPENING SPECIAL ON ALL ITEMS",
  },
  popular: { tr: "Popüler", en: "Popular" },
  unavailable: { tr: "Tükendi", en: "Unavailable" },
  itemDescription: { tr: "Açıklama", en: "Description" },
} as const;

export function tUi(key: keyof typeof ui, lang: Language): string {
  return ui[key][lang];
}

export function tEmptyWithQuery(lang: Language, query: string): string {
  if (lang === "tr") {
    return `“${query}” için bir sonuç yok. Farklı bir arama veya kategori deneyin.`;
  }
  return `No results for “${query}”. Try a different search or category.`;
}

export function tItemsCount(lang: Language, count: number): string {
  if (lang === "tr") {
    return count === 1 ? "1 ürün" : `${count} ürün`;
  }
  return count === 1 ? "1 item" : `${count} items`;
}
