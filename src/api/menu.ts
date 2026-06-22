import { supabase } from "../lib/supabase";
import type {
  CafeInfo,
  MenuCategory,
  MenuItem,
} from "../data/menu-types";

export async function getCategories(): Promise<MenuCategory[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) throw error;

  return (data ?? []).map((row) => {
    const description =
      row.description_tr && row.description_en
        ? { tr: row.description_tr, en: row.description_en }
        : undefined;

    return {
      id: row.id,
      label: { tr: row.label_tr, en: row.label_en },
      description,
    };
  });
}

export async function getCafeInfo(): Promise<CafeInfo> {
  const { data, error } = await supabase
    .from("cafe_info")
    .select("*")
    .single();

  if (error) throw error;

  const hours =
    data.hours_tr && data.hours_en
      ? { tr: data.hours_tr, en: data.hours_en }
      : undefined;

  return {
    name: data.name,
    tagline: { tr: data.tagline_tr, en: data.tagline_en },
    hours,
  };
}

export async function getMenuItems(): Promise<MenuItem[]> {
  const { data, error } = await supabase.from("menu_items").select("*");

  if (error) throw error;

  return (data ?? []).map((row) => ({
    id: row.id,
    name: { tr: row.name_tr, en: row.name_en },
    description: { tr: row.description_tr, en: row.description_en },
    price: row.price,
    category: row.category_id,
    image: row.image ?? undefined,
    tags: row.tags ?? undefined,
    isPopular: row.is_popular,
    isAvailable: row.is_available,
  }));
}

export async function updateMenuItemPrice(
  id: string,
  price: string
): Promise<void> {
  const { error } = await supabase
    .from("menu_items")
    .update({ price })
    .eq("id", id);

  if (error) throw error;
}

export async function updateMenuItemAvailability(
  id: string,
  isAvailable: boolean
): Promise<void> {
  const { error } = await supabase
    .from("menu_items")
    .update({ is_available: isAvailable })
    .eq("id", id);

  if (error) throw error;
}
