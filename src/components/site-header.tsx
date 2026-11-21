import Link from "next/link";

import { site } from "@/config/site";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-rule">
      <div className="page flex flex-wrap items-baseline justify-between gap-x-10 gap-y-3 py-5">
        <Link href="/" className="text-xl leading-none tracking-tight transition-colors hover:text-accent">
          {site.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 label text-muted">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.cv} className="ink-link text-accent">
                CV<span className="sr-only"> (PDF)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
