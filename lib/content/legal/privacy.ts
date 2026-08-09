import { registeredAddress, site } from "@/lib/site";
import type { LegalDoc } from "@/lib/content/legal/types";

/** Owsho Privacy Policy — reproduced from the approved document. */
export const privacyDoc: LegalDoc = {
  title: "Privacy Policy",
  lastUpdated: "August 2026",
  intro: [
    `${site.legalName} (“Owsho”, “Company”, “we”, “us”, and “our”) is committed to protecting the privacy and security of the personal and business information of sellers, merchants, business owners, authorised representatives and other individuals who interact with our seller platform.`,
    "Your privacy is important to us, and we are committed to handling your information responsibly and transparently.",
    "This Privacy Policy explains how we collect, use, process, store, disclose and protect information in connection with our seller website, seller registration pages, onboarding processes, applications, platforms, tools and related services (collectively, the “Services”).",
    "By accessing or using the Services, submitting a seller registration form, applying to become an Owsho seller, or otherwise providing information to us, you acknowledge that you have read and understood this Privacy Policy.",
    "We encourage you to review this Privacy Policy periodically as we may update it from time to time to reflect changes in our Services, business practices, technology or applicable law.",
    "If you have questions regarding this Privacy Policy, please contact us using the privacy/grievance contact details provided at the end of this document.",
  ],
  sections: [
    {
      id: "applicability",
      number: "1",
      title: "Applicability and Scope",
      blocks: [
        {
          kind: "p",
          text: "Owsho respects your privacy and is committed to protecting the information entrusted to us.",
        },
        {
          kind: "ul",
          intro: "This Privacy Policy sets out:",
          items: [
            "the types of information that Owsho may collect directly from you or through automated means when you access or use our seller Services; and",
            "our practices relating to the collection, use, processing, storage, protection and disclosure of such information.",
          ],
        },
        {
          kind: "p",
          text: "This Privacy Policy applies to information collected through our seller website, landing pages, registration forms, onboarding processes, seller accounts, electronic communications and other digital Services operated or controlled by Owsho.",
        },
        {
          kind: "ul",
          intro: "This Privacy Policy primarily applies to information relating to:",
          items: [
            "Sellers and merchants;",
            "Business owners;",
            "Authorised representatives;",
            "Store managers or employees acting on behalf of a seller; and",
            "Individuals providing information in connection with seller onboarding or marketplace participation.",
          ],
        },
        {
          kind: "p",
          text: "This Privacy Policy does not apply to information independently collected by third-party websites, applications, payment providers, logistics providers or other services that you may access through or in connection with our Services. Such third parties may have their own privacy policies and terms, and we encourage you to review them.",
        },
        {
          kind: "p",
          text: "If you provide information required by Owsho for seller onboarding or the provision of Services, failure to provide such information may prevent us from being able to complete your registration or provide certain Services.",
        },
      ],
    },
    {
      id: "information-we-collect",
      number: "2",
      title: "Information We Collect and How We Use It",
      blocks: [
        {
          kind: "p",
          text: "Owsho may collect different categories of information depending on how you interact with our Services.",
        },
        {
          kind: "ul",
          intro: "This may include:",
          items: [
            "Personal Information – information that relates to an identified or identifiable individual.",
            "Business Information – information relating to your store, business, products, services and operations.",
            "Technical and Usage Information – information relating to the device, browser, network and manner in which you access or use our Services.",
          ],
          outro:
            "We may collect information directly from you, automatically when you use our Services, or from authorised third parties where permitted by applicable law.",
        },
      ],
    },
    {
      id: "information-you-provide",
      number: "3",
      title: "Information You Provide to Us",
      blocks: [
        { kind: "h3", text: "A. Seller and Contact Information" },
        {
          kind: "ul",
          items: [
            "Name",
            "Business owner's name",
            "Authorised representative's name",
            "Mobile number",
            "Email address",
            "Business address",
            "Communication address",
            "City, state and postal code",
            "Other contact information voluntarily provided",
          ],
        },
        { kind: "h3", text: "B. Business and Store Information" },
        {
          kind: "ul",
          items: [
            "Store/business name",
            "Business category",
            "Store location",
            "Operating areas",
            "Store timings",
            "Business registration information",
            "Nature of business",
            "Products or services offered",
            "Business-related licences",
            "GST information, where applicable",
            "PAN or other tax information",
            "Other information reasonably required for seller verification and onboarding",
          ],
        },
        { kind: "h3", text: "C. KYC and Verification Information" },
        {
          kind: "p",
          text: "Depending on the nature of the seller and applicable requirements, Owsho may collect information and documents required for identity, business or regulatory verification, including identity information, business ownership information, government-issued identification documents, business registration documents, GST-related documents, PAN-related information, licences and certificates, and other information required for verification.",
        },
        { kind: "h3", text: "D. Product and Catalogue Information" },
        {
          kind: "p",
          text: "If you list products or services through Owsho, we may collect and process product names, descriptions, images, prices, stock information, specifications, brand and category information, offers, availability and other catalogue-related information. Such information may be displayed to customers through the Owsho platform.",
        },
        { kind: "h3", text: "E. Store Images and Business Content" },
        {
          kind: "p",
          text: "You may voluntarily provide store photographs, product photographs, videos, logos, banners, business descriptions, promotional content and other business-related content. We may use this information for seller onboarding, verification, catalogue creation, marketplace display, marketing or other purposes permitted by applicable law.",
        },
        { kind: "h3", text: "F. Payment and Banking Information" },
        {
          kind: "p",
          text: "Where seller settlements or other financial transactions are applicable, we may collect bank account holder name, bank account number, IFSC code, settlement information, tax-related information and payment-related information. Payment information may be processed through third-party payment gateways, banks or financial service providers.",
        },
        { kind: "h3", text: "G. Your Communications" },
        {
          kind: "p",
          text: "We may collect and retain information contained in communications between you and Owsho, including emails, telephone communications, WhatsApp or other business communications, seller support conversations, complaints, feedback, onboarding communications, service requests and other correspondence.",
        },
        {
          kind: "p",
          text: "Where permitted by law and reasonably necessary, certain communications may be recorded or retained for customer/seller support, quality assurance, training, security, dispute resolution or compliance purposes.",
        },
      ],
    },
    {
      id: "automatic-collection",
      number: "4",
      title: "Information We Collect Through Automatic Data Collection Technologies",
      blocks: [
        {
          kind: "p",
          text: "We may automatically collect certain information about the device or computer used to access our Services and about your use of the Services.",
        },
        {
          kind: "ul",
          intro: "This may include:",
          items: [
            "Usage information such as pages visited, features used, search activity, date/time of access, session information, website interaction and error logs.",
            "Device and technical information such as IP address, device type, operating system, browser type/version, network information, internet service provider, device identifiers where applicable, connection information and other technical information.",
            "Location information, where applicable and permitted, for relevant service areas, seller location, delivery operations, fraud prevention or improving Services. We do not intend to collect precise location information unless necessary for a particular feature or Service and permitted under applicable law.",
            "Cookies and similar technologies to recognise browsers/devices, maintain sessions, remember preferences, improve functionality, analyse traffic and usage, measure performance, detect security issues and improve Services.",
          ],
          outro:
            "You may be able to manage or disable cookies through browser settings. Certain functionality may be affected if cookies are disabled.",
        },
      ],
    },
    {
      id: "third-party-information",
      number: "5",
      title: "Information We May Receive From Third Parties",
      blocks: [
        {
          kind: "p",
          text: "Where permitted by applicable law, Owsho may receive information from verification providers, payment and banking partners, technology service providers, business partners, logistics or delivery partners, publicly available business information, government or regulatory sources, and other authorised third parties.",
        },
        {
          kind: "p",
          text: "We may combine information received from third parties with information collected directly from you where reasonably necessary for providing or improving Services, verification, security, fraud prevention or compliance.",
        },
      ],
    },
    {
      id: "how-we-use",
      number: "6",
      title: "How We Use the Information We Collect",
      blocks: [
        {
          kind: "ul",
          intro: "We may use information to:",
          items: [
            "Process seller registrations and applications;",
            "Verify seller identity and business information;",
            "Conduct KYC and verification;",
            "Create and manage seller accounts;",
            "Provide seller tools and Services;",
            "List and manage products;",
            "Maintain seller catalogues;",
            "Facilitate customer orders and support fulfilment;",
            "Process seller payments and settlements;",
            "Communicate with sellers and provide support;",
            "Improve our website, applications and Services;",
            "Conduct analytics and research;",
            "Detect and prevent fraud, abuse and unauthorised activity;",
            "Maintain security and platform integrity;",
            "Investigate disputes and complaints;",
            "Conduct internal audits and quality assurance;",
            "Enforce applicable agreements and terms;",
            "Protect the rights, property and safety of Owsho and its stakeholders;",
            "Comply with applicable laws, regulations and legal processes;",
            "Send important operational and service communications;",
            "Send promotional communications where permitted by applicable law; and",
            "Carry out other purposes reasonably necessary to provide Services or as otherwise permitted by applicable law.",
          ],
          outro:
            "We may also use aggregated, anonymised or de-identified information for analytics, research, reporting and business planning where permitted by applicable law.",
        },
      ],
    },
    {
      id: "marketing",
      number: "7",
      title: "Marketing and Promotional Communications",
      blocks: [
        {
          kind: "p",
          text: "Subject to applicable law and your preferences, Owsho may communicate with sellers regarding products, Services, offers, programmes, seller opportunities and other relevant information through email, SMS, telephone, WhatsApp, push notifications or other permitted channels.",
        },
        {
          kind: "p",
          text: "You may opt out of certain promotional communications through available unsubscribe or preference mechanisms. Essential account, security, transactional or legal communications may continue where necessary.",
        },
      ],
    },
    {
      id: "how-we-share",
      number: "8",
      title: "How We Share Information",
      blocks: [
        {
          kind: "p",
          text: "Owsho may share information where reasonably necessary to operate our business, provide Services, process transactions, protect our platform or comply with applicable law.",
        },
        { kind: "h3", text: "A. Service Providers" },
        {
          kind: "p",
          text: "We may share information with providers of hosting, cloud infrastructure, software and technology, data storage, communications, analytics, customer/seller support, KYC and verification, fraud prevention, cybersecurity, payment processing, logistics and delivery, and other operational services.",
        },
        { kind: "h3", text: "B. Sellers, Customers and Marketplace Participants" },
        {
          kind: "p",
          text: "Information necessary to facilitate marketplace operations may be shared with relevant sellers, customers, delivery personnel or other marketplace participants.",
        },
        { kind: "h3", text: "C. Payment and Financial Service Providers" },
        {
          kind: "p",
          text: "Relevant information may be shared with payment gateways, banks and financial institutions to process payments, settlements, refunds and other financial transactions.",
        },
        { kind: "h3", text: "D. Legal and Government Authorities" },
        {
          kind: "p",
          text: "We may disclose information where reasonably necessary to comply with applicable law, respond to lawful requests, comply with court orders/legal processes, prevent or investigate unlawful activities, or protect safety, rights or property.",
        },
        { kind: "h3", text: "E. Business Transfers" },
        {
          kind: "p",
          text: "If Owsho is involved in a merger, acquisition, restructuring, financing, sale of assets, corporate reorganisation or similar transaction, relevant information may be transferred or disclosed as reasonably necessary, subject to applicable law.",
        },
        { kind: "h3", text: "F. With Consent" },
        {
          kind: "p",
          text: "We may share information for additional purposes where you have provided required consent or where otherwise permitted by applicable law.",
        },
      ],
    },
    {
      id: "public-information",
      number: "9",
      title: "Public Seller and Product Information",
      blocks: [
        {
          kind: "p",
          text: "When you become an Owsho seller, certain information may be made available to customers through the marketplace, including store/business name, store location or service area, product names, descriptions, images, prices, availability, offers, business category and other catalogue information.",
        },
        {
          kind: "p",
          text: "Owsho does not intend to publicly display sensitive personal information such as private passwords, authentication credentials or banking credentials.",
        },
      ],
    },
    {
      id: "payment-information",
      number: "10",
      title: "Payment Information",
      blocks: [
        {
          kind: "p",
          text: "To use certain seller Services, including receiving settlements, Owsho may require financial information. Such information may be processed or shared with relevant payment processors, banks and financial service providers for legitimate transaction-related purposes.",
        },
        {
          kind: "note",
          tone: "warning",
          text: "Owsho will not ordinarily ask you to provide your OTP, UPI PIN, ATM PIN, card PIN or account password through seller onboarding or support communications. You should not disclose such information to anyone claiming to represent Owsho.",
        },
      ],
    },
    {
      id: "seller-applications",
      number: "11",
      title: "Seller Applications and Onboarding",
      blocks: [
        {
          kind: "p",
          text: "If you submit information to Owsho to become a seller, we may use it to evaluate your application, contact you regarding onboarding, verify your business, conduct KYC, review product categories, assess eligibility, complete contractual/regulatory requirements and maintain application records.",
        },
        {
          kind: "p",
          text: "We may retain application information for as long as reasonably necessary for administrative, legal, compliance, fraud-prevention or legitimate business purposes.",
        },
      ],
    },
    {
      id: "data-retention",
      number: "12",
      title: "Data Retention",
      blocks: [
        {
          kind: "p",
          text: "Owsho may retain personal and business information for as long as reasonably necessary to provide Services, maintain seller accounts, maintain transaction and business records, fulfil legal and regulatory obligations, resolve disputes, prevent fraud and abuse, maintain security, enforce agreements and meet applicable retention requirements.",
        },
        {
          kind: "p",
          text: "When information is no longer required, we may delete, anonymise or securely dispose of it, subject to applicable law and legitimate business requirements.",
        },
      ],
    },
    {
      id: "account-deletion",
      number: "13",
      title: "Account and Data Deletion",
      blocks: [
        {
          kind: "p",
          text: "Where applicable, sellers may request closure of their seller account or deletion of personal information by contacting Owsho through the designated privacy or grievance channel.",
        },
        {
          kind: "p",
          text: "Upon receiving a valid request, Owsho may take appropriate steps in accordance with applicable law.",
        },
        {
          kind: "p",
          text: "Certain information may continue to be retained where required or permitted by law, including information required for legal compliance, tax/accounting records, fraud prevention, dispute resolution, security, enforcement of agreements or other legitimate and legally permitted purposes.",
        },
        {
          kind: "p",
          text: "Deletion of an account may result in loss of access to the account, catalogue, transaction history or other associated Services, where applicable.",
        },
      ],
    },
    {
      id: "your-rights",
      number: "14",
      title: "Your Rights and Choices",
      blocks: [
        {
          kind: "p",
          text: "Subject to applicable law, you may have rights to request information regarding processing of your personal data, correction of inaccurate/incomplete information, deletion where applicable, withdrawal of consent where processing is based on consent, raising a grievance, and exercising other rights available under applicable data protection laws.",
        },
        {
          kind: "p",
          text: "You may contact us using the privacy/grievance contact details below. Certain requests may be limited where necessary to comply with legal obligations, protect another person, prevent fraud or abuse, resolve disputes or comply with retention requirements.",
        },
      ],
    },
    {
      id: "security",
      number: "15",
      title: "Security: How We Protect Your Information",
      blocks: [
        {
          kind: "p",
          text: "Owsho implements reasonable technical and organisational measures intended to protect information from unauthorised access, alteration, disclosure, misuse, loss or destruction.",
        },
        {
          kind: "p",
          text: "Depending on the nature of information and applicable risks, measures may include access controls, authentication mechanisms, role-based access, secure transmission technologies, security monitoring, restricted access to sensitive information, internal security procedures, data backup/recovery measures and other appropriate safeguards.",
        },
        {
          kind: "p",
          text: "No method of electronic transmission, storage or processing can be guaranteed to be completely secure.",
        },
        {
          kind: "p",
          text: "You should keep your login credentials confidential and should not share passwords, OTPs, PINs or other authentication information. If you believe your account or information has been compromised, notify Owsho promptly.",
        },
      ],
    },
    {
      id: "data-breach",
      number: "16",
      title: "Data Breach and Security Incidents",
      blocks: [
        {
          kind: "p",
          text: "Owsho maintains processes intended to identify, investigate and respond to security incidents involving personal information.",
        },
        {
          kind: "p",
          text: "Where a personal data breach occurs, Owsho will take appropriate measures in accordance with applicable law, which may include containment, investigation, mitigation and notifications to relevant authorities and affected individuals where required.",
        },
      ],
    },
    {
      id: "third-party-links",
      number: "17",
      title: "Third-Party Links and Services",
      blocks: [
        {
          kind: "p",
          text: "The Services may contain links or integrations to third-party websites, applications, payment services, communication platforms or other services. Your interaction with such services may result in processing by those third parties.",
        },
        {
          kind: "p",
          text: "Owsho does not control independent third-party privacy practices and is not responsible for their policies or practices. We encourage you to review applicable third-party privacy policies before providing personal information.",
        },
      ],
    },
    {
      id: "childrens-privacy",
      number: "18",
      title: "Children's Privacy",
      blocks: [
        {
          kind: "p",
          text: "Seller Services are intended for individuals who are legally capable of entering into business and contractual arrangements.",
        },
        {
          kind: "p",
          text: "Owsho does not knowingly seek personal information from children for seller registration. If we become aware of information being collected from a child in circumstances where such collection is not permitted, we will take reasonable steps in accordance with applicable law.",
        },
      ],
    },
    {
      id: "amendments",
      number: "19",
      title: "Policy Amendments",
      blocks: [
        {
          kind: "p",
          text: "Owsho may amend this Privacy Policy from time to time to reflect changes in applicable laws, Services, business practices, technology or data processing practices.",
        },
        {
          kind: "p",
          text: "The revised Privacy Policy will be published on this page with an updated “Last Updated” date. Where required by applicable law, we may provide additional notice regarding material changes.",
        },
      ],
    },
    {
      id: "contact-grievance",
      number: "20",
      title: "Contact Us / Grievance Redressal",
      blocks: [
        {
          kind: "p",
          text: "If you have any questions, concerns, requests or complaints regarding this Privacy Policy or the processing of your information, you may contact us using the details below.",
        },
        {
          kind: "dl",
          items: [
            { term: "Company", detail: site.legalName },
            { term: "Privacy / Grievance Email", detail: site.email },
            { term: "Registered Office", detail: registeredAddress },
            {
              term: "Grievance Contact / Data Protection Contact",
              detail: `${site.grievanceOfficer.name}, ${site.grievanceOfficer.title} — ${site.grievanceOfficer.phone}`,
            },
          ],
        },
        {
          kind: "p",
          text: "We will review and address privacy-related requests and grievances in accordance with applicable law and our internal procedures.",
        },
      ],
    },
    {
      id: "seller-privacy-notice",
      number: "21",
      title: "Important Seller Privacy Notice",
      blocks: [
        {
          kind: "p",
          text: "By submitting information through the Owsho seller registration or onboarding process, you acknowledge that the information provided may be collected and processed for seller onboarding, verification, account management, marketplace operations, communication, payment and settlement, security, fraud prevention, legal compliance and other purposes described in this Privacy Policy or otherwise permitted by applicable law.",
        },
        {
          kind: "p",
          text: "You should provide only information that is accurate and necessary for the relevant seller process and should not submit sensitive information through unofficial communication channels.",
        },
      ],
    },
  ],
};
