import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-card border border-ink-100 bg-white p-6 shadow-card ${className}`}
    >
      {children}
    </div>
  );
}

export function Badge({
  children,
  tone = "brand",
}: {
  children: ReactNode;
  tone?: "brand" | "accent" | "neutral";
}) {
  const tones = {
    brand: "bg-brand-50 text-brand-700",
    accent: "bg-accent-50 text-accent-800",
    neutral: "bg-ink-100 text-ink-700",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-pill px-3 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
