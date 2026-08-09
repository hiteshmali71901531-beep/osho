import { registeredAddress, site } from "@/lib/site";
import type { LegalDoc } from "@/lib/content/legal/types";

/**
 * Owsho Seller Terms of Service, Version 2.0 — reproduced from the approved
 * document. Clause numbering is preserved because other Owsho documents
 * (the Seller FAQs and the Security page) cross-reference it.
 */
export const termsDoc: LegalDoc = {
  title: "Owsho Seller Terms of Service",
  version: "2.0",
  lastUpdated: "August 2026",
  intro: [
    "These Seller Terms of Service (“Seller Terms”) govern the registration, onboarding and use of the Owsho seller platform and related services by sellers, merchants, businesses and their authorised representatives (“Seller”, “you” or “your”).",
    `The platform and services are provided by ${site.legalName} (“Owsho”, “Company”, “we”, “us” or “our”).`,
    "By registering as a seller, submitting an onboarding application, accessing the seller platform, listing products or otherwise using Owsho seller services, you agree to these Seller Terms, the Owsho Privacy Policy and any other applicable policies or agreements.",
    "If you do not agree with these Seller Terms, you should not register or use the Seller Services.",
  ],
  sections: [
    {
      id: "eligibility",
      number: "1",
      title: "Seller Eligibility",
      blocks: [
        {
          kind: "ul",
          intro: "To become an Owsho seller, you must:",
          items: [
            "Be legally capable of entering into a business arrangement;",
            "Provide accurate and complete information;",
            "Have the necessary rights and authority to sell the products/services you list;",
            "Hold applicable registrations, licences and permissions required for your business;",
            "Comply with applicable laws and regulations; and",
            "Complete Owsho's verification/onboarding requirements.",
          ],
          outro:
            "Owsho may reject or defer an application where the information or documentation provided is incomplete, inaccurate or insufficient.",
        },
      ],
    },
    {
      id: "registration-verification",
      number: "2",
      title: "Seller Registration and Verification",
      blocks: [
        {
          kind: "ul",
          intro:
            "During onboarding, Owsho may request information and documents including:",
          items: [
            "Seller/business name;",
            "Owner or authorised representative details;",
            "Mobile number and email;",
            "Business address;",
            "PAN;",
            "GST details, where applicable;",
            "Bank account details;",
            "Business registration documents;",
            "Product/category information;",
            "Applicable licences; and",
            "Other information reasonably required for verification.",
          ],
        },
        {
          kind: "p",
          text: "You are responsible for ensuring that all information provided to Owsho remains accurate and updated.",
        },
        {
          kind: "p",
          text: "Owsho may conduct verification checks directly or through authorised third-party service providers.",
        },
      ],
    },
    {
      id: "seller-account",
      number: "3",
      title: "Seller Account",
      blocks: [
        {
          kind: "p",
          text: "You are responsible for maintaining the security of your seller account and login credentials.",
        },
        {
          kind: "ul",
          intro: "You must not:",
          items: [
            "Share account credentials with unauthorised persons;",
            "Allow unauthorised use of your account;",
            "Attempt to access another seller's account;",
            "Circumvent platform security; or",
            "Use the account for fraudulent or unlawful activities.",
          ],
          outro:
            "You must promptly inform Owsho if you suspect unauthorised access.",
        },
      ],
    },
    {
      id: "profile-store-information",
      number: "4",
      title: "Seller Profile and Store Information",
      blocks: [
        {
          kind: "ul",
          intro:
            "You are responsible for maintaining accurate information about your business, including:",
          items: [
            "Store name;",
            "Address;",
            "Operating hours;",
            "Contact information;",
            "Product categories;",
            "Availability;",
            "Business status; and",
            "Other information displayed through the platform.",
          ],
          outro:
            "Owsho may display relevant seller and store information to customers to facilitate marketplace transactions.",
        },
      ],
    },
    {
      id: "product-listing",
      number: "5",
      title: "Product Listing and Catalogue",
      blocks: [
        {
          kind: "p",
          text: "Sellers may list eligible products through Owsho subject to applicable marketplace requirements.",
        },
        {
          kind: "ul",
          intro: "You are responsible for ensuring that:",
          items: [
            "Product information is accurate;",
            "Prices are correct;",
            "Product images and descriptions are genuine;",
            "Stock availability is updated;",
            "Product specifications are accurate;",
            "Products comply with applicable laws;",
            "Required licences/approvals are maintained; and",
            "Products are safe, genuine and fit for sale.",
          ],
          outro:
            "You must not knowingly list counterfeit, illegal, prohibited, unsafe or unauthorised products.",
        },
      ],
    },
    {
      id: "product-pricing",
      number: "6",
      title: "Product Pricing",
      blocks: [
        {
          kind: "p",
          text: "The Seller is responsible for maintaining accurate product prices.",
        },
        { kind: "p", text: "Owsho may display seller-provided prices on the platform." },
        {
          kind: "p",
          text: "You must not intentionally provide misleading pricing information or manipulate prices in a manner that violates applicable law or Owsho policies.",
        },
      ],
    },
    {
      id: "orders",
      number: "7",
      title: "Orders",
      blocks: [
        {
          kind: "p",
          text: "When a customer places an order for your product, you are responsible for fulfilling the order according to the applicable process.",
        },
        {
          kind: "ul",
          intro:
            "Depending on the Owsho model and service area, the seller may be required to:",
          items: [
            "Confirm or accept orders;",
            "Prepare products;",
            "Keep products ready for pickup;",
            "Maintain required packaging standards;",
            "Provide accurate order information; and",
            "Cooperate with Owsho or delivery partners.",
          ],
          outro:
            "Repeated order rejection, cancellation or failure to fulfil orders may affect seller performance or account status.",
        },
      ],
    },
    {
      id: "inventory",
      number: "8",
      title: "Inventory and Availability",
      blocks: [
        {
          kind: "p",
          text: "Sellers must maintain reasonably accurate inventory information.",
        },
        {
          kind: "p",
          text: "If a product is unavailable, the seller should update its availability promptly.",
        },
        {
          kind: "p",
          text: "Repeated acceptance of orders for unavailable products may result in seller performance action.",
        },
      ],
    },
    {
      id: "packaging-quality",
      number: "9",
      title: "Packaging and Product Quality",
      blocks: [
        {
          kind: "p",
          text: "Sellers are responsible for preparing products in appropriate condition and packaging them in accordance with applicable requirements and Owsho guidelines.",
        },
        {
          kind: "ul",
          intro: "Products must be:",
          items: [
            "Genuine;",
            "Undamaged;",
            "Properly packed;",
            "Within applicable expiry dates;",
            "Properly labelled where required; and",
            "Suitable for delivery.",
          ],
          outro:
            "Perishable or sensitive products must be handled according to applicable safety requirements.",
        },
      ],
    },
    {
      id: "delivery-fulfilment",
      number: "10",
      title: "Delivery and Fulfilment",
      blocks: [
        {
          kind: "p",
          text: "Depending on the applicable Owsho service model, delivery may be facilitated by Owsho, a third-party logistics provider, the seller or another authorised delivery arrangement.",
        },
        {
          kind: "p",
          text: "Sellers must cooperate with the applicable delivery process and ensure that orders are ready within the expected preparation time.",
        },
        {
          kind: "p",
          text: "Owsho may use estimated delivery times based on operational conditions. Sellers must not make independent delivery promises that conflict with applicable platform information.",
        },
      ],
    },
    {
      id: "fees-plans",
      number: "11",
      title: "Seller Fees and Commercial Plans",
      blocks: [
        {
          kind: "p",
          text: "Owsho may offer different seller plans, subscription packages, listing services, promotional services, advertising opportunities, delivery-related services or other commercial arrangements.",
        },
        {
          kind: "p",
          text: "Applicable fees, charges and benefits will be communicated through the relevant seller plan, agreement, order flow or commercial communication.",
        },
        {
          kind: "p",
          text: "Owsho may introduce, modify or discontinue commercial plans subject to applicable agreements and law.",
        },
      ],
    },
    {
      id: "settlements",
      number: "12",
      title: "Seller Settlements",
      blocks: [
        {
          kind: "p",
          text: "Where applicable, Owsho may process payments and seller settlements through its payment systems, banks or authorised financial service providers.",
        },
        {
          kind: "ul",
          intro: "Settlement amounts may be subject to applicable:",
          items: [
            "Fees;",
            "Taxes;",
            "Refunds;",
            "Adjustments;",
            "Chargebacks;",
            "Penalties expressly applicable under the seller agreement; or",
            "Other legitimate transaction adjustments.",
          ],
          outro:
            "Seller bank details must be accurate and belong to the authorised seller/business.",
        },
      ],
    },
    {
      id: "taxes-compliance",
      number: "13",
      title: "Taxes and Legal Compliance",
      blocks: [
        {
          kind: "p",
          text: "The Seller is responsible for complying with applicable tax, invoicing, licensing, product, consumer protection and other legal requirements applicable to its business, including without limitation the Central Goods and Services Tax Act, 2017 and applicable State GST legislation, the Consumer Protection Act, 2019 and the Consumer Protection (E-Commerce) Rules, 2020, and the Legal Metrology Act, 2009, as amended from time to time.",
        },
        {
          kind: "p",
          text: "Where required, sellers must issue appropriate invoices, maintain records and provide required information.",
        },
        {
          kind: "p",
          text: "Owsho may request documentation necessary for legal or regulatory compliance.",
        },
      ],
    },
    {
      id: "returns-complaints",
      number: "14",
      title: "Returns, Refunds and Customer Complaints",
      blocks: [
        {
          kind: "p",
          text: "Sellers must cooperate with applicable return, replacement, refund and complaint processes.",
        },
        {
          kind: "ul",
          intro: "The applicable treatment may depend on:",
          items: [
            "Product category;",
            "Reason for complaint;",
            "Seller policy;",
            "Owsho policy;",
            "Product condition; and",
            "Applicable law.",
          ],
          outro:
            "Sellers must not knowingly reject legitimate customer complaints or provide misleading information.",
        },
      ],
    },
    {
      id: "content-ip",
      number: "15",
      title: "Seller Content and Intellectual Property",
      blocks: [
        {
          kind: "p",
          text: "You retain ownership of content and business information that you provide to Owsho, subject to the rights granted under these Terms.",
        },
        {
          kind: "p",
          text: "By submitting product images, descriptions, logos, brand information or other content, you grant Owsho a non-exclusive, royalty-free licence to use, reproduce, display, format and distribute such content as reasonably necessary to operate, promote and provide the marketplace Services.",
        },
        {
          kind: "p",
          text: "You represent that you have the necessary rights to provide such content.",
        },
      ],
    },
    {
      id: "prohibited-products",
      number: "16",
      title: "Prohibited Products and Activities",
      blocks: [
        {
          kind: "ul",
          intro:
            "Sellers must not use Owsho to list or sell products or services that are:",
          items: [
            "Illegal;",
            "Counterfeit or unauthorised;",
            "Prohibited under applicable law;",
            "Unsafe;",
            "Fraudulent;",
            "Misleading;",
            "Infringing third-party intellectual property;",
            "Subject to required licences that the seller does not possess; or",
            "Otherwise prohibited under Owsho marketplace policies.",
          ],
          outro:
            "Owsho may restrict or remove listings that violate applicable requirements.",
        },
      ],
    },
    {
      id: "seller-conduct",
      number: "17",
      title: "Seller Conduct",
      blocks: [
        {
          kind: "ul",
          intro: "Sellers must not:",
          items: [
            "Manipulate orders;",
            "Create fake orders;",
            "Manipulate ratings or reviews;",
            "Misrepresent products;",
            "Circumvent Owsho fees or systems;",
            "Attempt to move transactions outside the platform for improper purposes;",
            "Upload malicious content;",
            "Access another seller's information without authorisation;",
            "Misuse customer information; or",
            "Engage in fraudulent or abusive activities.",
          ],
        },
      ],
    },
    {
      id: "customer-information",
      number: "18",
      title: "Customer Information",
      blocks: [
        {
          kind: "p",
          text: "If customer information is made available to a seller for order fulfilment, the seller must use it only for legitimate purposes connected with the transaction and applicable Owsho Services.",
        },
        {
          kind: "ul",
          intro: "Sellers must not:",
          items: [
            "Sell customer information;",
            "Use customer information for unrelated marketing without appropriate permission;",
            "Share customer information with unauthorised persons; or",
            "Retain customer information for longer than is reasonably necessary to complete the relevant order, resolve associated complaints or comply with applicable law, and in any event Sellers must permanently delete or anonymise such customer information within ninety (90) days of order completion unless a longer retention period is required by applicable law, including the Digital Personal Data Protection Act, 2023.",
          ],
        },
      ],
    },
    {
      id: "audits-monitoring",
      number: "19",
      title: "Audits and Monitoring",
      blocks: [
        {
          kind: "p",
          text: "Owsho may monitor marketplace activity and seller performance to maintain platform quality, safety and compliance.",
        },
        {
          kind: "ul",
          intro: "This may include monitoring:",
          items: [
            "Order fulfilment;",
            "Cancellation rates;",
            "Customer complaints;",
            "Product listings;",
            "Returns;",
            "Seller activity;",
            "Fraud indicators; and",
            "Other marketplace performance indicators.",
          ],
        },
      ],
    },
    {
      id: "suspension-termination",
      number: "20",
      title: "Suspension and Termination",
      blocks: [
        {
          kind: "ul",
          intro:
            "Owsho may suspend, restrict or terminate seller access where reasonably necessary due to:",
          items: [
            "Violation of these Terms;",
            "Fraud or suspected fraud;",
            "Repeated poor fulfilment;",
            "Prohibited products;",
            "Misleading information;",
            "Legal or regulatory requirements;",
            "Security concerns;",
            "Abuse of the platform; or",
            "Other material violations.",
          ],
          outro:
            "Where appropriate, Owsho may provide notice or an opportunity to address the issue, subject to the circumstances and applicable law.",
        },
      ],
    },
    {
      id: "responsibility-indemnity",
      number: "21",
      title: "Seller Responsibility and Indemnity",
      blocks: [
        {
          kind: "ul",
          intro:
            "To the extent permitted by law, the Seller is responsible for losses, claims, penalties or liabilities arising from:",
          items: [
            "Seller's violation of applicable law;",
            "Misrepresentation;",
            "Illegal or prohibited products;",
            "Intellectual property infringement;",
            "Product-related claims attributable to the Seller; or",
            "Breach of these Seller Terms.",
          ],
          outro:
            "Any indemnification obligations will be subject to applicable law and the relevant seller agreement.",
        },
      ],
    },
    {
      id: "limitation-of-liability",
      number: "22",
      title: "Limitation of Liability",
      blocks: [
        {
          kind: "p",
          text: "To the maximum extent permitted by applicable law, Owsho shall not be liable for any indirect, incidental, special, consequential or punitive damages, or for loss of profits, revenue, goodwill or anticipated savings, arising out of or in connection with the Seller Services, whether based in contract, tort or otherwise, even if Owsho has been advised of the possibility of such damages.",
        },
        {
          kind: "p",
          text: "Except in cases of fraud, wilful misconduct or gross negligence by Owsho, or where liability cannot be limited or excluded under applicable law, Owsho's aggregate liability to a Seller arising out of or in connection with these Seller Terms shall not exceed the total commission or fees actually paid by the Seller to Owsho in the three (3) months immediately preceding the event giving rise to the claim.",
        },
        {
          kind: "p",
          text: "Nothing in this Clause 22 limits or excludes liability that cannot lawfully be limited or excluded, including liability arising from death or personal injury caused by negligence, or fraud.",
        },
      ],
    },
    {
      id: "force-majeure",
      number: "23",
      title: "Force Majeure",
      blocks: [
        {
          kind: "p",
          text: "Neither party shall be liable for any failure or delay in performing its obligations under these Seller Terms to the extent such failure or delay is caused by circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, pandemics or epidemics, war, riots, civil unrest, strikes, governmental orders or restrictions, internet or telecommunications failures, power outages, or failures of third-party payment, logistics or technology providers (“Force Majeure Event”).",
        },
        {
          kind: "p",
          text: "The affected party shall promptly notify the other party of a Force Majeure Event and shall use reasonable efforts to mitigate its effects. Obligations affected by a Force Majeure Event shall be suspended for the duration of such event.",
        },
      ],
    },
    {
      id: "platform-availability",
      number: "24",
      title: "Platform Availability",
      blocks: [
        {
          kind: "p",
          text: "Owsho aims to maintain reliable seller Services but does not guarantee uninterrupted or error-free operation.",
        },
        {
          kind: "p",
          text: "Services may occasionally be unavailable due to maintenance, technical issues, security incidents, third-party failures or circumstances beyond Owsho's reasonable control.",
        },
      ],
    },
    {
      id: "confidentiality",
      number: "25",
      title: "Confidentiality",
      blocks: [
        {
          kind: "p",
          text: "Sellers must protect confidential business, technical and operational information received from Owsho and must not disclose it to unauthorised persons.",
        },
      ],
    },
    {
      id: "privacy-data-protection",
      number: "26",
      title: "Privacy and Data Protection",
      blocks: [
        {
          kind: "p",
          text: "Seller information will be handled in accordance with the Owsho Privacy Policy and applicable data protection laws, including the Digital Personal Data Protection Act, 2023.",
        },
        {
          kind: "p",
          text: "Sellers must also handle customer information responsibly where such information is provided to them through the platform.",
        },
      ],
    },
    {
      id: "notices",
      number: "27",
      title: "Notices",
      blocks: [
        {
          kind: "p",
          text: `Any notice required to be given under these Seller Terms shall be in writing and shall be deemed validly delivered (a) if sent by Owsho to the Seller, upon transmission to the email address or mobile number registered on the Seller's account, or upon posting on the seller platform/dashboard; and (b) if sent by the Seller to Owsho, upon receipt at ${site.email} or the registered office address set out in Clause 32.`,
        },
      ],
    },
    {
      id: "assignment",
      number: "28",
      title: "Assignment",
      blocks: [
        {
          kind: "p",
          text: "The Seller may not assign, transfer or sub-contract any of its rights or obligations under these Seller Terms without Owsho's prior written consent. Owsho may assign or transfer these Seller Terms, in whole or in part, including in connection with a merger, acquisition, corporate reorganisation or sale of all or substantially all of its business or assets, without the Seller's consent, provided that the assignee agrees to be bound by these Seller Terms.",
        },
      ],
    },
    {
      id: "entire-agreement",
      number: "29",
      title: "Entire Agreement and Severability",
      blocks: [
        {
          kind: "p",
          text: "These Seller Terms, together with the Owsho Privacy Policy and any other policies or agreements expressly referenced herein, constitute the entire agreement between the Seller and Owsho with respect to the Seller Services and supersede all prior or contemporaneous understandings, whether written or oral, on that subject.",
        },
        {
          kind: "p",
          text: "If any provision of these Seller Terms is held to be invalid, illegal or unenforceable by a court or authority of competent jurisdiction, that provision shall be enforced to the maximum extent permissible, and the remaining provisions shall continue in full force and effect. No failure or delay by Owsho in exercising any right under these Seller Terms shall operate as a waiver of that right.",
        },
      ],
    },
    {
      id: "changes",
      number: "30",
      title: "Changes to Seller Terms",
      blocks: [
        { kind: "p", text: "Owsho may update these Seller Terms from time to time." },
        {
          kind: "p",
          text: "Material changes may be communicated through the platform, email or other appropriate channels where required.",
        },
        {
          kind: "p",
          text: "Continued use of the Seller Services after applicable changes become effective will be subject to the updated Terms.",
        },
      ],
    },
    {
      id: "governing-law",
      number: "31",
      title: "Governing Law and Dispute Resolution",
      blocks: [
        {
          kind: "p",
          text: "These Seller Terms shall be governed by and construed in accordance with the laws of India.",
        },
        {
          kind: "p",
          text: "In the event of any dispute, controversy or claim arising out of or relating to these Seller Terms, the parties shall first attempt to resolve the matter through Owsho's seller support or grievance redressal process in good faith within thirty (30) days.",
        },
        {
          kind: "p",
          text: "If the dispute is not resolved within such period, it shall be referred to and finally resolved by arbitration under the Arbitration and Conciliation Act, 1996, conducted by a sole arbitrator appointed by mutual agreement of the parties (or, failing agreement, appointed in accordance with the said Act). The seat and venue of arbitration shall be Ahmedabad, Gujarat, India, and the language of arbitration shall be English. Subject to the foregoing, the courts at Banaskantha, Gujarat shall have exclusive jurisdiction over matters not referable to arbitration.",
        },
      ],
    },
    {
      id: "contact",
      number: "32",
      title: "Contact",
      blocks: [
        {
          kind: "dl",
          items: [
            { term: "Company", detail: site.legalName },
            { term: "Email", detail: site.email },
            { term: "Registered Office", detail: registeredAddress },
          ],
        },
      ],
    },
  ],
};
