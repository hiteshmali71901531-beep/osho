import {
  GlobeIcon,
  SparkleIcon,
  StoreIcon,
} from "@/components/brand/Icons";
import type { Point } from "@/lib/content/types";

/**
 * Approved About Us copy. Every line here is reproduced from the Owsho
 * About Us page document — nothing on this page states anything the document
 * does not.
 */

export const aboutHero = {
  eyebrow: "About Owsho",
  /**
   * The approved hero heading is "Local commerce, delivered in minutes." — but
   * that is already the H1 of the home page, and two pages sharing an H1 makes
   * both weaker in search. It runs as the banner line on the page instead, and
   * the H1 carries the opening clause of the approved sub-line.
   */
  title: "A simpler way for local businesses to be discovered",
  banner: "Local commerce, delivered in minutes.",
  description:
    "Owsho is building a simpler way for local businesses to be discovered, chosen, and delivered to customers — bringing the convenience of online shopping together with the trust of a local store.",
};

/** 2. Our Story */
export const ourStory = {
  eyebrow: "Our story",
  title: "Built for local businesses. Built around people.",
  body: [
    "Owsho began with a straightforward goal: help local businesses reach more customers without losing what makes them local.",
    "What started as a way to bring nearby stores online is growing into a platform connecting customers, local sellers, and delivery partners — making local shopping as convenient as any big app, while keeping the businesses behind every order visible.",
    "Because we believe your neighbourhood store shouldn't have to become a big brand to compete online.",
  ],
};

/** 3. Why Owsho? */
export const whyOwsho = {
  eyebrow: "Why Owsho?",
  title: "Giving local businesses a bigger digital storefront.",
  body: "For years, local businesses have been built on trust, relationships, and repeat customers. Owsho brings that strength into the digital world.",
  closing: "Stay local. Go digital.",
};

export const whyOwshoPoints: Point[] = [
  {
    title: "More visibility",
    description:
      "Get discovered by customers beyond your existing walk-in traffic.",
    Icon: GlobeIcon,
    tone: "brand",
  },
  {
    title: "More convenience",
    description:
      "Let customers browse and order from your store without needing to visit physically.",
    Icon: StoreIcon,
    tone: "accent",
  },
  {
    title: "More opportunities",
    description:
      "Reach new customers and create another channel for your business to grow.",
    Icon: SparkleIcon,
    tone: "brand",
  },
];

/** 4. Built on Local Commerce */
export const builtOnLocalCommerce = {
  eyebrow: "Built on local commerce",
  title: "Powering the next chapter of local commerce",
  body: "Owsho runs on a simple network — customers who want convenience, local sellers who want reach, and delivery partners who bring it all together.",
  emphasis: "Every order placed on Owsho supports a real local business.",
  closing:
    "From the neighbourhood grocery store to the local fashion shop, pharmacy, electronics store, or specialty retailer, we're working to make local commerce more accessible, discoverable, and convenient.",
};

/** 5. More Than a Marketplace */
export const moreThanAMarketplace = {
  eyebrow: "More than a marketplace",
  title: "We're helping local businesses move forward.",
  body: [
    "Owsho isn't just about putting products online.",
    "It's about helping local sellers take their next step — from offline to online, from neighbourhood visibility to digital discovery, and from individual orders to long-term customer relationships.",
  ],
  emphasis: "Your store. Your products. Your customers. Your growth.",
};

/** 6. Our Vision */
export const ourVision = {
  eyebrow: "Our vision",
  title: "A stronger digital future for every local business.",
  body: [
    "We envision a future where every local business, regardless of its size or location, can participate in the digital economy.",
    "Where customers can discover what they need close to home, and local sellers can compete with the convenience of large platforms — without losing the personal connection that made their business successful in the first place.",
  ],
  emphasis:
    "Local businesses shouldn't be left behind by digital commerce. They should be part of its future.",
};

/** 7. Closing CTA */
export const aboutCta = {
  title: "Take your business online with Owsho.",
  description:
    "Bring your products online, reach more customers, and make your local business easier to discover.",
  emphasis: "Your business is local. Your opportunity doesn't have to be.",
  sellerLabel: "Become a Seller",
  appLabel: "Download the Owsho app",
};

/** Used by the shared download band on this page. */
export const appBand = {
  title: "Download the Owsho app",
  description: "Everything from your local stores, delivered to your doorstep.",
};
