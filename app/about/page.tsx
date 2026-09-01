import type { Metadata } from "next";
import { ArrowRightIcon } from "@/components/brand/Icons";
import { StoreBadges } from "@/components/brand/StoreBadges";
import {
  CityNetworkScene,
  DigitalStorefrontScene,
  EcosystemScene,
  LocalCommerceScene,
  OfflineToOnlineScene,
  ShopGrowthScene,
} from "@/components/illustrations/Scenes";
import { PageHero } from "@/components/sections/PageHero";
import { PointGrid } from "@/components/sections/PointGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import {
  aboutCta,
  aboutHero,
  builtOnLocalCommerce,
  moreThanAMarketplace,
  ourStory,
  ourVision,
  whyOwsho,
  whyOwshoPoints,
} from "@/lib/content/about";
import {
  breadcrumbSchema,
  JsonLd,
  mobileAppSchema,
  webPageSchema,
} from "@/lib/jsonld";
import { site } from "@/lib/site";

const description = aboutHero.description;

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Owsho",
    description,
    url: "/about",
  },
};

/** Shared shell for the alternating copy-and-illustration sections. */
function SplitSection({
  eyebrow,
  title,
  children,
  art,
  flip = false,
  tinted = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  art: React.ReactNode;
  /** Puts the illustration on the left instead of the right. */
  flip?: boolean;
  tinted?: boolean;
}) {
  return (
    <section className={`py-16 sm:py-20 ${tinted ? "bg-brand-50/60" : ""}`}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className={flip ? "lg:order-2" : undefined}>
            <SectionHeading eyebrow={eyebrow} title={title} align="left" />
            <div className="mt-6 space-y-5">{children}</div>
          </div>
          <div className={flip ? "lg:order-1" : undefined}>{art}</div>
        </div>
      </Container>
    </section>
  );
}

const paragraph = "text-base leading-relaxed text-ink-600 text-pretty";
const emphasis =
  "text-lg leading-snug font-semibold text-balance text-brand-800";

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema("AboutPage", {
          path: "/about",
          name: "About Owsho",
          description,
        })}
      />
      <JsonLd data={mobileAppSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />

      {/* 1. Hero */}
      <PageHero
        eyebrow={aboutHero.eyebrow}
        title={aboutHero.title}
        description={aboutHero.description}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about" },
        ]}
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
          <p className="text-2xl leading-tight font-bold text-balance text-accent-400 sm:text-3xl">
            {aboutHero.banner}
          </p>
          <LocalCommerceScene className="w-full max-w-[520px] lg:ml-auto" />
        </div>
      </PageHero>

      {/* 2. Our Story */}
      <SplitSection
        eyebrow={ourStory.eyebrow}
        title={ourStory.title}
        art={<OfflineToOnlineScene className="w-full" />}
      >
        {ourStory.body.map((text) => (
          <p key={text} className={paragraph}>
            {text}
          </p>
        ))}
      </SplitSection>

      {/* 3. Why Owsho? */}
      <SplitSection
        eyebrow={whyOwsho.eyebrow}
        title={whyOwsho.title}
        art={<DigitalStorefrontScene className="w-full" />}
        flip
        tinted
      >
        <p className={paragraph}>{whyOwsho.body}</p>
        <p className={emphasis}>{whyOwsho.closing}</p>
      </SplitSection>

      <PointGrid title="What going digital gives you" points={whyOwshoPoints} />

      {/* 4. Built on Local Commerce */}
      <SplitSection
        eyebrow={builtOnLocalCommerce.eyebrow}
        title={builtOnLocalCommerce.title}
        art={<EcosystemScene className="w-full" />}
        tinted
      >
        <p className={paragraph}>{builtOnLocalCommerce.body}</p>
        <p className={emphasis}>{builtOnLocalCommerce.emphasis}</p>
        <p className={paragraph}>{builtOnLocalCommerce.closing}</p>
      </SplitSection>

      {/* 5. More Than a Marketplace */}
      <SplitSection
        eyebrow={moreThanAMarketplace.eyebrow}
        title={moreThanAMarketplace.title}
        art={<ShopGrowthScene className="w-full" />}
        flip
      >
        {moreThanAMarketplace.body.map((text) => (
          <p key={text} className={paragraph}>
            {text}
          </p>
        ))}
        <p className={emphasis}>{moreThanAMarketplace.emphasis}</p>
      </SplitSection>

      {/* 6. Our Vision */}
      <SplitSection
        eyebrow={ourVision.eyebrow}
        title={ourVision.title}
        art={<CityNetworkScene className="w-full" />}
        tinted
      >
        {ourVision.body.map((text) => (
          <p key={text} className={paragraph}>
            {text}
          </p>
        ))}
        <p className={emphasis}>{ourVision.emphasis}</p>
      </SplitSection>

      {/* 7. Closing CTA */}
      <section className="bg-brand-800 py-16 text-white sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl leading-tight font-bold text-balance sm:text-4xl">
              {aboutCta.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-100 text-pretty">
              {aboutCta.description}
            </p>
            <p className="mt-5 text-xl font-semibold text-balance text-accent-400">
              {aboutCta.emphasis}
            </p>

            <div className="mt-9 flex flex-col items-center gap-5">
              <ButtonLink href="/become-a-seller" variant="accent" size="lg">
                {aboutCta.sellerLabel}
                <ArrowRightIcon className="h-5 w-5" />
              </ButtonLink>

              <div>
                <p className="text-sm font-semibold text-brand-100">
                  {aboutCta.appLabel}
                </p>
                <StoreBadges
                  ios={site.apps.seller.ios}
                  android={site.apps.seller.android}
                  tone="dark"
                  className="mt-3 flex flex-wrap justify-center gap-3"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
