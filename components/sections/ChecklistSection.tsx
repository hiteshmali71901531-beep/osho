import type { ReactNode } from "react";
import { CheckCircleIcon } from "@/components/brand/Icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * A requirements / documents checklist beside its explanatory copy. Used for
 * delivery-partner eligibility and the seller document list.
 */
export function ChecklistSection({
  id,
  eyebrow,
  title,
  description,
  items,
  footnote,
  aside,
  tinted = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: string[];
  footnote?: string;
  aside?: ReactNode;
  tinted?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 ${tinted ? "bg-brand-50/60" : ""}`}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
              align="left"
            />
            {aside ? <div className="mt-8">{aside}</div> : null}
          </div>

          <div className="rounded-card border border-ink-100 bg-white p-6 shadow-card sm:p-8">
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-600">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {footnote ? (
              <p className="mt-6 border-t border-ink-100 pt-5 text-xs leading-relaxed text-ink-500">
                {footnote}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
