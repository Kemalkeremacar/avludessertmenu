import { Clock, Coffee } from "lucide-react";
import type { CafeInfo } from "../data/menu-types";

type Props = {
  cafe: CafeInfo;
};

export default function CafeHeader({ cafe }: Props) {
  return (
    <header className="relative overflow-hidden rounded-b-3xl bg-espresso px-5 pb-8 pt-10 text-cream">
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mocha/40 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-latte">
          <Coffee className="h-3.5 w-3.5" aria-hidden="true" />
          Digital Menu
        </div>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          {cafe.name}
        </h1>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/75 sm:text-base">
          {cafe.tagline}
        </p>
        {cafe.hours && (
          <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-cream/60">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {cafe.hours}
          </p>
        )}
      </div>
    </header>
  );
}
