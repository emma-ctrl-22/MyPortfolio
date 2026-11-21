import type { ComponentProps } from "react";

type ExternalLinkProps = Omit<ComponentProps<"a">, "target" | "rel"> & { href: string };

/** Opens in a new tab safely and tells screen-reader users that it will. */
export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
