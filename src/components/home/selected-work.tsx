import Image from "next/image";
import Link from "next/link";

import { ExternalLink } from "@/components/external-link";
import { Section } from "@/components/section";
import { archivedProjects, featuredProjects, type ArchivedProject, type FeaturedProject } from "@/content/projects";

export function SelectedWork() {
  return (
    <Section id="work" index="01" title="Selected work">
      <ol className="space-y-20 md:space-y-28">
        {featuredProjects.map((project, i) => (
          <li key={project.slug}>
            <FeaturedProjectCard project={project} number={i + 1} preload={i === 0} />
          </li>
        ))}
      </ol>

      <div className="mt-24 md:mt-32">
        <h3 className="label text-muted">Also built</h3>
        <ul className="mt-4 border-t border-rule">
          {archivedProjects.map((project) => (
            <ArchiveRow key={project.slug} project={project} />
          ))}
        </ul>
      </div>
    </Section>
  );
}

function FeaturedProjectCard({
  project,
  number,
  preload,
}: {
  project: FeaturedProject;
  number: number;
  preload: boolean;
}) {
  const [cover] = project.figures;
  const titleId = `${project.slug}-title`;
  const meta = [project.context, project.period].filter(Boolean).join(" · ");

  return (
    // The title link is stretched over the whole card, so the card is one click target
    // without wrapping block content (and the image's alt text) inside an <a>.
    <article aria-labelledby={titleId} className="group relative grid gap-6 lg:grid-cols-9 lg:gap-10">
      <div className="self-start border border-rule bg-wash transition-colors group-hover:border-ink lg:col-span-5">
        <Image
          src={cover.src}
          alt={cover.alt}
          sizes="(min-width: 1216px) 560px, (min-width: 1024px) 45vw, 100vw"
          placeholder="blur"
          preload={preload}
          className="h-auto w-full"
        />
      </div>

      <div className="flex flex-col lg:col-span-4">
        <p className="label text-muted">
          <span className="text-ink tabular-nums">{String(number).padStart(2, "0")}</span> · {project.platform}
        </p>
        <h3 id={titleId} className="mt-3 text-3xl leading-tight tracking-tight md:text-4xl">
          <Link
            href={`/work/${project.slug}`}
            className="transition-colors group-hover:text-accent after:absolute after:inset-0"
          >
            {project.title}
          </Link>
        </h3>
        {(meta || project.status) && (
          <p className="mt-2 label text-muted">
            {meta}
            {meta && project.status && " · "}
            {project.status && <span className="text-accent">{project.status}</span>}
          </p>
        )}
        <p className="mt-5 leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-6 font-mono text-xs leading-relaxed text-muted">{project.stack.join(" · ")}</p>
        <p aria-hidden="true" className="mt-auto pt-8 text-ink">
          Read the case study <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </p>
      </div>
    </article>
  );
}

function ArchiveRow({ project }: { project: ArchivedProject }) {
  const [link] = project.links;

  return (
    <li className="grid gap-x-8 gap-y-1 border-b border-rule py-5 md:grid-cols-[13rem_1fr_11rem]">
      <p className="text-xl leading-snug">{project.title}</p>
      <div>
        <p className="leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-2 font-mono text-xs leading-relaxed text-muted">
          {[project.platform, ...project.stack].join(" · ")}
        </p>
      </div>
      <p className="label text-muted md:pt-1.5 md:text-right">
        {link ? (
          <ExternalLink href={link.href} className="ink-link text-ink">
            {link.label}
          </ExternalLink>
        ) : (
          "Not public"
        )}
      </p>
    </li>
  );
}
