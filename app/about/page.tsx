import type { Metadata } from "next";
import { CategoryArt } from "@/components/illustrations/CategoryArt";
import { AppBand } from "@/components/sections/AppBand";
import { PageHero } from "@/components/sections/PageHero";
import { PointGrid } from "@/components/sections/PointGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { aboutHero, appBand, builtOnLocalCommerce, ourStory } from "@/lib/content/about";
import { categories } from "@/lib/content/categories";
import { networkPillars } from "@/lib/content/home";
import {
  breadcrumbSchema,
  JsonLd,
  mobileAppSchema,
  webPageSchema,
} from "@/lib/jsonld";

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

      <PageHero
        eyebrow={aboutHero.eyebrow}
        title={aboutHero.title}
        description={aboutHero.description}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about" },
        ]}
      >
        <p className="text-2xl leading-tight font-bold text-balance text-accent-400 sm:text-3xl">
          {aboutHero.banner}
        </p>
      </PageHero>

      {/* Our story */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <SectionHeading
              eyebrow={ourStory.eyebrow}
              title={ourStory.title}
              align="left"
            />
            <div className="space-y-5">
              {ourStory.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-ink-600 text-pretty"
                >
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink href="/press" variant="outline">
                  Read the full background
                </ButtonLink>
                <ButtonLink href="/values" variant="outline">
                  What we value
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <PointGrid
        eyebrow={builtOnLocalCommerce.eyebrow}
        title={builtOnLocalCommerce.title}
        description={builtOnLocalCommerce.body}
        points={networkPillars}
        tinted
      />

      {/* What you can find on Owsho */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Categories"
            title="What you can find on Owsho"
            description="Seven categories of everyday essentials, all from businesses in your own neighbourhood."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <li
                key={category.slug}
                className="flex h-full flex-col gap-4 rounded-card border border-ink-100 bg-white p-6 shadow-card"
              >
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 p-2.5">
                  <CategoryArt slug={category.slug} />
                </span>
                <h3 className="text-base font-semibold text-brand-950">
                  {category.name}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500">
                  {category.blurb}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <AppBand title={appBand.title} description={appBand.description} />
    </>
  );
}
