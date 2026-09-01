import type { Metadata } from "next";
import { DeliveryRideScene } from "@/components/illustrations/Scenes";
import { ChecklistSection } from "@/components/sections/ChecklistSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { PointGrid } from "@/components/sections/PointGrid";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/brand/Icons";
import {
  deliveryBenefits,
  deliveryClosing,
  deliveryEligibility,
  deliveryFaqs,
  deliveryHero,
  deliveryResponsibilities,
} from "@/lib/content/partners";
import { breadcrumbSchema, faqSchema, JsonLd, webPageSchema } from "@/lib/jsonld";

const description =
  "Deliver orders and earn on your schedule. Join Owsho as a Delivery Partner — flexible working hours, regular payments, incentive opportunities and operational support.";

export const metadata: Metadata = {
  title: "Delivery Partner",
  description,
  alternates: { canonical: "/delivery-partner" },
  openGraph: {
    title: "Delivery Partner | Owsho",
    description,
    url: "/delivery-partner",
  },
};

export default function DeliveryPartnerPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema("WebPage", {
          path: "/delivery-partner",
          name: "Deliver with Owsho",
          description,
        })}
      />
      <JsonLd data={faqSchema(deliveryFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Delivery Partner", path: "/delivery-partner" },
        ])}
      />

      <PageHero
        eyebrow={deliveryHero.eyebrow}
        title={deliveryHero.title}
        description={deliveryHero.description}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Delivery Partner", href: "/delivery-partner" },
        ]}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="max-w-2xl">
            <p className="text-base leading-relaxed text-brand-100">
              {deliveryHero.supporting}
            </p>
            <ButtonLink href="/contact" variant="accent" size="lg" className="mt-7">
              Apply to become a delivery partner
              <ArrowRightIcon className="h-5 w-5" />
            </ButtonLink>
          </div>
          <DeliveryRideScene className="w-full max-w-[480px] lg:ml-auto" />
        </div>
      </PageHero>

      <PointGrid
        eyebrow="Why join"
        title="Why deliver with Owsho?"
        points={deliveryBenefits}
      />

      <PointGrid
        eyebrow="The role"
        title="What does a Delivery Partner do?"
        points={deliveryResponsibilities}
        columns={4}
        tinted
      />

      <ChecklistSection
        eyebrow="Eligibility"
        title="Who can become a Delivery Partner?"
        description="Eligibility may vary depending on the location and applicable role requirements. Generally, applicants should meet the following."
        items={deliveryEligibility}
        footnote="Additional documents or verification may be required during onboarding."
      />

      <FaqSection
        eyebrow="FAQ"
        title="Frequently asked questions"
        faqs={deliveryFaqs}
        tinted
      />

      <CtaBand
        title={deliveryClosing.title}
        description={deliveryClosing.description}
        primary={{ href: "/contact", label: "Apply now" }}
        secondary={{ href: "/warehouse-partner", label: "Warehouse roles" }}
      />
    </>
  );
}
