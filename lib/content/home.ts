import {
  DeliveredInMinutesScene,
  ExpandReachScene,
  GrowOnlineScene,
  ReachNearbyScene,
  SimpleToStartScene,
} from "@/components/illustrations/SellerScenes";

/**
 * Approved Owsho Seller Hub home page copy. Every line on the home page comes
 * from here, and every line here is reproduced from that page.
 */

export const homeHero = {
  title: "Your store. Now online.",
  description:
    "Give your customers the convenience of shopping from you, wherever they are — with delivery to their doorstep in minutes. Sign up and start selling on Owsho.",
  cta: "Sell on Owsho",
  reassurance: "Free listing. No hidden charges.",
};

export type SellerReason = {
  title: string;
  description: string;
  Scene: typeof ReachNearbyScene;
};

/** "Why sellers choose Owsho — every seller's top choice, and here's why." */
export const sellerReasons: SellerReason[] = [
  {
    title: "Reach your customers nearby",
    description:
      "We connect your store to customers around you through our growing network of local delivery partners.",
    Scene: ReachNearbyScene,
  },
  {
    title: "Delivered in minutes",
    description:
      "Once an order is placed, our delivery partners pick it up and get it to your customer's doorstep fast.",
    Scene: DeliveredInMinutesScene,
  },
  {
    title: "Grow your business online",
    description:
      "List your products on a platform built for local commerce, and unlock new sales opportunities.",
    Scene: GrowOnlineScene,
  },
  {
    title: "Expand your reach",
    description:
      "Your store can now reach thousands of customers across your city, with more cities joining soon.",
    Scene: ExpandReachScene,
  },
  {
    title: "Simple to get started",
    description:
      "Create your store, list your products at no cost, and start selling online in minutes.",
    Scene: SimpleToStartScene,
  },
];

export const builtForLocalCommerce = {
  title: "Built for local commerce",
  description:
    "Every neighbourhood has businesses that customers already know and trust. Owsho helps these local stores go online, keeping that trust alive while giving sellers the reach of a modern marketplace.",
  stats: [
    { value: "Minutes", label: "delivery to your customer's door" },
    { value: "₹0", label: "listing cost to get started" },
    { value: "Soon", label: "launching in your city" },
  ],
};

export const whereWeOperate = {
  eyebrow: "Where we operate",
  title: "Coming soon to your city",
};
