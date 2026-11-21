import { site } from "@/config/site";
import { ogSize, renderOgCard } from "@/lib/og-card";

export const alt = `${site.name}, ${site.role.toLowerCase()} in Accra`;
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOgCard({
    eyebrow: site.role,
    title: site.tagline,
  });
}
