import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { PageHero } from "@/components/sections/PageHero";
import { privacyDoc } from "@/lib/content/legal/privacy";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/jsonld";

const description =
  "How Owsho Market Place Private Limited collects, uses, stores, shares and protects seller and business information, and how to raise a privacy grievance.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Owsho",
    description,
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema("WebPage", {
          path: "/privacy",
          name: "Privacy Policy",
          description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="What we collect, why we collect it, who we share it with, how long we keep it, and the rights you have over it."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <LegalPage doc={privacyDoc} />
    </>
  );
}
