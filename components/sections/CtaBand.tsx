import type { Route } from "next";
import { ArrowRightIcon } from "@/components/brand/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Decoration } from "@/components/sections/PageHero";

type Action = { href: Route; label: string };

/** The blue closing band. Defaults to the seller call to action. */
export function CtaBand({
  title = "Your shop. Online.",
  description = "Give your customers the convenience of shopping from you, wherever they are. Fill in your details and our team will get in touch with you about selling on Owsho.",
  primary = { href: "/become-a-seller", label: "Sell on Owsho" },
  secondary = { href: "/faq", label: "Read the seller FAQs" },
}: {
  title?: string;
  description?: string;
  primary?: Action;
  secondary?: Action | null;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-800 py-16 text-white sm:py-20">
      <Decoration />
      <Container>
        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl leading-tight font-bold text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-100 text-pretty">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <ButtonLink href={primary.href} variant="accent" size="lg">
              {primary.label}
              <ArrowRightIcon className="h-5 w-5" />
            </ButtonLink>
            {secondary ? (
              <ButtonLink href={secondary.href} variant="ghost-light" size="lg">
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
