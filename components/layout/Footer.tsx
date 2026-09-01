import Link from "next/link";
import type { Route } from "next";
import { Logo } from "@/components/brand/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/brand/Icons";
import { Container } from "@/components/ui/Container";
import { registeredAddress, site, telHref } from "@/lib/site";

type LinkGroup = { heading: string; links: { href: Route; label: string }[] };

/** Mirrors the approved Owsho footer structure. */
const groups: LinkGroup[] = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/press", label: "Press" },
      { href: "/values", label: "Values" },
    ],
  },
  {
    heading: "For consumers",
    links: [
      { href: "/faq", label: "Seller FAQs" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/security", label: "Security" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "For partners",
    links: [
      { href: "/express", label: "Owsho Express" },
      { href: "/become-a-seller", label: "Sell on Owsho" },
      { href: "/warehouse-partner", label: "Warehouse Partner" },
      { href: "/delivery-partner", label: "Delivery Partner" },
    ],
  },
];

/**
 * Two Instagram accounts: the customer-facing brand and the seller programme.
 * Both are labelled, because identical icons pointing at different audiences
 * are indistinguishable to anyone using a screen reader or a tooltip.
 */
const socials = [
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  {
    href: site.social.instagramSellers,
    label: "Instagram for sellers",
    Icon: InstagramIcon,
  },
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-900 text-brand-100">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <Logo tone="dark" />
            <p className="mt-4 text-sm leading-relaxed">
              Bringing local businesses online — the trust of a local seller,
              with the convenience of delivery in minutes.
            </p>

            <ul className="mt-5 space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 shrink-0 text-accent-400" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all hover:text-accent-300"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 shrink-0 text-accent-400" />
                <a href={telHref(site.phone)} className="hover:text-accent-300">
                  {site.phone}
                </a>
              </li>
            </ul>

            <h2 className="mt-6 text-sm font-semibold tracking-wide text-white">
              Follow us
            </h2>
            <ul className="mt-3 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    aria-label={label}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500 hover:text-ink-900"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {groups.map((group) => (
            <nav
              key={group.heading}
              aria-labelledby={`footer-${group.heading.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <h2
                id={`footer-${group.heading.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-sm font-semibold tracking-wide text-white"
              >
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-accent-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-white/10 py-8 text-xs leading-relaxed">
          <p className="text-brand-200">
            By continuing past this page you agree to our{" "}
            <Link href="/terms" className="underline hover:text-accent-300">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-accent-300">
              Privacy policy
            </Link>
            . All trademarks are properties of their respective owners.
          </p>

          <dl className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-[auto_1fr]">
            <dt className="font-semibold text-white">Registered office</dt>
            <dd className="text-brand-200">{registeredAddress}</dd>
            <dt className="font-semibold text-white">CIN</dt>
            <dd className="text-brand-200">{site.cin}</dd>
          </dl>

          <p className="mt-5 text-brand-200">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
