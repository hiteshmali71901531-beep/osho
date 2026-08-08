"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/brand/Icons";
import { mainNav, sellerCta } from "@/lib/site";

/**
 * The site's only client component. A checkbox-and-CSS disclosure would ship
 * no JS at all, but it cannot close itself after a client-side navigation,
 * which leaves the panel covering the new page. The App Router already ships
 * the React runtime on every route, so the marginal cost here is small and it
 * buys correct `aria-current` and a menu that closes on navigation.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();

  // Close the panel when the route changes, including on browser back/forward.
  // Adjusting state during render is React's recommended pattern here — an
  // effect would fire a second render pass after paint.
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (pathname !== renderedPath) {
    setRenderedPath(pathname);
    setOpen(false);
  }

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Desktop */}
      <nav aria-label="Main" className="hidden lg:block">
        <ul className="flex items-center gap-1">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={`rounded-pill px-3.5 py-2 text-sm font-semibold transition-colors ${
                  isCurrent(item.href)
                    ? "bg-white/15 text-white"
                    : "text-brand-100 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-xl text-white hover:bg-white/10"
        >
          {open ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        <div
          id={panelId}
          hidden={!open}
          className="absolute inset-x-0 top-full border-t border-white/15 bg-brand-800 px-5 pb-6 shadow-lift"
        >
          {/* Distinct landmark label: the desktop <nav> is display:none rather
              than removed, so two navs named "Main" would collide. */}
          <nav aria-label="Main (mobile)">
            <ul className="flex flex-col py-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className="block rounded-lg px-2 py-3 text-base font-semibold text-white hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href={sellerCta.href}
            className="mt-2 flex h-12 items-center justify-center rounded-pill bg-accent-500 px-6 font-semibold text-ink-900"
          >
            {sellerCta.label}
          </Link>
        </div>
      </div>
    </>
  );
}
