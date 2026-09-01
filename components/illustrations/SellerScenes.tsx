/**
 * Home page illustrations — one per "why sellers choose Owsho" card, plus the
 * hero scene.
 *
 * Same approach as `Scenes.tsx`: inline SVG in the brand palette, decorative
 * and hidden from assistive technology, sized by `viewBox` so nothing shifts
 * on load. The card scenes all share a 320×170 frame so the five cards line up
 * however the grid wraps.
 */

const NAVY = "#042643";
const BLUE = "#006EB7";
const BLUE_MID = "#1583C8";
const BLUE_SOFT = "#D7ECFA";
const BLUE_WASH = "#EEF7FD";
const ORANGE = "#F9A421";
const ORANGE_SOFT = "#FFE0AE";
const WHITE = "#FFFFFF";

type SceneProps = { className?: string };

function CardScene({
  className = "",
  children,
}: SceneProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 320 170"
      className={className}
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      <rect x="0" y="0" width="320" height="170" rx="16" fill={BLUE_WASH} />
      {children}
      <ellipse cx="160" cy="150" rx="104" ry="7" fill={BLUE_SOFT} />
    </svg>
  );
}

/* ---- 1. Reach your customers nearby ---- */
export function ReachNearbyScene({ className }: SceneProps) {
  return (
    <CardScene className={className}>
      {/* The shop at the centre */}
      <g>
        <rect x="128" y="70" width="64" height="72" rx="7" fill={WHITE} />
        <path d="M122 70h76l-8-18h-60Z" fill={BLUE} />
        <path d="M140 70l2-18h12l-1 18Zm26 0l-1-18h12l2 18Z" fill={ORANGE} />
        <rect x="138" y="84" width="20" height="18" rx="4" fill={BLUE_WASH} />
        <rect x="164" y="84" width="18" height="58" rx="4" fill={BLUE_SOFT} />
      </g>

      {/* Customers around it */}
      {[
        { x: 56, y: 52 },
        { x: 264, y: 52 },
        { x: 56, y: 118 },
        { x: 264, y: 118 },
      ].map(({ x, y }) => (
        <g key={`${x}-${y}`}>
          <path
            d={`M${x} ${y}L160 100`}
            stroke={BLUE_SOFT}
            strokeWidth="3"
            strokeDasharray="6 6"
          />
          <circle cx={x} cy={y} r="19" fill={WHITE} stroke={BLUE_SOFT} strokeWidth="3" />
          <circle cx={x} cy={y - 5} r="6" fill={NAVY} />
          <path d={`M${x - 9} ${y + 10}a9 9 0 0 1 18 0Z`} fill={ORANGE} />
        </g>
      ))}
    </CardScene>
  );
}

/* ---- 2. Delivered in minutes ---- */
export function DeliveredInMinutesScene({ className }: SceneProps) {
  return (
    <CardScene className={className}>
      {/* Delivery van */}
      <g>
        <rect x="42" y="88" width="76" height="42" rx="8" fill={WHITE} />
        <path d="M118 100h22l18 30h-40Z" fill={BLUE} />
        <path d="M42 88h76v-8a8 8 0 0 0-8-8H50a8 8 0 0 0-8 8Z" fill={BLUE} />
        <rect x="124" y="106" width="18" height="14" rx="3" fill={BLUE_WASH} />
        <circle cx="70" cy="134" r="11" fill={NAVY} />
        <circle cx="70" cy="134" r="4" fill={WHITE} />
        <circle cx="136" cy="134" r="11" fill={NAVY} />
        <circle cx="136" cy="134" r="4" fill={WHITE} />
      </g>

      {/* Clock */}
      <g>
        <circle cx="228" cy="86" r="46" fill={WHITE} stroke={BLUE} strokeWidth="6" />
        {[
          [228, 48],
          [266, 86],
          [228, 124],
          [190, 86],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill={ORANGE} />
        ))}
        <path
          d="M228 86V62m0 24 20 14"
          stroke={NAVY}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </g>
    </CardScene>
  );
}

/* ---- 3. Grow your business online ---- */
export function GrowOnlineScene({ className }: SceneProps) {
  const bars = [
    { x: 68, h: 30, fill: BLUE },
    { x: 108, h: 52, fill: ORANGE },
    { x: 148, h: 74, fill: BLUE },
    { x: 188, h: 96, fill: ORANGE },
  ];

  return (
    <CardScene className={className}>
      {bars.map(({ x, h, fill }) => (
        <rect key={x} x={x} y={140 - h} width="28" height={h} rx="5" fill={fill} />
      ))}

      {/* Trend line over the bars */}
      <path
        d="M82 110 122 88 162 66 202 44"
        fill="none"
        stroke={BLUE_MID}
        strokeWidth="3"
        strokeDasharray="6 6"
      />
      {[
        [82, 110],
        [122, 88],
        [162, 66],
        [202, 44],
      ].map(([cx, cy]) => (
        <circle key={cx} cx={cx} cy={cy} r="5" fill={WHITE} stroke={BLUE} strokeWidth="3" />
      ))}

      {/* Shopkeeper climbing the chart */}
      <g>
        <circle cx="244" cy="52" r="14" fill={NAVY} />
        <path d="M226 106c2-24 10-38 22-38h10l10 18" fill="none" stroke={BLUE} strokeWidth="14" strokeLinecap="round" />
        <path d="M232 108l-8 30" stroke={NAVY} strokeWidth="11" strokeLinecap="round" />
        <path d="M252 106l10 28" stroke={NAVY} strokeWidth="11" strokeLinecap="round" />
        <rect x="262" y="72" width="26" height="20" rx="4" fill={ORANGE} />
      </g>
    </CardScene>
  );
}

/* ---- 4. Expand your reach ---- */
export function ExpandReachScene({ className }: SceneProps) {
  const pins = [
    { x: 62, y: 44, fill: BLUE },
    { x: 108, y: 30, fill: BLUE },
    { x: 152, y: 50, fill: BLUE },
    { x: 214, y: 32, fill: ORANGE },
    { x: 258, y: 54, fill: ORANGE },
  ];

  return (
    <CardScene className={className}>
      {pins.map(({ x, y, fill }) => (
        <g key={`${x}-${y}`}>
          <path
            d={`M${x} ${y + 12}L160 118`}
            stroke={BLUE_SOFT}
            strokeWidth="2.5"
            strokeDasharray="5 5"
          />
          <path
            d={`M${x - 13} ${y}a13 13 0 0 1 26 0c0 10-13 23-13 23s-13-13-13-23Z`}
            fill={fill}
          />
          <circle cx={x} cy={y} r="5" fill={WHITE} />
        </g>
      ))}

      {/* The parcel every pin leads back to */}
      <g>
        <rect x="132" y="104" width="56" height="38" rx="6" fill={ORANGE} />
        <path d="M156 104h8v38h-8z" fill={ORANGE_SOFT} />
        <rect x="139" y="112" width="12" height="8" rx="2" fill={WHITE} />
      </g>
    </CardScene>
  );
}

/* ---- 5. Simple to get started ---- */
export function SimpleToStartScene({ className }: SceneProps) {
  return (
    <CardScene className={className}>
      {/* Laptop showing the seller dashboard */}
      <g>
        <rect x="98" y="34" width="124" height="82" rx="8" fill={NAVY} />
        <rect x="104" y="40" width="112" height="70" rx="5" fill={WHITE} />
        <rect x="112" y="48" width="44" height="9" rx="4" fill={BLUE} />
        <rect x="112" y="64" width="96" height="6" rx="3" fill={BLUE_SOFT} />
        <rect x="112" y="76" width="80" height="6" rx="3" fill={BLUE_SOFT} />
        <rect x="112" y="90" width="34" height="12" rx="5" fill={ORANGE} />
        <rect x="84" y="116" width="152" height="9" rx="4.5" fill={NAVY} />
      </g>

      {/* Helping hands, one from each side */}
      <path
        d="M40 120c14-10 26-14 40-12l14 2"
        fill="none"
        stroke={ORANGE}
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M280 120c-14-10-26-14-40-12l-14 2"
        fill="none"
        stroke={BLUE}
        strokeWidth="14"
        strokeLinecap="round"
      />
    </CardScene>
  );
}

/* ---- Hero: the seller at their dashboard, order arcing out for delivery ---- */
export function SellerHeroScene({ className }: SceneProps) {
  return (
    <svg
      viewBox="0 0 560 420"
      className={className}
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      {/* This scene sits on the dark blue hero band, so it is built from white
          and orange rather than the blues the other scenes use. */}
      <circle cx="300" cy="210" r="190" fill={WHITE} opacity="0.06" />

      {/* Seller at their counter */}
      <g>
        <circle cx="120" cy="118" r="34" fill={ORANGE} />
        <path d="M70 214a50 50 0 0 1 100 0Z" fill={WHITE} />
        {/* Counter with the seller dashboard on it */}
        <rect x="40" y="214" width="164" height="112" rx="12" fill={WHITE} />
        <rect x="62" y="238" width="120" height="12" rx="6" fill={BLUE_SOFT} />
        <rect x="62" y="262" width="88" height="12" rx="6" fill={BLUE_SOFT} />
        <rect x="62" y="290" width="60" height="16" rx="8" fill={ORANGE} />
      </g>

      {/* The order, arcing from the counter out for delivery */}
      <path
        d="M212 232C256 140 372 136 438 214"
        fill="none"
        stroke={WHITE}
        strokeWidth="5"
        strokeDasharray="12 12"
        strokeLinecap="round"
        opacity="0.7"
      />
      <g>
        <rect x="292" y="118" width="56" height="44" rx="7" fill={ORANGE} />
        <path d="M316 118h8v44h-8z" fill={ORANGE_SOFT} />
      </g>

      {/* Delivery partner riding it out */}
      <g transform="translate(352 216)">
        <circle cx="94" cy="16" r="24" fill={NAVY} />
        <path d="M74 18a20 20 0 0 1 40 0Z" fill={ORANGE} />
        <path
          d="M56 96c8-30 20-46 40-46h18l14 22"
          fill="none"
          stroke={WHITE}
          strokeWidth="16"
          strokeLinecap="round"
        />
        {/* Delivery box */}
        <rect x="4" y="42" width="56" height="48" rx="8" fill={ORANGE} />
        <rect x="16" y="56" width="32" height="9" rx="4.5" fill={WHITE} />
        {/* Scooter */}
        <rect x="8" y="94" width="108" height="18" rx="9" fill={WHITE} />
        <path d="M116 96h20l16 24h-28Z" fill={WHITE} opacity="0.85" />
        <circle cx="34" cy="126" r="23" fill={NAVY} />
        <circle cx="34" cy="126" r="9" fill={WHITE} />
        <circle cx="140" cy="126" r="23" fill={NAVY} />
        <circle cx="140" cy="126" r="9" fill={WHITE} />
      </g>

      <rect x="30" y="360" width="500" height="8" rx="4" fill={WHITE} opacity="0.3" />
    </svg>
  );
}
