import type { ReactNode } from "react";

/** A labelled value in a ruled <dl> grid. Each fact draws its own top rule, so rows line up at any column count. */
export function Fact({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="border-t border-rule py-4 sm:pr-6">
      <dt className="label text-muted">{term}</dt>
      <dd className="mt-1.5 leading-snug">{children}</dd>
    </div>
  );
}
