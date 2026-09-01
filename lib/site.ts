import type { Route } from "next";

/**
 * Single source of truth for site-wide facts.
 *
 * Every value here is taken from Owsho's own approved documents (Press Center,
 * Owsho Express, Privacy Policy, Seller Terms of Service v2.0, Seller Security
 * v2.0 and the Seller FAQs v2.0). Nothing on this site should state a fact
 * about the company that is not represented here.
 */
export const site = {
  /** Display brand. The company documents write it "Owsho", not "OWSHO". */
  name: "Owsho",
  legalName: "Owsho Market Place Private Limited",
  url: "https://www.owshomarketplace.com",
  tagline: "Local commerce, delivered in minutes.",
  description:
    "Owsho is a hyperlocal marketplace that brings neighbourhood stores online — connecting customers with nearby sellers and a local delivery network.",
  locale: "en_IN",

  /** Founded 2024 in Deesa, Gujarat (Press Center). */
  foundingYear: "2024",
  cin: "U46901GJ2024PTC155047",

  email: "owshomarketplace@gmail.com",
  phone: "+91 72858 54918",

  /**
   * Appointed under the Consumer Protection (E-Commerce) Rules, 2020 and the
   * Information Technology Rules, 2021 (Seller FAQs #28).
   */
  grievanceOfficer: {
    name: "Kirankumar Amratbhai Panchal",
    title: "Director & Grievance Officer",
    email: "owshomarketplace@gmail.com",
    phone: "+91 97731 93241",
    acknowledgement: "within 48 hours",
    resolution: "within one (1) month of receipt",
  },

  address: {
    street: "7A Nilkanth Arched, 2nd Floor, Palanpur Highway, Disa Bazar",
    /** District, used as the locality line of the registered office. */
    locality: "Banaskantha",
    region: "Gujarat",
    postalCode: "385535",
    country: "India",
    countryCode: "IN",
  },

  /** Launch market. Operations are being built out market by market. */
  serviceArea: "Banaskantha, Gujarat",

  /**
   * Live App Store listings. Android builds are not published yet, so the
   * Play Store fields stay empty and the download band renders those badges
   * as inert text rather than pointing anyone at a dead link.
   *
   * TODO(owsho): add the Play Store URLs when the Android apps go live.
   */
  apps: {
    seller: {
      name: "Owsho Seller",
      ios: "https://apps.apple.com/in/app/owsho-seller/id6755288019",
      android:
        "https://play.google.com/store/apps/details?id=com.owsho_seller&hl=en_IN",
    },
  },

  social: {
    instagram: "https://www.instagram.com/owshoapp",
    instagramSellers: "https://www.instagram.com/sellonowsho",
    facebook: "https://www.facebook.com/share/14naxZL4KDh/",
    linkedin: "https://www.linkedin.com/company/owhso-marketplace/",
  },
} as const;

/** Legal document versions, shown in the header of each policy page. */
export const legalVersion = {
  privacy: { version: null, lastUpdated: "August 2026" },
  terms: { version: "2.0", lastUpdated: "August 2026" },
  security: { version: "2.0", lastUpdated: "August 2026" },
  sellerFaqs: { version: "2.0", lastUpdated: "August 2026" },
} as const;

/** The registered office as a single line, used in the footer and legal pages. */
export const registeredAddress = `${site.address.street}, ${site.address.locality}, ${site.address.region}, ${site.address.country} – ${site.address.postalCode}`;

/** `tel:` href for a display phone number such as "+91 72858 54918". */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export type NavItem = {
  href: Route;
  label: string;
};

/** Primary navigation — mirrored in the header and the mobile panel. */
export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/express", label: "Owsho Express" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "Seller FAQs" },
];

export const sellerCta = {
  href: "/become-a-seller" as Route,
  label: "Sell on Owsho",
};

/** Every indexable public route, used to generate the sitemap. */
export const allRoutes: { href: Route; priority: number }[] = [
  { href: "/", priority: 1 },
  { href: "/become-a-seller", priority: 0.9 },
  { href: "/about", priority: 0.8 },
  { href: "/express", priority: 0.8 },
  { href: "/delivery-partner", priority: 0.7 },
  { href: "/warehouse-partner", priority: 0.7 },
  { href: "/faq", priority: 0.6 },
  { href: "/contact", priority: 0.6 },
  { href: "/careers", priority: 0.5 },
  { href: "/press", priority: 0.5 },
  { href: "/values", priority: 0.4 },
  { href: "/privacy", priority: 0.3 },
  { href: "/terms", priority: 0.3 },
  { href: "/security", priority: 0.3 },
];

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}
