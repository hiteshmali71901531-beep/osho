/**
 * App Store and Google Play download badges.
 *
 * Drawn as inline SVG rather than linked images: the official badge artwork is
 * distributed as fixed-size raster/vector assets, and rebuilding the marks
 * inline keeps them crisp, themeable and free of an extra network request.
 * Each badge carries the store's own logo mark plus the standard two-line
 * label, which is what makes it recognisable as a store button.
 */

function AppleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false">
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.53-3.23 0-1.44.62-2.2.44-3.06-.4C3.79 16.16 4.36 9.57 8.72 9.33c1.27.07 2.16.72 2.91.77.95-.19 1.86-.88 2.9-.8 1.22.1 2.14.58 2.76 1.5-2.53 1.52-1.93 4.85.47 5.78-.56 1.44-1.28 2.87-2.71 3.72ZM12.05 9.28c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-2.13 4.55-3.74 4.25Z" />
    </svg>
  );
}

function PlayMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path d="M3.61 1.81L13.79 12 3.61 22.19a1 1 0 0 1-.61-.92V2.73a1 1 0 0 1 .61-.92Z" fill="#4285F4" />
      <path d="M14.85 13.06l2.29 2.29-8.78 4.98 6.49-7.27Z" fill="#EA4335" />
      <path d="M18.93 10.1l2.35 1.34a1 1 0 0 1 0 1.72l-2.35 1.34-2.52-2.22 2.52-2.18Z" fill="#FBBC04" />
      <path d="M8.36 3.67l8.78 4.98-2.29 2.29-6.49-7.27Z" fill="#34A853" />
    </svg>
  );
}

const badgeBase =
  "inline-flex h-14 items-center gap-3 rounded-xl px-4 transition-colors";

type Store = "ios" | "android";

const stores: Record<
  Store,
  { caption: string; name: string; Mark: typeof AppleMark; label: string }
> = {
  ios: {
    caption: "Download on the",
    name: "App Store",
    Mark: AppleMark,
    label: "Download on the App Store",
  },
  android: {
    caption: "Get it on",
    name: "Google Play",
    Mark: PlayMark,
    label: "Get it on Google Play",
  },
};

/**
 * One store badge. With no `href` it renders as inert text marked "coming
 * soon" — a store button that goes nowhere costs more trust than it buys.
 */
export function StoreBadge({
  store,
  href,
  tone = "dark",
}: {
  store: Store;
  href?: string;
  /** `dark` sits on the blue bands; `light` on white sections. */
  tone?: "dark" | "light";
}) {
  const { caption, name, Mark, label } = stores[store];
  const skin =
    tone === "dark"
      ? "bg-ink-900 text-white hover:bg-black"
      : "bg-white text-ink-900 border border-ink-200 hover:border-ink-300";

  const content = (
    <>
      <Mark className="h-7 w-7 shrink-0" />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[0.625rem] tracking-wide uppercase opacity-80">
          {caption}
        </span>
        <span className="mt-1 text-base font-semibold">{name}</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <span
        className={`${badgeBase} ${
          tone === "dark"
            ? "border-2 border-white/40 text-brand-200"
            : "border-2 border-ink-200 text-ink-500"
        }`}
      >
        {content}
        <span className="ml-1 text-xs font-normal">(coming soon)</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      aria-label={label}
      rel="noopener noreferrer"
      target="_blank"
      className={`${badgeBase} ${skin}`}
    >
      {content}
    </a>
  );
}

/** Both badges side by side. */
export function StoreBadges({
  ios,
  android,
  tone = "dark",
  className = "flex flex-wrap gap-3",
}: {
  ios?: string;
  android?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={className}>
      <StoreBadge store="ios" href={ios} tone={tone} />
      <StoreBadge store="android" href={android} tone={tone} />
    </div>
  );
}
