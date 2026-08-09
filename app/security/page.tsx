import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { LockIcon } from "@/components/brand/Icons";
import { securityDoc } from "@/lib/content/legal/security";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

const description =
  "How Owsho protects seller business, KYC, banking and account information — safeguards, fraud prevention, incident reporting under CERT-In and the DPDP Act, and responsible disclosure.";

export const metadata: Metadata = {
  title: "Security",
  description,
  alternates: { canonical: "/security" },
  openGraph: {
    title: "Security | Owsho",
    description,
    url: "/security",
  },
};

const neverShare = [
  "OTP",
  "UPI PIN",
  "ATM PIN",
  "Card PIN",
  "Internet banking password",
];

export default function SecurityPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema("WebPage", {
          path: "/security",
          name: "Seller Security",
          description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Security", path: "/security" },
        ])}
      />

      <PageHero
        eyebrow="Legal"
        title="Seller Security"
        description="Sellers trust us with important business, identity, banking and operational information. Here is how we protect it — and what we will never ask you for."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Security", href: "/security" },
        ]}
      />

      {/* The single most important thing on this page, above the document. */}
      <section className="pt-12 sm:pt-16">
        <Container>
          <div className="flex flex-col gap-5 rounded-card border-l-4 border-accent-500 bg-accent-50 p-6 sm:flex-row sm:items-start sm:p-8">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-500 text-ink-900">
              <LockIcon className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-lg font-bold text-accent-900">
                Owsho will never ask you for these
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {neverShare.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center rounded-pill bg-white px-3.5 py-1.5 text-sm font-semibold text-accent-900"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-accent-900">
                Never share these with anyone claiming to represent Owsho, and
                never send them by email. If you suspect your account has been
                compromised, write to{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold break-all underline"
                >
                  {site.email}
                </a>{" "}
                immediately.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <LegalPage doc={securityDoc} />
    </>
  );
}
