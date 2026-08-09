import type { TruckIcon } from "@/components/brand/Icons";

export type IconComponent = typeof TruckIcon;

/** Tone controls whether a chip renders in brand blue or accent orange. */
export type Tone = "brand" | "accent";

export type Feature = {
  title: string;
  description: string;
  Icon: IconComponent;
  tone: Tone;
};

/** A numbered step in a `StepsRail`. */
export type Step = {
  number: string;
  title: string;
  description: string;
  Icon: IconComponent;
  tone: Tone;
};

/** A titled point with body copy — the shape most card grids on the site use. */
export type Point = {
  title: string;
  description: string;
  Icon: IconComponent;
  tone: Tone;
};
