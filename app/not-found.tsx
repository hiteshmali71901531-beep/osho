import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainNav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-brand-800 py-20 text-white sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-6xl font-bold text-accent-400">404</p>
          <h1 className="mt-4 text-3xl font-bold text-balance sm:text-4xl">
            We couldn&rsquo;t find that page
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-100 text-pretty">
            The link may be out of date, or the page may have moved. Here are the
            places most people are looking for.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/" variant="accent" size="lg">
              Back to home
            </ButtonLink>
            <ButtonLink href="/become-a-seller" variant="ghost-light" size="lg">
              Become a seller
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-brand-100 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
