import { ImageResponse } from "next/og";

import { site } from "@/config/site";

export const ogSize = { width: 1200, height: 630 };

/** Shared social card: same paper, ink and accent as the site. */
export function renderOgCard({ eyebrow, title }: { eyebrow: string; title: string }) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: "#f3efe6",
        color: "#1b1a17",
      }}
    >
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 3, textTransform: "uppercase", color: "#5f5a50" }}>
        {eyebrow}
      </div>
      <div style={{ display: "flex", fontSize: 68, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>{title}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 26, color: "#5f5a50" }}>
        <div style={{ width: 48, height: 4, backgroundColor: "#b83a14" }} />
        {site.name} · {site.location}
      </div>
    </div>,
    ogSize,
  );
}
