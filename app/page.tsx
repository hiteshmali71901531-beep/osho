import type { Metadata } from "next";
import { ArrowRightIcon } from "@/components/brand/Icons";
import { AppBand } from "@/components/sections/AppBand";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { Hero } from "@/components/sections/Hero";
import { PointGrid } from "@/components/sections/PointGrid";
import { StepsRail } from "@/components/sections/StepsRail";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { builtOnLocalCommerce } from "@/lib/content/about";
import { networkPillars } from "@/lib/content/home";
import { expressSteps } from "@/lib/content/express";

import { JsonLd, mobileAppSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={mobileAppSchema()} />

      <Hero />
      <FeatureStrip />
      <CategoryGrid />

      <PointGrid
        eyebrow={builtOnLocalCommerce.eyebrow}
        title={builtOnLocalCommerce.title}
        description={builtOnLocalCommerce.body}
        points={networkPillars}
        tinted
      />

      <StepsRail
        eyebrow="Owsho Express"
        title="How an Owsho order reaches you"
        description="Our fast local commerce initiative, built around nearby inventory and local fulfilment."
        steps={expressSteps}
      />

      {/* Seller trust block */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="For shop owners"
                title="The trust is already yours. We add the reach."
                description="Every neighbourhood has businesses that customers already know and trust. Owsho helps these local stores go online — keeping that trust alive, while giving sellers the reach of a modern marketplace."
                align="left"
              />
              <ButtonLink
                href="/become-a-seller"
                size="lg"
                className="mt-8"
              >
                Sell on Owsho
                <ArrowRightIcon className="h-5 w-5" />
              </ButtonLink>
            </div>

            <div className="rounded-card border border-ink-100 bg-brand-50/70 p-8 shadow-card">
              <p className="text-xs font-semibold tracking-[0.18em] text-accent-700 uppercase">
                Built for local commerce
              </p>
              <blockquote className="mt-4 text-lg leading-relaxed font-semibold text-brand-950 text-pretty">
                &ldquo;Every neighbourhood has businesses that customers already know
                and trust. Owsho helps these local stores go online — keeping
                that trust alive, while giving sellers the reach of a modern
                marketplace.&rdquo;
              </blockquote>
              <p className="mt-5 text-sm leading-relaxed text-ink-500">
                Free listing. No hidden charges. Onboard your products in
                minutes and manage your business from your phone.
              </p>

              <dl className="mt-8 grid gap-4 border-t border-ink-200 pt-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs text-ink-500">Currently onboarding in</dt>
                  <dd className="mt-1 text-lg font-bold text-brand-700">
                    Deesa, Gujarat
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-ink-500">Listing cost</dt>
                  <dd className="mt-1 text-lg font-bold text-brand-700">
                    Free
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-ink-500">
                Expanding to more cities soon.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <AppBand />
      <CtaBand />
    </>
  );
}
