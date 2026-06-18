import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown, LayoutGrid, X } from "lucide-react";
import type { MenuCategory } from "../data/menu-types";
import { useLanguage } from "../i18n/LanguageContext";
import { pickLocalized } from "../i18n/types";
import { tUi } from "../i18n/translations";
import CategoryIcon from "./CategoryIcon";

type Props = {
  categories: MenuCategory[];
  active: string;
  onChange: (id: string) => void;
  disabled?: boolean;
};

type TabOption = {
  id: string;
  label: string;
};

function pillClasses(isActive: boolean, disabled: boolean) {
  return [
    "type-ui whitespace-nowrap rounded-full px-4 py-2 tracking-wide transition-all duration-200",
    disabled
      ? "cursor-not-allowed opacity-60"
      : "hover:bg-parchment hover:text-espresso",
    isActive
      ? "bg-espresso text-cream shadow-soft"
      : "border border-gold/15 bg-cream text-espresso/75",
  ].join(" ");
}

export default function CategoryTabs({
  categories,
  active,
  onChange,
  disabled = false,
}: Props) {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);

  const tabs: TabOption[] = [
    { id: "all", label: tUi("all", lang) },
    ...categories.map((category) => ({
      id: category.id,
      label: pickLocalized(category.label, lang),
    })),
  ];

  const activeLabel =
    tabs.find((tab) => tab.id === active)?.label ?? tUi("all", lang);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleSelect = (id: string) => {
    if (disabled) return;
    onChange(id);
    setOpen(false);
  };

  const sheet = open
    ? createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center md:items-center md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={tUi("selectCategory", lang)}
        >
          <button
            type="button"
            className="absolute inset-0 bg-espresso/45 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
            aria-label={tUi("close", lang)}
          />

          <div className="animate-sheet-up relative flex max-h-[min(85dvh,28rem)] w-full max-w-2xl flex-col rounded-t-3xl border border-gold/15 bg-parchment pb-[env(safe-area-inset-bottom,0px)] shadow-2xl md:max-h-[min(70vh,32rem)] md:rounded-3xl">
            <div className="flex items-center justify-between border-b border-gold/15 px-4 py-4 sm:px-5">
              <h2 className="type-section-title text-base">{tUi("selectCategory", lang)}</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={tUi("close", lang)}
                className="touch-target touch-manipulation flex items-center justify-center rounded-full text-warmgray transition hover:bg-cream hover:text-espresso active:bg-cream active:text-espresso"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <ul className="no-scrollbar flex-1 overflow-y-auto px-3 py-2 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-4">
              {tabs.map((tab) => {
                const isActive = tab.id === active;
                return (
                  <li key={tab.id}>
                    <button
                      type="button"
                      onClick={() => handleSelect(tab.id)}
                      className={[
                        "touch-manipulation mb-1 flex min-h-[52px] w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors active:scale-[0.99]",
                        isActive
                          ? "bg-espresso text-cream shadow-soft"
                          : "text-espresso hover:bg-cream active:bg-cream",
                      ].join(" ")}
                      {...(isActive ? { "aria-current": "true" as const } : {})}
                    >
                      <span
                        className={[
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border",
                          isActive
                            ? "border-cream/20 bg-cream/10 text-gold-light"
                            : "border-gold/20 bg-cream text-gold",
                        ].join(" ")}
                      >
                        {tab.id === "all" ? (
                          <LayoutGrid className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <CategoryIcon categoryId={tab.id} className="h-4 w-4" />
                        )}
                      </span>
                      <span className="type-ui min-w-0 flex-1 text-[15px] leading-snug">
                        {tab.label}
                      </span>
                      {isActive && (
                        <Check className="h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <nav aria-label={tUi("categories", lang)} className="hidden md:block">
        <ul className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <li key={tab.id}>
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => handleSelect(tab.id)}
                  className={pillClasses(isActive, disabled)}
                  {...(isActive ? { "aria-current": "page" as const } : {})}
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav aria-label={tUi("categories", lang)} className="md:hidden">
        <button
          type="button"
          disabled={disabled}
          onClick={() => !disabled && setOpen(true)}
          aria-haspopup="dialog"
          aria-label={tUi("selectCategory", lang)}
          className={[
            "type-ui flex min-h-[48px] w-full touch-manipulation items-center justify-between gap-3 rounded-xl border border-gold/15 bg-cream px-4 py-3 text-left text-base text-espresso shadow-soft outline-none transition-all duration-200",
            "focus-visible:border-gold/30 focus-visible:shadow-glow",
            disabled ? "cursor-not-allowed opacity-60" : "active:scale-[0.99]",
          ].join(" ")}
        >
          <span className="min-w-0 truncate">{activeLabel}</span>
          <ChevronDown
            className={[
              "h-4 w-4 shrink-0 text-warmgray/60 transition-transform duration-200",
              open ? "rotate-180" : "",
            ].join(" ")}
            aria-hidden="true"
          />
        </button>
        {sheet}
      </nav>
    </>
  );
}
