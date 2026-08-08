export type Category = {
  slug: string;
  name: string;
  productCount: string;
  blurb: string;
  subcategories: string[];
  /** Typical commission band shown on the categories page. */
  commission: string;
};

/**
 * TODO(owsho): confirm product counts and commission bands with the
 * category/pricing team before launch. Everything else is copy-safe.
 */
export const categories: Category[] = [
  {
    slug: "fashion",
    name: "Fashion",
    productCount: "1200+ Products",
    blurb:
      "Everyday wear, ethnic collections and accessories from neighbourhood boutiques and tailoring studios.",
    subcategories: [
      "Men's clothing",
      "Women's clothing",
      "Kids & baby",
      "Footwear",
      "Bags & wallets",
      "Watches & jewellery",
    ],
    commission: "8–12%",
  },
  {
    slug: "grocery",
    name: "Grocery",
    productCount: "2500+ Products",
    blurb:
      "Daily essentials, fresh produce and pantry staples from kirana stores within delivery range.",
    subcategories: [
      "Fruits & vegetables",
      "Staples & grains",
      "Dairy & bakery",
      "Snacks & beverages",
      "Household care",
      "Personal care",
    ],
    commission: "4–7%",
  },
  {
    slug: "home-living",
    name: "Home & Living",
    productCount: "1800+ Products",
    blurb:
      "Furniture, décor and kitchenware from local workshops, carpenters and homeware dealers.",
    subcategories: [
      "Furniture",
      "Home décor",
      "Kitchen & dining",
      "Bed & bath",
      "Storage & organisation",
      "Lighting",
    ],
    commission: "7–11%",
  },
  {
    slug: "beauty",
    name: "Beauty",
    productCount: "950+ Products",
    blurb:
      "Skincare, haircare and grooming ranges from licensed retailers and local wellness brands.",
    subcategories: [
      "Skincare",
      "Haircare",
      "Makeup",
      "Fragrances",
      "Men's grooming",
      "Ayurveda & wellness",
    ],
    commission: "9–13%",
  },
  {
    slug: "electronics",
    name: "Electronics",
    productCount: "1100+ Products",
    blurb:
      "Mobiles, accessories and small appliances from authorised dealers and service centres.",
    subcategories: [
      "Mobiles & tablets",
      "Audio",
      "Computer accessories",
      "Small appliances",
      "Smart home",
      "Cables & chargers",
    ],
    commission: "3–6%",
  },
  {
    slug: "sports",
    name: "Sports",
    productCount: "780+ Products",
    blurb:
      "Fitness gear, team kit and outdoor equipment from sports retailers and academies.",
    subcategories: [
      "Fitness equipment",
      "Team sports",
      "Cycling",
      "Outdoor & camping",
      "Sportswear",
      "Nutrition",
    ],
    commission: "6–10%",
  },
];
