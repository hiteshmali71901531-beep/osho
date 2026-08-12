import type { Metadata } from "next";
import Link from "next/link";
import { ContactCards, RegisteredOffice } from "@/components/sections/ContactCards";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import {
  breadcrumbSchema,
  JsonLd,
  localBusinessSchema,
  webPageSchema,
} from "@/lib/jsonld";
import { site } from "@/lib/site";

const description =
  "Contact Owsho Market Place Private Limited — seller support, grievance redressal and media enquiries, plus our registered office in Banaskantha, Gujarat.";

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Owsho",
    description,
    url: "/contact",
  },
};

const routes = [
  {
    title: "Want to sell on Owsho?",
    body: "Use the seller onboarding form — it reaches the onboarding team directly with the details they need.",
    href: "/become-a-seller" as const,
    label: "Become a seller",
  },
  {
    title: "Want to deliver with Owsho?",
    body: "Read the Delivery Partner page for eligibility and how the onboarding process works, then write to us.",
    href: "/delivery-partner" as const,
    label: "Delivery Partner",
  },
  {
    title: "Looking for warehouse work?",
    body: "Our warehouse roles cover picking, packing and sorting orders across our fulfilment operations.",
    href: "/warehouse-partner" as const,
    label: "Warehouse Partner",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema("ContactPage", {
          path: "/contact",
          name: "Contact Owsho",
          description,
        })}
      />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow="Contact"
        title="Talk to Owsho"
        description={`Seller support, grievance redressal and media enquiries — plus the registered office of ${site.legalName}.`}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Contact Us", href: "/contact" },
        ]}
      />

      <ContactCards />

      {/* Registered office + where to go next */}
      <section id="office" className="scroll-mt-24 bg-brand-50/60 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
            <div>
              <SectionHeading
                eyebrow="Before you write"
                title="There may be a faster route"
                description="Applications move quicker through the right form than through the general inbox."
                align="left"
              />
              <ul className="mt-8 space-y-4">
                {routes.map((route) => (
                  <li
                    key={route.href}
                    className="rounded-card border border-ink-100 bg-white p-5 shadow-card"
                  >
                    <h3 className="text-base font-semibold text-brand-950">
                      {route.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                      {route.body}
                    </p>
                    <Link
                      href={route.href}
                      className="mt-3 inline-flex text-sm font-semibold text-brand-700 hover:underline"
                    >
                      {route.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <RegisteredOffice heading="Registered company details" />
              <p className="mt-6 text-sm leading-relaxed text-ink-600">
                How we handle the information you send us is set out in our{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-brand-700 hover:underline"
                >
                  Privacy Policy
                </Link>
                . Please never send passwords, OTPs, UPI PINs or card PINs by
                email — see{" "}
                <Link
                  href="/security"
                  className="font-semibold text-brand-700 hover:underline"
                >
                  Security
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
