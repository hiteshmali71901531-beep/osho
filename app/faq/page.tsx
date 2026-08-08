import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { HeadsetIcon, MailIcon, PhoneIcon } from "@/components/brand/Icons";
import { allFaqs, faqGroups } from "@/lib/content/faqs";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/jsonld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the questions sellers ask most about OWSHO — cost, documents, GST, delivery, returns, commission, payout timing and support.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | OWSHO",
    description:
      "Cost, documents, GST, delivery, returns, commission, payouts and support — answered.",
    url: "/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <JsonLd data={faqSchema(allFaqs)} />

      <PageHero
        eyebrow="FAQ"
        title="Questions sellers actually ask"
        description="Grouped by topic and answered directly. If something here is still unclear, seller support will answer it on the phone — that is what they are for."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
            {/* Sticky topic index — plain anchors, no JavaScript. */}
            <nav aria-label="FAQ topics" className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-xs font-semibold tracking-[0.14em] text-ink-500 uppercase">
                Topics
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                {faqGroups.map((group) => (
                  <li key={group.id}>
                    <a
                      href={`#${group.id}`}
                      className="inline-flex items-center rounded-pill px-3.5 py-2 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50 lg:w-full"
                    >
                      {group.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="min-w-0 space-y-12">
              {faqGroups.map((group) => (
                <section key={group.id} id={group.id} className="scroll-mt-24">
                  <h2 className="mb-5 text-2xl font-bold text-brand-950">
                    {group.title}
                  </h2>
                  <FaqAccordion faqs={group.faqs} />
                </section>
              ))}

              <aside className="rounded-card border border-ink-100 bg-brand-50 p-6 sm:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-white">
                  <HeadsetIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-brand-950">
                  Still have a question?
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600">
                  Seller support answers the phone during business hours, and
                  every new shop gets a named onboarding contact for the first
                  month.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex min-h-11 max-w-full items-center gap-2 rounded-pill bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                  >
                    <MailIcon className="h-4.5 w-4.5 shrink-0" />
                    {/* The address is a single unbreakable token; without an
                        explicit break it sets the min-content width of the
                        whole page and forces horizontal scroll on small phones. */}
                    <span className="break-all">{site.email}</span>
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="inline-flex h-11 items-center gap-2 rounded-pill border-2 border-brand-600 px-5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
                  >
                    <PhoneIcon className="h-4.5 w-4.5" />
                    {site.phone}
                  </a>
                  <Link
                    href="/seller-requirements"
                    className="inline-flex h-11 items-center rounded-pill px-5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
                  >
                    Read the requirements
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
