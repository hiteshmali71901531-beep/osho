import {
  BoxIcon,
  CheckCircleIcon,
  ChartIcon,
  ClockIcon,
  HeadsetIcon,
  PriceTagIcon,
  RupeeIcon,
  ShieldIcon,
  SparkleIcon,
  StoreIcon,
  TruckIcon,
  WalletIcon,
} from "@/components/brand/Icons";
import type { Faq } from "@/lib/content/faqs";
import type { Point } from "@/lib/content/types";

/* ------------------------------------------------------------------ *
 * Delivery Partner — approved page copy
 * ------------------------------------------------------------------ */

export const deliveryHero = {
  eyebrow: "Delivery Partner",
  title: "Deliver orders. Earn on your schedule.",
  description:
    "Join Owsho as a Delivery Partner and help customers receive their orders quickly and reliably.",
  supporting:
    "Whether you're looking for flexible work or a regular source of income, you can choose a schedule that works for you, subject to availability and operational requirements.",
};

/** "Why deliver with Owsho?" */
export const deliveryBenefits: Point[] = [
  {
    title: "Earn more",
    description:
      "Earn through deliveries along with applicable incentives and performance-based opportunities.",
    Icon: RupeeIcon,
    tone: "brand",
  },
  {
    title: "Flexible working",
    description:
      "Choose available working hours that fit your schedule, subject to operational requirements.",
    Icon: ClockIcon,
    tone: "accent",
  },
  {
    title: "Regular payments",
    description:
      "Receive your delivery earnings through Owsho's applicable payment cycle.",
    Icon: WalletIcon,
    tone: "brand",
  },
  {
    title: "Incentive opportunities",
    description:
      "Eligible delivery partners may receive additional incentives based on applicable performance and operational schemes.",
    Icon: ChartIcon,
    tone: "brand",
  },
  {
    title: "Support when you need it",
    description:
      "Get operational guidance and support to help you complete deliveries smoothly.",
    Icon: HeadsetIcon,
    tone: "accent",
  },
  {
    title: "Safety first",
    description:
      "Follow Owsho's delivery and safety guidelines while completing customer orders.",
    Icon: ShieldIcon,
    tone: "brand",
  },
];

/** "What does a Delivery Partner do?" */
export const deliveryResponsibilities: Point[] = [
  {
    title: "Pick up orders",
    description:
      "Collect prepared orders from the assigned seller, warehouse or fulfilment point.",
    Icon: BoxIcon,
    tone: "brand",
  },
  {
    title: "Deliver to customers",
    description:
      "Deliver orders safely and accurately to the customer's provided location.",
    Icon: TruckIcon,
    tone: "accent",
  },
  {
    title: "Follow delivery instructions",
    description:
      "Handle orders responsibly and follow applicable customer and operational instructions.",
    Icon: CheckCircleIcon,
    tone: "brand",
  },
  {
    title: "Complete orders",
    description:
      "Update delivery status through the applicable Owsho delivery system and complete the order successfully.",
    Icon: SparkleIcon,
    tone: "accent",
  },
];

/** "Who can become a Delivery Partner?" */
export const deliveryEligibility: string[] = [
  "Meet the applicable legal age and eligibility requirements",
  "Have a valid smartphone",
  "Have a suitable vehicle for delivery, where required",
  "Hold valid driving and vehicle documents where applicable",
  "Have a valid bank account/payment method",
  "Be able to work during the selected or assigned hours",
  "Follow Owsho's safety and operational guidelines",
];

export const deliveryFaqs: Faq[] = [
  {
    question: "Who is an Owsho Delivery Partner?",
    answer:
      "An Owsho Delivery Partner is an independent delivery professional who helps collect and deliver customer orders through the Owsho delivery network, subject to the applicable onboarding and engagement terms.",
  },
  {
    question: "How do I become an Owsho Delivery Partner?",
    answer:
      "Click Apply Now, submit your details and complete the required verification and onboarding process.",
  },
  {
    question: "What are the working hours?",
    answer:
      "Working hours can be flexible depending on available delivery slots and operational requirements. Applicable working arrangements will be communicated during onboarding.",
  },
  {
    question: "How much can I earn?",
    answer:
      "Earnings depend on factors such as the number of deliveries, working hours, location, incentives and applicable payment terms. Actual earnings may vary.",
  },
  {
    question: "How and when will I receive my payment?",
    answer:
      "Payments will be made according to Owsho's applicable delivery-partner payment cycle and terms.",
  },
  {
    question: "Are there any incentives?",
    answer:
      "Eligible delivery partners may receive incentives under applicable schemes. Incentive terms can vary by location, period and performance.",
  },
  {
    question: "Is there any joining fee?",
    answer:
      "Any applicable onboarding charges, if introduced, will be clearly communicated before onboarding. Owsho will not require payment without prior disclosure of the applicable terms.",
  },
  {
    question: "What documents are required?",
    answer:
      "Depending on the role and location, documents may include identity proof, address proof, bank details, driving licence and vehicle-related documents.",
  },
  {
    question: "Do I need my own vehicle?",
    answer:
      "Vehicle requirements may vary depending on the delivery model and location. The applicable requirement will be communicated during onboarding.",
  },
  {
    question: "How can I report an issue or grievance?",
    answer:
      "Delivery Partners can contact Owsho through the designated support channels provided during onboarding or through the applicable partner support system.",
  },
];

export const deliveryClosing = {
  title: "Ready to deliver with Owsho?",
  description:
    "Start earning on your schedule. Join our delivery network and help bring every order safely to the customer's doorstep.",
};

/* ------------------------------------------------------------------ *
 * Warehouse Partner — approved page copy
 * ------------------------------------------------------------------ */

export const warehouseHero = {
  eyebrow: "Warehouse Partner",
  title: "Pick, pack and sort orders placed by our customers",
  description: "Come be a part of the team behind every order.",
  supporting:
    "Join Owsho's warehouse team and help us get customer orders ready for delivery. From picking the right products to packing and sorting orders, every role in our warehouse helps create a smooth and reliable experience for our customers.",
};

export const warehouseCareer = {
  title: "Build your career with Owsho",
  body: "Join a fast-growing company and become an important part of our fulfilment operations. We provide a structured work environment, role-specific training and opportunities to learn and grow while working with a collaborative team.",
};

/** "What you get" */
export const warehouseBenefits: Point[] = [
  {
    title: "Competitive Salary",
    description:
      "Earn a competitive salary based on your role, location and experience.",
    Icon: RupeeIcon,
    tone: "brand",
  },
  {
    title: "Structured Shifts",
    description:
      "Work in clearly defined shifts based on warehouse and operational requirements.",
    Icon: ClockIcon,
    tone: "accent",
  },
  {
    title: "Training & Support",
    description:
      "Get guidance and on-the-job training to help you understand your role and responsibilities.",
    Icon: HeadsetIcon,
    tone: "brand",
  },
  {
    title: "Growth Opportunities",
    description:
      "Develop practical skills in warehouse operations and grow with the organisation.",
    Icon: ChartIcon,
    tone: "brand",
  },
  {
    title: "Safe Work Environment",
    description:
      "Work in an organised environment with defined processes and safety practices.",
    Icon: ShieldIcon,
    tone: "accent",
  },
];

/** "What will you do?" */
export const warehouseResponsibilities: Point[] = [
  {
    title: "Pick",
    description: "Pick products accurately according to customer orders.",
    Icon: PriceTagIcon,
    tone: "brand",
  },
  {
    title: "Pack",
    description: "Pack products carefully and prepare orders for dispatch.",
    Icon: BoxIcon,
    tone: "accent",
  },
  {
    title: "Sort",
    description: "Sort completed orders and ensure they are ready for delivery.",
    Icon: StoreIcon,
    tone: "brand",
  },
  {
    title: "Maintain",
    description: "Help keep the warehouse organised, clean and efficient.",
    Icon: SparkleIcon,
    tone: "accent",
  },
];

export const warehouseFaqs: Faq[] = [
  {
    question:
      "Are there any specific requirements to become an Owsho Warehouse Partner?",
    answer:
      "Requirements may vary depending on the role and location. Candidates must meet the applicable eligibility requirements and be able to perform the responsibilities associated with the position.",
  },
  {
    question: "What are the benefits of working at an Owsho warehouse?",
    answer:
      "Benefits and compensation may vary by role and location. Applicable salary, benefits and employment terms will be communicated during the hiring process.",
  },
  {
    question: "What is the duration of the work shift?",
    answer:
      "Shift timings and duration depend on the warehouse location and operational requirements. Details will be shared during the recruitment process.",
  },
  {
    question: "Are night shifts available?",
    answer:
      "Depending on operational requirements, night or extended shifts may be available at certain locations.",
  },
  {
    question: "Are there any incentives apart from the salary?",
    answer:
      "Where applicable, role-specific incentives or additional benefits may be offered. Details will be communicated for the relevant position.",
  },
  {
    question: "Is on-the-job training provided?",
    answer:
      "Yes. Selected candidates may receive role-specific guidance and training to help them understand warehouse processes and responsibilities.",
  },
  {
    question: "What documents are required at the time of joining?",
    answer:
      "Selected candidates may be required to provide identity, address, bank and other employment-related documents as applicable.",
  },
  {
    question: "How will salary be paid?",
    answer:
      "Salary will be paid through the applicable company payroll/payment process, subject to the employment terms communicated at the time of joining.",
  },
  {
    question: "How can I apply?",
    answer:
      "Click Apply Now and submit your details. Our recruitment team will review your application and contact eligible candidates regarding the next steps.",
  },
];

export const warehouseClosing = {
  title: "Come build with us",
  description:
    "Your next opportunity could start here. Join Owsho's warehouse team and help bring every customer order to life.",
};
