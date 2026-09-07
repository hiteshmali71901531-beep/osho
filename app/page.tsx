import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircleIcon } from "@/components/brand/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  builtForLocalCommerce,
  homeHero,
  sellerReasons,
  whereWeOperate,
} from "@/lib/content/home";
import { JsonLd, mobileAppSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: homeHero.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={mobileAppSchema()} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-800 text-white">
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
          <div className="relative grid items-center gap-10 py-14 sm:py-18 lg:grid-cols-[1fr_1fr] lg:gap-12">
            <div>
              <h1 className="max-w-xl text-4xl leading-[1.12] font-bold text-balance sm:text-5xl lg:text-[3.4rem]">
                Your store.{" "}
                <span className="text-accent-400">Now online.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-100 text-pretty sm:text-lg">
                {homeHero.description}
              </p>

              <ButtonLink
                href="/become-a-seller#apply"
                variant="accent"
                size="lg"
                className="mt-8"
              >
                {homeHero.cta}
              </ButtonLink>

              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-100">
                <CheckCircleIcon className="h-5 w-5 shrink-0 text-accent-400" />
                {homeHero.reassurance}
              </p>
            </div>

            {/* Banner image */}
            <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-2xl">
              <Image
                src="/banner.webp"
                alt="Owsho Marketplace — Local store in minutes app"
                width={1200}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Why sellers choose Owsho */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why sellers choose Owsho"
            title="Every seller's top choice, and here's why"
          />

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sellerReasons.map(({ title, description, Scene }) => (
              <li
                key={title}
                className="flex h-full flex-col gap-5 rounded-card border border-ink-100 bg-white p-6 shadow-card transition-shadow hover:shadow-lift"
              >
                <div>
                  <h3 className="text-lg font-semibold text-balance text-brand-950">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {description}
                  </p>
                </div>
                {/* Pushed to the card foot so the illustrations line up across
                    a row whatever length the copy runs to. */}
                <Scene className="mt-auto w-full" />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Built for local commerce */}
      <section className="bg-brand-900 py-16 text-white sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <h2 className="text-3xl leading-tight font-bold text-balance text-accent-400 sm:text-4xl">
                {builtForLocalCommerce.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-brand-100 text-pretty sm:text-lg">
                {builtForLocalCommerce.description}
              </p>
            </div>

            <dl className="divide-y divide-white/10 rounded-card border border-white/15 bg-white/5">
              {builtForLocalCommerce.stats.map(({ value, label }) => (
                <div
                  key={value}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 px-6 py-6"
                >
                  <dt className="text-3xl font-bold text-accent-400 sm:text-4xl">
                    {value}
                  </dt>
                  <dd className="text-base text-brand-100">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Where we operate */}
      <section className="bg-brand-50/60 py-16 text-center sm:py-20">
        <Container>
          <p className="text-xs font-semibold tracking-[0.18em] text-accent-700 uppercase">
            {whereWeOperate.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl leading-tight font-bold text-balance text-brand-950 sm:text-4xl">
            {whereWeOperate.title}
          </h2>
        </Container>
      </section>
    </>
  );
}
