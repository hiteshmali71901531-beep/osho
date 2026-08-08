/**
 * OWSHO brand mark, hand-built as inline SVG (no network request, no CLS).
 *
 * The mark is the striped shop canopy over a smile with two "motion" eyes,
 * per the brand guidelines' Symbol/Icon variation. The wordmark is rendered as
 * real HTML text in the brand typeface rather than outlined paths, so it stays
 * crisp at every size, is selectable, and costs zero extra bytes.
 */

/**
 * The canopy is drawn as an orange base (the full dome with five scalloped
 * bottom lobes) plus two blue lobes on top. Deliberately no <clipPath>: the
 * logo renders more than once per page, and a referenced element would need a
 * document-unique id — which a Server Component cannot generate.
 *
 * Geometry: dome centred (50,50) r=42; lobe boundaries every 16.8 units from
 * x=8 to x=92; each bottom bulge is a semicircle of r=8.4. The blue lobes'
 * top corners sit on the dome arc at y = 50 − √(42² − (x−50)²).
 */
const CANOPY_BASE =
  "M8 50 A42 42 0 0 1 92 50 " +
  "A8.4 8.4 0 0 1 75.2 50 A8.4 8.4 0 0 1 58.4 50 " +
  "A8.4 8.4 0 0 1 41.6 50 A8.4 8.4 0 0 1 24.8 50 " +
  "A8.4 8.4 0 0 1 8 50 Z";

const CANOPY_BLUE_LOBES = [
  "M24.8 16.4 A42 42 0 0 1 41.6 8.85 L41.6 50 A8.4 8.4 0 0 1 24.8 50 Z",
  "M58.4 8.85 A42 42 0 0 1 75.2 16.4 L75.2 50 A8.4 8.4 0 0 1 58.4 50 Z",
];

export function LogoMark({
  className = "",
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}

      <path d={CANOPY_BASE} fill="#F9A421" />
      {CANOPY_BLUE_LOBES.map((d) => (
        <path key={d} d={d} fill="#006EB7" />
      ))}

      {/* Smile */}
      <path
        d="M25 62 C31 84 69 84 75 62"
        fill="none"
        stroke="#006EB7"
        strokeWidth="9.5"
        strokeLinecap="round"
      />

      {/* Motion streaks + eyes */}
      <path d="M13 92.5 L33 89.4 L33 95.6 Z" fill="#F9A421" />
      <circle cx="42" cy="92.5" r="5.6" fill="#006EB7" />
      <path d="M50 92.5 L64 89.4 L64 95.6 Z" fill="#F9A421" />
      <circle cx="72" cy="92.5" r="5.6" fill="#006EB7" />
    </svg>
  );
}

export function Logo({
  tone = "light",
  className = "",
}: {
  /** "light" = on a white surface, "dark" = on the blue hero / footer. */
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col justify-center leading-none">
        <span
          className={`text-xl leading-none font-bold tracking-tight ${
            tone === "dark" ? "text-white" : "text-brand-600"
          }`}
        >
          OWSHO
        </span>
        <span className="mt-1 text-[0.5rem] leading-none font-semibold tracking-[0.34em] text-accent-500">
          MARKETPLACE
        </span>
      </span>
    </span>
  );
}
