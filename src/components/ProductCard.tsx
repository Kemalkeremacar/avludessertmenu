import { Coffee, Sparkles } from "lucide-react";
import type { MenuItem } from "../data/menu-types";

type Props = {
  item: MenuItem;
};

export default function ProductCard({ item }: Props) {
  const unavailable = item.isAvailable === false;

  return (
    <article
      className={[
        "group flex gap-4 rounded-2xl border border-espresso/8 bg-white p-3 shadow-card transition",
        unavailable ? "opacity-60" : "hover:-translate-y-0.5 hover:shadow-lg",
      ].join(" ")}
      aria-label={item.name}
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-cream sm:h-24 sm:w-24">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-mocha/40"
            aria-hidden="true"
          >
            <Coffee className="h-7 w-7" />
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug text-espresso">
            {item.name}
          </h3>
          <span className="shrink-0 font-semibold text-mocha">{item.price}</span>
        </div>

        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-mocha/80">
          {item.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
          {item.isPopular && !unavailable && (
            <span className="inline-flex items-center gap-1 rounded-full bg-latte/20 px-2 py-0.5 text-xs font-medium text-mocha">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Popular
            </span>
          )}
          {unavailable && (
            <span className="rounded-full bg-espresso/10 px-2 py-0.5 text-xs font-medium text-espresso/70">
              Unavailable
            </span>
          )}
          {item.tags
            ?.filter((t) => t !== "popular")
            .map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-espresso/10 px-2 py-0.5 text-xs capitalize text-mocha/70"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </article>
  );
}
