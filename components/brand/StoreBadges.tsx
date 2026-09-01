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
      <path d="M16.36 12.72c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.62-1.7-3.19-1.72-1.36-.14-2.65.8-3.34.8-.69 0-1.75-.78-2.87-.76-1.48.02-2.84.86-3.6 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.25 2.75 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.87.69 1.19-.02 1.94-1.08 2.66-2.14.84-1.23 1.19-2.42 1.21-2.48-.03-.01-2.32-.89-2.34-3.51ZM14.2 6.2c.6-.74 1.01-1.75.9-2.77-.87.04-1.93.58-2.56 1.31-.56.65-1.06 1.7-.93 2.69.97.08 1.97-.49 2.59-1.23Z" />
    </svg>
  );
}

function PlayMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path d="M3.6 1.81 13.79 12 3.61 22.19a1 1 0 0 1-.61-.92V2.73a1 1 0 0 1 .6-.92Z" fill="#34C4F4" />
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
