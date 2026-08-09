export type Faq = { question: string; answer: string };
export type FaqGroup = { id: string; title: string; faqs: Faq[] };

/**
 * Owsho Seller FAQs, Version 2.0 (Last Updated: August 2026), reproduced from
 * the approved document. Answers are not paraphrased — several of them state
 * legal positions that are cross-referenced by the Seller Terms of Service.
 */
export const faqGroups: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    faqs: [
      {
        question: "What is Owsho?",
        answer:
          "Owsho is a local digital marketplace that helps businesses and sellers reach customers through an online platform and, where available, local delivery services.",
      },
      {
        question: "Who can become an Owsho seller?",
        answer:
          "Local shops, businesses, merchants, brands and eligible service/product providers can apply to become sellers, subject to Owsho's onboarding and verification requirements.",
      },
      {
        question: "How do I become a seller?",
        answer:
          "Submit your seller registration/application through the Owsho seller platform. Our team may contact you for verification, documentation and onboarding.",
      },
      {
        question: "What documents may be required?",
        answer:
          "Depending on your business, Owsho may request information such as PAN; GST details, where applicable; business registration details; bank details; owner/authorised representative details; store information; applicable licences; and product/category information. The exact requirements may vary by business type and category.",
      },
      {
        question: "Is KYC required?",
        answer:
          "Yes. Owsho may conduct seller/business verification and KYC as reasonably required for onboarding, security, payments and legal compliance.",
      },
    ],
  },
  {
    id: "products-catalogue",
    title: "Products & catalogue",
    faqs: [
      {
        question: "What products can I sell?",
        answer:
          "Eligible products from permitted categories can be listed, subject to applicable laws and Owsho marketplace policies.",
      },
      {
        question: "Who adds my products?",
        answer:
          "Depending on the onboarding process, sellers may add their own catalogue or provide information to the Owsho team for catalogue creation.",
      },
      {
        question: "Can I change product prices?",
        answer:
          "Yes, sellers may manage applicable product prices through the available seller tools, subject to Owsho's policies.",
      },
      {
        question: "What if a product goes out of stock?",
        answer:
          "Update the inventory/availability as soon as possible so customers do not place orders for unavailable products.",
      },
      {
        question: "Can I upload my own product photos?",
        answer:
          "Yes, where the seller tools permit. You must have the necessary rights to use the images and content submitted.",
      },
    ],
  },
  {
    id: "orders-delivery",
    title: "Orders & delivery",
    faqs: [
      {
        question: "How will I receive orders?",
        answer:
          "Eligible orders may appear through the Owsho seller system or other authorised seller communication channels.",
      },
      {
        question: "What do I do when I receive an order?",
        answer:
          "Prepare the correct product, verify the order details, pack it appropriately and keep it ready according to the applicable fulfilment process.",
      },
      {
        question: "Who delivers the order?",
        answer:
          "Depending on the location and service model, delivery may be handled by Owsho, a delivery partner, the seller or another authorised logistics arrangement.",
      },
      {
        question: "What happens if I cannot fulfil an order?",
        answer:
          "Update the order status or contact the applicable Owsho support channel promptly. Repeated cancellations or non-fulfilment may affect seller performance.",
      },
      {
        question: "Does Owsho provide quick delivery?",
        answer:
          "Where operationally feasible and available in the relevant area, Owsho may provide quick local delivery. Actual delivery time depends on the order, seller, distance and operating conditions.",
      },
    ],
  },
  {
    id: "payments-plans",
    title: "Payments & plans",
    faqs: [
      {
        question: "How will I receive my payments?",
        answer:
          "Eligible seller settlements may be transferred to the verified bank account associated with your seller account, subject to applicable fees, adjustments and settlement terms.",
      },
      {
        question: "Does Owsho charge commission?",
        answer:
          "Owsho's commercial model may include subscription plans, listing-related charges, advertising/promotional services, delivery-related charges or other applicable fees. The applicable commercial terms will be communicated to the seller before or during the relevant service.",
      },
      {
        question: "Are there seller subscription plans?",
        answer:
          "Owsho may offer different seller plans with different features and benefits. Current plans and pricing will be communicated on the seller platform or through authorised Owsho communications.",
      },
      {
        question: "Can the commercial plans change?",
        answer:
          "Owsho may modify or introduce plans, features or pricing subject to applicable agreements and law.",
      },
    ],
  },
  {
    id: "returns-customer-issues",
    title: "Returns & customer issues",
    faqs: [
      {
        question: "What happens if a customer wants to return a product?",
        answer:
          "The seller must cooperate with the applicable Owsho return/refund process. Eligibility depends on product category, reason for return, product condition, applicable policy and law.",
      },
      {
        question: "What if a customer complains about my product?",
        answer:
          "Owsho may review the complaint and request information from the seller. Sellers are expected to cooperate and provide accurate information.",
      },
      {
        question: "What happens if the wrong or damaged product is delivered?",
        answer:
          "The issue may be reviewed through the applicable support process. The seller may be required to provide information or cooperate with a replacement/refund process.",
      },
    ],
  },
  {
    id: "account-support",
    title: "Account & support",
    faqs: [
      {
        question: "Can I update my business information?",
        answer:
          "Yes. Keep your business, contact, store and banking information accurate and updated through the available seller channels.",
      },
      {
        question: "Can I close my seller account?",
        answer:
          "You may request seller account closure through the applicable Owsho support channel. Following closure, Owsho will retain your seller records only as long as reasonably necessary for legal, tax, accounting or dispute-resolution purposes. Customer information you accessed for order fulfilment must be deleted or anonymised on your end within 90 days of order completion, in line with Owsho's Seller Terms of Service, unless a longer period is required by applicable law.",
      },
      {
        question: "Is my seller information safe?",
        answer:
          "Owsho uses reasonable technical and organisational safeguards to protect seller information, in accordance with applicable data protection law, including the Digital Personal Data Protection Act, 2023. See the Owsho Privacy Policy and Security page for more information.",
      },
      {
        question: "Will my store information be visible to customers?",
        answer:
          "Information necessary to operate the marketplace, such as store name, location/service area, products, prices and catalogue information, may be displayed to customers.",
      },
      {
        question: "Can I contact Owsho support?",
        answer:
          "Yes. Sellers can use the available seller support channels or contact owshomarketplace@gmail.com — Owsho Market Place Private Limited, 7A Nilkanth Arched, 2nd Floor, Palanpur Highway, Disa Bazar, Deesa, Banaskantha, Gujarat, India – 385535.",
      },
    ],
  },
  {
    id: "legal-grievance",
    title: "Legal, compliance & grievance redressal",
    faqs: [
      {
        question:
          "Who do I contact if my complaint is not resolved by regular support?",
        answer:
          "If your issue is not resolved through the standard seller support channel, you may escalate it to Owsho's designated Grievance Officer, appointed in accordance with the Consumer Protection (E-Commerce) Rules, 2020 and the Information Technology Rules, 2021: Kirankumar Amratbhai Panchal (Director & Grievance Officer), owshomarketplace@gmail.com, +91 97731 93241, 7A Nilkanth Arched, 2nd Floor, Palanpur Highway, Disa Bazar, Deesa, Banaskantha, Gujarat, India – 385535. Grievances will be acknowledged within 48 hours and, where reasonably possible, resolved within one (1) month of receipt, in accordance with applicable law.",
      },
      {
        question: "What happens if my complaint still isn't resolved?",
        answer:
          "You may raise the matter through Owsho's seller grievance process first. If it remains unresolved within 30 days, the matter may be referred to arbitration under the Arbitration and Conciliation Act, 1996, with the seat of arbitration at Ahmedabad, Gujarat, as set out in the Seller Terms of Service. This does not affect any other remedy available to you under applicable consumer protection law.",
      },
      {
        question: "Can Owsho suspend or terminate my seller account?",
        answer:
          "Yes, in circumstances such as violation of the Seller Terms, fraud, repeated poor fulfilment, listing of prohibited products, or legal/regulatory requirements. Where reasonably possible, Owsho will provide notice and an opportunity to address the issue before suspension or termination, except where immediate action is necessary for legal, safety or security reasons.",
      },
      {
        question:
          "What happens to my data and pending settlements if my account is closed or terminated?",
        answer:
          "Any amounts due to you for fulfilled orders, less applicable fees, deductions and adjustments, will be settled in accordance with the standard settlement process. Seller and transaction records may be retained thereafter as required for legal, tax or dispute-resolution purposes.",
      },
    ],
  },
];

export const allFaqs: Faq[] = faqGroups.flatMap((group) => group.faqs);
