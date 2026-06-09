import type { MenuCategory } from "../data/menu-types";

type Props = {
  categories: MenuCategory[];
  active: string;
  onChange: (id: string) => void;
};

export default function CategoryTabs({ categories, active, onChange }: Props) {
  const tabs: MenuCategory[] = [{ id: "all", label: "All" }, ...categories];

  return (
    <nav aria-label="Menu categories">
      <ul className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 py-1">
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <li key={tab.id} className="shrink-0">
              <button
                type="button"
                onClick={() => onChange(tab.id)}
                aria-pressed={isActive}
                className={[
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-espresso text-cream shadow-card"
                    : "border border-espresso/10 bg-white text-mocha hover:border-latte hover:text-espresso",
                ].join(" ")}
              >
                {tab.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
