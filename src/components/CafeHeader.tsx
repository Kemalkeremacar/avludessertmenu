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
    <header className="relative bg-gradient-to-b from-espresso/60 via-espresso/30 to-transparent px-4 pb-8 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-6 sm:pb-12 md:pb-16 md:pt-8 lg:pb-20 lg:pt-10">
      <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
        <Ornament />

        <h1 className="type-hero mt-3 sm:mt-4">
          {cafe.name}
        </h1>

        <p className="type-tagline mx-auto mt-3 max-w-sm drop-shadow-md">
          {pickLocalized(cafe.tagline, lang)}
        </p>

        {cafe.hours && (
          <p className="type-label mt-4 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-black/25 px-4 py-1.5 text-cream backdrop-blur-sm">
            <Clock className="h-3 w-3 text-gold-light" aria-hidden="true" />
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
