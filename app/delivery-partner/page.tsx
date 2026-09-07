import type { Metadata } from "next";
import { DeliveryRideScene } from "@/components/illustrations/Scenes";
import { ChecklistSection } from "@/components/sections/ChecklistSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { PointGrid } from "@/components/sections/PointGrid";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon, CheckCircleIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/brand/Icons";
import {
  deliveryBenefits,
  deliveryClosing,
  deliveryEligibility,
  deliveryFaqs,
  deliveryHero,
  deliveryResponsibilities,
} from "@/lib/content/partners";
import { breadcrumbSchema, faqSchema, JsonLd, webPageSchema } from "@/lib/jsonld";
import { registeredAddress, site, telHref } from "@/lib/site";

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

const fieldClass =
  "h-12 w-full rounded-xl border border-ink-200 bg-white px-4 text-sm text-ink-800 placeholder:text-ink-500";
const labelClass = "mb-1.5 block text-sm font-semibold text-brand-950";

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
            <ButtonLink href="#apply" variant="accent" size="lg" className="mt-7">
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

      {/* Delivery partner application form */}
      <section id="apply" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            <div>
              <SectionHeading
                eyebrow="Become a Delivery Partner"
                title="Deliver with Owsho"
                description="Fill in your details and our team will get in touch with you."
                align="left"
              />
              <ul className="mt-8 space-y-3">
                {[
                  "Flexible working hours based on availability.",
                  "Earn through deliveries and applicable incentives.",
                  "Your details are used for onboarding and support only.",
                  "Our team will review your details and get in touch regarding the next steps.",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-ink-600">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <form
              action={`mailto:${site.email}?subject=Delivery%20Partner%20Application`}
              method="POST"
              encType="text/plain"
              className="rounded-card border border-ink-100 bg-white p-6 shadow-card sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="dp-fullName">
                    Full name
                  </label>
                  <input
                    id="dp-fullName"
                    name="fullName"
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="dp-mobile">
                    Mobile number
                  </label>
                  <input
                    id="dp-mobile"
                    name="mobile"
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="Enter your mobile number"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="dp-email">
                    Email (optional)
                  </label>
                  <input
                    id="dp-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="dp-city">
                    City / location
                  </label>
                  <input
                    id="dp-city"
                    name="city"
                    required
                    autoComplete="address-level2"
                    placeholder="Enter your city"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="dp-vehicle">
                    Vehicle type
                  </label>
                  <input
                    id="dp-vehicle"
                    name="vehicle"
                    placeholder="e.g. Bike, Scooter, Bicycle"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="dp-experience">
                    Delivery experience
                  </label>
                  <input
                    id="dp-experience"
                    name="experience"
                    placeholder="e.g. 1 year, None"
                    className={fieldClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="dp-address">
                    Current address
                  </label>
                  <textarea
                    id="dp-address"
                    name="address"
                    required
                    rows={3}
                    autoComplete="street-address"
                    placeholder="Enter your current address"
                    className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 placeholder:text-ink-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 h-13 w-full rounded-pill bg-accent-500 px-6 font-semibold text-ink-900 transition-colors hover:bg-accent-400"
              >
                Submit Application
              </button>
              <p className="mt-3 text-xs leading-relaxed text-ink-500">
                Our team will review your details and get in touch with you
                regarding the next steps. Questions? Write to{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold whitespace-nowrap text-brand-700 hover:underline"
                >
                  {site.email}
                </a>
                .
              </p>
            </form>
          </div>
        </Container>
      </section>

      {/* Contact Us */}
      <section className="bg-brand-50/60 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-brand-950 sm:text-3xl">
              Contact Us
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              Have questions about becoming a Delivery Partner? Get in touch
              with our team.
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
        title={deliveryClosing.title}
        description={deliveryClosing.description}
        primary={{ href: "#apply", label: "Apply now" }}
        secondary={{ href: "/warehouse-partner", label: "Warehouse roles" }}
      />
    </>
  );
}
