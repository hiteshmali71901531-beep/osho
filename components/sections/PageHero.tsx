import Link from "next/link";
import type { Route } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

/**
 * The blue title band every inner page opens with. It continues the header's
 * colour, so the sticky header reads as part of the band exactly like the
 * design comp — without a transparent bar that would lose contrast on scroll.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: { name: string; href: Route }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-800 text-white">
      <Decoration />
      <Container>
        <div className="relative py-14 sm:py-18">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-brand-200">
              {breadcrumb.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  {index === breadcrumb.length - 1 ? (
                    <span aria-current="page" className="text-white">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-white">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-accent-400 uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-tight font-bold text-balance sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100 text-pretty sm:text-lg">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}

export function Decoration() {
  return (
    <svg
      className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] opacity-40"
      viewBox="0 0 400 400"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="240" cy="150" r="150" fill="#1583C8" opacity="0.45" />
      <circle cx="330" cy="270" r="110" fill="#F9A421" opacity="0.16" />
    </svg>
  );
}
