import { registeredAddress, site } from "@/lib/site";
import type { LegalDoc } from "@/lib/content/legal/types";

/** Owsho Seller Security, Version 2.0 — reproduced from the approved document. */
export const securityDoc: LegalDoc = {
  title: "Owsho Seller Security",
  version: "2.0",
  lastUpdated: "August 2026",
  intro: [
    "Owsho understands that sellers trust us with important business, identity, banking and operational information. Protecting this information is an important part of our marketplace operations.",
  ],
  sections: [
    {
      id: "seller-data-protection",
      number: "1",
      title: "Seller Data Protection",
      blocks: [
        {
          kind: "p",
          text: "Owsho applies reasonable technical and organisational safeguards designed to protect seller information against unauthorised access, misuse, alteration, disclosure, loss or destruction.",
        },
        {
          kind: "p",
          text: "Seller information may include business details, KYC information, contact details, catalogue information and settlement-related information.",
        },
      ],
    },
    {
      id: "kyc-identity",
      number: "2",
      title: "KYC and Identity Information",
      blocks: [
        {
          kind: "ul",
          intro: "KYC and verification information is handled for legitimate purposes such as:",
          items: [
            "Seller onboarding;",
            "Business verification;",
            "Fraud prevention;",
            "Account security;",
            "Payment/settlement requirements; and",
            "Legal and regulatory compliance.",
          ],
          outro:
            "Access to such information is intended to be limited to authorised personnel and service providers where reasonably necessary.",
        },
      ],
    },
    {
      id: "banking-settlement",
      number: "3",
      title: "Banking and Settlement Security",
      blocks: [
        { kind: "p", text: "Seller bank information may be required for settlements." },
        {
          kind: "p",
          text: "Owsho may work with banks, payment processors and authorised financial service providers to facilitate seller payments. Payment processors engaged by Owsho are expected to be compliant with applicable Payment Card Industry Data Security Standard (PCI-DSS) requirements, and payment system data is handled in accordance with applicable Reserve Bank of India data storage/localisation requirements.",
        },
        {
          kind: "ul",
          intro: "Sellers should never share:",
          items: [
            "OTP;",
            "UPI PIN;",
            "ATM PIN;",
            "Card PIN;",
            "Internet banking password; or",
            "Other confidential authentication credentials",
          ],
          outro: "with anyone claiming to represent Owsho.",
        },
      ],
    },
    {
      id: "account-security",
      number: "4",
      title: "Seller Account Security",
      blocks: [
        {
          kind: "p",
          text: "Sellers are responsible for protecting their account credentials.",
        },
        {
          kind: "ul",
          intro: "We recommend that sellers:",
          items: [
            "Use strong, unique passwords;",
            "Enable two-factor or multi-factor authentication where available on their account and associated email/mobile number;",
            "Do not share login credentials;",
            "Use authorised devices;",
            "Keep devices and apps updated;",
            "Log out from shared devices; and",
            "Report suspicious activity promptly.",
          ],
        },
      ],
    },
    {
      id: "fraud-prevention",
      number: "5",
      title: "Fraud Prevention",
      blocks: [
        {
          kind: "ul",
          intro:
            "Owsho may use automated and manual measures to detect suspicious activity, including:",
          items: [
            "Fake seller accounts;",
            "Fake orders;",
            "Payment fraud;",
            "Account takeover attempts;",
            "Catalogue manipulation;",
            "Promotional abuse;",
            "Unusual transaction patterns; and",
            "Other marketplace abuse.",
          ],
          outro:
            "Accounts or transactions may be reviewed or restricted where reasonably necessary for security.",
        },
      ],
    },
    {
      id: "customer-data-access",
      number: "6",
      title: "Customer Data Access",
      blocks: [
        {
          kind: "p",
          text: "Where sellers receive customer information for order fulfilment, such information must be used only for legitimate marketplace purposes.",
        },
        {
          kind: "p",
          text: "Sellers must not sell, misuse, copy, distribute or use customer information for unrelated marketing without appropriate legal basis or permission.",
        },
      ],
    },
    {
      id: "secure-technology",
      number: "7",
      title: "Secure Technology",
      blocks: [
        {
          kind: "ul",
          intro:
            "Owsho may use appropriate security technologies and controls such as:",
          items: [
            "Encryption of data in transit (e.g. TLS) and, where appropriate, encryption of sensitive data at rest;",
            "Secure communication protocols;",
            "Access controls;",
            "Authentication mechanisms;",
            "Role-based permissions;",
            "Security monitoring;",
            "Data backup and recovery;",
            "Infrastructure security; and",
            "Other reasonable safeguards.",
          ],
        },
      ],
    },
    {
      id: "third-party-providers",
      number: "8",
      title: "Third-Party Service Providers",
      blocks: [
        {
          kind: "p",
          text: "Owsho may use trusted third-party providers for hosting, cloud infrastructure, payments, KYC, communications, analytics, security and other business functions.",
        },
        {
          kind: "p",
          text: "Such providers may process information on Owsho's behalf and may maintain their own security and compliance measures.",
        },
      ],
    },
    {
      id: "retention-disposal",
      number: "9",
      title: "Data Retention and Disposal",
      blocks: [
        {
          kind: "p",
          text: "Owsho retains seller and transaction information only for as long as reasonably necessary to provide the Seller Services, meet contractual obligations, and comply with applicable legal, tax, accounting and regulatory requirements.",
        },
        {
          kind: "p",
          text: "Where information is no longer required for these purposes, Owsho will take reasonable steps to securely delete, destroy or anonymise it, in accordance with its internal data retention and disposal practices and applicable law, including the Digital Personal Data Protection Act, 2023.",
        },
      ],
    },
    {
      id: "incidents-reporting",
      number: "10",
      title: "Security Incidents and Regulatory Reporting",
      blocks: [
        {
          kind: "p",
          text: "If Owsho identifies a security incident affecting seller information, we will take reasonable steps to investigate, contain and mitigate the incident in accordance with applicable law.",
        },
        {
          kind: "p",
          text: "Where a security incident qualifies as a reportable cybersecurity incident under the Information Technology Act, 2000 and the CERT-In Directions of 2022, Owsho will report such incident to the Indian Computer Emergency Response Team (CERT-In) within the timelines prescribed by law (currently within six (6) hours of noticing or being notified of the incident).",
        },
        {
          kind: "p",
          text: "Where a security incident involves a personal data breach under the Digital Personal Data Protection Act, 2023, Owsho will notify the Data Protection Board of India and affected individuals in the manner and within the timelines required under applicable law.",
        },
      ],
    },
    {
      id: "notification-to-sellers",
      number: "11",
      title: "Notification to Affected Sellers",
      blocks: [
        {
          kind: "p",
          text: "Where Owsho reasonably determines that a security incident has resulted in unauthorised access to, or disclosure of, a Seller's confidential business, KYC, banking or account information, Owsho will make reasonable efforts to notify the affected Seller without undue delay, using the seller's registered email address, mobile number or the seller platform/dashboard, describing the nature of the incident and the steps being taken, to the extent permitted by an ongoing investigation or applicable law.",
        },
      ],
    },
    {
      id: "responsible-disclosure",
      number: "12",
      title: "Vulnerability and Responsible Disclosure",
      blocks: [
        {
          kind: "p",
          text: `If a security researcher or any other person identifies a potential security vulnerability affecting the Owsho platform, they are encouraged to report it responsibly to ${site.email} with sufficient detail to reproduce the issue, and to refrain from publicly disclosing the vulnerability or exploiting it until Owsho has had a reasonable opportunity to investigate and remediate it.`,
        },
      ],
    },
    {
      id: "seller-responsibility",
      number: "13",
      title: "Seller Responsibility",
      blocks: [
        { kind: "p", text: "Security is a shared responsibility." },
        {
          kind: "ul",
          intro: "Sellers should immediately notify Owsho if they suspect:",
          items: [
            "Account compromise;",
            "Unauthorised login;",
            "Suspicious payment activity;",
            "Unauthorised access to customer information;",
            "Phishing attempts; or",
            "Other security concerns.",
          ],
        },
      ],
    },
    {
      id: "fraudulent-communications",
      number: "14",
      title: "Beware of Fraudulent Communications",
      blocks: [
        {
          kind: "note",
          tone: "warning",
          text: "Owsho will not ordinarily ask sellers for confidential authentication credentials such as OTPs, UPI PINs, card PINs or passwords.",
        },
        {
          kind: "p",
          text: "Be cautious of anyone asking for money or confidential information while claiming to be an Owsho employee or representative.",
        },
        {
          kind: "p",
          text: "Use official Owsho communication channels to verify suspicious requests.",
        },
      ],
    },
    {
      id: "report-a-concern",
      number: "15",
      title: "Report a Security Concern",
      blocks: [
        {
          kind: "dl",
          items: [
            { term: "Email", detail: site.email },
            { term: "Company", detail: site.legalName },
            { term: "Registered Office", detail: registeredAddress },
          ],
        },
        {
          kind: "note",
          tone: "warning",
          text: "Do not send passwords, OTPs, UPI PINs, card PINs or other confidential authentication information by email.",
        },
      ],
    },
    {
      id: "security-disclaimer",
      number: "16",
      title: "Security Disclaimer",
      blocks: [
        {
          kind: "p",
          text: "Owsho continuously works to improve the security of its platform. However, no digital platform or electronic transmission system can be guaranteed to be completely secure.",
        },
        {
          kind: "p",
          text: "Sellers should also take reasonable precautions to protect their own devices, accounts and business information.",
        },
      ],
    },
  ],
};
