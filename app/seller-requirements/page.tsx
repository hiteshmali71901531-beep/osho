import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Card";
import { CheckCircleIcon } from "@/components/brand/Icons";
import { requirementGroups } from "@/lib/content/seller";
import { breadcrumbSchema, JsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Seller Requirements",
  description:
    "What you need to sell on OWSHO: eligibility, KYC and business documents, operating standards, and product listing rules — set out in plain language.",
  alternates: { canonical: "/seller-requirements" },
  openGraph: {
    title: "Seller Requirements | OWSHO",
    description:
      "Eligibility, documents, operating standards and listing rules for OWSHO sellers.",
    url: "/seller-requirements",
  },
};

export default function SellerRequirementsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Seller Requirements", path: "/seller-requirements" },
        ])}
      />

      <PageHero
        eyebrow="Requirements"
        title="What you need before you go live"
        description="No hidden conditions and no fine print you find out about later. This is the complete list — eligibility, documents, operating standards and listing rules."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Seller Requirements", href: "/seller-requirements" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          {/* Jump links — plain anchors, no JavaScript. */}
          <nav aria-label="On this page" className="mb-12">
            <ul className="flex flex-wrap gap-2">
              {requirementGroups.map((group) => (
                <li key={group.id}>
                  <a
                    href={`#${group.id}`}
                    className="inline-flex h-10 items-center rounded-pill border border-ink-200 bg-white px-4 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
                  >
                    {group.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-14">
            {requirementGroups.map((group) => (
              <section key={group.id} id={group.id} className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white">
                    <group.Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold text-brand-950">
                      {group.title}
                    </h2>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={item.label}
                      className="rounded-card border border-ink-100 bg-white p-5 shadow-card"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="flex gap-2.5 text-sm font-semibold text-brand-950">
                          <CheckCircleIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-600" />
                          {item.label}
                        </h3>
                        <Badge tone={item.required ? "brand" : "neutral"}>
                          {item.required ? "Required" : "If applicable"}
                        </Badge>
                      </div>
                      <p className="mt-2 pl-7 text-sm leading-relaxed text-ink-500">
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <aside className="mt-14 rounded-card border border-accent-200 bg-accent-50 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-accent-900">
              Missing a document?
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-accent-900">
              Apply anyway. Plenty of shops start onboarding while a GSTIN or an
              FSSAI licence is still being processed — our team will tell you
              what can move ahead in the meantime and what has to wait. Nothing
              is charged until your shop goes live.
            </p>
          </aside>
        </Container>
      </section>

      <CtaBand
        title="Have your documents ready?"
        description="Registration takes about five minutes and verification usually finishes within 48 working hours."
      />
    </>
  );
}
