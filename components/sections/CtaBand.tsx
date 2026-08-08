import { ArrowRightIcon } from "@/components/brand/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Decoration } from "@/components/sections/PageHero";

export function CtaBand({
  title = "Ready to put your shop online?",
  description = "Registration is free, verification takes about 48 hours, and you only pay when you sell. Start with your shop name and pin code.",
}: {
  title?: string;
  description?: string;
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
            <ButtonLink href="/become-a-seller" variant="accent" size="lg">
              Start selling
              <ArrowRightIcon className="h-5 w-5" />
            </ButtonLink>
            <ButtonLink href="/seller-requirements" variant="ghost-light" size="lg">
              Check requirements
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
