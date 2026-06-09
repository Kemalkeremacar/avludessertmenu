import { SearchX } from "lucide-react";

type Props = {
  query: string;
};

export default function EmptyState({ query }: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-espresso/15 bg-white/50 px-6 py-14 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cream text-mocha">
        <SearchX className="h-6 w-6" aria-hidden="true" />
      </div>
      <h2 className="font-display text-xl font-semibold text-espresso">
        Nothing on the menu for that
      </h2>
      <p className="mt-1 max-w-xs text-sm text-mocha/75">
        {query
          ? `We couldn't find anything matching “${query}”. Try another search or category.`
          : "No items in this category yet."}
      </p>
    </div>
  );
}
