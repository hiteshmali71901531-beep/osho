import {
  HeartHandIcon,
  ShieldIcon,
  SmileIcon,
  SparkleIcon,
} from "@/components/brand/Icons";
import type { Point } from "@/lib/content/types";

/** Approved Careers page copy. */

export const careersHero = {
  eyebrow: "Careers",
  title: "Hiring is the most important thing we do.",
  description:
    "Finding the right people for the right teams is one of the highest-leverage things any of us do at Owsho.",
};

export const hiringPhilosophy: string[] = [
  "We're always looking for people who care about what we're building — regardless of how much experience they carry on paper. If you believe in local commerce and want to help build it, there's likely a place for you here.",
  "We build opportunities around great people. Not the other way around.",
];

/** "When we meet someone who might join Owsho, we ask ourselves:" */
export const whatWeLookFor: string[] = [
  "Do they care about the problem we're solving?",
  "Do they take ownership, without being asked to?",
  "Are they honest enough to say “I don't know”?",
  "Will they make the people around them better?",
];

/**
 * "Life at Owsho" benefits. Leave durations out — Owsho has not published the
 * exact number of days for period or parental leave.
 */
export const lifeAtOwsho: Point[] = [
  {
    title: "Period Leave",
    description:
      "We offer paid period leave to women and trans employees, to support their health when they need it most.",
    Icon: HeartHandIcon,
    tone: "accent",
  },
  {
    title: "Equal Parental Leave",
    description:
      "Both mothers and fathers get paid parental leave, usable anytime within the first few years after their child is born.",
    Icon: SmileIcon,
    tone: "brand",
  },
  {
    title: "Health & Fitness",
    description:
      "Access to fitness and nutrition support, because a healthier team does better work.",
    Icon: SparkleIcon,
    tone: "brand",
  },
  {
    title: "Wellness Support",
    description:
      "Every Owsho employee has access to counselling support, to help navigate difficult moments in life — inside or outside of work.",
    Icon: ShieldIcon,
    tone: "accent",
  },
];
