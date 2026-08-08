import type { Metadata } from "next";
import Link from "next/link";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { Hero } from "@/components/sections/Hero";
import { Newsletter } from "@/components/sections/Newsletter";
import { StatsBand } from "@/components/sections/StatsBand";
import { StepsRail } from "@/components/sections/StepsRail";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/brand/Icons";
import { buyerSteps } from "@/lib/content/home";
import { sellerBenefits } from "@/lib/content/seller";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <CategoryGrid />
      <StepsRail
        eyebrow="How it works"
        title="Shopping made simple"
        description="Four steps from browsing your neighbourhood shops to opening the box at your door."
        steps={buyerSteps}
      />

      {/* Seller pitch */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="For shop owners"
                title="Your shop, online — without the setup cost"
                description="OWSHO exists to make the online marketplace fairer. We help local businesses get online so they can compete and grow, with delivery, payments and support handled for them."
                align="left"
              />
              <ul className="mt-8 space-y-4">
                {sellerBenefits.slice(0, 4).map((benefit) => (
                  <li key={benefit.title} className="flex gap-3">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    <div>
                      <h3 className="text-sm font-semibold text-brand-950">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-500">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/seller-benefits"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-pill bg-brand-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                See all seller benefits
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>

            <div className="rounded-card border border-ink-100 bg-brand-50/70 p-8 shadow-card">
              <p className="text-xs font-semibold tracking-[0.18em] text-accent-700 uppercase">
                Our mission
              </p>
              <blockquote className="mt-4 text-lg leading-relaxed font-semibold text-brand-950 text-pretty">
                “We see a lively online marketplace where every{" "}
                <span className="text-brand-600">Owner&rsquo;s Shop</span> is a
                big success — a <span className="text-accent-700">Vocal for Local</span>{" "}
                community where local businesses and communities thrive
                together.”
              </blockquote>
              <p className="mt-5 text-sm text-ink-500">
                Inspired by the Vocal for Local movement, OWSHO helps shop owners
                show off their products and reach more people, with fast delivery
                and fair prices for everyone.
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-ink-200 pt-6">
                {[
                  { term: "Setup cost", detail: "₹0" },
                  { term: "Verification", detail: "~48 hrs" },
                  { term: "Payouts", detail: "Weekly" },
                ].map((item) => (
                  <div key={item.term}>
                    <dt className="text-xs text-ink-500">{item.term}</dt>
                    <dd className="mt-1 text-xl font-bold text-brand-700">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <StatsBand />
      <Newsletter />
      <CtaBand />
    </>
  );
}
