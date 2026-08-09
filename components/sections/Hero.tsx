import { HeroScene } from "@/components/illustrations/HeroScene";
import { ArrowRightIcon } from "@/components/brand/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { heroTrustPoints } from "@/lib/content/home";

export function Hero() {
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
              Local commerce,{" "}
              <span className="text-accent-400">delivered in minutes.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-100 text-pretty sm:text-lg">
              Owsho connects nearby stores to customers who want it all — the
              trust of a local seller, and the convenience of delivery in
              minutes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/categories" variant="accent" size="lg">
                What you can find
                <ArrowRightIcon className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="/become-a-seller" variant="ghost-light" size="lg">
                Sell on Owsho
              </ButtonLink>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {heroTrustPoints.map(({ label, Icon }) => (
                <li key={label} className="flex items-center gap-2 text-sm">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-500 text-ink-900">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-brand-100">{label}</span>
                </li>
              ))}
            </ul>
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
