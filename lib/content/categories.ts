export type Category = {
  slug: string;
  name: string;
  blurb: string;
};

/**
 * The seven categories Owsho carries, taken verbatim from the approved About
 * Us copy ("What You Can Find on Owsho"). Product counts and commission bands
 * are deliberately absent — Owsho has published no such numbers.
 */
export const categories: Category[] = [
  {
    slug: "grocery-kitchen",
    name: "Grocery & Kitchen",
    blurb: "Everyday essentials, straight from local stores you already trust.",
  },
  {
    slug: "snacks-drinks",
    name: "Snacks & Drinks",
    blurb:
      "From quick cravings to stocking up, your favourite snacks and drinks are just an order away.",
  },
  {
    slug: "fashion-lifestyle",
    name: "Fashion & Lifestyle",
    blurb:
      "Everyday style or something for an occasion — local fashion sellers, now easier to shop from.",
  },
  {
    slug: "beauty-personal-care",
    name: "Beauty & Personal Care",
    blurb:
      "Skincare, haircare, and personal essentials from sellers who know their products.",
  },
  {
    slug: "household-items",
    name: "Household Items",
    blurb:
      "The everyday things every home needs, from stores in your own neighbourhood.",
  },
  {
    slug: "sports-stationery",
    name: "Sports & Stationery",
    blurb:
      "Gear for training and playing, and stationery for work or school — all from local sellers.",
  },
  {
    slug: "pooja-store",
    name: "Pooja Store",
    blurb:
      "Everything needed for daily rituals and celebrations, sourced from trusted local sellers.",
  },
];
