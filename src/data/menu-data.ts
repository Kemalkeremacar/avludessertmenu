import type { CafeInfo, MenuCategory, MenuItem } from "./menu-types";

// ---------------------------------------------------------------------------
// EDIT THIS FILE to update the menu. This is the single source of truth for
// cafe info, categories and products. No other code changes are required.
// ---------------------------------------------------------------------------

export const cafeInfo: CafeInfo = {
  name: "Avlu Dessert",
  tagline: "Slow-roasted coffee & fresh bakes, made with care.",
  hours: "Open daily · 08:00 – 22:00",
};

export const categories: MenuCategory[] = [
  { id: "coffee", label: "Coffee", description: "Hot espresso-based classics" },
  { id: "cold", label: "Cold Drinks", description: "Chilled & refreshing" },
  { id: "desserts", label: "Desserts", description: "Sweet little things" },
  { id: "snacks", label: "Snacks", description: "Light bites" },
  { id: "breakfast", label: "Breakfast", description: "Morning favourites" },
];

export const menuItems: MenuItem[] = [
  {
    id: "espresso",
    name: "Espresso",
    description: "A concentrated, full-bodied shot with a rich crema.",
    price: "70 TL",
    category: "coffee",
    tags: ["hot"],
    isAvailable: true,
  },
  {
    id: "americano",
    name: "Americano",
    description: "Espresso lengthened with hot water for a smooth cup.",
    price: "85 TL",
    category: "coffee",
    tags: ["hot"],
    isAvailable: true,
  },
  {
    id: "latte",
    name: "Latte",
    description: "Espresso with steamed milk and a smooth foam layer.",
    price: "120 TL",
    category: "coffee",
    tags: ["hot", "popular"],
    isPopular: true,
    isAvailable: true,
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk and airy foam.",
    price: "115 TL",
    category: "coffee",
    tags: ["hot"],
    isPopular: true,
    isAvailable: true,
  },
  {
    id: "flat-white",
    name: "Flat White",
    description: "Velvety microfoam over a double ristretto.",
    price: "125 TL",
    category: "coffee",
    tags: ["hot"],
    isAvailable: true,
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    description: "Steeped 18 hours for a naturally sweet, low-acid taste.",
    price: "130 TL",
    category: "cold",
    tags: ["cold", "popular"],
    isPopular: true,
    isAvailable: true,
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    description: "Chilled espresso and cold milk over ice.",
    price: "130 TL",
    category: "cold",
    tags: ["cold"],
    isAvailable: true,
  },
  {
    id: "lemonade",
    name: "Lemonade",
    description: "Fresh-squeezed lemons with mint and a touch of honey.",
    price: "95 TL",
    category: "cold",
    tags: ["cold"],
    isAvailable: false,
  },
  {
    id: "san-sebastian-cheesecake",
    name: "San Sebastian Cheesecake",
    description: "Burnt Basque-style cheesecake, creamy centre, caramel top.",
    price: "150 TL",
    category: "desserts",
    tags: ["popular"],
    isPopular: true,
    isAvailable: true,
  },
  {
    id: "brownie",
    name: "Brownie",
    description: "Dense dark-chocolate brownie with a fudgy middle.",
    price: "110 TL",
    category: "desserts",
    isAvailable: true,
  },
  {
    id: "croissant",
    name: "Croissant",
    description: "Buttery, flaky and baked fresh every morning.",
    price: "90 TL",
    category: "snacks",
    isAvailable: true,
  },
  {
    id: "toast",
    name: "Toast",
    description: "Grilled sourdough with melted cheese and tomato.",
    price: "120 TL",
    category: "snacks",
    isAvailable: true,
  },
  {
    id: "breakfast-plate",
    name: "Breakfast Plate",
    description: "Eggs, olives, cheeses, jam, butter and fresh bread.",
    price: "260 TL",
    category: "breakfast",
    tags: ["popular"],
    isPopular: true,
    isAvailable: true,
  },
];
