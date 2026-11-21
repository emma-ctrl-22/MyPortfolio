import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "@/components/external-link";
import { Fact } from "@/components/fact";
import { ProjectFigure } from "@/components/project-figure";
import { Section } from "@/components/section";
import { featuredProjects, getFeaturedProject, getNextFeaturedProject } from "@/content/projects";

// Only featured projects have case studies; anything else is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return featuredProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const project = getFeaturedProject((await params).slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { type: "article", title: project.title, description: project.summary },
  };
}

const figureSizes = "(min-width: 1216px) 1136px, 100vw";

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getFeaturedProject(slug);
  if (!project) notFound();

  const [cover, ...moreFigures] = project.figures;
  const next = getNextFeaturedProject(slug);
  const meta = [project.context, project.period].filter(Boolean).join(" · ");

  return (
    <article className="pt-10 md:pt-14">
      <Link href="/#work" className="label ink-link text-ink">
        <span aria-hidden="true">← </span>All work
      </Link>

      <header className="mt-14 grid md:mt-20 md:grid-cols-12 md:gap-x-10">
        <div className="md:col-span-9 md:col-start-4">
          {(meta || project.status) && (
            <p className="label text-muted">
              {meta}
              {meta && project.status && " · "}
              {project.status && <span className="text-accent">{project.status}</span>}
            </p>
          )}
          <h1 className="mt-4 text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[0.98] tracking-[-0.03em]">{project.title}</h1>
          <p className="mt-8 max-w-[34ch] text-2xl leading-snug text-muted md:text-[1.75rem]">{project.summary}</p>
        </div>
      </header>

      <dl className="mt-16 grid border-b border-rule sm:grid-cols-2 lg:grid-cols-4">
        <Fact term="My role">{project.role}</Fact>
        <Fact term="Platform">{project.platform}</Fact>
        <Fact term="Stack">{project.stack.join(", ")}</Fact>
        <Fact term="Links">
          {project.links.length > 0 ? (
            <ul className="space-y-1">
              {project.links.map((link) => (
                <li key={link.href}>
                  <ExternalLink href={link.href} className="ink-link">
                    {link.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          ) : (
            <span className="text-muted">Not public</span>
          )}
        </Fact>
      </dl>

      <div className="mt-14 md:mt-20">
        <ProjectFigure figure={cover} number={1} sizes={figureSizes} preload />
      </div>

      <div className="mt-16 md:mt-24">
        <Section id="overview" index="01" title="Overview">
          <div className="max-w-[62ch] space-y-6 text-xl leading-relaxed">
            {project.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="built" index="02" title="What I built">
          <ol className="max-w-[62ch] border-t border-rule">
            {project.built.map((item, i) => (
              <li key={item} className="grid grid-cols-[2.5rem_1fr] border-b border-rule py-4 text-lg leading-relaxed">
                <span className="pt-1.5 label text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </Section>

        {moreFigures.length > 0 && (
          <Section id="images" index="03" title="More images">
            <div className="space-y-14">
              {moreFigures.map((figure, i) => (
                <ProjectFigure
                  key={figure.caption}
                  figure={figure}
                  number={i + 2}
                  sizes="(min-width: 1216px) 840px, 100vw"
                />
              ))}
            </div>
          </Section>
        )}
      </div>

      {next && (
        <nav aria-label="Next case study" className="border-t border-rule py-16 md:py-24">
          <p className="label text-muted">Next case study</p>
          <Link
            href={`/work/${next.slug}`}
            className="group mt-4 inline-block text-[clamp(2rem,5vw,4rem)] leading-tight tracking-tight transition-colors hover:text-accent"
          >
            {next.title}{" "}
            <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-2">
              →
            </span>
          </Link>
        </nav>
      )}
    </article>
  );
}
