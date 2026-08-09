import {
  BoxIcon,
  CartIcon,
  CheckCircleIcon,
  GlobeIcon,
  HeartHandIcon,
  PinIcon,
  SparkleIcon,
  StoreIcon,
  TruckIcon,
} from "@/components/brand/Icons";
import type { Faq } from "@/lib/content/faqs";
import type { Point, Step } from "@/lib/content/types";

/** Approved Owsho Express page copy. */

export const expressHero = {
  eyebrow: "Owsho Express",
  title: "Making local shopping faster, simpler and better",
  description:
    "Owsho Express is our fast local commerce initiative, built to make everyday shopping more convenient by connecting customers with nearby stores, sellers and fulfilment points.",
};

export const expressIntro = [
  "Our goal is simple: bring the products people need closer to them and make local delivery faster.",
  "By combining technology, local businesses and an efficient delivery network, Owsho Express aims to create a smoother shopping experience while helping local sellers serve customers in their neighbourhood.",
];

/** "Built for the local customer" */
export const builtForTheCustomer: Point[] = [
  {
    title: "Faster access to everyday products",
    description:
      "Owsho Express is designed around nearby inventory and local fulfilment, helping eligible customers receive orders quickly, depending on availability, distance and operating conditions.",
    Icon: TruckIcon,
    tone: "brand",
  },
  {
    title: "Local businesses, digitally connected",
    description:
      "Local stores already have products, customers and knowledge of their communities. Owsho Express connects this existing local ecosystem with technology so neighbourhood businesses can participate in fast commerce.",
    Icon: StoreIcon,
    tone: "accent",
  },
  {
    title: "Technology meets local commerce",
    description:
      "Our technology helps bring together customer demand, local seller inventory, order management, product availability, local fulfilment and delivery operations.",
    Icon: SparkleIcon,
    tone: "brand",
  },
];

/** "What makes Owsho Express different?" */
export const whatMakesItDifferent: Point[] = [
  {
    title: "Local-first approach",
    description:
      "Owsho Express is built around the idea that local commerce can be faster when inventory is closer to the customer.",
    Icon: PinIcon,
    tone: "brand",
  },
  {
    title: "Built for speed, not just scale",
    description:
      "Fast delivery depends on having the right product at the right location with an efficient fulfilment and delivery process.",
    Icon: TruckIcon,
    tone: "accent",
  },
  {
    title: "Empowering local sellers",
    description:
      "Owsho aims to give local sellers access to digital customers and new demand while enabling them to participate in fast commerce.",
    Icon: StoreIcon,
    tone: "brand",
  },
  {
    title: "One ecosystem",
    description:
      "Customers + Local Sellers + Fulfilment + Delivery + Technology form one connected local commerce ecosystem.",
    Icon: GlobeIcon,
    tone: "accent",
  },
];

/** "How Owsho Express works" */
export const expressSteps: Step[] = [
  {
    number: "01",
    title: "Customer discovers",
    description:
      "Customers browse products available for their location through the Owsho platform.",
    Icon: CartIcon,
    tone: "brand",
  },
  {
    number: "02",
    title: "Nearby inventory",
    description:
      "The system identifies relevant inventory from participating sellers and fulfilment locations.",
    Icon: BoxIcon,
    tone: "accent",
  },
  {
    number: "03",
    title: "Order fulfilment",
    description: "The seller or fulfilment point prepares the order for dispatch.",
    Icon: StoreIcon,
    tone: "brand",
  },
  {
    number: "04",
    title: "Local delivery",
    description:
      "The order is assigned to an available delivery partner based on the applicable delivery network.",
    Icon: TruckIcon,
    tone: "accent",
  },
  {
    number: "05",
    title: "Customer receives",
    description:
      "The order reaches the customer at the earliest feasible time based on location and operational conditions.",
    Icon: CheckCircleIcon,
    tone: "brand",
  },
];

export const buildingTheFuture = {
  title: "Building the future of local commerce",
  body: [
    "We believe India's next phase of commerce will not be defined only by bigger warehouses or larger marketplaces. It will also be shaped by stronger local networks.",
    "Millions of neighbourhood businesses already sit close to customers. Owsho's vision is to connect this existing infrastructure with technology, enabling local businesses to become more discoverable, accessible and better equipped to serve digital customers.",
    "Owsho Express is one part of that larger vision.",
  ],
};

/** "Our Principles" */
export const principles: Point[] = [
  {
    title: "Customer First",
    description:
      "Every decision starts with making shopping more convenient, reliable and transparent for the customer.",
    Icon: HeartHandIcon,
    tone: "brand",
  },
  {
    title: "Local First",
    description:
      "We believe local businesses and local infrastructure can play a major role in the future of commerce.",
    Icon: StoreIcon,
    tone: "accent",
  },
  {
    title: "Speed with Reliability",
    description:
      "Fast delivery only creates value when the right product reaches the right customer reliably.",
    Icon: TruckIcon,
    tone: "brand",
  },
  {
    title: "Technology for Real Problems",
    description:
      "We use technology to solve practical problems across discovery, inventory, fulfilment and delivery.",
    Icon: SparkleIcon,
    tone: "brand",
  },
  {
    title: "Grow Together",
    description:
      "Customers, sellers, delivery partners and Owsho should all benefit from a stronger local commerce ecosystem.",
    Icon: GlobeIcon,
    tone: "accent",
  },
];

export const expressFaqs: Faq[] = [
  {
    question: "What is Owsho Express?",
    answer:
      "Owsho Express is Owsho's fast local commerce initiative focused on enabling quick delivery of eligible products through nearby sellers and fulfilment points.",
  },
  {
    question: "Is Owsho Express a separate company?",
    answer:
      "No. Owsho Express is part of the Owsho ecosystem and represents our fast local commerce offering.",
  },
  {
    question: "How fast is Owsho Express?",
    answer:
      "Delivery time depends on product availability, customer location, seller preparation, distance, traffic and other operational factors. Where quick delivery is available, an estimated delivery time will be shown on the platform.",
  },
  {
    question: "Does Owsho Express operate only through dark stores?",
    answer:
      "No. Owsho's model can combine local sellers, Owsho-operated fulfilment facilities and other eligible fulfilment points, depending on the location and operational requirements.",
  },
  {
    question: "Can local sellers participate in Owsho Express?",
    answer:
      "Yes. Eligible sellers can participate in Owsho's local commerce ecosystem, subject to onboarding and applicable requirements.",
  },
  {
    question: "Is Owsho Express available everywhere?",
    answer:
      "Availability depends on location, seller network, inventory and operational coverage. Owsho Express will be introduced and expanded based on operational feasibility.",
  },
  {
    question: "Is Owsho Express only for grocery?",
    answer:
      "No. The range of products available through fast local delivery may expand across multiple everyday categories depending on local inventory and operational capabilities.",
  },
  {
    question: "How can I partner with Owsho Express?",
    answer:
      "Businesses can explore seller and fulfilment partnership opportunities through the relevant Seller or Warehouse Partner sections on the Owsho website.",
  },
];

export const expressClosing = {
  title: "The future is local. The future is connected.",
  description:
    "Owsho Express is building a faster way for local commerce to reach the people around it.",
};
