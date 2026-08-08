import type { Metadata } from "next";
import { submitSellerApplication } from "@/app/actions";
import { CheckCircleIcon, ClockIcon, RupeeIcon, TruckIcon } from "@/components/brand/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { StepsRail } from "@/components/sections/StepsRail";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/lib/content/categories";
import { sellerSteps } from "@/lib/content/seller";
import { breadcrumbSchema, JsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Become a Seller",
  description:
    "Start selling on OWSHO. Free registration, verification in about 48 hours, delivery and payments handled for you. Apply with your shop name and pin code.",
  alternates: { canonical: "/become-a-seller" },
  openGraph: {
    title: "Become a Seller | OWSHO",
    description:
      "Free registration, verification in about 48 hours, delivery and payments handled for you.",
    url: "/become-a-seller",
  },
};

const highlights = [
  { title: "₹0 to start", detail: "No listing fee, no monthly charge.", Icon: RupeeIcon },
  { title: "~48 hour verification", detail: "Most shops go live in two days.", Icon: ClockIcon },
  { title: "Delivery handled", detail: "Riders, labels and tracking included.", Icon: TruckIcon },
];

const fieldClass =
  "h-12 w-full rounded-xl border border-ink-200 bg-white px-4 text-sm text-ink-800 placeholder:text-ink-500";
const labelClass = "mb-1.5 block text-sm font-semibold text-brand-950";

export default function BecomeASellerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Become a Seller", path: "/become-a-seller" },
        ])}
      />

      <PageHero
        eyebrow="Start selling"
        title="Put your shop online in a single afternoon"
        description="OWSHO gives neighbourhood shops the reach of a national brand without the cost of one. Register free, get verified, list your products, and start taking orders from customers near you."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Become a Seller", href: "/become-a-seller" },
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

      <StepsRail
        eyebrow="Onboarding"
        title="From registration to your first order"
        description="Four steps, and our seller support team is on the phone for all of them."
        steps={sellerSteps}
      />

      {/* Application form */}
      <section id="apply" className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            <div>
              <SectionHeading
                eyebrow="Apply now"
                title="Tell us about your shop"
                description="Fill this in and a member of the onboarding team will call you within one working day to complete verification."
                align="left"
              />
              <ul className="mt-8 space-y-3">
                {[
                  "No cost to apply and no obligation to go live.",
                  "You keep your own pricing and your own working hours.",
                  "You can pause or leave the platform at any time.",
                  "Your documents are used only for verification and payouts.",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-ink-600">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <form
              action={submitSellerApplication}
              className="rounded-card border border-ink-100 bg-white p-6 shadow-card sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="shopName">
                    Shop name
                  </label>
                  <input
                    id="shopName"
                    name="shopName"
                    required
                    autoComplete="organization"
                    placeholder="Green Basket Kirana"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="ownerName">
                    Owner name
                  </label>
                  <input
                    id="ownerName"
                    name="ownerName"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="phone">
                    Mobile number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="10-digit mobile"
                    className={fieldClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="city">
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    required
                    autoComplete="address-level2"
                    placeholder="City"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="pincode">
                    Pin code
                  </label>
                  <input
                    id="pincode"
                    name="pincode"
                    required
                    inputMode="numeric"
                    pattern="\d{6}"
                    autoComplete="postal-code"
                    placeholder="6-digit pin code"
                    className={fieldClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="category">
                    Primary category
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    defaultValue=""
                    className={`${fieldClass} appearance-none`}
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {categories.map((category) => (
                      <option key={category.slug} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="message">
                    Anything else we should know? <span className="text-ink-500">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Number of products, existing online presence, questions…"
                    className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 placeholder:text-ink-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 h-13 w-full rounded-pill bg-accent-500 px-6 font-semibold text-ink-900 transition-colors hover:bg-accent-400"
              >
                Submit application
              </button>
              <p className="mt-3 text-xs leading-relaxed text-ink-500">
                By submitting you agree to be contacted by the OWSHO onboarding
                team. We never share your details with other sellers.
              </p>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
