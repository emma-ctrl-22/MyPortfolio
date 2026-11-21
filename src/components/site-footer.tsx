import { ExternalLink } from "@/components/external-link";
import { site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="page flex flex-col gap-3 py-8 label text-muted md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Made by hand in Accra.
        </p>
        <p>
          Set in Newsreader &amp; IBM Plex Mono ·{" "}
          <ExternalLink href={site.links.source} className="ink-link text-ink">
            Source
          </ExternalLink>
        </p>
      </div>
    </footer>
  );
}
