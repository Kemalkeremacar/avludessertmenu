import { useLanguage } from "../i18n/LanguageContext";
import { tUi } from "../i18n/translations";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <fieldset className="shrink-0 border-0 p-0">
      <legend className="sr-only">{tUi("language", lang)}</legend>
      <div className="inline-flex min-h-[48px] gap-0.5 rounded-xl border border-gold/15 bg-cream p-1 shadow-soft">
        {(["tr", "en"] as const).map((code) => (
          <label
            key={code}
            className={[
              "type-label touch-manipulation flex min-h-[40px] min-w-[44px] cursor-pointer items-center justify-center rounded-[10px] px-3 font-semibold transition-all duration-200",
              lang === code
                ? "bg-espresso text-cream"
                : "text-warmgray hover:text-espresso",
            ].join(" ")}
          >
            <input
              type="radio"
              name="menu-language"
              value={code}
              checked={lang === code}
              onChange={() => setLang(code)}
              className="sr-only"
            />
            {code}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
