import {
  GlobeIcon,
  HeartHandIcon,
  SparkleIcon,
  StoreIcon,
  TruckIcon,
  UsersIcon,
} from "@/components/brand/Icons";
import type { Feature, Point } from "@/lib/content/types";

/**
 * "Built for the local customer" — the three customer-facing propositions from
 * the approved Owsho Express page copy.
 */
export const features: Feature[] = [
  {
    title: "Faster access to everyday products",
    description:
      "Built around nearby inventory and local fulfilment, so eligible orders reach you quickly.",
    Icon: TruckIcon,
    tone: "brand",
  },
  {
    title: "Local businesses, digitally connected",
    description:
      "Neighbourhood stores already have the products and the trust. We connect them with the technology.",
    Icon: StoreIcon,
    tone: "accent",
  },
  {
    title: "Technology meets local commerce",
    description:
      "Demand, seller inventory, order management, local fulfilment and delivery, brought together.",
    Icon: SparkleIcon,
    tone: "brand",
  },
];

/**
 * "Owsho runs on a simple network — customers who want convenience, local
 * sellers who want reach, and delivery partners who bring it all together."
 * (About Us — Built on Local Commerce.)
 */
export const networkPillars: Point[] = [
  {
    title: "Customers",
    description:
      "People who want the convenience of shopping online without giving up the shops they already know.",
    Icon: UsersIcon,
    tone: "brand",
  },
  {
    title: "Local sellers",
    description:
      "Neighbourhood businesses that want reach — a real digital storefront, without building any of it themselves.",
    Icon: StoreIcon,
    tone: "accent",
  },
  {
    title: "Delivery partners",
    description:
      "Independent delivery professionals who bring every order from the store to the customer's door.",
    Icon: TruckIcon,
    tone: "brand",
  },
];

/** Short trust points shown under the home hero. */
export const heroTrustPoints: { label: string; Icon: Feature["Icon"] }[] = [
  { label: "Local sellers", Icon: StoreIcon },
  { label: "Delivered in minutes", Icon: TruckIcon },
  { label: "Free listing for sellers", Icon: HeartHandIcon },
  { label: "Deesa, and growing", Icon: GlobeIcon },
];
