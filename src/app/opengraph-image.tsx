import { ImageResponse } from "next/og";

export const alt = "Sanskar Jain — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(family: string, weight: number, text: string) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(cssUrl)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
  if (!match) throw new Error(`Could not load font: ${family}`);
  const res = await fetch(match[1]);
  return res.arrayBuffer();
}

export default async function Image() {
  const paper = "#f6f2e8";
  const ink = "#17140f";
  const inkFaint = "#6f664f";
  const accent = "#b53a1f";
  const line = "#ddd2b8";

  const headline = "Sanskar Jain";
  const tagline = "Builds software.";
  const label = "SOFTWARE DEVELOPER";
  const footerLeft = "Java / Spring Boot / Next.js / IoT";
  const footerRight = "sanskar-jain.vercel.app";

  const [display, mono] = await Promise.all([
    loadGoogleFont("Bricolage+Grotesque", 800, headline + tagline),
    loadGoogleFont(
      "IBM+Plex+Mono",
      500,
      label + footerLeft + footerRight
    ),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: paper,
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 40, height: 1, background: inkFaint }} />
          <div
            style={{
              fontFamily: "mono",
              fontSize: 22,
              letterSpacing: 4,
              color: inkFaint,
            }}
          >
            {label}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "display",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: -2,
            color: ink,
          }}
        >
          <span style={{ fontSize: 128 }}>{headline}</span>
          <span style={{ fontSize: 92, marginTop: 16, color: accent }}>
            {tagline}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${line}`,
            paddingTop: 28,
          }}
        >
          <div
            style={{
              fontFamily: "mono",
              fontSize: 22,
              letterSpacing: 2,
              color: inkFaint,
            }}
          >
            {footerLeft}
          </div>
          <div
            style={{
              fontFamily: "mono",
              fontSize: 22,
              letterSpacing: 2,
              color: ink,
            }}
          >
            {footerRight}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "display", data: display, style: "normal", weight: 800 },
        { name: "mono", data: mono, style: "normal", weight: 500 },
      ],
    }
  );
}
