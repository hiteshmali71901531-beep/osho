import { Container } from "@/components/ui/Container";
import { Decoration } from "@/components/sections/PageHero";
import { site } from "@/lib/site";

const stores = [
  { key: "android", label: "Get it on Google Play", href: site.apps.android },
  { key: "ios", label: "Download on the App Store", href: site.apps.ios },
] as const;

const chip =
  "inline-flex h-13 items-center justify-center rounded-pill px-7 text-base font-semibold";

/**
 * "Download the Owsho app" closing band.
 *
 * Store URLs live in `lib/site.ts`. Until a URL is set the badge renders as
 * inert text rather than a link — a store button that goes nowhere costs more
 * trust than it buys.
 */
export function AppBand({
  title = "Download the Owsho app",
  description = "Everything from your local stores, delivered to your doorstep.",
}: {
  title?: string;
  description?: string;
}) {
  const anyLive = stores.some((store) => store.href);

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
                  key={store.key}
                  className={`${chip} border-2 border-white/40 text-brand-100`}
                >
                  {store.label}
                </span>
              ),
            )}
          </div>
        </div>

        {anyLive ? null : (
          <p className="relative mt-6 text-sm text-brand-200">
            Store links are being published — check back shortly.
          </p>
        )}
      </Container>
    </section>
  );
}
