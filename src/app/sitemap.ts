import type { MetadataRoute } from "next";

import { site } from "@/config/site";
import { featuredProjects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...featuredProjects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
