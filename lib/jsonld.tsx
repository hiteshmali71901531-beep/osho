import { absoluteUrl, registeredAddress, site } from "@/lib/site";
import type { Faq } from "@/lib/content/faqs";

/**
 * Renders JSON-LD as a plain <script> tag (the approach Next recommends over
 * next/script), escaping `<` so a stray sequence in the data cannot break out
 * of the script element.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const ORGANIZATION_ID = absoluteUrl("/#organization");
const WEBSITE_ID = absoluteUrl("/#website");

/** The registered office, in the shape schema.org expects. */
function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
  };
}

/**
 * The company itself, typed as both Organization and OnlineStore — the
 * ecommerce-specific subtype search engines look for on a marketplace. Emitted
 * once, site-wide, from the root layout; every other schema on the site
 * references it by @id rather than repeating it.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "OnlineStore"],
    "@id": ORGANIZATION_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo.png"),
      width: 512,
      height: 512,
    },
    image: absoluteUrl("/logo.png"),
    description: site.description,
    slogan: site.tagline,
    foundingDate: site.foundingYear,
    foundingLocation: {
      "@type": "Place",
      name: `${site.address.locality}, ${site.address.region}, ${site.address.country}`,
    },
    email: site.email,
    telephone: site.phone,
    address: postalAddress(),
    areaServed: {
      "@type": "AdministrativeArea",
      name: site.serviceArea,
    },
    // Corporate Identity Number issued by the MCA.
    identifier: {
      "@type": "PropertyValue",
      propertyID: "CIN",
      value: site.cin,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: site.email,
        telephone: site.phone,
        areaServed: site.address.countryCode,
        availableLanguage: ["en", "hi", "gu"],
      },
      {
        "@type": "ContactPoint",
        contactType: "complaints",
        name: `${site.grievanceOfficer.name} — ${site.grievanceOfficer.title}`,
        email: site.grievanceOfficer.email,
        telephone: site.grievanceOfficer.phone,
        areaServed: site.address.countryCode,
        availableLanguage: ["en", "hi", "gu"],
      },
    ],
    sameAs: Object.values(site.social),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: site.url,
    inLanguage: "en-IN",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/**
 * The registered office as a physical business. Used on the contact page,
 * where a street address is actually presented to the reader.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/contact#office"),
    name: site.legalName,
    parentOrganization: { "@id": ORGANIZATION_ID },
    url: absoluteUrl("/contact"),
    email: site.email,
    telephone: site.phone,
    address: postalAddress(),
    description: `Registered office of ${site.legalName} — ${registeredAddress}.`,
  };
}

type WebPageType =
  | "WebPage"
  | "AboutPage"
  | "ContactPage"
  | "CollectionPage"
  | "FAQPage";

/** A typed page node, linked back to the site and the publisher. */
export function webPageSchema(
  type: WebPageType,
  { path, name, description }: { path: string; name: string; description: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/** The shopping categories carried on the marketplace. */
export function itemListSchema(
  name: string,
  items: { name: string; description: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
      url: absoluteUrl(item.path),
    })),
  };
}

export function howToSchema(
  name: string,
  description: string,
  steps: { title: string; description: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  };
}
