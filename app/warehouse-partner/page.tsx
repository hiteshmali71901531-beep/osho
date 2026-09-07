import type { Metadata } from "next";
import { ShippingScene } from "@/components/illustrations/Scenes";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { PointGrid } from "@/components/sections/PointGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRightIcon, MailIcon, PhoneIcon, PinIcon, WarehouseIcon } from "@/components/brand/Icons";
import {
  warehouseBenefits,
  warehouseCareer,
  warehouseClosing,
  warehouseFaqs,
  warehouseHero,
  warehouseResponsibilities,
} from "@/lib/content/partners";
import { breadcrumbSchema, faqSchema, JsonLd, webPageSchema } from "@/lib/jsonld";
import { registeredAddress, site, telHref } from "@/lib/site";

const description =
  "Pick, pack and sort orders placed by our customers. Join Owsho's warehouse team — competitive salary, structured shifts, on-the-job training and room to grow.";

export const metadata: Metadata = {
  title: "Warehouse Partner",
  description,
  alternates: { canonical: "/warehouse-partner" },
  openGraph: {
    title: "Warehouse Partner | Owsho",
    description,
    url: "/warehouse-partner",
  },
};

export default function WarehousePartnerPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema("WebPage", {
          path: "/warehouse-partner",
          name: "Warehouse Partner",
          description,
        })}
      />
      <JsonLd data={faqSchema(warehouseFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Warehouse Partner", path: "/warehouse-partner" },
        ])}
      />

      <PageHero
        eyebrow={warehouseHero.eyebrow}
        title={warehouseHero.title}
        description={warehouseHero.description}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Warehouse Partner", href: "/warehouse-partner" },
        ]}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="max-w-2xl">
            <p className="text-base leading-relaxed text-brand-100">
              {warehouseHero.supporting}
            </p>
            <ButtonLink href="/contact" variant="accent" size="lg" className="mt-7">
              Apply now
              <ArrowRightIcon className="h-5 w-5" />
            </ButtonLink>
          </div>
          <ShippingScene className="w-full max-w-[480px] lg:ml-auto" />
        </div>
      </PageHero>

      {/* Build your career */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
            <SectionHeading
              eyebrow="Careers in operations"
              title={warehouseCareer.title}
              align="left"
            />
            <div className="rounded-card border border-ink-100 bg-brand-50/70 p-6 shadow-card sm:p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-white">
                <WarehouseIcon className="h-6 w-6" />
              </span>
              <p className="mt-5 text-base leading-relaxed text-ink-600 text-pretty">
                {warehouseCareer.body}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <PointGrid
        eyebrow="What you get"
        title="Working at an Owsho warehouse"
        points={warehouseBenefits}
        tinted
      />

      <PointGrid
        eyebrow="The role"
        title="What will you do?"
        points={warehouseResponsibilities}
        columns={4}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Frequently asked questions"
        faqs={warehouseFaqs}
        tinted
      />

      {/* Contact Us */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-brand-950 sm:text-3xl">
              Contact Us
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              Have questions about warehouse roles? Get in touch with our team.
            </p>
            <dl className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <dt className="text-sm font-semibold text-brand-950">Email</dt>
                  <dd className="mt-0.5 text-sm text-ink-600">
                    <a
                      href={`mailto:${site.email}`}
                      className="whitespace-nowrap text-brand-700 hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <dt className="text-sm font-semibold text-brand-950">Phone</dt>
                  <dd className="mt-0.5 text-sm text-ink-600">
                    <a
                      href={telHref(site.phone)}
                      className="text-brand-700 hover:underline"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <dt className="text-sm font-semibold text-brand-950">
                    Registered Office
                  </dt>
                  <dd className="mt-0.5 text-sm text-ink-600">
                    {registeredAddress}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <CtaBand
        title={warehouseClosing.title}
        description={warehouseClosing.description}
        primary={{ href: "/contact", label: "Apply now" }}
        secondary={{ href: "/delivery-partner", label: "Delivery roles" }}
      />
    </>
  );
}
