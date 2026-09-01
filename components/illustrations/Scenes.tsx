/**
 * Section illustrations, drawn as inline SVG.
 *
 * Every scene here is decorative — the meaning of each section lives in its
 * heading and copy — so all of them are hidden from assistive technology.
 * Drawing them inline (rather than shipping images) keeps them sharp at any
 * size, costs no network request and reserves its own space via `viewBox`,
 * so nothing shifts on load.
 *
 * They share the brand palette below so the whole set reads as one family.
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

function Scene({
  className = "",
  viewBox = "0 0 520 360",
  children,
}: SceneProps & { viewBox?: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox={viewBox}
      className={className}
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      {children}
    </svg>
  );
}

/** A simple shopfront: awning, shutter, door. Reused across several scenes. */
function Shopfront({ x = 0, y = 0, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="0" y="34" width="150" height="106" rx="8" fill={WHITE} />
      <rect x="0" y="34" width="150" height="106" rx="8" fill="none" stroke={BLUE_SOFT} strokeWidth="4" />
      {/* Awning */}
      <path d="M-8 34h166l-14-28H6Z" fill={BLUE} />
      <path d="M12 34l6-28h22l-4 28Zm52 0l2-28h22l4 28Zm52 0l-4-28h22l8 28Z" fill={ORANGE} />
      {/* Window + door */}
      <rect x="16" y="54" width="58" height="42" rx="5" fill={BLUE_WASH} />
      <rect x="90" y="54" width="44" height="86" rx="5" fill={BLUE_SOFT} />
      <circle cx="98" cy="98" r="3.5" fill={BLUE} />
      {/* Crates on the pavement */}
      <rect x="16" y="106" width="26" height="20" rx="4" fill={ORANGE_SOFT} />
      <rect x="48" y="112" width="24" height="14" rx="4" fill={BLUE_SOFT} />
    </g>
  );
}

/** A parcel with tape and a label. */
function Parcel({ x = 0, y = 0, size = 60 }) {
  const s = size / 60;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="0" y="0" width="60" height="48" rx="6" fill={ORANGE} />
      <path d="M26 0h8v48h-8z" fill={ORANGE_SOFT} />
      <rect x="8" y="10" width="14" height="10" rx="2" fill={WHITE} />
    </g>
  );
}

/** A stylised person: head plus shoulders. */
function Person({
  x = 0,
  y = 0,
  scale = 1,
  body = BLUE,
}: {
  x?: number;
  y?: number;
  scale?: number;
  body?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="0" r="16" fill={NAVY} />
      <path d="M-26 58a26 26 0 0 1 52 0Z" fill={body} />
    </g>
  );
}

/** A phone showing an order card. */
function Phone({ x = 0, y = 0, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="0" y="0" width="86" height="150" rx="14" fill={NAVY} />
      <rect x="6" y="6" width="74" height="138" rx="10" fill={WHITE} />
      <rect x="14" y="16" width="58" height="30" rx="6" fill={BLUE} />
      <rect x="20" y="24" width="30" height="5" rx="2.5" fill={WHITE} opacity="0.9" />
      <rect x="20" y="34" width="18" height="5" rx="2.5" fill={ORANGE} />
      <rect x="14" y="54" width="58" height="16" rx="5" fill={BLUE_WASH} />
      <rect x="14" y="76" width="58" height="16" rx="5" fill={BLUE_WASH} />
      <rect x="14" y="100" width="58" height="26" rx="7" fill={ORANGE} />
    </g>
  );
}

/* ------------------------------------------------------------------ *
 * About — hero: a shopkeeper handing an Owsho parcel to a customer.
 * ------------------------------------------------------------------ */
export function LocalCommerceScene({ className }: SceneProps) {
  return (
    <Scene className={className}>
      <circle cx="260" cy="176" r="150" fill={BLUE} opacity="0.14" />
      {/* Skyline behind */}
      <g opacity="0.5">
        <rect x="52" y="86" width="46" height="90" rx="6" fill={BLUE_SOFT} />
        <rect x="106" y="60" width="34" height="116" rx="6" fill={BLUE_SOFT} />
        <rect x="384" y="72" width="40" height="104" rx="6" fill={BLUE_SOFT} />
        <rect x="430" y="98" width="36" height="78" rx="6" fill={BLUE_SOFT} />
      </g>

      <Shopfront x={76} y={98} scale={1} />

      {/* Shopkeeper */}
      <Person x={252} y={140} scale={1} body={BLUE} />
      {/* Parcel changing hands */}
      <Parcel x={286} y={176} size={56} />
      {/* Customer */}
      <Person x={392} y={140} scale={1} body={ORANGE} />

      {/* Ground */}
      <rect x="40" y="240" width="440" height="8" rx="4" fill={BLUE_SOFT} />
    </Scene>
  );
}

/* ------------------------------------------------------------------ *
 * About — our story: shop → phone → order → delivery → customer.
 * ------------------------------------------------------------------ */
export function OfflineToOnlineScene({ className }: SceneProps) {
  const arrow = (x: number) => (
    <path
      key={x}
      d={`M${x} 180h34m0 0-10-9m10 9-10 9`}
      fill="none"
      stroke={ORANGE}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

  return (
    <Scene className={className} viewBox="0 0 520 300">
      <Shopfront x={10} y={96} scale={0.72} />
      {arrow(126)}

      {/* Phone with an order */}
      <Phone x={176} y={102} scale={0.68} />
      {arrow(248)}

      {/* Delivery scooter */}
      <g transform="translate(296 132)">
        <rect x="6" y="10" width="46" height="34" rx="6" fill={BLUE} />
        <rect x="14" y="18" width="22" height="8" rx="3" fill={WHITE} opacity="0.8" />
        <path d="M52 24h14l12 20H52Z" fill={BLUE_MID} />
        <circle cx="20" cy="52" r="11" fill={NAVY} />
        <circle cx="20" cy="52" r="4" fill={WHITE} />
        <circle cx="70" cy="52" r="11" fill={NAVY} />
        <circle cx="70" cy="52" r="4" fill={WHITE} />
      </g>
      {arrow(388)}

      <Person x={452} y={150} scale={0.8} body={ORANGE} />

      <rect x="10" y="212" width="500" height="7" rx="3.5" fill={BLUE_SOFT} />
    </Scene>
  );
}

/* ------------------------------------------------------------------ *
 * About — why Owsho: one shop, many customers reaching it through a phone.
 * ------------------------------------------------------------------ */
export function DigitalStorefrontScene({ className }: SceneProps) {
  const customers = [
    { x: 78, y: 74 },
    { x: 442, y: 74 },
    { x: 78, y: 268 },
    { x: 442, y: 268 },
  ];

  return (
    <Scene className={className}>
      <circle cx="260" cy="180" r="132" fill={BLUE_WASH} />

      {customers.map(({ x, y }) => (
        <g key={`${x}-${y}`}>
          <path
            d={`M${x} ${y}L260 180`}
            stroke={BLUE_SOFT}
            strokeWidth="4"
            strokeDasharray="8 8"
            strokeLinecap="round"
          />
          <circle cx={x} cy={y} r="30" fill={WHITE} stroke={BLUE_SOFT} strokeWidth="4" />
          <circle cx={x} cy={y - 6} r="8" fill={BLUE} />
          <path d={`M${x - 13} ${y + 14}a13 13 0 0 1 26 0Z`} fill={ORANGE} />
        </g>
      ))}

      <g>
        <circle cx="260" cy="180" r="96" fill={WHITE} />
        <circle cx="260" cy="180" r="96" fill="none" stroke={BLUE} strokeWidth="4" />
        <Shopfront x={185} y={126} scale={1} />
      </g>
    </Scene>
  );
}

/* ------------------------------------------------------------------ *
 * About — the network: seller → Owsho → customer → delivery partner.
 * ------------------------------------------------------------------ */
export function EcosystemScene({ className }: SceneProps) {
  const nodes = [
    { cx: 260, cy: 64, label: "Sellers" },
    { cx: 424, cy: 190, label: "Customers" },
    { cx: 260, cy: 316, label: "Delivery" },
    { cx: 96, cy: 190, label: "Owsho" },
  ];

  return (
    <Scene className={className}>
      <circle
        cx="260"
        cy="190"
        r="126"
        fill="none"
        stroke={BLUE_SOFT}
        strokeWidth="16"
      />
      {/* Direction markers around the loop */}
      {[
        "M260 52l16 12-16 12Z",
        "M436 190l-12 16-12-16Z",
        "M260 328l-16-12 16-12Z",
        "M84 190l12-16 12 16Z",
      ].map((d) => (
        <path key={d} d={d} fill={ORANGE} />
      ))}

      {nodes.map(({ cx, cy, label }) => (
        <g key={label}>
          <circle cx={cx} cy={cy} r="46" fill={WHITE} stroke={BLUE} strokeWidth="4" />
          <text
            x={cx}
            y={cy + 5}
            textAnchor="middle"
            fontSize="15"
            fontWeight="600"
            fill={NAVY}
            fontFamily="inherit"
          >
            {label}
          </text>
        </g>
      ))}

      <circle cx="260" cy="190" r="34" fill={ORANGE} />
      <path d="M246 190h28m-14-14v28" stroke={WHITE} strokeWidth="5" strokeLinecap="round" />
    </Scene>
  );
}

/* ------------------------------------------------------------------ *
 * About — more than a marketplace: the same shop, now with a storefront
 * on a screen beside it.
 * ------------------------------------------------------------------ */
export function ShopGrowthScene({ className }: SceneProps) {
  return (
    <Scene className={className}>
      <rect x="30" y="60" width="240" height="240" rx="24" fill={BLUE_WASH} />
      <Shopfront x={62} y={130} scale={1.1} />

      {/* Growth arrow between the two states */}
      <path
        d="M286 250c26-8 44-30 52-62"
        fill="none"
        stroke={ORANGE}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M338 178l6 24-24-6Z" fill={ORANGE} />

      {/* Digital storefront */}
      <g>
        <rect x="316" y="86" width="176" height="132" rx="14" fill={NAVY} />
        <rect x="324" y="94" width="160" height="112" rx="8" fill={WHITE} />
        <rect x="334" y="104" width="140" height="26" rx="6" fill={BLUE} />
        <rect x="342" y="113" width="52" height="8" rx="4" fill={WHITE} opacity="0.9" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={334 + i * 48} y={140} width="40" height="30" rx="6" fill={BLUE_WASH} />
            <rect x={334 + i * 48} y={176} width="40" height="6" rx="3" fill={BLUE_SOFT} />
          </g>
        ))}
        <rect x="356" y="218" width="96" height="10" rx="5" fill={NAVY} />
        <rect x="380" y="228" width="48" height="16" rx="6" fill={NAVY} />
      </g>
    </Scene>
  );
}

/* ------------------------------------------------------------------ *
 * About — the vision: many local businesses connected across a city.
 * ------------------------------------------------------------------ */
export function CityNetworkScene({ className }: SceneProps) {
  const pins = [
    { x: 92, y: 118 },
    { x: 214, y: 74 },
    { x: 336, y: 122 },
    { x: 442, y: 84 },
    { x: 150, y: 218 },
    { x: 300, y: 226 },
    { x: 418, y: 200 },
  ];

  return (
    <Scene className={className}>
      {/* Buildings */}
      <g opacity="0.55">
        {[
          [56, 176, 52, 108],
          [124, 200, 44, 84],
          [186, 158, 56, 126],
          [258, 190, 48, 94],
          [320, 166, 52, 118],
          [388, 204, 44, 80],
          [444, 174, 44, 110],
        ].map(([x, y, w, h]) => (
          <rect key={x} x={x} y={y} width={w} height={h} rx="6" fill={BLUE_SOFT} />
        ))}
      </g>

      {/* Connecting lines */}
      {pins.slice(0, -1).map((pin, i) => (
        <path
          key={`${pin.x}-${i}`}
          d={`M${pin.x} ${pin.y}L${pins[i + 1].x} ${pins[i + 1].y}`}
          stroke={BLUE}
          strokeWidth="2.5"
          strokeDasharray="7 7"
          opacity="0.5"
        />
      ))}

      {pins.map(({ x, y }, i) => (
        <g key={`pin-${x}-${y}`}>
          <path
            d={`M${x} ${y - 26}a18 18 0 0 1 36 0c0 13-18 32-18 32s-18-19-18-32Z`}
            transform={`translate(-18 0)`}
            fill={i % 2 === 0 ? BLUE : ORANGE}
          />
          <circle cx={x} cy={y - 26} r="7" fill={WHITE} />
        </g>
      ))}

      <rect x="40" y="284" width="440" height="8" rx="4" fill={BLUE_SOFT} />
    </Scene>
  );
}

/* ------------------------------------------------------------------ *
 * Delivery — a partner riding an order out to a customer.
 * ------------------------------------------------------------------ */
export function DeliveryRideScene({ className }: SceneProps) {
  return (
    <Scene className={className} viewBox="0 0 520 320">
      <circle cx="260" cy="160" r="132" fill={BLUE} opacity="0.12" />

      {/* Motion lines */}
      {[92, 116, 140].map((y, i) => (
        <path
          key={y}
          d={`M${40 + i * 14} ${y}h${70 - i * 16}`}
          stroke={BLUE_SOFT}
          strokeWidth="7"
          strokeLinecap="round"
        />
      ))}

      <g transform="translate(150 88)">
        {/* Rider */}
        <circle cx="118" cy="24" r="24" fill={NAVY} />
        <path d="M96 26a22 22 0 0 1 44 0Z" fill={ORANGE} />
        <path
          d="M78 108c8-34 22-52 44-52h20l16 26"
          fill="none"
          stroke={BLUE}
          strokeWidth="16"
          strokeLinecap="round"
        />
        {/* Delivery box on the back */}
        <rect x="18" y="46" width="62" height="54" rx="8" fill={ORANGE} />
        <rect x="30" y="60" width="38" height="10" rx="4" fill={WHITE} />
        {/* Scooter */}
        <rect x="20" y="104" width="120" height="20" rx="10" fill={BLUE_MID} />
        <path d="M140 108h22l18 26h-30Z" fill={BLUE} />
        <circle cx="48" cy="140" r="26" fill={NAVY} />
        <circle cx="48" cy="140" r="10" fill={WHITE} />
        <circle cx="166" cy="140" r="26" fill={NAVY} />
        <circle cx="166" cy="140" r="10" fill={WHITE} />
      </g>

      <rect x="40" y="264" width="440" height="8" rx="4" fill={BLUE_SOFT} />
    </Scene>
  );
}

/* ------------------------------------------------------------------ *
 * Fulfilment — picking, packing and sorting orders for dispatch.
 * ------------------------------------------------------------------ */
export function ShippingScene({ className }: SceneProps) {
  return (
    <Scene className={className} viewBox="0 0 520 320">
      <rect x="40" y="52" width="440" height="200" rx="20" fill={BLUE_WASH} />

      {/* Shelving */}
      <g>
        <rect x="70" y="80" width="140" height="146" rx="8" fill={WHITE} stroke={BLUE_SOFT} strokeWidth="4" />
        {[104, 150, 196].map((y) => (
          <rect key={y} x="70" y={y} width="140" height="5" rx="2.5" fill={BLUE_SOFT} />
        ))}
        {[
          [82, 84],
          [124, 84],
          [166, 84],
          [82, 130],
          [130, 130],
          [96, 176],
          [148, 176],
        ].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="32" height="20" rx="4" fill={x % 3 ? ORANGE_SOFT : BLUE_SOFT} />
        ))}
      </g>

      {/* Packing bench */}
      <Person x={272} y={112} scale={0.9} body={BLUE} />
      <Parcel x={316} y={150} size={60} />
      <Parcel x={382} y={164} size={46} />
      <rect x="252" y="212" width="196" height="12" rx="6" fill={BLUE} />

      {/* Conveyor */}
      <rect x="60" y="264" width="400" height="16" rx="8" fill={BLUE_SOFT} />
      {[100, 180, 260, 340, 420].map((x) => (
        <circle key={x} cx={x} cy="272" r="5" fill={BLUE} opacity="0.6" />
      ))}
    </Scene>
  );
}

/* ------------------------------------------------------------------ *
 * Customer — receiving the order at the door.
 * ------------------------------------------------------------------ */
export function OrderReceivedScene({ className }: SceneProps) {
  return (
    <Scene className={className} viewBox="0 0 520 320">
      <circle cx={260} cy={158} r={132} fill={BLUE} opacity="0.1" />

      {/* Doorway the customer is standing in */}
      <rect x={54} y={44} width={152} height={224} rx={12} fill={WHITE} stroke={BLUE_SOFT} strokeWidth={5} />
      <rect x={76} y={70} width={108} height={198} rx={8} fill={BLUE_WASH} />
      <circle cx={170} cy={172} r={6} fill={BLUE} />

      {/* Customer, stepping out to take the order */}
      <Person x={230} y={128} scale={1.05} body={ORANGE} />
      {/* The parcel, mid-handover */}
      <Parcel x={296} y={148} size={70} />

      {/* Delivery partner handing it across */}
      <Person x={400} y={128} scale={1.05} body={BLUE} />

      {/* Delivered tick */}
      <g transform="translate(196 60)">
        <circle cx={0} cy={0} r={26} fill={ORANGE} />
        <path
          d="M-11 1l7 8 15-16"
          fill="none"
          stroke={WHITE}
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <rect x={40} y={268} width={440} height={8} rx={4} fill={BLUE_SOFT} />
    </Scene>
  );
}
