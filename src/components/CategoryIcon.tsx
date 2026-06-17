import {
  Coffee,
  CupSoda,
  GlassWater,
  IceCreamCone,
  IceCream2,
  CakeSlice,
  Pizza,
  Sandwich,
  Martini,
  Milk,
  Citrus,
  Leaf,
  Snowflake,
  Drumstick,
  Baby,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  coffee: Coffee,
  "flavored-coffee": Coffee,
  frappe: CupSoda,
  "turkish-coffee": Coffee,
  tea: Leaf,
  matcha: Leaf,
  cold: Snowflake,
  milkshake: Milk,
  frozen: Snowflake,
  smoothie: GlassWater,
  "fresh-juice": Citrus,
  mocktail: Martini,
  "lemonade-bar": Citrus,
  "soft-drinks": CupSoda,
  "ice-cream": IceCreamCone,
  desserts: CakeSlice,
  toast: Sandwich,
  pizza: Pizza,
  menus: UtensilsCrossed,
  kids: Baby,
  crispy: Drumstick,
};

type Props = {
  categoryId: string;
  className?: string;
};

export default function CategoryIcon({ categoryId, className }: Props) {
  const Icon = iconMap[categoryId] ?? IceCream2;
  return <Icon className={className} aria-hidden="true" />;
}
