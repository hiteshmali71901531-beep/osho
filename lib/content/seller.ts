import {
  BoxIcon,
  DocumentIcon,
  HeadsetIcon,
  PriceTagIcon,
  StoreIcon,
  TruckIcon,
  GlobeIcon,
  CheckCircleIcon,
} from "@/components/brand/Icons";
import type { Point, Step } from "@/lib/content/types";

/**
 * "Why Owsho is Every Seller's Top Choice?" — the five approved cards from the
 * Owsho Seller Hub landing-page copy.
 */
export const sellerBenefits: Point[] = [
  {
    title: "Reach your customers where they are",
    description:
      "We connect your store to nearby customers through our growing network of local delivery partners.",
    Icon: StoreIcon,
    tone: "brand",
  },
  {
    title: "Delivered in minutes",
    description:
      "Once an order is placed, our delivery partners pick it up and get it to your customer's doorstep in minutes.",
    Icon: TruckIcon,
    tone: "accent",
  },
  {
    title: "A real growth opportunity",
    description:
      "List your products on a platform built for local commerce, and grow your business with us.",
    Icon: PriceTagIcon,
    tone: "brand",
  },
  {
    title: "Expand your reach",
    description:
      "Your store can now reach thousands of customers across your city — with more cities joining soon.",
    Icon: GlobeIcon,
    tone: "brand",
  },
  {
    title: "It's simple and free",
    description:
      "Onboard your products in minutes, at no listing cost, and manage your business effortlessly.",
    Icon: CheckCircleIcon,
    tone: "accent",
  },
];

/**
 * The onboarding sequence described in the Seller FAQs (#3, #7, #11, #12) and
 * Seller Terms of Service clause 2. Deliberately free of turnaround promises —
 * Owsho has published none.
 */
export const sellerSteps: Step[] = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your seller registration through the Owsho seller platform with your business and store details.",
    Icon: DocumentIcon,
    tone: "brand",
  },
  {
    number: "02",
    title: "Verification",
    description:
      "Our team may contact you for verification, documentation and KYC as required for onboarding.",
    Icon: HeadsetIcon,
    tone: "accent",
  },
  {
    number: "03",
    title: "Build your catalogue",
    description:
      "Add your own products, or share your product information with the Owsho team for catalogue creation.",
    Icon: BoxIcon,
    tone: "brand",
  },
  {
    number: "04",
    title: "Start receiving orders",
    description:
      "Eligible orders reach you through the Owsho seller system. Prepare, pack and keep them ready for pickup.",
    Icon: StoreIcon,
    tone: "accent",
  },
];

/**
 * "What documents may be required?" — Seller FAQs #4. The exact requirements
 * vary by business type and category.
 */
export const sellerDocuments: string[] = [
  "PAN",
  "GST details, where applicable",
  "Business registration details",
  "Bank details",
  "Owner/authorised representative details",
  "Store information",
  "Applicable licences",
  "Product/category information",
];

/** Seller eligibility, from Seller Terms of Service clause 1. */
export const sellerEligibility: string[] = [
  "Be legally capable of entering into a business arrangement",
  "Provide accurate and complete information",
  "Have the necessary rights and authority to sell the products/services you list",
  "Hold applicable registrations, licences and permissions required for your business",
  "Comply with applicable laws and regulations",
  "Complete Owsho's verification/onboarding requirements",
];
