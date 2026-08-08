import Link from "next/link";
import type { Route } from "next";
import { Logo } from "@/components/brand/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/components/brand/Icons";
import { Container } from "@/components/ui/Container";
import { categories } from "@/lib/content/categories";
import { site } from "@/lib/site";

const quickLinks: { href: Route; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/become-a-seller", label: "Become a Seller" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/seller-benefits", label: "Seller Benefits" },
  { href: "/seller-requirements", label: "Seller Requirements" },
];

const socials = [
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.social.twitter, label: "X (Twitter)", Icon: TwitterIcon },
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
              Empowering local businesses and enriching communities through
              technology and trust.
            </p>
            <ul className="mt-5 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
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

          <nav aria-labelledby="footer-quick">
            <h2
              id="footer-quick"
              className="text-sm font-semibold tracking-wide text-white"
            >
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-categories">
            <h2
              id="footer-categories"
              className="text-sm font-semibold tracking-wide text-white"
            >
              Categories
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {categories.slice(0, 6).map((category) => (
                <li key={category.slug}>
                  <Link
                    href={{ pathname: "/categories", hash: category.slug }}
                    className="hover:text-accent-300"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white">
              Help &amp; Support
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/faq" className="hover:text-accent-300">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-accent-300">
                  Shipping &amp; Delivery
                </Link>
              </li>
              <li>
                <Link href="/seller-requirements" className="hover:text-accent-300">
                  Returns &amp; Refunds
                </Link>
              </li>
              <li className="flex items-center gap-2 pt-1">
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
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="hover:text-accent-300"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Vocal for Local — built for India&rsquo;s neighbourhood shops.</p>
        </div>
      </Container>
    </footer>
  );
}
