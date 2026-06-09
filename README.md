# Avlu Dessert — QR Menü (MVP)

Türkiye'deki bir kafe için mobil öncelikli dijital QR menü. Masadaki QR kod
okutulunca uygulama doğrudan menü sayfasında açılır — landing page veya giriş
yok. Sadece menü gezintisi (sepet, sipariş, ödeme veya backend yok).

## Tech stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- **lucide-react** for icons
- Google Fonts: *Fraunces* (display) + *Inter* (UI)
- **TR / EN** dil desteği (varsayılan: Türkçe)

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Editing the menu

All content lives in **one file**: `src/data/menu-data.ts`.

- `cafeInfo` — cafe name, tagline, working hours
- `categories` — category list (an "All" tab is added automatically)
- `menuItems` — products

Item shape (`src/data/menu-types.ts`):

```ts
{
  id: "latte",
  name: { tr: "Latte", en: "Latte" },
  description: {
    tr: "Buharla ısıtılmış sütle hazırlanan espresso…",
    en: "Espresso with steamed milk and a smooth foam layer.",
  },
  price: "120 TL",
  category: "coffee",   // must match a category id
  image?: "/images/latte.jpg",  // optional — add to public/ when ready
  tags?: ["hot"],
  isPopular?: true,
  isAvailable?: false
}
```

## Deploy (Vercel)

1. Projeyi GitHub'a push edin.
2. [vercel.com](https://vercel.com) → **Add New Project** → GitHub reposunu seçin.
3. Vite otomatik algılanır; `vercel.json` build ve SPA ayarlarını içerir.
4. Deploy sonrası `https://proje-adi.vercel.app` adresinde menü yayında olur.
5. Domain aldıktan sonra Vercel panelinden **Settings → Domains** ile bağlayın.
6. QR kodu bu canlı menü URL'sine yönlendirilecek şekilde üretilir ve masalara yapıştırılır.

## Features

- Mobile-first responsive layout, clean on desktop
- Turkish / English language toggle
- Client-side search (name + description in both languages), works with category filter
- Horizontally scrollable category tabs with an "All" option
- Product cards with/without images, popular badge, unavailable state
- Friendly empty state when nothing matches
- Accessible: labelled search, semantic HTML, large tap targets

## Project structure

```
src/
  components/
    CafeHeader.tsx
    SearchBar.tsx
    CategoryTabs.tsx
    ProductList.tsx
    ProductCard.tsx
    EmptyState.tsx
  data/
    menu-types.ts
    menu-data.ts   <- edit the menu here
  i18n/
    LanguageContext.tsx
    translations.ts
    types.ts
  App.tsx
  main.tsx
  index.css
```

## Out of scope (intentionally)

Backend, database, admin panel, auth, payment, cart, ordering, table management,
CMS, QR code generation page. QR kod masalara basılacak; uygulama sadece menü
sayfasını sunar.
