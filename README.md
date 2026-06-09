# Maison Café — QR Menu (MVP)

A mobile-first digital QR menu for a cafe. Scanning the table QR code opens this
app directly on the menu — no landing page, no login. Browsing only (no cart,
ordering, payment or backend).

## Tech stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- **lucide-react** for icons
- Google Fonts: *Fraunces* (display) + *Inter* (UI)

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
  name: "Latte",
  description: "Espresso with steamed milk and a smooth foam layer.",
  price: "120 TL",
  category: "coffee",   // must match a category id
  image?: "https://…",  // optional — clean fallback shown if omitted
  tags?: ["hot"],
  isPopular?: true,      // shows a "Popular" badge
  isAvailable?: false    // shows muted card + "Unavailable" label
}
```

## Features

- Mobile-first responsive layout, clean on desktop
- Client-side search (name + description), works with category filter
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
  App.tsx          <- MenuPage (state: search + active category)
  main.tsx
  index.css
```

## Out of scope (intentionally)

Backend, database, admin panel, auth, payment, cart, ordering, table management,
CMS, QR code generation. The structure is left easy to extend for these later
(e.g. i18n, product detail modal, allergen/diet tags, daily specials).
