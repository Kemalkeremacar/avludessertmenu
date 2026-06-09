import type { CafeInfo, MenuCategory, MenuItem } from "./menu-types";

// ---------------------------------------------------------------------------
// EDIT THIS FILE to update the menu. This is the single source of truth for
// cafe info, categories and products. No other code changes are required.
// ---------------------------------------------------------------------------

export const cafeInfo: CafeInfo = {
  name: "Avlu Dessert",
  tagline: {
    tr: "El yapımı tatlılar ve özenle hazırlanan kahve.",
    en: "Handcrafted desserts and thoughtfully prepared coffee.",
  },
  hours: {
    tr: "Her gün açık · 08:00 – 22:00",
    en: "Open daily · 08:00 – 22:00",
  },
};

export const categories: MenuCategory[] = [
  {
    id: "coffee",
    label: { tr: "Kahve", en: "Coffee" },
    description: {
      tr: "Sıcak espresso bazlı klasikler",
      en: "Hot espresso-based classics",
    },
  },
  {
    id: "cold",
    label: { tr: "Soğuk İçecekler", en: "Cold Drinks" },
    description: {
      tr: "Serinletici içecekler",
      en: "Chilled & refreshing",
    },
  },
  {
    id: "desserts",
    label: { tr: "Tatlılar", en: "Desserts" },
    description: {
      tr: "Günün taze tatlıları",
      en: "Today's freshly made sweets",
    },
  },
  {
    id: "snacks",
    label: { tr: "Atıştırmalıklar", en: "Snacks" },
    description: {
      tr: "Hafif atıştırmalıklar",
      en: "Light bites",
    },
  },
  {
    id: "breakfast",
    label: { tr: "Kahvaltı", en: "Breakfast" },
    description: {
      tr: "Sabah favorileri",
      en: "Morning favourites",
    },
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "espresso",
    name: { tr: "Espresso", en: "Espresso" },
    description: {
      tr: "Yoğun gövdeli, zengin kremalı tek shot.",
      en: "A concentrated, full-bodied shot with a rich crema.",
    },
    price: "70 TL",
    category: "coffee",
  },
  {
    id: "americano",
    name: { tr: "Americano", en: "Americano" },
    description: {
      tr: "Sıcak su ile uzatılmış, yumuşak içimli espresso.",
      en: "Espresso lengthened with hot water for a smooth cup.",
    },
    price: "85 TL",
    category: "coffee",
  },
  {
    id: "latte",
    name: { tr: "Latte", en: "Latte" },
    description: {
      tr: "Buharla ısıtılmış sütle hazırlanan espresso, yumuşak köpük katmanı.",
      en: "Espresso with steamed milk and a smooth foam layer.",
    },
    price: "120 TL",
    category: "coffee",
    isPopular: true,
  },
  {
    id: "cappuccino",
    name: { tr: "Cappuccino", en: "Cappuccino" },
    description: {
      tr: "Espresso, buharla ısıtılmış süt ve hafif köpük.",
      en: "Equal parts espresso, steamed milk and airy foam.",
    },
    price: "115 TL",
    category: "coffee",
    isPopular: true,
  },
  {
    id: "flat-white",
    name: { tr: "Flat White", en: "Flat White" },
    description: {
      tr: "Çift ristretto üzerine kadifemsi mikro köpük.",
      en: "Velvety microfoam over a double ristretto.",
    },
    price: "125 TL",
    category: "coffee",
  },
  {
    id: "cold-brew",
    name: { tr: "Cold Brew", en: "Cold Brew" },
    description: {
      tr: "18 saat demlenmiş, doğal tatlı ve düşük asitli.",
      en: "Steeped 18 hours for a naturally sweet, low-acid taste.",
    },
    price: "130 TL",
    category: "cold",
    isPopular: true,
  },
  {
    id: "iced-latte",
    name: { tr: "Buzlu Latte", en: "Iced Latte" },
    description: {
      tr: "Buz üzerinde soğuk espresso ve süt.",
      en: "Chilled espresso and cold milk over ice.",
    },
    price: "130 TL",
    category: "cold",
  },
  {
    id: "lemonade",
    name: { tr: "Limonata", en: "Lemonade" },
    description: {
      tr: "Taze sıkılmış limon, nane ve bir dokunuş bal.",
      en: "Fresh-squeezed lemons with mint and a touch of honey.",
    },
    price: "95 TL",
    category: "cold",
  },
  {
    id: "san-sebastian-cheesecake",
    name: {
      tr: "San Sebastian Cheesecake",
      en: "San Sebastian Cheesecake",
    },
    description: {
      tr: "Yanık Basque usulü cheesecake, kremamsı iç, karamel üst.",
      en: "Burnt Basque-style cheesecake, creamy centre, caramel top.",
    },
    price: "150 TL",
    category: "desserts",
    isPopular: true,
  },
  {
    id: "brownie",
    name: { tr: "Brownie", en: "Brownie" },
    description: {
      tr: "Yoğun bitter çikolatalı, ortası akışkan brownie.",
      en: "Dense dark-chocolate brownie with a fudgy middle.",
    },
    price: "110 TL",
    category: "desserts",
  },
  {
    id: "croissant",
    name: { tr: "Kruvasan", en: "Croissant" },
    description: {
      tr: "Tereyağlı, kat kat ve her sabah taze pişirilir.",
      en: "Buttery, flaky and baked fresh every morning.",
    },
    price: "90 TL",
    category: "snacks",
  },
  {
    id: "toast",
    name: { tr: "Tost", en: "Toast" },
    description: {
      tr: "Izgara ekşi mayalı ekmek, erimiş peynir ve domates.",
      en: "Grilled sourdough with melted cheese and tomato.",
    },
    price: "120 TL",
    category: "snacks",
  },
  {
    id: "breakfast-plate",
    name: { tr: "Kahvaltı Tabağı", en: "Breakfast Plate" },
    description: {
      tr: "Yumurta, zeytin, peynir çeşitleri, reçel, tereyağı ve taze ekmek.",
      en: "Eggs, olives, cheeses, jam, butter and fresh bread.",
    },
    price: "260 TL",
    category: "breakfast",
    isPopular: true,
  },
];
