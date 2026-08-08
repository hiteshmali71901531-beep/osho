export type Faq = { question: string; answer: string };
export type FaqGroup = { id: string; title: string; faqs: Faq[] };

/**
 * TODO(owsho): finance and legal to confirm the commission bands, the payout
 * cycle (currently stated as weekly, T+7 from delivery) and the return window
 * before this page goes live.
 */
export const faqGroups: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    faqs: [
      {
        question: "What is OWSHO?",
        answer:
          "OWSHO stands for “Owner's Shop”. It is an online marketplace that puts local shops in front of nearby customers, so a neighbourhood store can sell online with the same reach and convenience as a large brand.",
      },
      {
        question: "How much does it cost to start selling?",
        answer:
          "Nothing. Registration, verification, your shop page and product listings are all free. You pay a commission only on orders that are delivered and accepted by the customer.",
      },
      {
        question: "How long does onboarding take?",
        answer:
          "Registration takes about five minutes. Verification of your documents is usually completed within 48 working hours, after which you can list products and go live the same day.",
      },
      {
        question: "Do I need a website or a computer?",
        answer:
          "No. Everything — listings, orders, payouts and support — works from a phone. If you would rather not create listings yourself, send us your price list and our catalogue team will set them up for you.",
      },
      {
        question: "Which cities is OWSHO available in?",
        answer:
          "We are live in a growing list of pin codes and add new areas every month. Enter your pin code during registration to see whether your shop is in a serviceable area right now.",
      },
    ],
  },
  {
    id: "requirements",
    title: "Documents and eligibility",
    faqs: [
      {
        question: "What documents do I need?",
        answer:
          "PAN, an identity and address proof for the signatory, bank account proof (cancelled cheque or statement header), and a shop or business proof. GSTIN is required for taxable goods, and an FSSAI licence is required for grocery and packaged food.",
      },
      {
        question: "Can I sell without a GST number?",
        answer:
          "In some categories, yes. Sellers dealing only in GST-exempt goods such as unbranded fresh produce can register without a GSTIN. For all taxable goods a valid GSTIN is mandatory.",
      },
      {
        question: "I run my business from home. Can I still sell?",
        answer:
          "Yes, as long as you have a verifiable address we can dispatch from and you can meet the operating standards for order confirmation and packaging.",
      },
      {
        question: "Can I sell in more than one category?",
        answer:
          "Yes. You can list across categories from a single shop account, provided you hold any licence that a particular category requires.",
      },
    ],
  },
  {
    id: "orders-delivery",
    title: "Orders and delivery",
    faqs: [
      {
        question: "Who handles delivery?",
        answer:
          "OWSHO's partner riders do. You pack the order and hand it over; labels, tracking and customer notifications are generated automatically. You can also opt into self-delivery within your own service area.",
      },
      {
        question: "What if an item is out of stock?",
        answer:
          "Mark it unavailable in your catalogue before an order comes in. Frequent out-of-stock cancellations hurt your shop's visibility, so keeping stock levels current is the single most useful habit for a new seller.",
      },
      {
        question: "How do returns work?",
        answer:
          "Each category has its own return window, shown on every listing. Eligible returns are collected by the same delivery network and inspected before the refund is released. Perishable and personal-care goods are non-returnable except when damaged.",
      },
      {
        question: "Can I set my own delivery radius and working hours?",
        answer:
          "Yes. You define your service area and the hours in which you accept orders. Orders are only routed to you inside those limits.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments and pricing",
    faqs: [
      {
        question: "When do I get paid?",
        answer:
          "Settlements run on a fixed weekly cycle to your registered bank account, covering orders that completed their return window. Every payout comes with an order-by-order statement.",
      },
      {
        question: "What commission does OWSHO charge?",
        answer:
          "Commission depends on the category and typically ranges from 3% to 13%. Grocery and electronics sit at the lower end; beauty and fashion at the higher end. The exact rate for every category is shown before you list your first product.",
      },
      {
        question: "Are there any hidden charges?",
        answer:
          "No. There is no listing fee, no monthly subscription and no charge for your shop page. Optional services such as branded packaging or paid promotion are always opt-in and priced upfront.",
      },
      {
        question: "How do customers pay?",
        answer:
          "Customers can pay by UPI, debit or credit card, net banking, wallets, or cash on delivery where it is available. You receive the same settlement regardless of the method the customer chose.",
      },
    ],
  },
  {
    id: "support",
    title: "Support and account",
    faqs: [
      {
        question: "Is there someone I can actually talk to?",
        answer:
          "Yes. Seller support is reachable by phone and email, and new shops are assigned an onboarding contact for their first month.",
      },
      {
        question: "What happens if a customer raises a dispute?",
        answer:
          "You are notified with the customer's reason and given a window to respond with evidence such as packing photos. Disputes are decided against the documented category policy, not case by case.",
      },
      {
        question: "Can I pause my shop for a holiday?",
        answer:
          "Yes. Switch your shop to holiday mode for any date range. Your listings stay visible but stop accepting orders, and your ratings are not affected.",
      },
    ],
  },
];

export const allFaqs: Faq[] = faqGroups.flatMap((group) => group.faqs);
