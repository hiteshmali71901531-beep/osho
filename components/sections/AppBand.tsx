import { StoreBadges } from "@/components/brand/StoreBadges";
import { Container } from "@/components/ui/Container";
import { Decoration } from "@/components/sections/PageHero";
import { site } from "@/lib/site";

/**
 * "Download the Owsho app" closing band.
 *
 * Store URLs live in `lib/site.ts`, one set per app. A store whose URL is not
 * set yet renders as an inert badge marked "coming soon" rather than a link —
 * a store button that goes nowhere costs more trust than it buys.
 */
export function AppBand({
  app = "seller",
  title = "Download the Owsho Seller app",
  description = "Manage your catalogue, availability and orders from your phone.",
}: {
  app?: "seller";
  title?: string;
  description?: string;
}) {
  const { ios, android } = site.apps[app];

  return (
    <section className="relative overflow-hidden bg-brand-800 py-16 text-white sm:py-20">
      <Decoration />
      <Container>
        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl leading-tight font-bold text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-100 text-pretty">
              {description}
            </p>
          </div>

          <StoreBadges
            ios={ios}
            android={android}
            tone="dark"
            className="flex shrink-0 flex-wrap gap-3"
          />
        </div>
      </Container>
    </section>
  );
}
