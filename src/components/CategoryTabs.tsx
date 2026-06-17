import type { MenuCategory } from "../data/menu-types";
import { useLanguage } from "../i18n/LanguageContext";
import { pickLocalized } from "../i18n/types";
import { tUi } from "../i18n/translations";

type Props = {
  categories: MenuCategory[];
  active: string;
  onChange: (id: string) => void;
};

export default function CategoryTabs({ categories, active, onChange }: Props) {
  const { lang } = useLanguage();

  const tabs = [
    { id: "all", label: tUi("all", lang) },
    ...categories.map((c) => ({
      id: c.id,
      label: pickLocalized(c.label, lang),
    })),
  ];

  return (
    <nav aria-label={tUi("categories", lang)}>
      <ul className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 py-1 sm:-mx-6 sm:px-6">
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <li key={tab.id} className="shrink-0">
              <button
                type="button"
                onClick={() => onChange(tab.id)}
                {...(isActive ? { "aria-current": "page" as const } : {})}
                className={[
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200",
                  isActive
                    ? "bg-espresso text-cream shadow-soft"
                    : "border border-black/10 bg-white/70 text-black/75 hover:bg-parchment hover:text-black",
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
