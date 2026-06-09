import { Clock } from "lucide-react";
import type { CafeInfo } from "../data/menu-types";
import { useLanguage } from "../i18n/LanguageContext";
import { pickLocalized } from "../i18n/types";

type Props = {
  cafe: CafeInfo;
};

function Ornament() {
  return (
    <svg
      className="mx-auto h-5 w-24 text-gold/50"
      viewBox="0 0 96 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 10h30M66 10h30M42 10h12"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <circle cx="36" cy="10" r="2" fill="currentColor" />
      <circle cx="60" cy="10" r="2" fill="currentColor" />
      <circle cx="48" cy="10" r="3" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

export default function CafeHeader({ cafe }: Props) {
  const { lang } = useLanguage();

  return (
    <header className="px-4 pb-4 pt-5 sm:px-6 sm:pb-6 sm:pt-8">
      <div className="mx-auto max-w-2xl text-center">
        <Ornament />

        <h1 className="mt-3 font-display text-[2.2rem] font-medium leading-none tracking-tight text-espresso sm:mt-4 sm:text-[3rem]">
          {cafe.name}
        </h1>

        <p className="mx-auto mt-3 max-w-sm font-display text-base italic leading-relaxed text-mocha/75 sm:text-lg">
          {pickLocalized(cafe.tagline, lang)}
        </p>

        {cafe.hours && (
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/15 bg-white/50 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-warmgray">
            <Clock className="h-3 w-3 text-gold" aria-hidden="true" />
            {pickLocalized(cafe.hours, lang)}
          </p>
        )}

        <div className="mt-4 sm:mt-5">
          <Ornament />
        </div>
      </div>
    </header>
  );
}
