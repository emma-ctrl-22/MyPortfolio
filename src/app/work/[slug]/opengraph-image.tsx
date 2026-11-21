import { featuredProjects, getFeaturedProject } from "@/content/projects";
import { ogSize, renderOgCard } from "@/lib/og-card";

export const alt = "Case study";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return featuredProjects.map(({ slug }) => ({ slug }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getFeaturedProject((await params).slug);

  return renderOgCard({
    eyebrow: `Case study · ${project?.platform ?? ""}`,
    title: project?.title ?? "Case study",
  });
}
