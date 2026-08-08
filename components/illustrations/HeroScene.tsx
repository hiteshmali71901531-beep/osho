/**
 * The hero illustration, rebuilt as inline SVG: a phone showing the OWSHO app
 * surrounded by a shopping bag, a location pin, a chat bubble and a plant.
 *
 * Drawn rather than photographed so the hero costs no network request, never
 * shifts layout, and stays sharp on any display. It is purely decorative — the
 * hero's meaning lives in the adjacent heading and copy — so it is hidden from
 * assistive technology.
 */

const NAVY = "#042643";
const BLUE = "#006EB7";
const BLUE_MID = "#1583C8";
const BLUE_SOFT = "#D7ECFA";
const ORANGE = "#F9A421";
const WHITE = "#FFFFFF";

const CATEGORY_TILES = [
  { x: 218, label: "Fashion" },
  { x: 264, label: "Grocery" },
  { x: 310, label: "Home" },
  { x: 356, label: "Beauty" },
];

const SHOP_CARDS = [
  { x: 216, name: "Urban Style", kind: "Fashion" },
  { x: 278, name: "Green Basket", kind: "Grocery" },
  { x: 340, name: "Home Decor", kind: "Home" },
];

export function HeroScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 520"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* ---- Location pin ---- */}
      <g>
        <path
          d="M96 92a30 30 0 0 1 60 0c0 21-30 52-30 52s-30-31-30-52Z"
          fill={ORANGE}
        />
        <circle cx="126" cy="92" r="12" fill={WHITE} />
      </g>

      {/* ---- Chat bubble with a leaf mark ---- */}
      <g>
        <circle cx="524" cy="118" r="40" fill={ORANGE} />
        <path d="M498 148l-14 24 30-10Z" fill={ORANGE} />
        <path
          d="M524 100c14 0 22 8 22 22-14 0-22-8-22-22Zm0 0c-14 0-22 8-22 22 14 0 22-8 22-22Z"
          fill={WHITE}
        />
        <path d="M524 122v18" stroke={WHITE} strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* ---- Shopping bag ---- */}
      <g>
        <path
          d="M70 264h116l-8 150a14 14 0 0 1-14 13H92a14 14 0 0 1-14-13Z"
          fill={BLUE}
        />
        <path
          d="M100 272v-24a28 28 0 0 1 56 0v24"
          fill="none"
          stroke={ORANGE}
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M92 300a34 34 0 0 1 34-34 34 34 0 0 1 34 34"
          fill="none"
          stroke={WHITE}
          strokeWidth="0"
        />
        {/* Bag logo */}
        <path d="M104 336a24 24 0 0 1 48 0Z" fill={ORANGE} />
        <path
          d="M110 352c5 8 27 8 32 0"
          fill="none"
          stroke={WHITE}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <text
          x="128"
          y="382"
          textAnchor="middle"
          fill={WHITE}
          fontSize="15"
          fontWeight="700"
          letterSpacing="1"
        >
          OWSHO
        </text>
      </g>

      {/* ---- Plant ---- */}
      <g>
        <path
          d="M492 356c-6-34 10-58 34-66-2 30-14 52-34 66Z"
          fill="#2E9E5B"
        />
        <path
          d="M508 358c16-26 40-32 62-24-16 22-38 32-62 24Z"
          fill="#3FBF72"
        />
        <path d="M506 356c0-30 4-50 14-64" stroke="#1F7A45" strokeWidth="3" fill="none" />
        <path
          d="M478 360h84l-9 60a16 16 0 0 1-16 14h-34a16 16 0 0 1-16-14Z"
          fill={WHITE}
        />
        <path d="M478 360h84l-2 14h-80Z" fill={BLUE_SOFT} />
      </g>

      {/* ---- Phone ---- */}
      <g>
        <rect x="188" y="8" width="244" height="496" rx="34" fill={NAVY} />
        <rect x="197" y="17" width="226" height="478" rx="27" fill={WHITE} />
        <rect x="284" y="26" width="52" height="8" rx="4" fill={NAVY} />

        {/* App header */}
        <path d="M296 56a14 14 0 0 1 28 0Z" fill={ORANGE} />
        <path
          d="M300 66c4 6 16 6 20 0"
          fill="none"
          stroke={BLUE}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <text
          x="310"
          y="88"
          textAnchor="middle"
          fill={BLUE}
          fontSize="15"
          fontWeight="700"
          letterSpacing="0.6"
        >
          OWSHO
        </text>

        {/* Search bar */}
        <rect x="212" y="100" width="196" height="26" rx="13" fill="#F1F5F9" />
        <circle cx="228" cy="113" r="5" fill="none" stroke="#94A3B8" strokeWidth="2" />
        <path d="m232 117 4 4" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
        <text x="242" y="117" fill="#94A3B8" fontSize="9">
          Search for products or shops
        </text>

        {/* Categories */}
        <text x="212" y="150" fill={NAVY} fontSize="10" fontWeight="600">
          Categories
        </text>
        <text x="408" y="150" textAnchor="end" fill={BLUE} fontSize="8" fontWeight="600">
          View all
        </text>
        {CATEGORY_TILES.map((tile, index) => (
          <g key={tile.label}>
            <rect
              x={tile.x}
              y="158"
              width="36"
              height="36"
              rx="10"
              fill={index % 2 === 0 ? "#FFF1D4" : BLUE_SOFT}
            />
            <rect
              x={tile.x + 10}
              y="168"
              width="16"
              height="16"
              rx="4"
              fill={index % 2 === 0 ? ORANGE : BLUE_MID}
            />
            <text
              x={tile.x + 18}
              y="206"
              textAnchor="middle"
              fill="#64748B"
              fontSize="7"
            >
              {tile.label}
            </text>
          </g>
        ))}

        {/* Popular shops */}
        <text x="212" y="238" fill={NAVY} fontSize="10" fontWeight="600">
          Popular Shops
        </text>
        <text x="408" y="238" textAnchor="end" fill={BLUE} fontSize="8" fontWeight="600">
          View all
        </text>
        {SHOP_CARDS.map((card) => (
          <g key={card.name}>
            <rect
              x={card.x}
              y="246"
              width="52"
              height="72"
              rx="10"
              fill="#F8FAFC"
              stroke="#E2E8F0"
            />
            <rect x={card.x + 12} y="256" width="28" height="30" rx="6" fill={BLUE_MID} />
            <path
              d={`M${card.x + 18} 256a8 8 0 0 1 16 0`}
              fill="none"
              stroke={ORANGE}
              strokeWidth="3"
            />
            <text
              x={card.x + 26}
              y="300"
              textAnchor="middle"
              fill={NAVY}
              fontSize="7"
              fontWeight="600"
            >
              {card.name}
            </text>
            <text
              x={card.x + 26}
              y="310"
              textAnchor="middle"
              fill="#94A3B8"
              fontSize="6"
            >
              {card.kind}
            </text>
          </g>
        ))}

        {/* Offer banner */}
        <rect x="212" y="332" width="196" height="56" rx="12" fill={BLUE} />
        <text x="226" y="356" fill={WHITE} fontSize="11" fontWeight="700">
          Shop local, save more
        </text>
        <text x="226" y="372" fill={BLUE_SOFT} fontSize="8">
          Free delivery on your first order
        </text>
        <circle cx="378" cy="360" r="18" fill={ORANGE} opacity="0.85" />

        {/* Product row */}
        <rect x="212" y="400" width="92" height="66" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />
        <rect x="316" y="400" width="92" height="66" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />
        <rect x="224" y="410" width="68" height="30" rx="6" fill="#FFF1D4" />
        <rect x="328" y="410" width="68" height="30" rx="6" fill={BLUE_SOFT} />
        <rect x="224" y="446" width="46" height="6" rx="3" fill="#CBD5E1" />
        <rect x="328" y="446" width="46" height="6" rx="3" fill="#CBD5E1" />
        <rect x="224" y="456" width="28" height="6" rx="3" fill={ORANGE} />
        <rect x="328" y="456" width="28" height="6" rx="3" fill={ORANGE} />
      </g>
    </svg>
  );
}
