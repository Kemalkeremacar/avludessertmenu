import type { CafeInfo, MenuCategory, MenuItem } from "./menu-types";

// ---------------------------------------------------------------------------
// EDIT THIS FILE to update the menu. This is the single source of truth for
// cafe info, categories and products. No other code changes are required.
// Prices synced with "SON EN GÜNCEL FİYAT" list (June 2026).
// ---------------------------------------------------------------------------

export const cafeInfo: CafeInfo = {
  name: "Avlu Dessert",
  tagline: {
    tr: "El yapımı tatlılar ve özenle hazırlanan kahve.",
    en: "Handcrafted desserts and thoughtfully prepared coffee.",
  },
  hours: {
    tr: "Her gün açık · 11:00 – 01:00",
    en: "Open daily · 11:00 – 01:00",
  },
};

export const categories: MenuCategory[] = [
  {
    id: "coffee",
    label: { tr: "Dünya Kahveleri", en: "World Coffees" },
    description: {
      tr: "Espresso bazlı sıcak ve soğuk klasikler",
      en: "Hot and cold espresso-based classics",
    },
  },
  {
    id: "flavored-coffee",
    label: { tr: "Aromalı Dünya Kahveleri", en: "Flavored World Coffees" },
    description: {
      tr: "Özel aromalı latte ve mocha çeşitleri",
      en: "Special flavored latte and mocha varieties",
    },
  },
  {
    id: "frappe",
    label: { tr: "Frappe", en: "Frappe" },
    description: {
      tr: "Buzlu köpüklü kahveler",
      en: "Iced frothy coffees",
    },
  },
  {
    id: "turkish-coffee",
    label: { tr: "Geleneksel Kahve Çeşitleri", en: "Traditional Coffee Varieties" },
    description: {
      tr: "Geleneksel Türk kahveleri",
      en: "Traditional Turkish coffees",
    },
  },
  {
    id: "tea",
    label: { tr: "Çay Çeşitleri", en: "Tea Varieties" },
    description: {
      tr: "Sıcak çay ve şifalı bitki çayları",
      en: "Hot tea and herbal teas",
    },
  },
  {
    id: "matcha",
    label: { tr: "Avlu Japon Matcha", en: "Avlu Japanese Matcha" },
    description: {
      tr: "Japon yeşil çay içecekleri",
      en: "Japanese green tea drinks",
    },
  },
  {
    id: "cold",
    label: { tr: "Uzun Demleme Coffe", en: "Cold Brew" },
    description: {
      tr: "Uzun demlenmiş soğuk kahveler",
      en: "Long-steeped cold brews",
    },
  },
  {
    id: "milkshake",
    label: { tr: "Milkshake Dünyası", en: "Milkshake World" },
    description: {
      tr: "Soğuk ve kremsi milkshake'ler",
      en: "Cold and creamy milkshakes",
    },
  },
  {
    id: "frozen",
    label: { tr: "Frozen Dünyası", en: "Frozen World" },
    description: {
      tr: "Buzlu meyve içecekleri",
      en: "Frozen fruit drinks",
    },
  },
  {
    id: "smoothie",
    label: { tr: "Smoothies 'Yoğurtlu-Sütlü'", en: "Smoothies (Yogurt-Milk)" },
    description: {
      tr: "Yoğurtlu ve sütlü meyve içecekleri",
      en: "Yogurt and milk based fruit drinks",
    },
  },
  {
    id: "fresh-juice",
    label: { tr: "Taze Sıkılmış Vitamin Bar", en: "Freshly Squeezed Vitamin Bar" },
    description: {
      tr: "Taze sıkılmış meyve suları",
      en: "Freshly squeezed fruit juices",
    },
  },
  {
    id: "mocktail",
    label: { tr: "Moçtail Fresh Lezzetler", en: "Mocktail Fresh Flavors" },
    description: {
      tr: "Alkolsüz kokteyl çeşitleri",
      en: "Non-alcoholic cocktail varieties",
    },
  },
  {
    id: "lemonade-bar",
    label: { tr: "Limonata Dünyası", en: "Lemonade World" },
    description: {
      tr: "Taze limonata çeşitleri",
      en: "Fresh lemonade varieties",
    },
  },
  {
    id: "soft-drinks",
    label: { tr: "Soğuk Meşrubatlar", en: "Soft Drinks" },
    description: {
      tr: "Gazlı ve gazsız içecekler",
      en: "Carbonated and non-carbonated drinks",
    },
  },
  {
    id: "ice-cream",
    label: { tr: "Dondurma", en: "Ice Cream" },
    description: {
      tr: "Top dondurma çeşitleri",
      en: "Scoop ice cream varieties",
    },
  },
  {
    id: "desserts",
    label: { tr: "Cheffin Özel Reçeteli Pastları ve Tatlıları", en: "Chef's Special Cakes & Desserts" },
    description: {
      tr: "Günün taze tatlıları",
      en: "Today's freshly made sweets",
    },
  },
  {
    id: "toast",
    label: { tr: "Tost Çeşitleri", en: "Toast Varieties" },
    description: {
      tr: "Sıcak tost çeşitleri",
      en: "Hot toast varieties",
    },
  },
  {
    id: "pizza",
    label: { tr: "Pizzalar", en: "Pizzas" },
    description: {
      tr: "Taze pizza çeşitleri",
      en: "Fresh pizza varieties",
    },
  },
  {
    id: "menus",
    label: { tr: "Efsane Menüler", en: "Legendary Menus" },
    description: {
      tr: "Özel kombine menüler",
      en: "Special combo menus",
    },
  },
  {
    id: "kids",
    label: { tr: "Çocuk Menüsü", en: "Kids Menu" },
    description: {
      tr: "Çocuklara özel menüler",
      en: "Special menus for kids",
    },
  },
  {
    id: "crispy",
    label: { tr: "Çıtırlar", en: "Crispy Snacks" },
    description: {
      tr: "Çıtır atıştırmalıklar",
      en: "Crispy snack options",
    },
  },
];

export const menuItems: MenuItem[] = [
  // ---------------------------------------------------------------------
  // DÜNYA KAHVELERİ
  // ---------------------------------------------------------------------
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
    id: "affogato",
    name: { tr: "Affogato", en: "Affogato" },
    description: { tr: "Espresso ile dondurma.", en: "Espresso with ice cream." },
    price: "250 TL",
    category: "coffee",
  },
  {
    id: "americano",
    name: { tr: "Americano Sıcak", en: "Americano Hot" },
    description: {
      tr: "Sıcak su ile uzatılmış, yumuşak içimli espresso.",
      en: "Espresso lengthened with hot water for a smooth cup.",
    },
    price: "130 TL",
    category: "coffee",
  },
  {
    id: "americano-ice",
    name: { tr: "Americano Soğuk", en: "Americano Cold" },
    description: { tr: "Soğuk americano.", en: "Cold americano." },
    price: "130 TL",
    category: "coffee",
  },
  {
    id: "cortado",
    name: { tr: "Cortado Sıcak", en: "Cortado Hot" },
    description: { tr: "Espresso ve az miktar sıcak süt.", en: "Espresso with a touch of steamed milk." },
    price: "180 TL",
    category: "coffee",
  },
  {
    id: "cappuccino",
    name: { tr: "Cappuccino Sıcak", en: "Cappuccino Hot" },
    description: {
      tr: "Espresso, buharla ısıtılmış süt ve hafif köpük.",
      en: "Equal parts espresso, steamed milk and airy foam.",
    },
    price: "170 TL",
    category: "coffee",
  },
  {
    id: "flat-white",
    name: { tr: "Flat White Sıcak", en: "Flat White Hot" },
    description: {
      tr: "Çift ristretto üzerine kadifemsi mikro köpük.",
      en: "Velvety microfoam over a double ristretto.",
    },
    price: "180 TL",
    category: "coffee",
  },
  {
    id: "flat-white-ice",
    name: { tr: "Flat White Soğuk", en: "Flat White Cold" },
    description: { tr: "Soğuk flat white.", en: "Cold flat white." },
    price: "180 TL",
    category: "coffee",
  },
  {
    id: "filter-coffee",
    name: { tr: "Filter Coffee Sıcak", en: "Filter Coffee Hot" },
    description: { tr: "Sıcak filtre kahve.", en: "Hot filter coffee." },
    price: "120 TL",
    category: "coffee",
  },
  {
    id: "filter-coffee-ice",
    name: { tr: "Filter Coffee Soğuk", en: "Filter Coffee Cold" },
    description: { tr: "Soğuk filtre kahve.", en: "Cold filter coffee." },
    price: "120 TL",
    category: "coffee",
  },
  {
    id: "filter-sutlu",
    name: { tr: "Filter Sütlü Sıcak", en: "Filter with Milk Hot" },
    description: { tr: "Sütlü sıcak filtre kahve.", en: "Hot filter coffee with milk." },
    price: "135 TL",
    category: "coffee",
  },
  // ---------------------------------------------------------------------
  // AROMALI DÜNYA KAHVELERİ
  // ---------------------------------------------------------------------
  {
    id: "caramel-latte-ice",
    name: { tr: "Caramel Coffee Latte Soğuk", en: "Caramel Coffee Latte Cold" },
    description: { tr: "Soğuk karamelli latte.", en: "Cold caramel latte." },
    price: "170 TL",
    category: "flavored-coffee",
  },
  {
    id: "caramel-latte",
    name: { tr: "Caramel Coffee Latte Sıcak", en: "Caramel Coffee Latte Hot" },
    description: { tr: "Sıcak karamelli latte.", en: "Hot caramel latte." },
    price: "170 TL",
    category: "flavored-coffee",
  },
  {
    id: "coffee-latte",
    name: { tr: "Coffee Latte Sıcak", en: "Coffee Latte Hot" },
    description: { tr: "Sıcak coffee latte.", en: "Hot coffee latte." },
    price: "160 TL",
    category: "flavored-coffee",
  },
  {
    id: "coffee-latte-ice",
    name: { tr: "Coffee Latte Soğuk", en: "Coffee Latte Cold" },
    description: { tr: "Soğuk coffee latte.", en: "Cold coffee latte." },
    price: "160 TL",
    category: "flavored-coffee",
  },
  {
    id: "vanilla-latte",
    name: { tr: "Vanilla Coffee Latte Sıcak", en: "Vanilla Coffee Latte Hot" },
    description: { tr: "Sıcak vanilyalı latte.", en: "Hot vanilla latte." },
    price: "170 TL",
    category: "flavored-coffee",
  },
  {
    id: "vanilla-latte-ice",
    name: { tr: "Vanilla Coffee Latte Soğuk", en: "Vanilla Coffee Latte Cold" },
    description: { tr: "Soğuk vanilyalı latte.", en: "Cold vanilla latte." },
    price: "170 TL",
    category: "flavored-coffee",
  },
  {
    id: "pistachio-latte",
    name: { tr: "Antep Fıstıklı Coffee Latte Sıcak", en: "Pistachio Coffee Latte Hot" },
    description: { tr: "Sıcak antep fıstıklı latte.", en: "Hot pistachio latte." },
    price: "170 TL",
    category: "flavored-coffee",
  },
  {
    id: "pistachio-latte-ice",
    name: { tr: "Antep Fıstıklı Coffee Latte Soğuk", en: "Pistachio Coffee Latte Cold" },
    description: { tr: "Soğuk antep fıstıklı latte.", en: "Cold pistachio latte." },
    price: "170 TL",
    category: "flavored-coffee",
  },
  {
    id: "tahini-latte",
    name: { tr: "Tahini Coffee Latte Sıcak", en: "Tahini Coffee Latte Hot" },
    description: { tr: "Sıcak tahinli latte.", en: "Hot tahini latte." },
    price: "170 TL",
    category: "flavored-coffee",
  },
  {
    id: "tahini-latte-ice",
    name: { tr: "Tahini Coffee Latte Soğuk", en: "Tahini Coffee Latte Cold" },
    description: { tr: "Soğuk tahinli latte.", en: "Cold tahini latte." },
    price: "170 TL",
    category: "flavored-coffee",
  },
  {
    id: "recelli-latte",
    name: { tr: "Sütlü Reçelli Latte Sıcak", en: "Milk Jam Latte Hot" },
    description: { tr: "Sıcak reçelli sütlü latte.", en: "Hot milk jam latte." },
    price: "170 TL",
    category: "flavored-coffee",
  },
  {
    id: "recelli-latte-ice",
    name: { tr: "Sütlü Reçelli Latte Soğuk", en: "Milk Jam Latte Cold" },
    description: { tr: "Soğuk reçelli sütlü latte.", en: "Cold milk jam latte." },
    price: "170 TL",
    category: "flavored-coffee",
  },
  {
    id: "hurma-latte",
    name: { tr: "Medjool Hurma Coffee Latte Sıcak", en: "Medjool Date Coffee Latte Hot" },
    description: { tr: "Sıcak hurmalı latte.", en: "Hot date latte." },
    price: "170 TL",
    category: "flavored-coffee",
  },
  {
    id: "hurma-latte-ice",
    name: { tr: "Medjool Hurma Latte Coffee Soğuk", en: "Medjool Date Coffee Latte Cold" },
    description: { tr: "Soğuk hurmalı latte.", en: "Cold date latte." },
    price: "170 TL",
    category: "flavored-coffee",
  },
  {
    id: "mocha-ice",
    name: { tr: "Coffee Mocha Soğuk", en: "Coffee Mocha Cold" },
    description: { tr: "Soğuk mocha.", en: "Cold mocha." },
    price: "170 TL",
    category: "flavored-coffee",
  },
  {
    id: "caramel-mocha-ice",
    name: { tr: "Coffee Caramel Soğuk Mocha", en: "Coffee Caramel Cold Mocha" },
    description: { tr: "Karamelli soğuk mocha.", en: "Caramel cold mocha." },
    price: "180 TL",
    category: "flavored-coffee",
  },
  {
    id: "caramel-mocha",
    name: { tr: "Coffee Caramel Sıcak Mocha", en: "Coffee Caramel Hot Mocha" },
    description: { tr: "Karamelli sıcak mocha.", en: "Caramel hot mocha." },
    price: "180 TL",
    category: "flavored-coffee",
  },
  {
    id: "white-mocha",
    name: { tr: "Coffee White Mocha Sıcak", en: "Coffee White Mocha Hot" },
    description: { tr: "Sıcak beyaz mocha.", en: "Hot white mocha." },
    price: "180 TL",
    category: "flavored-coffee",
  },
  {
    id: "white-mocha-ice",
    name: { tr: "Coffee White Mocha Soğuk", en: "Coffee White Mocha Cold" },
    description: { tr: "Soğuk beyaz mocha.", en: "Cold white mocha." },
    price: "180 TL",
    category: "flavored-coffee",
  },
  {
    id: "oreo-mocha",
    name: { tr: "Oreo Coffee Mocha Sıcak", en: "Oreo Coffee Mocha Hot" },
    description: { tr: "Oreolu sıcak mocha.", en: "Oreo hot mocha." },
    price: "180 TL",
    category: "flavored-coffee",
  },
  {
    id: "oreo-mocha-ice",
    name: { tr: "Oreo Coffee Mocha Soğuk", en: "Oreo Coffee Mocha Cold" },
    description: { tr: "Oreolu soğuk mocha.", en: "Oreo cold mocha." },
    price: "180 TL",
    category: "flavored-coffee",
  },
  {
    id: "lotus-mocha",
    name: { tr: "Lotus Coffee Mocha Sıcak", en: "Lotus Coffee Mocha Hot" },
    description: { tr: "Lotuslu sıcak mocha.", en: "Lotus hot mocha." },
    price: "180 TL",
    category: "flavored-coffee",
  },
  {
    id: "lotus-mocha-ice",
    name: { tr: "Lotus Coffee Mocha Soğuk", en: "Lotus Coffee Mocha Cold" },
    description: { tr: "Lotuslu soğuk mocha.", en: "Lotus cold mocha." },
    price: "180 TL",
    category: "flavored-coffee",
  },
  // ---------------------------------------------------------------------
  // FRAPPE
  // ---------------------------------------------------------------------
  {
    id: "classic-frappe",
    name: { tr: "Classic Frappe", en: "Classic Frappe" },
    description: { tr: "Buzlu köpüklü klasik frappe.", en: "Classic iced frothy frappe." },
    price: "180 TL",
    category: "frappe",
  },
  {
    id: "sutlu-frappe",
    name: { tr: "Sütlü Frappe", en: "Milk Frappe" },
    description: { tr: "Sütlü frappe.", en: "Milk frappe." },
    price: "180 TL",
    category: "frappe",
  },
  {
    id: "chocolate-frappe",
    name: { tr: "Çikolata Frappe", en: "Chocolate Frappe" },
    description: { tr: "Çikolata aromalı frappe.", en: "Chocolate flavored frappe." },
    price: "190 TL",
    category: "frappe",
  },
  {
    id: "caramel-frappe",
    name: { tr: "Karamel Frappe", en: "Caramel Frappe" },
    description: { tr: "Karamel aromalı frappe.", en: "Caramel flavored frappe." },
    price: "190 TL",
    category: "frappe",
  },
  {
    id: "vanilla-frappe",
    name: { tr: "Vanilya Frappe", en: "Vanilla Frappe" },
    description: { tr: "Vanilyalı frappe.", en: "Vanilla frappe." },
    price: "190 TL",
    category: "frappe",
  },
  {
    id: "oreo-frappe",
    name: { tr: "Oreo Frappe", en: "Oreo Frappe" },
    description: { tr: "Oreolu frappe.", en: "Oreo frappe." },
    price: "190 TL",
    category: "frappe",
  },
  {
    id: "lotus-frappe",
    name: { tr: "Lotus Frappe", en: "Lotus Frappe" },
    description: { tr: "Lotuslu frappe.", en: "Lotus frappe." },
    price: "190 TL",
    category: "frappe",
  },
  // ---------------------------------------------------------------------
  // GELENEKSEL KAHVE ÇEŞİTLERİ
  // ---------------------------------------------------------------------
  {
    id: "turkish-coffee",
    name: { tr: "Türk Kahvesi", en: "Turkish Coffee" },
    description: {
      tr: "Geleneksel yöntemle pişirilen Türk kahvesi.",
      en: "Traditional Turkish coffee brewed in a cezve.",
    },
    price: "90 TL",
    category: "turkish-coffee",
  },
  {
    id: "suvari-turkish-coffee",
    name: { tr: "Süvari Türk Kahvesi", en: "Suvari Turkish Coffee" },
    description: { tr: "Özel harman Süvari kahvesi.", en: "Special blend Suvari coffee." },
    price: "120 TL",
    category: "turkish-coffee",
  },
  {
    id: "mastic-turkish-coffee",
    name: { tr: "Damla Sakızlı Türk Kahvesi", en: "Mastic Turkish Coffee" },
    description: { tr: "Sakız aromalı Türk kahvesi.", en: "Turkish coffee with mastic." },
    price: "120 TL",
    category: "turkish-coffee",
  },
  {
    id: "osmanli-dibek",
    name: { tr: "Osmanlı Dibek Türk Kahvesi", en: "Ottoman Dibek Turkish Coffee" },
    description: { tr: "Osmanlı dibek kahvesi.", en: "Ottoman dibek coffee." },
    price: "120 TL",
    category: "turkish-coffee",
  },
  {
    id: "hell-qahwa",
    name: { tr: "Hell-I Qahwa Menengiç Kahvesi", en: "Hell-I Qahwa Menengic Coffee" },
    description: { tr: "Menengiç kahvesi.", en: "Menengic coffee." },
    price: "90 TL",
    category: "turkish-coffee",
  },
  {
    id: "dag-cilekli",
    name: { tr: "Dağ Çilekli Türk Kahvesi", en: "Wild Strawberry Turkish Coffee" },
    description: { tr: "Dağ çilekli Türk kahvesi.", en: "Wild strawberry Turkish coffee." },
    price: "120 TL",
    category: "turkish-coffee",
  },
  // ---------------------------------------------------------------------
  // ÇAY ÇEŞİTLERİ
  // ---------------------------------------------------------------------
  {
    id: "kacak-cay",
    name: { tr: "Kaçak Çay", en: "Kaçak Tea" },
    description: { tr: "Kaçak çay.", en: "Kaçak tea." },
    price: "30 TL",
    category: "tea",
  },
  {
    id: "yerli-cay",
    name: { tr: "Yerli Çay", en: "Local Tea" },
    description: { tr: "Yerli çay.", en: "Local tea." },
    price: "30 TL",
    category: "tea",
  },
  {
    id: "kupa-cay",
    name: { tr: "Kupa Çay", en: "Mug Tea" },
    description: { tr: "Kupa çay.", en: "Mug tea." },
    price: "60 TL",
    category: "tea",
  },
  {
    id: "fincan-cay",
    name: { tr: "Fincan Çay", en: "Glass Tea" },
    description: { tr: "Fincan çay.", en: "Glass tea." },
    price: "60 TL",
    category: "tea",
  },
  {
    id: "atom-cay",
    name: { tr: "Atom Çay Şifalı Bitki Çayları", en: "Atom Tea Herbal Teas" },
    description: { tr: "Atom çay.", en: "Atom tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "kis-cayi-ihlamur",
    name: { tr: "Kış Çayı Ihlamur", en: "Winter Tea Linden" },
    description: { tr: "Ihlamur çayı.", en: "Linden tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "adacayi",
    name: { tr: "Adaçayı", en: "Sage Tea" },
    description: { tr: "Adaçayı.", en: "Sage tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "zencefil-cay",
    name: { tr: "Zencefil", en: "Ginger Tea" },
    description: { tr: "Zencefil çayı.", en: "Ginger tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "tarcin-cay",
    name: { tr: "Tarçın", en: "Cinnamon Tea" },
    description: { tr: "Tarçın çayı.", en: "Cinnamon tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "karanfin-cay",
    name: { tr: "Karanfin", en: "Karanfin Tea" },
    description: { tr: "Karanfin çayı.", en: "Karanfin tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "anason-cay",
    name: { tr: "Anason", en: "Anise Tea" },
    description: { tr: "Anason çayı.", en: "Anise tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "elma-parcali-cay",
    name: { tr: "Elma Parçalı", en: "Apple Pieces Tea" },
    description: { tr: "Elma parçalı çay.", en: "Tea with apple pieces." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "enerji-cayi-mate",
    name: { tr: "Enerji Çayı Mate", en: "Energy Mate Tea" },
    description: { tr: "Mate enerji çayı.", en: "Mate energy tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "karanfil-cay",
    name: { tr: "Karanfil", en: "Clove Tea" },
    description: { tr: "Karanfil çayı.", en: "Clove tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "hindistan-cevizi-cay",
    name: { tr: "Hindistan Cevizi", en: "Coconut Tea" },
    description: { tr: "Hindistan cevizli çay.", en: "Coconut tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "dogal-mango-cay",
    name: { tr: "Doğal Mango", en: "Natural Mango Tea" },
    description: { tr: "Doğal mango çayı.", en: "Natural mango tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "uyku-cayi-ihlamur",
    name: { tr: "Uyku Çayı Ihlamur", en: "Sleep Tea Linden" },
    description: { tr: "Uyku çayı ihlamur.", en: "Sleep linden tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "papatya-cay",
    name: { tr: "Papatya", en: "Chamomile Tea" },
    description: { tr: "Papatya çayı.", en: "Chamomile tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "rezene-cay",
    name: { tr: "Rezene", en: "Fennel Tea" },
    description: { tr: "Rezene çayı.", en: "Fennel tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "dogal-vanilya-cay",
    name: { tr: "Doğal Vanilya", en: "Natural Vanilla Tea" },
    description: { tr: "Doğal vanilya çayı.", en: "Natural vanilla tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "detox-yesil-cay",
    name: { tr: "Detox Çayı Yeşil Çay", en: "Detox Green Tea" },
    description: { tr: "Detox yeşil çay.", en: "Detox green tea." },
    price: "120 TL",
    category: "tea",
  },
  {
    id: "dogal-limon-cay",
    name: { tr: "Doğal Limon Parçaları", en: "Natural Lemon Pieces Tea" },
    description: { tr: "Doğal limon parçalı çay.", en: "Tea with natural lemon pieces." },
    price: "120 TL",
    category: "tea",
  },
  // ---------------------------------------------------------------------
  // AVLU JAPON MATCHA
  // ---------------------------------------------------------------------
  {
    id: "ice-matcha-latte",
    name: { tr: "Ice Matcha Latte", en: "Ice Matcha Latte" },
    description: { tr: "Buzlu matcha latte.", en: "Iced matcha latte." },
    price: "180 TL",
    category: "matcha",
  },
  {
    id: "ice-vanilla-matcha",
    name: { tr: "Ice Matcha Vanilla Latte", en: "Ice Matcha Vanilla Latte" },
    description: { tr: "Vanilyalı buzlu matcha.", en: "Vanilla iced matcha." },
    price: "180 TL",
    category: "matcha",
  },
  {
    id: "ice-strawberry-matcha",
    name: { tr: "Ice Strawberry Matcha Latte", en: "Ice Strawberry Matcha Latte" },
    description: { tr: "Çilekli buzlu matcha.", en: "Strawberry iced matcha." },
    price: "180 TL",
    category: "matcha",
  },
  {
    id: "ice-coco-matcha",
    name: { tr: "Ice Coco Matcha Latte", en: "Ice Coco Matcha Latte" },
    description: { tr: "Hindistan cevizli buzlu matcha.", en: "Coconut iced matcha." },
    price: "180 TL",
    category: "matcha",
  },
  {
    id: "ice-caramel-banana-matcha",
    name: { tr: "Ice Caramel Banana Cream Matcha", en: "Ice Caramel Banana Cream Matcha" },
    description: { tr: "Karamel muzlu krema matcha.", en: "Caramel banana cream matcha." },
    price: "180 TL",
    category: "matcha",
  },
  // ---------------------------------------------------------------------
  // UZUN DEMLEME COFFE
  // ---------------------------------------------------------------------
  {
    id: "beyaz-cikolata-cold",
    name: { tr: "Beyaz Çikolatalı Cold Brew", en: "White Chocolate Cold Brew" },
    description: { tr: "Beyaz çikolatalı cold brew.", en: "White chocolate cold brew." },
    price: "",
    category: "cold",
  },
  {
    id: "cinnamon-cream-cold",
    name: { tr: "Cinnamon Cream Cold Brew", en: "Cinnamon Cream Cold Brew" },
    description: { tr: "Tarçın kremalı cold brew.", en: "Cinnamon cream cold brew." },
    price: "",
    category: "cold",
  },
  // ---------------------------------------------------------------------
  // MİLKSHAKE DÜNYASI
  // ---------------------------------------------------------------------
  {
    id: "cilek-dondurma-milkshake",
    name: { tr: "Çilek Dondurmalı Milkshake", en: "Strawberry Ice Cream Milkshake" },
    description: { tr: "Çilek dondurmalı milkshake.", en: "Strawberry ice cream milkshake." },
    price: "220 TL",
    category: "milkshake",
    isPopular: true,
  },
  {
    id: "chocolate-milkshake",
    name: { tr: "Çikolata Dondurmalı Milkshake", en: "Chocolate Ice Cream Milkshake" },
    description: { tr: "Çikolata dondurmalı milkshake.", en: "Chocolate ice cream milkshake." },
    price: "220 TL",
    category: "milkshake",
  },
  {
    id: "antep-fistik-dondurma",
    name: { tr: "Antep Fıstık Dondurmalı Milkshake", en: "Pistachio Ice Cream Milkshake" },
    description: { tr: "Antep fıstıklı dondurmalı milkshake.", en: "Pistachio ice cream milkshake." },
    price: "220 TL",
    category: "milkshake",
    isPopular: true,
  },
  {
    id: "avlutella-milkshake",
    name: { tr: "Avlutella Nutella Çikolata Milkshake", en: "Avlutella Nutella Chocolate Milkshake" },
    description: { tr: "Nutella çikolatalı milkshake.", en: "Nutella chocolate milkshake." },
    price: "220 TL",
    category: "milkshake",
    isPopular: true,
  },
  {
    id: "limon-dondurma-milkshake",
    name: { tr: "Limon Dondurmalı Milkshake", en: "Lemon Ice Cream Milkshake" },
    description: { tr: "Limon dondurmalı milkshake.", en: "Lemon ice cream milkshake." },
    price: "220 TL",
    category: "milkshake",
  },
  {
    id: "vanilya-dondurma-milkshake",
    name: { tr: "Vanilya Dondurmalı Milkshake", en: "Vanilla Ice Cream Milkshake" },
    description: { tr: "Vanilya dondurmalı milkshake.", en: "Vanilla ice cream milkshake." },
    price: "220 TL",
    category: "milkshake",
  },
  {
    id: "kendin-sec-milkshake",
    name: { tr: "Dondurmanı Kendin Seç Milkshake", en: "Choose Your Ice Cream Milkshake" },
    description: { tr: "Dondurmanı kendin seç milkshake.", en: "Choose your ice cream milkshake." },
    price: "220 TL",
    category: "milkshake",
  },
  {
    id: "avlu-bob-milkshake",
    name: { tr: "Avlu Bob Milkshake", en: "Avlu Bob Milkshake" },
    description: { tr: "Avlu Bob milkshake.", en: "Avlu Bob milkshake." },
    price: "220 TL",
    category: "milkshake",
    isPopular: true,
  },
  // ---------------------------------------------------------------------
  // FROZEN DÜNYASI
  // ---------------------------------------------------------------------
  {
    id: "lemon-frozen",
    name: { tr: "Limon Frozen", en: "Lemon Frozen" },
    description: { tr: "Buzlu limon şerbeti.", en: "Icy lemon slush." },
    price: "180 TL",
    category: "frozen",
  },
  {
    id: "seftali-frozen",
    name: { tr: "Şeftali Frozen", en: "Peach Frozen" },
    description: { tr: "Şeftali frozen.", en: "Peach frozen." },
    price: "180 TL",
    category: "frozen",
  },
  {
    id: "bogurtlen-frozen",
    name: { tr: "Böğürtlen Frozen", en: "Blackberry Frozen" },
    description: { tr: "Böğürtlen frozen.", en: "Blackberry frozen." },
    price: "180 TL",
    category: "frozen",
  },
  {
    id: "strawberry-frozen",
    name: { tr: "Çilek Frozen", en: "Strawberry Frozen" },
    description: { tr: "Çilek frozen.", en: "Strawberry frozen." },
    price: "180 TL",
    category: "frozen",
  },
  {
    id: "karadut-frozen",
    name: { tr: "Karadut Frozen", en: "Mulberry Frozen" },
    description: { tr: "Karadut frozen.", en: "Mulberry frozen." },
    price: "180 TL",
    category: "frozen",
  },
  {
    id: "berry-frozen",
    name: { tr: "Kırmızı Orman Meyveli Frozen", en: "Red Forest Berry Frozen" },
    description: { tr: "Kırmızı orman meyveli frozen.", en: "Red forest berry frozen." },
    price: "180 TL",
    category: "frozen",
  },
  {
    id: "yaban-mersini-frozen",
    name: { tr: "Yaban Mersini Frozen", en: "Blueberry Frozen" },
    description: { tr: "Yaban mersini frozen.", en: "Blueberry frozen." },
    price: "180 TL",
    category: "frozen",
  },
  // ---------------------------------------------------------------------
  // SMOOTHIES 'YOĞURTLU-SÜTLÜ'
  // ---------------------------------------------------------------------
  {
    id: "sari-bahce-smoothie",
    name: { tr: "Sarı Bahçe Meyveli Smoothies", en: "Yellow Garden Fruit Smoothies" },
    description: { tr: "Sarı bahçe meyveli smoothie.", en: "Yellow garden fruit smoothie." },
    price: "200 TL",
    category: "smoothie",
  },
  {
    id: "berry-smoothie",
    name: { tr: "Kırmızı Orman Meyveli Smoothies", en: "Red Forest Berry Smoothies" },
    description: { tr: "Kırmızı orman meyveli smoothie.", en: "Red forest berry smoothie." },
    price: "200 TL",
    category: "smoothie",
  },
  // ---------------------------------------------------------------------
  // TAZE SIKILMIŞ VİTAMİN BAR
  // ---------------------------------------------------------------------
  {
    id: "churchill",
    name: { tr: "Churchill", en: "Churchill" },
    description: { tr: "Churchill.", en: "Churchill." },
    price: "100 TL",
    category: "fresh-juice",
  },
  {
    id: "carrot-juice",
    name: { tr: "Havuç Suyu", en: "Carrot Juice" },
    description: { tr: "Taze sıkılmış havuç suyu.", en: "Freshly squeezed carrot juice." },
    price: "120 TL",
    category: "fresh-juice",
  },
  {
    id: "apple-juice",
    name: { tr: "Elma Suyu", en: "Apple Juice" },
    description: { tr: "Taze sıkılmış elma suyu.", en: "Freshly squeezed apple juice." },
    price: "120 TL",
    category: "fresh-juice",
  },
  {
    id: "pancar-suyu",
    name: { tr: "Pancar Suyu", en: "Beet Juice" },
    description: { tr: "Taze sıkılmış pancar suyu.", en: "Freshly squeezed beet juice." },
    price: "120 TL",
    category: "fresh-juice",
  },
  {
    id: "detox-nane",
    name: { tr: "Detox Nane", en: "Detox Mint" },
    description: { tr: "Detox nane.", en: "Detox mint." },
    price: "120 TL",
    category: "fresh-juice",
  },
  {
    id: "geberten-atom",
    name: { tr: "Geberten Atom (Allah Ne Verdiyse)", en: "Geberten Atom (Everything)" },
    description: { tr: "Karışık meyve suyu.", en: "Mixed fruit juice." },
    price: "220 TL",
    category: "fresh-juice",
  },
  // ---------------------------------------------------------------------
  // MOÇTAİL FRESH LEZZETLER
  // ---------------------------------------------------------------------
  {
    id: "berry-hibiscus",
    name: { tr: "Berry Hibiscus", en: "Berry Hibiscus" },
    description: { tr: "Berry hibiscus.", en: "Berry hibiscus." },
    price: "120 TL",
    category: "mocktail",
  },
  {
    id: "cool-lime",
    name: { tr: "Cool Lime", en: "Cool Lime" },
    description: { tr: "Cool lime.", en: "Cool lime." },
    price: "150 TL",
    category: "mocktail",
  },
  {
    id: "bubble-tea-cilek",
    name: { tr: "Bubble Tea Çilek", en: "Bubble Tea Strawberry" },
    description: { tr: "Çilekli bubble tea.", en: "Strawberry bubble tea." },
    price: "200 TL",
    category: "mocktail",
  },
  {
    id: "pink-mojito",
    name: { tr: "Pink Mojito", en: "Pink Mojito" },
    description: { tr: "Çilekli özel mojito.", en: "Special strawberry mojito." },
    price: "230 TL",
    category: "mocktail",
  },
  {
    id: "white-mojito",
    name: { tr: "White Mojito", en: "White Mojito" },
    description: { tr: "White mojito.", en: "White mojito." },
    price: "230 TL",
    category: "mocktail",
  },
  {
    id: "classic-mojito",
    name: { tr: "Classic Mojito", en: "Classic Mojito" },
    description: { tr: "Klasik mojito.", en: "Classic mojito." },
    price: "230 TL",
    category: "mocktail",
  },
  {
    id: "avlu-sunset",
    name: { tr: "Avlu Sunset Karamel Surup", en: "Avlu Sunset Caramel Syrup" },
    description: { tr: "Karamelli sunset.", en: "Caramel sunset." },
    price: "230 TL",
    category: "mocktail",
  },
  {
    id: "kilis-bahcesi",
    name: { tr: "Kilis Bahçası Egzotik Limon Otu", en: "Kilis Garden Exotic Lemon Grass" },
    description: { tr: "Egzotik limon otu.", en: "Exotic lemon grass." },
    price: "230 TL",
    category: "mocktail",
  },
  {
    id: "iki-kuzu",
    name: { tr: "İki Kuzu Kulağı", en: "Two Lamb Ears" },
    description: { tr: "İki kuzu kulağı.", en: "Two lamb ears." },
    price: "230 TL",
    category: "mocktail",
  },
  // ---------------------------------------------------------------------
  // LİMONATA DÜNYASI
  // ---------------------------------------------------------------------
  {
    id: "lemonade",
    name: { tr: "Evde Yaptık Limonata", en: "Homemade Lemonade" },
    description: { tr: "Taze sıkılmış limon ve nane.", en: "Fresh-squeezed lemon with mint." },
    price: "90 TL",
    category: "lemonade-bar",
  },
  {
    id: "strawberry-lemonade",
    name: { tr: "Çilek Limonata", en: "Strawberry Lemonade" },
    description: { tr: "Taze çilekli limonata.", en: "Lemonade with fresh strawberry." },
    price: "100 TL",
    category: "lemonade-bar",
  },
  {
    id: "rose-lemonade",
    name: { tr: "Gül Limonata", en: "Rose Lemonade" },
    description: { tr: "Gül aromalı limonata.", en: "Rose flavored lemonade." },
    price: "100 TL",
    category: "lemonade-bar",
  },
  {
    id: "botanical-lemonade",
    name: { tr: "Botanik Bahçe Limonata", en: "Botanical Garden Lemonade" },
    description: { tr: "Botanik bitkili limonata.", en: "Lemonade with botanical herbs." },
    price: "100 TL",
    category: "lemonade-bar",
  },
  // ---------------------------------------------------------------------
  // SOĞUK MEŞRUBATLAR
  // ---------------------------------------------------------------------
  {
    id: "water-pet",
    name: { tr: "Damla Su Pet", en: "PET Bottle Water" },
    description: { tr: "Pet şişe su.", en: "PET bottle water." },
    price: "25 TL",
    category: "soft-drinks",
  },
  {
    id: "water",
    name: { tr: "Damla Cam Su", en: "Glass Bottle Water" },
    description: { tr: "Cam şişe su.", en: "Glass bottle water." },
    price: "50 TL",
    category: "soft-drinks",
  },
  {
    id: "coca-cola",
    name: { tr: "Coco Cola Cam Şişe", en: "Coca Cola Glass Bottle" },
    description: { tr: "Cam şişe Coca Cola.", en: "Glass bottle Coca Cola." },
    price: "85 TL",
    category: "soft-drinks",
  },
  {
    id: "coca-cola-zero",
    name: { tr: "Cocola Cola Zero Cam", en: "Coca Cola Zero Glass" },
    description: { tr: "Cam şişe Coca Cola Zero.", en: "Glass bottle Coca Cola Zero." },
    price: "85 TL",
    category: "soft-drinks",
  },
  {
    id: "sprite",
    name: { tr: "Sprite Cam Şişe", en: "Sprite Glass Bottle" },
    description: { tr: "Cam şişe Sprite.", en: "Glass bottle Sprite." },
    price: "85 TL",
    category: "soft-drinks",
  },
  {
    id: "fanta",
    name: { tr: "Fanta Cam Şişe", en: "Fanta Glass Bottle" },
    description: { tr: "Cam şişe Fanta.", en: "Glass bottle Fanta." },
    price: "85 TL",
    category: "soft-drinks",
  },
  {
    id: "cappy-visne",
    name: { tr: "Cappy Vişne Kutu", en: "Cappy Sour Cherry Can" },
    description: { tr: "Kutu Cappy vişne.", en: "Cappy sour cherry can." },
    price: "85 TL",
    category: "soft-drinks",
  },
  {
    id: "fusetea",
    name: { tr: "Fucea Tea Limonlu, Ananas, Mango, Şeftali, Karpuz, Kavun-Çilek", en: "Fucea Tea Lemon, Pineapple, Mango, Peach, Watermelon, Melon-Strawberry" },
    description: {
      tr: "Limonlu, ananas, mango, şeftali, karpuz, kavun-çilek.",
      en: "Lemon, pineapple, mango, peach, watermelon, melon-strawberry.",
    },
    price: "85 TL",
    category: "soft-drinks",
  },
  {
    id: "sprite-teneke",
    name: { tr: "Sprite Kutu", en: "Sprite Can" },
    description: { tr: "Kutu Sprite.", en: "Sprite can." },
    price: "85 TL",
    category: "soft-drinks",
  },
  {
    id: "fanta-teneke",
    name: { tr: "Fanta Kutu", en: "Fanta Can" },
    description: { tr: "Kutu Fanta.", en: "Fanta can." },
    price: "85 TL",
    category: "soft-drinks",
  },
  {
    id: "coca-cola-kutu",
    name: { tr: "Coco Cola Kutu", en: "Coca Cola Can" },
    description: { tr: "Kutu Coca Cola.", en: "Coca Cola can." },
    price: "85 TL",
    category: "soft-drinks",
  },
  {
    id: "coca-cola-zero-kutu",
    name: { tr: "Coco Cola Zero Kutu", en: "Coca Cola Zero Can" },
    description: { tr: "Kutu Coca Cola Zero.", en: "Coca Cola Zero can." },
    price: "85 TL",
    category: "soft-drinks",
  },
  {
    id: "cappy-portakal",
    name: { tr: "Cappy Portakal Parçacıklı", en: "Cappy Orange with Pieces" },
    description: { tr: "Portakal parçacıklı Cappy.", en: "Orange with pieces Cappy." },
    price: "70 TL",
    category: "soft-drinks",
  },
  // ---------------------------------------------------------------------
  // DONDURMA
  // ---------------------------------------------------------------------
  {
    id: "dondurma-sade",
    name: { tr: "Sade Dondurma (Top)", en: "Plain Ice Cream (Scoop)" },
    description: { tr: "Tek top sade dondurma.", en: "Single scoop plain ice cream." },
    price: "30 TL",
    category: "ice-cream",
  },
  {
    id: "dondurma-meyveli",
    name: { tr: "Meyveli Dondurma (Top)", en: "Fruit Ice Cream (Scoop)" },
    description: { tr: "Tek top meyveli dondurma.", en: "Single scoop fruit ice cream." },
    price: "30 TL",
    category: "ice-cream",
  },
  {
    id: "dondurma-fistikli",
    name: { tr: "Fıstıklı Dondurma (Top)", en: "Pistachio Ice Cream (Scoop)" },
    description: { tr: "Tek top fıstıklı dondurma.", en: "Single scoop pistachio ice cream." },
    price: "50 TL",
    category: "ice-cream",
  },
  // ---------------------------------------------------------------------
  // CHEFFİN ÖZEL REÇETELİ PASTLARI VE TATLILARI
  // ---------------------------------------------------------------------
  {
    id: "mersin-kruvasan",
    name: { tr: "Mersin Toi Kruvasan", en: "Mersin Toi Croissant" },
    description: { tr: "Mersin toi kruvasan.", en: "Mersin toi croissant." },
    price: "330 TL",
    category: "desserts",
    isPopular: true,
  },
  {
    id: "trilece",
    name: { tr: "Sütlü Karamelli Triliçe", en: "Milk Caramel Trilece" },
    description: { tr: "Sütlü karamelli triliçe.", en: "Milk caramel trilece." },
    price: "190 TL",
    category: "desserts",
  },
  {
    id: "san-sebastian-cheesecake",
    name: {
      tr: "Sansebastian Queencake (Eritilmiş Çikolata İle)",
      en: "Sansebastian Queencake (with Melted Chocolate)",
    },
    description: {
      tr: "Yanık Basque usulü cheesecake, eritilmiş çikolata ile.",
      en: "Burnt Basque-style cheesecake with melted chocolate.",
    },
    price: "300 TL",
    category: "desserts",
    isPopular: true,
  },
  {
    id: "cheesecake",
    name: { tr: "Çilekli Cheesecake", en: "Strawberry Cheesecake" },
    description: { tr: "Cheesecake çeşitleri.", en: "Cheesecake varieties." },
    price: "250 TL",
    category: "desserts",
  },
  {
    id: "taze-frambuazli-cheesecake",
    name: { tr: "Frambuazlı Cheesecake", en: "Raspberry Cheesecake" },
    description: { tr: "Taze frambuazlı cheesecake.", en: "Fresh raspberry cheesecake." },
    price: "250 TL",
    category: "desserts",
  },
  {
    id: "taze-limonlu-cheesecake",
    name: { tr: "Limonlu Cheesecake", en: "Lemon Cheesecake" },
    description: { tr: "Taze limonlu cheesecake.", en: "Fresh lemon cheesecake." },
    price: "250 TL",
    category: "desserts",
  },
  {
    id: "tartolet-yummy",
    name: { tr: "Tartolet Yummy", en: "Tartolet Yummy" },
    description: { tr: "Tartolet yummy.", en: "Tartolet yummy." },
    price: "100 TL",
    category: "desserts",
  },
  {
    id: "carema-eclair",
    name: { tr: "Carema Eclair Ekler", en: "Carema Eclair" },
    description: { tr: "Carema eclair ekler.", en: "Carema eclair." },
    price: "80 TL",
    category: "desserts",
  },
  {
    id: "crem-puff",
    name: { tr: "Crem Puff", en: "Cream Puff" },
    description: { tr: "Kremalı profiterol usulü tatlı.", en: "Cream-filled choux pastry." },
    price: "",
    category: "desserts",
  },
  {
    id: "muhallebi-kadayifli",
    name: { tr: "Muhallebi Kadayıflı", en: "Milk Pudding with Kadayif" },
    description: { tr: "Kadayıflı muhallebi.", en: "Milk pudding with shredded phyllo." },
    price: "",
    category: "desserts",
  },
  {
    id: "profiterol",
    name: { tr: "Profiteröl Puding", en: "Profiterole Pudding" },
    description: { tr: "Çikolata soslu profiterol.", en: "Profiterole with chocolate sauce." },
    price: "170 TL",
    category: "desserts",
  },
  {
    id: "tiramisu",
    name: { tr: "Hmm Tiramisu", en: "Hmm Tiramisu" },
    description: { tr: "İtalyan usulü mascarpone'lu tatlı.", en: "Italian style dessert with mascarpone." },
    price: "200 TL",
    category: "desserts",
  },
  {
    id: "brownie",
    name: { tr: "Brownie", en: "Brownie" },
    description: { tr: "Yoğun bitter çikolatalı brownie.", en: "Dense dark-chocolate brownie." },
    price: "90 TL",
    category: "desserts",
  },
  {
    id: "sufle",
    name: { tr: "Sufle", en: "Souffle" },
    description: { tr: "Sıcak çikolatalı sufle.", en: "Hot chocolate souffle." },
    price: "90 TL",
    category: "desserts",
  },
  {
    id: "ahududu-nata",
    name: { tr: "Ahududu ve Yer Fıstıklı Nata", en: "Raspberry and Peanut Nata" },
    description: { tr: "Ahududu ve yer fıstıklı nata.", en: "Raspberry and peanut nata." },
    price: "100 TL",
    category: "desserts",
  },
  {
    id: "waffle",
    name: { tr: "Waffle", en: "Waffle" },
    description: { tr: "Belçika usulü waffle.", en: "Belgian waffle." },
    price: "240 TL",
    category: "desserts",
  },
  {
    id: "klasik-nata",
    name: { tr: "Klasik Nata", en: "Classic Nata" },
    description: { tr: "Klasik nata.", en: "Classic nata." },
    price: "100 TL",
    category: "desserts",
  },
  // ---------------------------------------------------------------------
  // TOST ÇEŞİTLERİ
  // ---------------------------------------------------------------------
  {
    id: "sucuklu-toast",
    name: { tr: "Sucuklu", en: "Sucuk Toast" },
    description: { tr: "Sucuklu tost.", en: "Toast with Turkish sausage." },
    price: "200 TL",
    category: "toast",
  },
  {
    id: "kasarli-toast",
    name: { tr: "Kaşarlı", en: "Cheese Toast" },
    description: { tr: "Kaşarlı tost.", en: "Cheese toast." },
    price: "200 TL",
    category: "toast",
  },
  {
    id: "karisik-toast",
    name: { tr: "Karışık", en: "Mixed Toast" },
    description: { tr: "Karışık tost.", en: "Mixed toast." },
    price: "250 TL",
    category: "toast",
  },
  {
    id: "thy-tostu",
    name: { tr: "THY Tostu", en: "THY Toast" },
    description: { tr: "THY tostu.", en: "THY toast." },
    price: "130 TL",
    category: "toast",
  },
  {
    id: "ayvalik-tostu",
    name: { tr: "Ayvalık Tostu", en: "Ayvalık Toast" },
    description: { tr: "Ayvalık tostu.", en: "Ayvalık toast." },
    price: "200 TL",
    category: "toast",
  },
  // ---------------------------------------------------------------------
  // PİZZALAR
  // ---------------------------------------------------------------------
  {
    id: "margherita-pizza",
    name: { tr: "Margarita", en: "Margherita" },
    description: { tr: "Domates sosu, mozzarella ve fesleğen.", en: "Tomato sauce, mozzarella and basil." },
    price: "210 TL",
    category: "pizza",
  },
  {
    id: "sucuk-pizza",
    name: { tr: "Sucuklu", en: "Sucuk Pizza" },
    description: { tr: "Sucuklu pizza.", en: "Turkish sausage pizza." },
    price: "210 TL",
    category: "pizza",
  },
  {
    id: "mantarli-zeytinli-pizza",
    name: { tr: "Mantarlı Zeytinli", en: "Mushroom Olive Pizza" },
    description: { tr: "Mantarlı zeytinli pizza.", en: "Mushroom olive pizza." },
    price: "210 TL",
    category: "pizza",
  },
  {
    id: "sosisli-misirli-pizza",
    name: { tr: "Sosisli Mısırlı", en: "Sausage Corn Pizza" },
    description: { tr: "Sosisli mısırlı pizza.", en: "Sausage corn pizza." },
    price: "210 TL",
    category: "pizza",
  },
  {
    id: "kumru-pizza",
    name: { tr: "Kumru", en: "Kumru Pizza" },
    description: { tr: "Kumru pizza.", en: "Kumru pizza." },
    price: "210 TL",
    category: "pizza",
  },
  {
    id: "efsane-5li",
    name: { tr: "Efsane 5'li", en: "Legendary 5" },
    description: { tr: "Efsane 5'li pizza.", en: "Legendary 5 pizza." },
    price: "230 TL",
    category: "pizza",
  },
  {
    id: "partiterra",
    name: { tr: "Partiterra", en: "Partiterra" },
    description: { tr: "Partiterra pizza.", en: "Partiterra pizza." },
    price: "230 TL",
    category: "pizza",
  },
  {
    id: "meksikali-pizza",
    name: { tr: "Meksikalı", en: "Mexican Pizza" },
    description: { tr: "Meksikalı pizza.", en: "Mexican pizza." },
    price: "230 TL",
    category: "pizza",
  },
  {
    id: "vejetaryen-pizza",
    name: { tr: "Vejetaryen", en: "Vegetarian Pizza" },
    description: { tr: "Vejetaryen pizza.", en: "Vegetarian pizza." },
    price: "230 TL",
    category: "pizza",
  },
  {
    id: "barbeku-tavuklu-pizza",
    name: { tr: "Barbekü Çıtır Tavuklu", en: "BBQ Crispy Chicken Pizza" },
    description: { tr: "Barbekü çıtır tavuklu pizza.", en: "BBQ crispy chicken pizza." },
    price: "230 TL",
    category: "pizza",
  },
  {
    id: "bol-bol-pizza",
    name: { tr: "Bol Bol", en: "Plenty Plenty" },
    description: { tr: "Bol bol pizza.", en: "Plenty plenty pizza." },
    price: "245 TL",
    category: "pizza",
  },
  {
    id: "cheddarli-karisik-pizza",
    name: { tr: "Cheddarlı Dev Karışık", en: "Cheddar Giant Mixed" },
    description: { tr: "Cheddarlı dev karışık pizza.", en: "Cheddar giant mixed pizza." },
    price: "245 TL",
    category: "pizza",
  },
  {
    id: "citir-tavuklu-pizza",
    name: { tr: "Çıtır Tavuklu", en: "Crispy Chicken Pizza" },
    description: { tr: "Çıtır tavuklu pizza.", en: "Crispy chicken pizza." },
    price: "245 TL",
    category: "pizza",
  },
  {
    id: "bol-etli-pizza",
    name: { tr: "Bol Etli", en: "Plenty Meat" },
    description: { tr: "Bol etli pizza.", en: "Plenty meat pizza." },
    price: "245 TL",
    category: "pizza",
  },
  {
    id: "sweet-chili-pizza",
    name: { tr: "Sweet Chili Süper Sucuklu", en: "Sweet Chili Super Sausage" },
    description: { tr: "Sweet chili süper sucuklu pizza.", en: "Sweet chili super sausage pizza." },
    price: "245 TL",
    category: "pizza",
  },
  {
    id: "bol-peynirli-pizza",
    name: { tr: "Bol Peynirli", en: "Plenty Cheese" },
    description: { tr: "Bol peynirli pizza.", en: "Plenty cheese pizza." },
    price: "260 TL",
    category: "pizza",
  },
  {
    id: "pastirmali-sucuklu-pizza",
    name: { tr: "Pastırmalı Sucuklu", en: "Pastrami Sausage Pizza" },
    description: { tr: "Pastırmalı sucuklu pizza.", en: "Pastrami sausage pizza." },
    price: "260 TL",
    category: "pizza",
  },
  {
    id: "kavurmali-pizza",
    name: { tr: "Kavurmalı", en: "Roasted Meat Pizza" },
    description: { tr: "Kavurmalı pizza.", en: "Roasted meat pizza." },
    price: "260 TL",
    category: "pizza",
  },
  {
    id: "fume-kaburgali-pizza",
    name: { tr: "Füme Kaburgalı", en: "Smoked Rib Pizza" },
    description: { tr: "Füme kaburgalı pizza.", en: "Smoked rib pizza." },
    price: "260 TL",
    category: "pizza",
  },
  {
    id: "pan-pizza-sucuklu",
    name: { tr: "Pan Pizza Sucuklu", en: "Pan Pizza Sausage" },
    description: { tr: "Pan pizza sucuklu.", en: "Pan pizza sausage." },
    price: "160 TL",
    category: "pizza",
  },
  {
    id: "pan-pizza-karisik",
    name: { tr: "Pan Pizza Karışık", en: "Pan Pizza Mixed" },
    description: { tr: "Pan pizza karışık.", en: "Pan pizza mixed." },
    price: "160 TL",
    category: "pizza",
  },
  // ---------------------------------------------------------------------
  // EFSANE MENÜLER
  // ---------------------------------------------------------------------
  {
    id: "combo-menu",
    name: { tr: "Combo Menü", en: "Combo Menu" },
    description: { tr: "Özel kombine menü.", en: "Special combo menu." },
    price: "240 TL",
    category: "menus",
  },
  {
    id: "special-menu",
    name: { tr: "Özel Menü", en: "Special Menu" },
    description: { tr: "Özel seçim menü.", en: "Special selection menu." },
    price: "325 TL",
    category: "menus",
  },
  {
    id: "champion-menu",
    name: { tr: "Şampiyon Menü", en: "Champion Menu" },
    description: { tr: "Şampiyonlara özel menü.", en: "Menu for champions." },
    price: "390 TL",
    category: "menus",
  },
  // ---------------------------------------------------------------------
  // ÇOCUK MENÜSÜ
  // ---------------------------------------------------------------------
  {
    id: "kids-chicken",
    name: { tr: "Tavuklu Mısırlı", en: "Chicken & Corn" },
    description: {
      tr: "Patates, çocuk pizza, ayran.",
      en: "Fries, kids pizza, ayran.",
    },
    price: "205 TL",
    category: "kids",
  },
  {
    id: "kids-sausage",
    name: { tr: "Sosisli Mısırlı", en: "Sausage & Corn" },
    description: {
      tr: "Patates, çocuk pizza, ayran.",
      en: "Fries, kids pizza, ayran.",
    },
    price: "205 TL",
    category: "kids",
  },
  // ---------------------------------------------------------------------
  // ÇITIRLAR
  // ---------------------------------------------------------------------
  {
    id: "french-fries",
    name: { tr: "Parmak Patates", en: "French Fries" },
    description: { tr: "Çıtır çıtır kızarmış patates.", en: "Crispy fried potatoes." },
    price: "75 TL",
    category: "crispy",
  },
  {
    id: "onion-rings",
    name: { tr: "10'lu Soğan Halkası", en: "10 Onion Rings" },
    description: { tr: "10'lu çıtır soğan halkası.", en: "10 pieces crispy onion rings." },
    price: "75 TL",
    category: "crispy",
  },
  {
    id: "citir-toplar",
    name: { tr: "10'lu Çıtır Topları", en: "10 Crispy Balls" },
    description: { tr: "10 adet çıtır mısır topu.", en: "10 pieces crispy corn balls." },
    price: "75 TL",
    category: "crispy",
  },
  {
    id: "nuggets",
    name: { tr: "4'lü Nuggets", en: "4 Nuggets" },
    description: { tr: "4'lü tavuk nugget.", en: "4 pieces chicken nuggets." },
    price: "75 TL",
    category: "crispy",
  },
  {
    id: "tavuk-gogus",
    name: { tr: "4'lü Tavuk Göğüs Parçaları", en: "4 Chicken Breast Pieces" },
    description: { tr: "4 adet çıtır tavuk göğüs parçası.", en: "4 pieces crispy chicken breast." },
    price: "75 TL",
    category: "crispy",
  },
  {
    id: "chicken-fingers",
    name: { tr: "3'lü Chicken Fingers", en: "3 Chicken Fingers" },
    description: { tr: "3'lü çıtır tavuk parçaları.", en: "3 pieces crispy chicken fingers." },
    price: "95 TL",
    category: "crispy",
  },
  {
    id: "citir-peynir",
    name: { tr: "4'lü Çıtır Peynir Çubukları", en: "4 Crispy Cheese Sticks" },
    description: { tr: "4 adet çıtır peynir çubuğu.", en: "4 pieces crispy cheese sticks." },
    price: "84 TL",
    category: "crispy",
  },
  {
    id: "citir-kutusu",
    name: { tr: "Çıtır Kutusu (425g)", en: "Crispy Box (425g)" },
    description: {
      tr: "1,5 porsiyon parmak patates, 4'lü tavuk göğüs parçaları, 2'li chicken fingers, 4'lü soğan halkası.",
      en: "1.5 portion fries, 4 chicken breast, 2 chicken fingers, 4 onion rings.",
    },
    price: "145 TL",
    category: "crispy",
  },
  {
    id: "patates-kovasi",
    name: { tr: "Patates Kovası (450g)", en: "Potato Bucket (450g)" },
    description: { tr: "1,5 porsiyon parmak patates.", en: "1.5 portion french fries." },
    price: "215 TL",
    category: "crispy",
  },
  {
    id: "citir-kovasi",
    name: { tr: "Çıtır Kovası", en: "Crispy Bucket" },
    description: {
      tr: "1,5 porsiyon parmak patates, 4'lü tavuk göğüs parçaları, 2'li chicken fingers, 4'lü soğan halkası.",
      en: "1.5 portion fries, 4 chicken breast, 2 chicken fingers, 4 onion rings.",
    },
    price: "265 TL",
    category: "crispy",
  },
  {
    id: "tavuk-kovasi",
    name: { tr: "Tavuk Kovası", en: "Chicken Bucket" },
    description: {
      tr: "Chicken fingers ve 4'lü tavuk göğüs parçaları.",
      en: "Chicken fingers and 4 chicken breast pieces.",
    },
    price: "265 TL",
    category: "crispy",
  },
];
