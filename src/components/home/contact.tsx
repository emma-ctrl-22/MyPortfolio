import { CopyButton } from "@/components/copy-button";
import { ExternalLink } from "@/components/external-link";
import { Section } from "@/components/section";
import { site } from "@/config/site";

export function Contact() {
  return (
    <Section id="contact" index="04" title="Contact">
      <p className="max-w-[24ch] text-[clamp(1.75rem,3.6vw,2.75rem)] leading-tight tracking-tight">
        Email is the best way to reach me.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          href={`mailto:${site.email}`}
          className="text-[clamp(1.35rem,4.6vw,3.25rem)] leading-none tracking-tight break-all ink-link"
        >
          {site.email}
        </a>
        <CopyButton value={site.email} description="email address" />
      </div>

      <p className="mt-10 max-w-[52ch] text-muted">{site.availability}</p>

      <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-rule pt-6 label text-muted">
        <li>
          <ExternalLink href={site.links.github} className="ink-link text-ink">
            GitHub
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={site.links.linkedin} className="ink-link text-ink">
            LinkedIn
          </ExternalLink>
        </li>
        <li>
          <a href={site.cv} className="ink-link text-ink">
            Download CV<span className="sr-only"> (PDF)</span>
          </a>
        </li>
      </ul>
    </Section>
  );
}
