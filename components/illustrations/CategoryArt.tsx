/**
 * Flat SVG illustrations for the six top-level categories, drawn in the brand
 * palette. These replace the photographic tiles in the design comp: same
 * silhouette and colour weight, but a few hundred bytes each instead of a
 * network request, and no layout shift.
 */

const BLUE = "#006EB7";
const BLUE_DEEP = "#01477A";
const BLUE_SOFT = "#B3DAF4";
const ORANGE = "#F9A421";
const ORANGE_SOFT = "#FFDFA8";

function Art({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" focusable="false" className="h-full w-full">
      {children}
    </svg>
  );
}

const FashionArt = () => (
  <Art>
    <path
      d="M36 22 24 28l-5 15 9 4 3-7v34h34V40l3 7 9-4-5-15-12-6-14 6Z"
      fill={BLUE}
    />
    <path d="M36 22h28l-14 9Z" fill={BLUE_SOFT} />
    <path d="M31 62h34v8H31Z" fill={BLUE_DEEP} opacity="0.35" />
  </Art>
);

const GroceryArt = () => (
  <Art>
    <circle cx="34" cy="38" r="9" fill={ORANGE} />
    <circle cx="52" cy="34" r="7" fill="#E24B3A" />
    <path d="M62 42c4-6 9-8 9-8s-1 8-6 11Z" fill="#3FAE5A" />
    <path d="M18 44h60l-6 28a4 4 0 0 1-4 3H28a4 4 0 0 1-4-3Z" fill={BLUE} />
    <path d="M28 50v20M40 50v20M52 50v20M64 50v20" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.5" />
    <path d="M18 44h60" stroke={BLUE_DEEP} strokeWidth="5" strokeLinecap="round" />
  </Art>
);

const HomeArt = () => (
  <Art>
    <path d="M22 46a7 7 0 0 1 14 0v12H22Z" fill={BLUE_DEEP} />
    <path d="M60 46a7 7 0 0 1 14 0v12H60Z" fill={BLUE_DEEP} />
    <path d="M28 32a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v20H28Z" fill={BLUE} />
    <path d="M24 50h48a5 5 0 0 1 5 5v13H19V55a5 5 0 0 1 5-5Z" fill={BLUE} />
    <path d="M26 68h6v8h-6ZM64 68h6v8h-6Z" fill={BLUE_DEEP} />
  </Art>
);

const BeautyArt = () => (
  <Art>
    <rect x="24" y="38" width="20" height="36" rx="6" fill={BLUE} />
    <path d="M31 26h6v12h-6Z" fill={BLUE_SOFT} />
    <path d="M28 22h12v6H28Z" fill={BLUE_DEEP} />
    <rect x="52" y="46" width="20" height="28" rx="6" fill={ORANGE} />
    <path d="M58 34h8v12h-8Z" fill={ORANGE_SOFT} />
    <path d="M56 30h12v5H56Z" fill="#C25C0C" />
    <rect x="28" y="48" width="12" height="10" rx="2" fill="#FFFFFF" opacity="0.75" />
  </Art>
);

const ElectronicsArt = () => (
  <Art>
    <rect x="30" y="14" width="36" height="68" rx="8" fill={BLUE_DEEP} />
    <rect x="34" y="21" width="28" height="52" rx="4" fill={BLUE} />
    <circle cx="48" cy="77" r="2.6" fill={BLUE_SOFT} />
    <rect x="39" y="17" width="18" height="2.4" rx="1.2" fill={BLUE_SOFT} />
    <rect x="39" y="29" width="18" height="4" rx="2" fill="#FFFFFF" opacity="0.6" />
    <circle cx="48" cy="48" r="8" fill={ORANGE} />
  </Art>
);

const SportsArt = () => (
  <Art>
    <circle cx="48" cy="48" r="28" fill="#FFFFFF" stroke={BLUE_DEEP} strokeWidth="3" />
    <path d="m48 34 11 8-4.2 13H41.2L37 42Z" fill={BLUE_DEEP} />
    <path d="M48 20v14M22.5 41l14.5 1M73.5 41 59 42M31 71l10-11M65 71 55 60" stroke={BLUE_DEEP} strokeWidth="3" strokeLinecap="round" />
  </Art>
);

const ART: Record<string, () => React.JSX.Element> = {
  fashion: FashionArt,
  grocery: GroceryArt,
  "home-living": HomeArt,
  beauty: BeautyArt,
  electronics: ElectronicsArt,
  sports: SportsArt,
};

export function CategoryArt({ slug }: { slug: string }) {
  const Component = ART[slug] ?? FashionArt;
  return <Component />;
}
