import type { SVGProps } from "react";

/**
 * Hand-written inline SVG icons — replaces an icon package entirely.
 * Every icon inherits `currentColor` and is 24x24 on a shared grid.
 * Decorative by default; pass `aria-label` + `role="img"` when meaningful.
 */
type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const TruckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M2 7.5A1.5 1.5 0 0 1 3.5 6H14v10H3.5A1.5 1.5 0 0 1 2 14.5Z" />
    <path d="M14 9h3.6a2 2 0 0 1 1.7 1l1.9 3.2a2 2 0 0 1 .3 1V16h-7.5Z" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17.5" cy="18" r="2" />
  </Icon>
);

export const PriceTagIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12.6 3H20a1 1 0 0 1 1 1v7.4a2 2 0 0 1-.6 1.4l-7.6 7.6a2 2 0 0 1-2.8 0l-6-6a2 2 0 0 1 0-2.8l7.6-7.6a2 2 0 0 1 1.4-.6Z" />
    <circle cx="16.5" cy="7.5" r="1.4" />
  </Icon>
);

export const HeartHandIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 20.5S4.5 15.9 4.5 10.6a4.1 4.1 0 0 1 7.5-2.3 4.1 4.1 0 0 1 7.5 2.3c0 5.3-7.5 9.9-7.5 9.9Z" />
  </Icon>
);

export const ShieldIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 2.8 20 6v6c0 4.6-3.3 8-8 9.2C7.3 20 4 16.6 4 12V6Z" />
    <path d="m8.8 11.8 2.2 2.2 4.2-4.4" />
  </Icon>
);

export const StoreIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3.6 4h16.8l1.4 4.6a3 3 0 0 1-5.8 1.3 3 3 0 0 1-5.8 0 3 3 0 0 1-5.8-1.3Z" />
    <path d="M4.5 11.4V20h15v-8.6" />
    <path d="M9.8 20v-5.2h4.4V20" />
  </Icon>
);

export const CartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M2.5 3.5h2.3l2.3 10.4h10l2.4-7.6H6.2" />
    <circle cx="9" cy="19" r="1.6" />
    <circle cx="17" cy="19" r="1.6" />
  </Icon>
);

export const WalletIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H18v2.5" />
    <rect x="3" y="7.5" width="18" height="12" rx="2.5" />
    <path d="M21 11.5h-4a2 2 0 0 0 0 4h4" />
  </Icon>
);

export const BagIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5.4 7.5h13.2l1.1 12a1.5 1.5 0 0 1-1.5 1.6H5.8a1.5 1.5 0 0 1-1.5-1.6Z" />
    <path d="M8.6 10V6.4a3.4 3.4 0 0 1 6.8 0V10" />
  </Icon>
);

export const BoxIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 2.8 20.5 7v10L12 21.2 3.5 17V7Z" />
    <path d="M3.5 7 12 11.4 20.5 7" />
    <path d="M12 11.4v9.8" />
  </Icon>
);

export const SmileIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9.2" />
    <path d="M8.2 13.6a4.6 4.6 0 0 0 7.6 0" />
    <path d="M9 9.4h.01M15 9.4h.01" strokeWidth={2.4} />
  </Icon>
);

export const MailIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3.5 7 7.4 5.3a2 2 0 0 0 2.2 0L20.5 7" />
  </Icon>
);

export const PhoneIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7.5 3.5h-2A2.5 2.5 0 0 0 3 6.2C3 14.4 9.6 21 17.8 21a2.5 2.5 0 0 0 2.7-2.5v-2l-4.3-1.6-1.9 2.2a13.6 13.6 0 0 1-5.4-5.4l2.2-1.9Z" />
  </Icon>
);

export const PinIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21.5s7-6.2 7-11.2a7 7 0 1 0-14 0c0 5 7 11.2 7 11.2Z" />
    <circle cx="12" cy="10" r="2.6" />
  </Icon>
);

export const CheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m4.5 12.6 4.8 4.8 10.2-10.8" />
  </Icon>
);

export const CheckCircleIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9.2" />
    <path d="m8 12.3 2.7 2.7 5.3-5.6" />
  </Icon>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4.5 12h15" />
    <path d="m13.5 6 6 6-6 6" />
  </Icon>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </Icon>
);

export const MenuIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

export const CloseIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Icon>
);

export const ClockIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9.2" />
    <path d="M12 6.8V12l3.4 2" />
  </Icon>
);

export const ChartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3.5 20.5h17" />
    <path d="M6.8 20.5V12M11.6 20.5V6.5M16.4 20.5v-5.6" />
  </Icon>
);

export const HeadsetIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <path d="M4 13.5h1.8a1.5 1.5 0 0 1 1.5 1.5v2.6a1.5 1.5 0 0 1-1.5 1.5H4Z" />
    <path d="M20 13.5h-1.8a1.5 1.5 0 0 0-1.5 1.5v2.6a1.5 1.5 0 0 0 1.5 1.5H20Z" />
    <path d="M18.4 19.2v.4a2 2 0 0 1-2 2H13" />
  </Icon>
);

export const DocumentIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M13.5 2.8H7a2 2 0 0 0-2 2v14.4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.3Z" />
    <path d="M13.5 2.8v4.5a1 1 0 0 0 1 1H19" />
    <path d="M8.6 13h6.8M8.6 16.6h4.4" />
  </Icon>
);

export const RupeeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 4.5h10M7 9h10" />
    <path d="M13.6 4.5a4.5 4.5 0 0 1 0 9H7l8 6" />
  </Icon>
);

export const SparkleIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3.2 13.9 9l5.8 1.9-5.8 1.9L12 18.6l-1.9-5.8L4.3 11 10.1 9Z" />
  </Icon>
);

export const GlobeIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9.2" />
    <path d="M2.8 12h18.4" />
    <path d="M12 2.8a14 14 0 0 1 0 18.4 14 14 0 0 1 0-18.4Z" />
  </Icon>
);

/* ---- Social (filled, brand-provided glyph shapes) ---- */

function SocialIcon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const FacebookIcon = (p: IconProps) => (
  <SocialIcon {...p}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14.35 3.5c-2.4 0-4.05 1.45-4.05 4.15V9.9H7.6V13h2.7v8Z" />
  </SocialIcon>
);

export const InstagramIcon = (p: IconProps) => (
  <SocialIcon {...p}>
    <path
      fillRule="evenodd"
      d="M8.2 3h7.6A5.2 5.2 0 0 1 21 8.2v7.6a5.2 5.2 0 0 1-5.2 5.2H8.2A5.2 5.2 0 0 1 3 15.8V8.2A5.2 5.2 0 0 1 8.2 3Zm0 1.9A3.3 3.3 0 0 0 4.9 8.2v7.6a3.3 3.3 0 0 0 3.3 3.3h7.6a3.3 3.3 0 0 0 3.3-3.3V8.2a3.3 3.3 0 0 0-3.3-3.3ZM12 7.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.9a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm4.9-2.5a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
      clipRule="evenodd"
    />
  </SocialIcon>
);

export const TwitterIcon = (p: IconProps) => (
  <SocialIcon {...p}>
    <path d="M17.6 3h3.1l-6.8 7.8L21.9 21h-6.2l-4.9-6.4L5.2 21H2.1l7.2-8.3L2.4 3h6.4l4.4 5.8Zm-1.1 16.1h1.7L7.6 4.8H5.8Z" />
  </SocialIcon>
);

export const LinkedinIcon = (p: IconProps) => (
  <SocialIcon {...p}>
    <path d="M6.94 8.9V21H3.2V8.9ZM5.07 3a2.06 2.06 0 1 1 0 4.12 2.06 2.06 0 0 1 0-4.12ZM9.3 8.9h3.58v1.65h.05a3.93 3.93 0 0 1 3.53-1.9c3.78 0 4.48 2.42 4.48 5.58V21h-3.73v-5.03c0-1.2-.02-2.75-1.7-2.75-1.7 0-1.96 1.31-1.96 2.66V21H9.3Z" />
  </SocialIcon>
);
