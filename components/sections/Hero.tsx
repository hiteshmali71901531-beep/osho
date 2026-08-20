import { HeroScene } from "@/components/illustrations/HeroScene";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/brand/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

const sellerPoints = [
  {
    title: "Reach your customers nearby",
    description:
      "Get your store discovered by customers around you.",
  },
  {
    title: "Grow your business online",
    description:
      "Take your existing store online and unlock new sales opportunities.",
  },
  {
    title: "Expand your reach",
    description:
      "Reach customers across your city without opening another store.",
  },
  {
    title: "It's simple to get started",
    description:
      "Create your store, list your products and start selling online.",
  },
];

export function Hero() {
  const sellerAndroid = site.apps.seller.android;

  return (
    <section className="relative overflow-hidden bg-brand-800 pb-24 text-white sm:pb-28">
      {/* Decorative wash. Purely presentational, no layout impact. */}
      <svg
        className="pointer-events-none absolute top-0 right-0 h-full w-[70%] opacity-60"
        viewBox="0 0 600 600"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="470" cy="180" r="260" fill="#00579B" />
        <circle cx="560" cy="470" r="210" fill="#1583C8" opacity="0.35" />
      </svg>

      <Container>
        <div className="relative grid items-center gap-10 pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pt-16">
          <div>
            <h1 className="max-w-xl text-4xl leading-[1.12] font-bold text-balance sm:text-5xl lg:text-[3.4rem]">
              Your Store.{" "}
              <span className="text-accent-400">Now Online.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-100 text-pretty sm:text-lg">
              Take your store online and reach customers across your city with
              delivery in minutes. Sign up and start selling.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/become-a-seller" variant="accent" size="lg">
                Sell on Owsho
                <ArrowRightIcon className="h-5 w-5" />
              </ButtonLink>

              {sellerAndroid ? (
                <a
                  href={sellerAndroid}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-pill border-2 border-white/70 px-7 text-base font-semibold text-white transition-colors hover:bg-white hover:text-brand-700"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92ZM14.852 13.06l2.29 2.29-8.78 4.98 6.49-7.27ZM18.93 10.1l2.35 1.34a1 1 0 0 1 0 1.72l-2.35 1.34-2.52-2.22 2.52-2.18ZM8.362 3.67l8.78 4.98-2.29 2.29-6.49-7.27Z" />
                  </svg>
                  Get it on Google Play
                </a>
              ) : (
                <ButtonLink href="/become-a-seller" variant="ghost-light" size="lg">
                  Learn more
                </ButtonLink>
              )}
            </div>

            {/* Why Sellers Choose Owsho */}
            <div className="mt-10">
              <p className="text-xs font-semibold tracking-[0.18em] text-accent-400 uppercase">
                Why Sellers Choose Owsho
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {sellerPoints.map((point) => (
                  <li
                    key={point.title}
                    className="flex gap-3 rounded-2xl bg-white/10 p-4"
                  >
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-brand-200">
                        {point.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fixed aspect ratio reserves the space before paint — zero CLS. */}
          <div className="mx-auto w-full max-w-[520px]">
            <HeroScene className="aspect-[600/520] w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}
