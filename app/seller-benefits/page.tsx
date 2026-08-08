import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon, CloseIcon } from "@/components/brand/Icons";
import { sellerBenefits } from "@/lib/content/seller";
import { breadcrumbSchema, JsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Seller Benefits",
  description:
    "Why local shops sell on OWSHO: zero setup cost, nearby customers, delivery handled for you, predictable weekly payouts, real support and no hidden charges.",
  alternates: { canonical: "/seller-benefits" },
  openGraph: {
    title: "Seller Benefits | OWSHO",
    description:
      "Zero setup cost, nearby customers, delivery handled for you and predictable weekly payouts.",
    url: "/seller-benefits",
  },
};

const comparison: { label: string; owsho: string; alone: string }[] = [
  {
    label: "Cost to get online",
    owsho: "₹0 — no listing or subscription fee",
    alone: "Website, hosting and a developer",
  },
  {
    label: "Reaching new customers",
    owsho: "Ranked to nearby shoppers automatically",
    alone: "Paid ads or word of mouth",
  },
  {
    label: "Delivery",
    owsho: "Partner riders, labels and tracking included",
    alone: "Your own staff or a courier contract",
  },
  {
    label: "Payments",
    owsho: "UPI, cards, net banking, wallets and COD",
    alone: "A payment gateway you set up and maintain",
  },
  {
    label: "Payouts",
    owsho: "Fixed weekly cycle with a full statement",
    alone: "Chase each payment yourself",
  },
  {
    label: "Support when it goes wrong",
    owsho: "Seller support on the phone",
    alone: "You are the support team",
  },
];

/** TODO(owsho): replace with approved, attributable seller quotes before launch. */
const testimonials = [
  {
    quote:
      "We used to close at eight and that was the day done. Now the evening orders come in while we clean up, and the rider takes them in the morning.",
    name: "Kirana store owner",
    detail: "Grocery · 2 years on OWSHO",
  },
  {
    quote:
      "I did not want to build a website. I sent a photo list, the catalogue team put it up, and we were live in three days.",
    name: "Boutique owner",
    detail: "Fashion · 1 year on OWSHO",
  },
  {
    quote:
      "The weekly statement is the part I value most. I know exactly what came in and what was deducted.",
    name: "Electronics dealer",
    detail: "Electronics · 3 years on OWSHO",
  },
];

export default function SellerBenefitsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Seller Benefits", path: "/seller-benefits" },
        ])}
      />

      <PageHero
        eyebrow="Seller benefits"
        title="Everything a big brand has, without becoming one"
        description="Our mission is to make the online marketplace fairer. That means a local shop should get the same reach, logistics and payment infrastructure as a national retailer — and keep its own prices, its own name and its own customers."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Seller Benefits", href: "/seller-benefits" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What you get"
            title="Nine reasons shops stay on OWSHO"
            description="No feature here is an upsell. Everything below is included from the day your shop is verified."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sellerBenefits.map(({ title, description, Icon }) => (
              <li
                key={title}
                className="flex flex-col rounded-card border border-ink-100 bg-white p-6 shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-50 text-accent-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-brand-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Side by side"
            title="Selling on OWSHO vs going it alone"
          />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-0 overflow-hidden rounded-card border border-ink-100 bg-white text-left text-sm shadow-card">
              <caption className="sr-only">
                Comparison of selling on OWSHO versus selling independently
              </caption>
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th scope="col" className="px-5 py-4 font-semibold">
                    &nbsp;
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    With OWSHO
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    On your own
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={row.label}
                    className={index % 2 === 1 ? "bg-brand-50/50" : undefined}
                  >
                    <th
                      scope="row"
                      className="border-t border-ink-100 px-5 py-4 font-semibold text-brand-950"
                    >
                      {row.label}
                    </th>
                    <td className="border-t border-ink-100 px-5 py-4 text-ink-600">
                      <span className="flex gap-2">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        {row.owsho}
                      </span>
                    </td>
                    <td className="border-t border-ink-100 px-5 py-4 text-ink-500">
                      <span className="flex gap-2">
                        <CloseIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink-300" />
                        {row.alone}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="From our sellers" title="In their words" />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <li
                key={item.name}
                className="flex flex-col rounded-card border border-ink-100 bg-white p-6 shadow-card"
              >
                <blockquote className="flex-1 text-sm leading-relaxed text-ink-600">
                  “{item.quote}”
                </blockquote>
                <div className="mt-5 border-t border-ink-100 pt-4">
                  <p className="text-sm font-semibold text-brand-950">{item.name}</p>
                  <p className="mt-0.5 text-xs text-ink-500">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <StatsBand />
      <CtaBand
        title="See what your shop could earn"
        description="Registration is free and there is no obligation to go live. Apply, talk to the onboarding team, and decide afterwards."
      />
    </>
  );
}
