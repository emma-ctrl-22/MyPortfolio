import Image from "next/image";

import type { Figure } from "@/content/projects";

interface ProjectFigureProps {
  figure: Figure;
  number: number;
  /** Set on the first image a visitor sees, so it isn't lazy-loaded. */
  preload?: boolean;
  sizes: string;
}

export function ProjectFigure({ figure, number, preload = false, sizes }: ProjectFigureProps) {
  return (
    <figure>
      <div className="border border-rule bg-wash">
        <Image
          src={figure.src}
          alt={figure.alt}
          sizes={sizes}
          placeholder="blur"
          preload={preload}
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 font-mono text-xs leading-relaxed text-muted">
        <span className="text-ink">Fig. {number}</span> — {figure.caption}
      </figcaption>
    </figure>
  );
}
