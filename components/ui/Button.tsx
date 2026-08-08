import Link from "next/link";
import type { Route } from "next";
import type { ReactNode } from "react";

type Variant = "primary" | "accent" | "outline" | "ghost-light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold whitespace-nowrap transition-colors duration-150 disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Spanish Blue on white — 5.1:1 contrast, AA for all text sizes.
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  // Bright Yellow always carries near-black text; orange-on-white text would fail AA.
  accent: "bg-accent-500 text-ink-900 hover:bg-accent-400",
  outline:
    "border-2 border-brand-600 bg-white text-brand-700 hover:bg-brand-50",
  // For use on the dark blue hero.
  "ghost-light":
    "border-2 border-white/70 text-white hover:bg-white hover:text-brand-700",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: Route;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "submit",
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "submit" | "button" | "reset";
}) {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
