import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { PageHero } from "@/components/sections/PageHero";
import { termsDoc } from "@/lib/content/legal/terms";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/jsonld";

const description =
  "The Owsho Seller Terms of Service — eligibility, verification, listings, orders, settlements, prohibited products, liability, governing law and dispute resolution.";

export const metadata: Metadata = {
  title: "Seller Terms of Service",
  description,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Seller Terms of Service | Owsho",
    description,
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema("WebPage", {
          path: "/terms",
          name: "Seller Terms of Service",
          description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Seller Terms of Service", path: "/terms" },
        ])}
      />

      <PageHero
        eyebrow="Legal"
        title="Seller Terms of Service"
        description="The agreement that governs registration, onboarding and use of the Owsho seller platform. Please read it before you apply."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Seller Terms of Service", href: "/terms" },
        ]}
      />

      <LegalPage doc={termsDoc} />
    </>
  );
}
