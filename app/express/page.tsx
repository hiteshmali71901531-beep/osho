import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/FaqSection";
import { OrderReceivedScene } from "@/components/illustrations/Scenes";
import { PageHero } from "@/components/sections/PageHero";
import { PointGrid } from "@/components/sections/PointGrid";
import { StepsRail } from "@/components/sections/StepsRail";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  buildingTheFuture,
  builtForTheCustomer,
  expressFaqs,
  expressHero,
  expressIntro,
  expressSteps,
  principles,
  whatMakesItDifferent,
} from "@/lib/content/express";
import {
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  JsonLd,
  webPageSchema,
} from "@/lib/jsonld";

const description = expressHero.description;

export const metadata: Metadata = {
  title: "Owsho Express",
  description,
  alternates: { canonical: "/express" },
  openGraph: {
    title: "Owsho Express | Owsho",
    description,
    url: "/express",
  },
};

export default function ExpressPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema("WebPage", {
          path: "/express",
          name: "Owsho Express",
          description,
        })}
      />
      <JsonLd
        data={howToSchema(
          "How Owsho Express works",
          "How an order moves from discovery through nearby inventory and local fulfilment to the customer's door.",
          expressSteps,
        )}
      />
      <JsonLd data={faqSchema(expressFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Owsho Express", path: "/express" },
        ])}
      />

      <PageHero
        eyebrow={expressHero.eyebrow}
        title={expressHero.title}
        description={expressHero.description}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Owsho Express", href: "/express" },
        ]}
      >
        <div className="max-w-3xl space-y-4">
          {expressIntro.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-brand-100">
              {paragraph}
            </p>
          ))}
        </div>
      </PageHero>

      <PointGrid
        eyebrow="Built for the local customer"
        title="Closer inventory, faster orders"
        points={builtForTheCustomer}
      />

      <section className="pt-4">
        <Container>
          <OrderReceivedScene className="mx-auto w-full max-w-[560px]" />
        </Container>
      </section>

      <StepsRail
        eyebrow="How it works"
        title="How Owsho Express works"
        description="Five steps from a customer opening the app to an order arriving at their door."
        steps={expressSteps}
      />

      <PointGrid
        eyebrow="What makes it different"
        title="What makes Owsho Express different?"
        points={whatMakesItDifferent}
        columns={4}
      />

      {/* Building the future of local commerce */}
      <section className="bg-brand-50/60 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <SectionHeading
              eyebrow="The bigger picture"
              title={buildingTheFuture.title}
              align="left"
            />
            <div className="space-y-5">
              {buildingTheFuture.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-ink-600 text-pretty"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <PointGrid
        eyebrow="Our principles"
        title="What we hold to while we build it"
        points={principles}
        columns={3}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Frequently asked questions"
        faqs={expressFaqs}
        tinted
      />

      <CtaBand
        title="The future is local. The future is connected."
        description="Owsho Express is building a faster way for local commerce to reach the people around it. Businesses can explore seller and fulfilment partnership opportunities with us."
        primary={{ href: "/become-a-seller", label: "Become a seller" }}
        secondary={{ href: "/warehouse-partner", label: "Warehouse partner" }}
      />
    </>
  );
}
