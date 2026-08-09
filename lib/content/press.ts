import type { Faq } from "@/lib/content/faqs";

/** Approved Press Center copy. */

export const pressHero = {
  eyebrow: "Press",
  title: "Press Center",
  description:
    "Background on why Owsho exists, how the model works, and where to reach us for media enquiries.",
};

export type BackgroundSection = { id: string; title: string; body: string[] };

export const background: BackgroundSection[] = [
  {
    id: "the-observation",
    title: "The Observation",
    body: [
      "Owsho didn't start with a single idea — it started with an observation.",
      "India's local markets have never lacked products or customers. What they've lacked is a proper bridge between the two — a way for local businesses to be part of the digital economy without losing what makes them local.",
      "A neighbourhood shopkeeper may have built trust over years, stocked the right products, and served the same customers again and again. But the moment that customer opens an app to shop online, they're almost always routed to a large e-commerce or quick-commerce platform — not the shop down the street. Local sellers simply haven't had access to the technology, visibility, digital catalog, or delivery infrastructure needed to compete in that space.",
      "That gap is where Owsho began.",
    ],
  },
  {
    id: "from-idea-to-model",
    title: "From Idea to Model",
    body: [
      "Owsho wasn't built to be just another shopping app. The goal was — and is — to turn the local market into a digital market, where customers can discover and buy from nearby businesses, and local sellers can go online without heavy investment.",
      "The idea started as a hyperlocal, multi-vendor marketplace — a single platform bringing together local sellers across categories, so customers could find everything in one place.",
      "But building it taught us something important: a marketplace alone isn't enough. Customers don't just want to discover products — they want convenience, reliability, and speed. That's what shaped the next part of Owsho's model: hyperlocal delivery, built in from the start.",
    ],
  },
  {
    id: "our-model",
    title: "Our Model",
    body: [
      "Owsho runs on a hybrid model: Local Sellers + Owsho Marketplace + Hyperlocal Delivery + Owsho-managed Inventory.",
      "In its early phase, Owsho gives local sellers a digital storefront and the delivery infrastructure to get orders to customers in minutes. Alongside this, Owsho operates its own small-format dark stores for select high-demand products — giving us a closer read on real-time demand, letting us keep fast-moving essentials in stock, and helping deliver a more consistent experience for customers, all while the marketplace continues to grow around local sellers.",
    ],
  },
  {
    id: "why-owsho-exists",
    title: "Why Owsho Exists",
    body: [
      "Owsho isn't trying to make local sellers compete against large platforms on their terms. It's trying to give them the tools to compete on their own — technology, visibility, an easier way to sell online, and delivery that reaches customers in minutes.",
      "For customers, that means nearby products, from sellers they can trust, ordered easily and delivered in minutes. For sellers, it means a real digital presence, access to new customers, and a simpler way to run an online business — without needing to build any of it themselves.",
      "Owsho's journey may start in one city, but the vision was never limited to one. The goal is to build a technology-led local commerce network where businesses across India's local markets can become an active part of the digital economy, not left behind by it.",
    ],
  },
];

export const pressPullQuote =
  "Owsho isn't just about delivering products quickly. It's about bringing the local market to a customer's phone.";

/** The four pillars of the hybrid model, pulled out for the model diagram. */
export const modelPillars: string[] = [
  "Local Sellers",
  "Owsho Marketplace",
  "Hyperlocal Delivery",
  "Owsho-managed Inventory",
];

export const pressFaqs: Faq[] = [
  {
    question: "When and why was Owsho founded?",
    answer:
      "Owsho was founded in 2024 in Deesa, Gujarat, with the vision of digitally connecting local businesses with customers. The idea was to build a hyperlocal marketplace that enables local sellers to reach more customers through technology, while giving customers convenient access to products from nearby stores.",
  },
  {
    question: "Who are the investors in Owsho?",
    answer:
      "Owsho is currently founder-funded and has not yet announced any institutional investors. Investment details will be disclosed officially as and when applicable.",
  },
  {
    question: "How many cities does Owsho operate in?",
    answer:
      "Owsho is currently in its initial launch and expansion phase, with operations being built out market by market. The company plans to expand progressively into additional cities as its local commerce and delivery network grows.",
  },
];
