# Cafe QR Menu MVP - Agent Brief

## Goal

Build a mobile-first QR menu web application for a cafe.

Customers will scan a QR code at the table and directly open a digital menu on their phone. The first version should be a polished MVP with placeholder content. Real menu items, prices, images, and branding will be added later.

The app should focus only on browsing the menu. Do not build ordering, cart, payment, authentication, admin panel, database, or backend features for the MVP unless the existing project already requires minimal setup for routing.

## First Step

Before coding, inspect the existing repository and create a short implementation plan.

The plan should include:

1. Current tech stack and project structure.
2. Files/components you will create or modify.
3. Data model for menu items and categories.
4. UI structure.
5. Implementation steps.
6. Testing checklist.

After planning, implement the MVP.

## Core Requirements

- Mobile-first responsive design.
- Desktop should also look clean.
- QR scan should open directly to the menu page.
- No marketing landing page.
- Menu data should live in a separate editable data/config file.
- Use placeholder products for now.
- Client-side search.
- Category filtering.
- Touch-friendly UI.
- Product cards must work with or without images.
- Empty state when no search result exists.
- Unavailable product state.
- Popular/recommended product state.
- Clean, premium cafe-style visual design.

## Suggested Categories

Use these initial categories:

- Coffee
- Cold Drinks
- Desserts
- Snacks
- Breakfast

## Placeholder Products

Use realistic placeholder data:

- Espresso
- Americano
- Latte
- Cappuccino
- Flat White
- Cold Brew
- Iced Latte
- Lemonade
- San Sebastian Cheesecake
- Brownie
- Croissant
- Toast
- Breakfast Plate

## Data Model

Create a menu data structure similar to this:

```ts
export type MenuCategory = {
  id: string;
  label: string;
  description?: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  tags?: string[];
  isPopular?: boolean;
  isAvailable?: boolean;
};
```

Example item:

```ts
{
  id: "latte",
  name: "Latte",
  description: "Espresso with steamed milk and a smooth foam layer.",
  price: "120 TL",
  category: "coffee",
  tags: ["hot", "popular"],
  isPopular: true,
  isAvailable: true
}
```

## UI Structure

Build the page with a clean component structure. Adapt naming and folders to the existing project.

Suggested components:

- `MenuPage`
- `CafeHeader`
- `SearchBar`
- `CategoryTabs`
- `ProductList`
- `ProductCard`
- `EmptyState`

Suggested data/config files:

- `menu-data.ts`
- `menu-types.ts`

## Page Layout

The first screen should immediately show the menu experience.

Include:

- Cafe name.
- Short cafe description.
- Optional working hours.
- Search input.
- Category filter tabs.
- Product list.
- Product cards.

Product card should include:

- Product name.
- Description.
- Price.
- Category or tags.
- Optional image.
- Popular/recommended badge.
- Unavailable label if `isAvailable` is false.

## Design Direction

Design a modern, warm, premium cafe menu interface.

Important:

- Prioritize mobile readability.
- Use large tap targets.
- Make category tabs easy to scroll horizontally on mobile.
- Use spacing that feels calm and polished.
- Avoid clutter.
- Avoid a generic landing page.
- Avoid heavy animations.
- Use subtle motion only if it improves the experience.
- Make product cards scan-friendly.
- Keep the layout elegant when product images are missing.

## Behavior

Search:

- Search should filter by product name and description.
- Search should work together with selected category.
- If there are no results, show a friendly empty state.

Categories:

- Include an "All" category.
- Selecting a category filters products.
- Active category should be visually clear.

Availability:

- Unavailable products should still be visible but visually muted.
- Show a small "Unavailable" label.

Images:

- If an item has no image, show a simple fallback visual or keep the card layout clean without broken image icons.

## Accessibility

Make sure:

- Buttons have clear labels.
- Search input has a label or accessible placeholder.
- Text contrast is readable.
- Layout works on small screens.
- Semantic HTML is used where appropriate.

## Out Of Scope For MVP

Do not implement these yet:

- Backend
- Database
- Admin panel
- Authentication
- Payment
- Cart
- Ordering flow
- Table number management
- CMS integration
- QR code generator

Leave the code easy to extend for these later.

## Future Expansion

Prepare the structure so these can be added later:

- Turkish / English language support.
- Admin panel.
- CMS integration.
- Product detail modal.
- QR code generation page.
- Daily specials.
- Campaigns.
- Allergen tags.
- Vegan / vegetarian tags.
- Hot / cold tags.
- New item tags.
- Stock availability.

## Acceptance Criteria

The implementation is complete when:

- The menu page opens directly.
- Mobile layout looks polished.
- Desktop layout is usable and clean.
- Placeholder menu items render correctly.
- Category filtering works.
- Search works.
- Search and category filtering work together.
- Empty state appears when no product matches.
- Product cards look good without images.
- Unavailable state is visible.
- Menu data can be edited from one separate file.
- No unnecessary backend/admin/cart/payment scope is added.

## Final Response Expected From Agent

After implementation, summarize:

1. What files were changed.
2. How to run the project.
3. What features were implemented.
4. Any limitations or follow-up suggestions.
