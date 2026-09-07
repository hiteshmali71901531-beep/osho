import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, MailIcon, ScooterIcon, WarehouseIcon } from "@/components/brand/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { PointGrid } from "@/components/sections/PointGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  careersHero,
  hiringPhilosophy,
  lifeAtOwsho,
  whatWeLookFor,
} from "@/lib/content/careers";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

const description =
  "Hiring is the most important thing we do. Owsho is always looking for people who care about local commerce — see how we hire, what we look for, and what life here looks like.";

export const metadata: Metadata = {
  title: "Careers",
  description,
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | Owsho",
    description,
    url: "/careers",
  },
};

const operationsRoles = [
  {
    title: "Warehouse Partner",
    body: "Pick, pack and sort orders placed by our customers.",
    href: "/warehouse-partner" as const,
    Icon: WarehouseIcon,
  },
  {
    title: "Delivery Partner",
    body: "Deliver orders and earn on your schedule.",
    href: "/delivery-partner" as const,
    Icon: ScooterIcon,
  },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema("WebPage", {
          path: "/careers",
          name: "Careers at Owsho",
          description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />

      <PageHero
        eyebrow={careersHero.eyebrow}
        title={careersHero.title}
        description={careersHero.description}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Careers", href: "/careers" },
        ]}
      />

      {/* Hiring philosophy + what we look for */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Our hiring philosophy"
                title="We build opportunities around great people."
                align="left"
              />
              <div className="mt-6 space-y-5">
                {hiringPhilosophy.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-ink-600 text-pretty"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-card border border-ink-100 bg-brand-50/70 p-6 shadow-card sm:p-8">
              <h2 className="text-lg font-bold text-brand-950">
                When we meet someone who might join Owsho, we ask ourselves:
              </h2>
              <ul className="mt-6 space-y-4">
                {whatWeLookFor.map((question, index) => (
                  <li key={question} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-base leading-relaxed text-brand-950">
                      {question}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-ink-200 pt-5 text-sm text-ink-600 italic">
                If that sounds like you, we&rsquo;d love to talk.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* How to apply — open applications */}
      <section className="bg-brand-50/60 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-card border border-ink-100 bg-white p-6 text-center shadow-card sm:p-10">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
              <MailIcon className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-balance text-brand-950 sm:text-3xl">
              See our open roles
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-600 text-pretty">
              We don&rsquo;t have a public list of openings right now. Write to
              us anyway — tell us what you want to build and why local commerce
              interests you, and we&rsquo;ll get back to you if there is a fit.
            </p>
            <a
              href={`mailto:${site.email}?subject=Careers%20at%20Owsho`}
              className="mt-7 inline-flex h-13 max-w-full items-center justify-center gap-2 rounded-pill bg-brand-600 px-7 text-base font-semibold text-white transition-colors hover:bg-brand-700"
            >
              <MailIcon className="h-5 w-5 shrink-0" />
              <span className="whitespace-nowrap">{site.email}</span>
            </a>
          </div>
        </Container>
      </section>

      <PointGrid
        eyebrow="Life at Owsho"
        title="We take care of our own"
        description="Some of what you can expect as part of the Owsho team."
        points={lifeAtOwsho}
        columns={4}
      />

      {/* Operations roles */}
      <section className="bg-brand-50/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Operations"
            title="Roles across our fulfilment network"
            description="Beyond the core team, Owsho runs on warehouse and delivery partners. Both have their own application process."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {operationsRoles.map((role) => (
              <li key={role.title}>
                <Link
                  href={role.href}
                  className="group flex h-full flex-col gap-4 rounded-card border border-ink-100 bg-white p-6 shadow-card transition-shadow hover:shadow-lift sm:p-8"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <role.Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-brand-950">
                    {role.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-500">{role.body}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-brand-700">
                    Read more
                    <ArrowRightIcon className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
