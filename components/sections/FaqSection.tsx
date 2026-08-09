import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Faq } from "@/lib/content/faqs";

/** A single titled block of FAQs — used on Express and both partner pages. */
export function FaqSection({
  id,
  eyebrow,
  title,
  description,
  faqs,
  tinted = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  faqs: Faq[];
  tinted?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 ${tinted ? "bg-brand-50/60" : ""}`}
    >
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mx-auto mt-10 max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </Container>
    </section>
  );
}
