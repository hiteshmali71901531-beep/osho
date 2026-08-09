import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Step } from "@/lib/content/types";

/**
 * The numbered step rail. The connecting line is a single absolutely
 * positioned element behind the icons rather than per-item pseudo-elements,
 * so it never contributes to layout or shifts on reflow.
 */
export function StepsRail({
  eyebrow,
  title,
  description,
  steps,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  steps: Step[];
}) {
  return (
    <section className="bg-brand-50/60 py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <ol
          className={`relative mt-12 grid gap-10 sm:grid-cols-2 lg:gap-6 ${
            steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"
          }`}
        >
          {/* Inset by half a column so the line starts and ends under the
              first and last icon rather than the edge of the grid. */}
          <span
            aria-hidden="true"
            className={`absolute top-9 hidden border-t-2 border-dashed border-brand-200 lg:block ${
              steps.length === 5
                ? "right-[10%] left-[10%]"
                : "right-[12.5%] left-[12.5%]"
            }`}
          />
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative flex flex-col items-center gap-3 text-center"
            >
              <span
                className={`grid h-18 w-18 place-items-center rounded-full text-white shadow-card ${
                  step.tone === "accent" ? "bg-accent-500 text-ink-900" : "bg-brand-600"
                }`}
              >
                <step.Icon className="h-8 w-8" />
              </span>
              <span
                className={`text-2xl font-bold ${
                  step.tone === "accent" ? "text-accent-700" : "text-brand-600"
                }`}
              >
                {step.number}
              </span>
              <h3 className="text-base font-semibold text-brand-950">{step.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-ink-500">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
