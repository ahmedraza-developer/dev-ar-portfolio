import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LIME = "#b8f53d";
const INK = "#0a0a0a";

/** Default share card for every route that doesn't supply its own image. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: INK,
          backgroundImage: `radial-gradient(circle at 50% -20%, rgba(184,245,61,0.22), transparent 60%)`,
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              backgroundColor: LIME,
              color: INK,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {site.initials}
          </div>
          <div style={{ fontSize: 34, fontWeight: 600 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: -4,
            }}
          >
            Front-end engineer
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: -4,
            }}
          >
            <span>building&nbsp;</span>
            <span style={{ color: LIME }}>fast</span>
            <span>&nbsp;web interfaces.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "#a3a3a3",
          }}
        >
          <div>{site.coreStack.slice(0, 3).join("  ·  ")}</div>
          <div>{new URL(site.url).host}</div>
        </div>
      </div>
    ),
    size,
  );
}
