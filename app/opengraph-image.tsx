import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated once at build time. Only flexbox and a small CSS subset are
 * supported by next/og — no grid, no external assets.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#01477A",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="72" height="72" viewBox="0 0 100 100">
            <path d="M8 50 A42 42 0 0 1 92 50 L92 58 L8 58 Z" fill="#F9A421" />
            <path
              d="M25 62 C31 84 69 84 75 62"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <circle cx="42" cy="92" r="6" fill="#FFFFFF" />
            <circle cx="72" cy="92" r="6" fill="#FFFFFF" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#FFFFFF", fontSize: 44, fontWeight: 700 }}>
              OWSHO
            </span>
            <span
              style={{
                color: "#F9A421",
                fontSize: 16,
                letterSpacing: 8,
                fontWeight: 600,
              }}
            >
              MARKETPLACE
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Local commerce,
          </span>
          <span
            style={{
              color: "#F9A421",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            delivered in minutes.
          </span>
        </div>

        <span style={{ color: "#B3DAF4", fontSize: 28 }}>
          owshomarketplace.com — bringing neighbourhood stores online
        </span>
      </div>
    ),
    size,
  );
}
