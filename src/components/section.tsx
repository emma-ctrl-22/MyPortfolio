import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

/**
 * A numbered page section: label in the left column, content in the right.
 * The label is the section's real heading, so the outline stays correct for assistive tech.
 */
export function Section({ id, index, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-8 border-t border-rule py-16 md:py-24">
      <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-10">
        <h2 id={headingId} className="label text-muted md:col-span-3">
          <span className="text-accent">{index}</span>
          <span aria-hidden="true"> — </span>
          {title}
        </h2>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
