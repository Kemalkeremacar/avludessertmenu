import { SearchX } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { tEmptyWithQuery, tUi } from "../i18n/translations";

type Props = {
  query: string;
};

export default function EmptyState({ query }: Props) {
  const { lang } = useLanguage();

  return (
    <div className="animate-scale-in py-20 text-center">
      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 text-gold/60">
        <SearchX className="h-5 w-5" aria-hidden="true" />
      </div>
      <h2 className="font-display text-xl font-medium text-espresso">
        {tUi("emptyTitle", lang)}
      </h2>
      <p className="mx-auto mt-3 max-w-[260px] text-[0.9rem] leading-relaxed text-warmgray/75">
        {query ? tEmptyWithQuery(lang, query) : tUi("emptyCategory", lang)}
      </p>
    </div>
  );
}
