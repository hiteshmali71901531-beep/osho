import { ImageResponse } from "next/og";

/**
 * A raster copy of the brand mark at /logo.png.
 *
 * The favicon is an SVG, but the `logo` property of the Organization schema is
 * consumed by crawlers and social products that expect a bitmap, so this route
 * renders the same mark once at build time as a 512x512 PNG.
 */
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#01477A",
        }}
      >
        <svg width="360" height="360" viewBox="0 0 100 100">
          <path d="M8 46 A42 42 0 0 1 92 46 L92 54 L8 54 Z" fill="#F9A421" />
          <path
            d="M25 60 C31 82 69 82 75 60"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <circle cx="42" cy="88" r="6" fill="#FFFFFF" />
          <circle cx="72" cy="88" r="6" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    { width: 512, height: 512 },
  );
}
