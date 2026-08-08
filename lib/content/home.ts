import {
  BagIcon,
  BoxIcon,
  CartIcon,
  HeartHandIcon,
  PriceTagIcon,
  ShieldIcon,
  SmileIcon,
  StoreIcon,
  TruckIcon,
  WalletIcon,
} from "@/components/brand/Icons";

type IconComponent = typeof TruckIcon;

export type Feature = {
  title: string;
  description: string;
  Icon: IconComponent;
  tone: "brand" | "accent";
};

/** The four brand "key points" from the OWSHO brand guidelines. */
export const features: Feature[] = [
  {
    title: "Quick Delivery",
    description: "Get your orders delivered fast at your doorstep.",
    Icon: TruckIcon,
    tone: "brand",
  },
  {
    title: "Best Prices",
    description: "Quality products at prices you'll love.",
    Icon: PriceTagIcon,
    tone: "brand",
  },
  {
    title: "Local Support",
    description: "We grow together by supporting local.",
    Icon: HeartHandIcon,
    tone: "accent",
  },
  {
    title: "Secure & Safe",
    description: "Your data and payments are 100% protected.",
    Icon: ShieldIcon,
    tone: "brand",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
  Icon: IconComponent;
  tone: "brand" | "accent";
};

export const buyerSteps: Step[] = [
  {
    number: "01",
    title: "Choose Local Shops",
    description: "Browse trusted local shops near you.",
    Icon: StoreIcon,
    tone: "brand",
  },
  {
    number: "02",
    title: "Add to Cart",
    description: "Add your favourite products to the cart.",
    Icon: CartIcon,
    tone: "accent",
  },
  {
    number: "03",
    title: "Secure Checkout",
    description: "Pay safely with multiple payment options.",
    Icon: WalletIcon,
    tone: "brand",
  },
  {
    number: "04",
    title: "Fast Delivery",
    description: "Get your order delivered quickly to your doorstep.",
    Icon: TruckIcon,
    tone: "accent",
  },
];

export type Stat = {
  value: string;
  label: string;
  Icon: IconComponent;
};

/** TODO(owsho): replace with live platform numbers before launch. */
export const stats: Stat[] = [
  { value: "5000+", label: "Local Shops", Icon: StoreIcon },
  { value: "50K+", label: "Happy Customers", Icon: BagIcon },
  { value: "1L+", label: "Products Sold", Icon: BoxIcon },
  { value: "98%", label: "Customer Satisfaction", Icon: SmileIcon },
];
