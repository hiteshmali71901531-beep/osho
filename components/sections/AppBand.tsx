import { Container } from "@/components/ui/Container";
import { Decoration } from "@/components/sections/PageHero";
import { site } from "@/lib/site";

const chip =
  "inline-flex h-13 items-center justify-center rounded-pill px-7 text-base font-semibold";

/**
 * "Download the Owsho app" closing band.
 *
 * Store URLs live in `lib/site.ts`, one set per app. A store whose URL is not
 * set yet renders as inert text rather than a link — a store button that goes
 * nowhere costs more trust than it buys.
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
  const stores = [
    { key: "ios", label: "Download on the App Store", href: ios },
    { key: "android", label: "Get it on Google Play", href: android },
  ];

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

          <div className="flex shrink-0 flex-wrap gap-3">
            {stores.map((store) =>
              store.href ? (
                <a
                  key={store.key}
                  href={store.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={`${chip} bg-accent-500 text-ink-900 transition-colors hover:bg-accent-400`}
                >
                  {store.label}
                </a>
              ) : (
                <span
                  key="3"
                  className={`${chip} border-2 border-white/40 text-brand-200`}
                >
                  label
                  <span className="ml-2 text-sm font-normal">(coming soon)</span>
                </span>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
