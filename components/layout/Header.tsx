import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { SiteNav } from "@/components/layout/SiteNav";
import { Container } from "@/components/ui/Container";
import { sellerCta } from "@/lib/site";

/**
 * Solid deep-blue sticky header. Every page opens with a blue band beneath it
 * (the hero on the home page, a title band elsewhere), so the header reads as
 * part of that band exactly like the design, while keeping guaranteed
 * white-on-blue contrast instead of a transparent bar over unknown content.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-800">
      <Container>
        <div className="flex h-18 items-center justify-between gap-4">
          <Link href="/" className="shrink-0" aria-label="OWSHO Marketplace — home">
            <Logo tone="dark" />
          </Link>

          <div className="flex items-center gap-2">
            <SiteNav />
            <Link
              href={sellerCta.href}
              className="hidden h-11 items-center rounded-pill bg-accent-500 px-5 text-sm font-semibold text-ink-900 transition-colors hover:bg-accent-400 lg:inline-flex"
            >
              {sellerCta.label}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
