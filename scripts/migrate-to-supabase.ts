import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import ws from "ws";
import { categories, cafeInfo, menuItems } from "../src/data/menu-data";

dotenv.config({ path: ".env.local" });

const url = process.env.VITE_SUPABASE_URL;
const serviceKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error(
    "Set VITE_SUPABASE_URL and VITE_SUPABASE_SERVICE_ROLE_KEY in .env.local"
  );
  process.exit(1);
}

const supabase = createClient(url, serviceKey, {
  realtime: { transport: ws as never },
});

async function migrate() {
  // 1. Migrate categories
  const categoryRows = categories.map((cat, index) => ({
    id: cat.id,
    label_tr: cat.label.tr,
    label_en: cat.label.en,
    description_tr: cat.description?.tr ?? null,
    description_en: cat.description?.en ?? null,
    sort_order: index,
  }));

  const { error: catError } = await supabase
    .from("categories")
    .upsert(categoryRows, { onConflict: "id" });

  if (catError) {
    console.error("Categories migration failed:", catError);
    process.exit(1);
  }
  console.log(`Migrated ${categoryRows.length} categories.`);

  // 2. Migrate cafe info
  const { error: cafeError } = await supabase.from("cafe_info").upsert(
    {
      id: 1,
      name: cafeInfo.name,
      tagline_tr: cafeInfo.tagline.tr,
      tagline_en: cafeInfo.tagline.en,
      hours_tr: cafeInfo.hours?.tr ?? null,
      hours_en: cafeInfo.hours?.en ?? null,
    },
    { onConflict: "id" }
  );

  if (cafeError) {
    console.error("Cafe info migration failed:", cafeError);
    process.exit(1);
  }
  console.log("Migrated cafe info.");

  // 3. Migrate menu items
  const itemRows = menuItems.map((item) => ({
    id: item.id,
    name_tr: item.name.tr,
    name_en: item.name.en,
    description_tr: item.description.tr,
    description_en: item.description.en,
    price: item.price,
    category_id: item.category,
    image: item.image ?? null,
    tags: item.tags ?? null,
    is_popular: item.isPopular ?? false,
    is_available: item.isAvailable ?? true,
  }));

  const { error: itemError } = await supabase
    .from("menu_items")
    .upsert(itemRows, { onConflict: "id" });

  if (itemError) {
    console.error("Menu items migration failed:", itemError);
    process.exit(1);
  }
  console.log(`Migrated ${itemRows.length} menu items.`);
  console.log("Migration complete.");
}

migrate().catch((err) => {
  console.error(err);
  process.exit(1);
});
