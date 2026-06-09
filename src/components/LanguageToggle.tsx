import { useLanguage } from "../i18n/LanguageContext";
import { tUi } from "../i18n/translations";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <fieldset className="shrink-0 border-0 p-0">
      <legend className="sr-only">{tUi("language", lang)}</legend>
      <div className="inline-flex gap-0.5 rounded-xl border border-espresso/[0.06] bg-white/80 p-0.5 shadow-soft">
        {(["tr", "en"] as const).map((code) => (
          <label
            key={code}
            className={[
              "cursor-pointer rounded-[10px] px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-200",
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
