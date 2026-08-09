/**
 * Flat SVG illustrations for the seven top-level categories, drawn in the
 * brand palette. These replace photographic tiles: same silhouette and colour
 * weight, but a few hundred bytes each instead of a network request, and no
 * layout shift.
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

const SnacksArt = () => (
  <Art>
    {/* Cup with straw */}
    <path d="M20 34h26l-4 40a4 4 0 0 1-4 3.5H28a4 4 0 0 1-4-3.5Z" fill={BLUE} />
    <path d="M18 28h30v7H18Z" fill={BLUE_DEEP} />
    <path d="M40 26 52 12" stroke={ORANGE} strokeWidth="4" strokeLinecap="round" />
    {/* Snack pack */}
    <path d="M56 32h22v40a4 4 0 0 1-4 4H60a4 4 0 0 1-4-4Z" fill={ORANGE} />
    <path d="M56 32h22l-4-8H60Z" fill="#C25C0C" />
    <path d="M62 46h10M62 54h10" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
  </Art>
);

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

const HouseholdArt = () => (
  <Art>
    <path d="M14 44 48 20l34 24" stroke={BLUE_DEEP} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M22 44h52v30a4 4 0 0 1-4 4H26a4 4 0 0 1-4-4Z" fill={BLUE} />
    <rect x="40" y="56" width="16" height="22" fill={ORANGE} />
    <rect x="28" y="52" width="9" height="9" rx="1.5" fill="#FFFFFF" opacity="0.8" />
    <rect x="59" y="52" width="9" height="9" rx="1.5" fill="#FFFFFF" opacity="0.8" />
  </Art>
);

const SportsArt = () => (
  <Art>
    <circle cx="36" cy="52" r="22" fill="#FFFFFF" stroke={BLUE_DEEP} strokeWidth="3" />
    <path d="m36 41 8.6 6.3-3.3 10.2H30.7L27.4 47.3Z" fill={BLUE_DEEP} />
    <path d="M36 30v11M14.6 46.5 27 47.4M57.4 46.5 45 47.4M22 68.5l8.7-8.6M50 68.5l-8.7-8.6" stroke={BLUE_DEEP} strokeWidth="2.6" strokeLinecap="round" />
    {/* Pencil */}
    <path d="M64 74 60 76l1.4-4.2 14-25 3.6 2.2Z" fill={ORANGE} />
    <path d="m75.4 46.8 3.6 2.2 2.6-4.6-3.6-2.2Z" fill={BLUE_DEEP} />
  </Art>
);

const PoojaArt = () => (
  <Art>
    {/* Diya flame */}
    <path d="M48 16c5 7 7 10 7 14a7 7 0 0 1-14 0c0-4 2-7 7-14Z" fill={ORANGE} />
    <path d="M48 26c2 3 2.8 4.2 2.8 5.8a2.8 2.8 0 0 1-5.6 0c0-1.6.8-2.8 2.8-5.8Z" fill="#FFFFFF" opacity="0.8" />
    {/* Lamp bowl */}
    <path d="M22 48h52c0 12-11 20-26 20S22 60 22 48Z" fill={BLUE} />
    <path d="M18 48h60" stroke={BLUE_DEEP} strokeWidth="5" strokeLinecap="round" />
    <path d="M36 68h24l5 10H31Z" fill={BLUE_DEEP} />
    {/* Petals */}
    <circle cx="20" cy="76" r="5" fill={ORANGE_SOFT} />
    <circle cx="76" cy="76" r="5" fill={ORANGE_SOFT} />
  </Art>
);

const ART: Record<string, () => React.JSX.Element> = {
  "grocery-kitchen": GroceryArt,
  "snacks-drinks": SnacksArt,
  "fashion-lifestyle": FashionArt,
  "beauty-personal-care": BeautyArt,
  "household-items": HouseholdArt,
  "sports-stationery": SportsArt,
  "pooja-store": PoojaArt,
};

export function CategoryArt({ slug }: { slug: string }) {
  const Component = ART[slug] ?? GroceryArt;
  return <Component />;
}
