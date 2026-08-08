import type { Route } from "next";

/**
 * Single source of truth for site-wide facts.
 *
 * TODO(owsho): confirm the production domain, support email/phone and the
 * real social profile URLs before launch — they feed metadata, JSON-LD,
 * the footer and the sitemap.
 */
export const site = {
  name: "OWSHO Marketplace",
  shortName: "OWSHO",
  url: "https://www.owshomarketplace.com",
  tagline: "Empowering Local Businesses. Enriching Communities.",
  description:
    "OWSHO connects you with local shops, great products, and a community you can trust. Sell online with zero setup cost and reach nearby customers.",
  locale: "en_IN",
  email: "support@owshomarketplace.com",
  phone: "+91 00000 00000",
  social: {
    facebook: "https://facebook.com/owshomarketplace",
    instagram: "https://instagram.com/owshomarketplace",
    twitter: "https://twitter.com/owshomarket",
    linkedin: "https://linkedin.com/company/owshomarketplace",
  },
} as const;

export type NavItem = {
  href: Route;
  label: string;
};

/** Primary navigation — mirrored in the header, footer and sitemap. */
export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/seller-benefits", label: "Seller Benefits" },
  { href: "/seller-requirements", label: "Requirements" },
  { href: "/categories", label: "Categories" },
  { href: "/faq", label: "FAQ" },
];

export const sellerCta = {
  href: "/become-a-seller" as Route,
  label: "Become a Seller",
};

/** Every public route, used to generate the sitemap. */
export const allRoutes: { href: Route; priority: number }[] = [
  { href: "/", priority: 1 },
  { href: "/become-a-seller", priority: 0.9 },
  { href: "/how-it-works", priority: 0.8 },
  { href: "/seller-benefits", priority: 0.8 },
  { href: "/seller-requirements", priority: 0.7 },
  { href: "/categories", priority: 0.7 },
  { href: "/faq", priority: 0.6 },
];

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}
