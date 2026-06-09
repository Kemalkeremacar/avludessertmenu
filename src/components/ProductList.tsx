import type { MenuItem } from "../data/menu-types";
import ProductCard from "./ProductCard";

type Props = {
  items: MenuItem[];
};

export default function ProductList({ items }: Props) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <li
          key={item.id}
          className="animate-fade-up"
          style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
        >
          <ProductCard item={item} />
        </li>
      ))}
    </ul>
  );
}
