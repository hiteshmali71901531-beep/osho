import type { Metadata } from "next";
import Link from "next/link";
import { submitSellerApplication } from "@/app/actions";
import { PriceTagIcon, TruckIcon } from "@/components/brand/Icons";
import { ChecklistSection } from "@/components/sections/ChecklistSection";
import { PageHero } from "@/components/sections/PageHero";
import { PointGrid } from "@/components/sections/PointGrid";
import { StepsRail } from "@/components/sections/StepsRail";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sellerBenefits, sellerDocuments, sellerSteps } from "@/lib/content/seller";
import { AppBand } from "@/components/sections/AppBand";
import {
  breadcrumbSchema,
  howToSchema,
  JsonLd,
  mobileAppSchema,
  webPageSchema,
} from "@/lib/jsonld";
import { site } from "@/lib/site";

const description =
  "Give your customers the convenience of shopping from you, wherever they are. Fill in your details and our team will get in touch with you about selling on Owsho.";

export const metadata: Metadata = {
  title: "Sell on Owsho",
  description,
  alternates: { canonical: "/become-a-seller" },
  openGraph: {
    title: "Sell on Owsho | Owsho",
    description,
    url: "/become-a-seller",
  },
};

const highlights = [
  {
    title: "A digital storefront",
    detail: "Your products, discoverable by customers nearby.",
    Icon: PriceTagIcon,
  },
  {
    title: "Delivered in minutes",
    detail: "Our delivery partners take it from your counter.",
    Icon: TruckIcon,
  },
];

const fieldClass =
  "h-12 w-full rounded-xl border border-ink-200 bg-white px-4 text-sm text-ink-800 placeholder:text-ink-500";
const labelClass = "mb-1.5 block text-sm font-semibold text-brand-950";

export default function BecomeASellerPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema("WebPage", {
          path: "/become-a-seller",
          name: "Sell on Owsho",
          description,
        })}
      />
      <JsonLd
        data={howToSchema(
          "How to become an Owsho seller",
          "Register, complete verification, build your catalogue and start receiving orders through the Owsho seller platform.",
          sellerSteps,
        )}
      />
      <JsonLd data={mobileAppSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sell on Owsho", path: "/become-a-seller" },
        ])}
      />

      <PageHero
        eyebrow="Seller Hub"
        title="Your Shop. Online."
        description={description}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Sell on Owsho", href: "/become-a-seller" },
        ]}
      >
        <ul className="grid gap-4 sm:grid-cols-3">
          {highlights.map(({ title, detail, Icon }) => (
            <li
              key={title}
              className="flex items-start gap-3 rounded-2xl bg-white/10 p-4"
            >
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-accent-400" />
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-0.5 text-xs text-brand-100">{detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </PageHero>

      <PointGrid
        eyebrow="Why sell with us"
        title="Why Owsho is every seller's top choice"
        points={sellerBenefits}
      />

      {/* Built for local commerce */}
      <section className="bg-brand-50/60 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <SectionHeading
              eyebrow="Built for local commerce"
              title="Bringing local businesses online"
              description="Every neighbourhood has businesses that customers already know and trust. Owsho helps these local stores go online — keeping that trust alive, while giving sellers the reach of a modern marketplace."
              align="left"
            />
            <div className="rounded-card border border-ink-100 bg-white p-6 shadow-card sm:p-8">
              <h3 className="text-xs font-semibold tracking-[0.18em] text-accent-700 uppercase">
                Where we operate
              </h3>
              <p className="mt-3 text-2xl font-bold text-brand-950">
                Currently onboarding sellers in Gujarat
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                Owsho is in its initial launch and expansion phase, with
                operations being built out market by market. Expanding to more
                cities soon.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <StepsRail
        eyebrow="Onboarding"
        title="From registration to your first order"
        description="Four steps, with our team in touch through verification and catalogue setup."
        steps={sellerSteps}
      />

      <ChecklistSection
        id="documents"
        eyebrow="What you'll need"
        title="Documents we may ask for"
        description="Depending on your business, Owsho may request the following during onboarding. The exact requirements vary by business type and category."
        items={sellerDocuments}
        footnote="Owsho may conduct seller/business verification and KYC as reasonably required for onboarding, security, payments and legal compliance."
        tinted
        aside={
          <p className="text-sm leading-relaxed text-ink-600">
            Not sure whether you have everything? Apply anyway — our team will
            tell you what is missing for your category. Full detail is in the{" "}
            <Link href="/terms" className="font-semibold text-brand-700 hover:underline">
              Seller Terms of Service
            </Link>{" "}
            and the{" "}
            <Link href="/faq" className="font-semibold text-brand-700 hover:underline">
              Seller FAQs
            </Link>
            .
          </p>
        }
      />

      <AppBand
        title="Run your shop from the Owsho Seller app"
        description="Manage your catalogue, availability and orders from your phone."
      />

      {/* Application form */}
      <section id="apply" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Become an Owsho seller"
              title="Grow your business with Owsho"
              description="Fill in your details and our team will get in touch with you."
            />

            <form
              action={submitSellerApplication}
              className="mt-10 rounded-card border border-ink-100 bg-white p-6 shadow-card sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="fullName">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="businessName">
                    Business / store name
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    required
                    autoComplete="organization"
                    placeholder="Enter your business name"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="mobile">
                    Mobile number
                  </label>
                  <input
                    id="mobile"
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
                  <label className={labelClass} htmlFor="category">
                    Business category
                  </label>
                  <input
                    id="category"
                    name="category"
                    required
                    placeholder="Enter your business category"
                    className={fieldClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="city">
                    City / location
                  </label>
                  <input
                    id="city"
                    name="city"
                    required
                    autoComplete="address-level2"
                    placeholder="Enter your city"
                    className={fieldClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="storeAddress">
                    Store address
                  </label>
                  <textarea
                    id="storeAddress"
                    name="storeAddress"
                    required
                    rows={3}
                    autoComplete="street-address"
                    placeholder="Enter your store address"
                    className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 placeholder:text-ink-500"
                  />
                </div>

                <fieldset className="sm:col-span-2">
                  <legend className={labelClass}>
                    Are you interested in bringing your store online and selling
                    your products on Owsho?
                  </legend>
                  <div className="mt-2 space-y-2.5">
                    {[
                      { value: "Yes, I'm interested", id: "interest-yes" },
                      { value: "I'd like to know more", id: "interest-more" },
                    ].map((option) => (
                      <label
                        key={option.id}
                        htmlFor={option.id}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-ink-200 px-4 py-3 text-sm text-ink-700 hover:border-brand-300 hover:bg-brand-50/60"
                      >
                        <input
                          type="radio"
                          id={option.id}
                          name="interest"
                          value={option.value}
                          required
                          className="h-4 w-4 accent-brand-600"
                        />
                        {option.value}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <button
                type="submit"
                className="mt-6 h-13 w-full rounded-pill bg-accent-500 px-6 font-semibold text-ink-900 transition-colors hover:bg-accent-400"
              >
                Submit
              </button>
              <p className="mt-3 text-xs leading-relaxed text-ink-500">
                Our team will review your details and get in touch with you
                regarding the next steps. By submitting, you agree to the{" "}
                <Link href="/terms" className="font-semibold text-brand-700 hover:underline">
                  Seller Terms
                </Link>{" "}
                and the{" "}
                <Link href="/privacy" className="font-semibold text-brand-700 hover:underline">
                  Privacy Policy
                </Link>
                . Questions? Write to{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold break-all text-brand-700 hover:underline"
                >
                  {site.email}
                </a>
                .
              </p>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
