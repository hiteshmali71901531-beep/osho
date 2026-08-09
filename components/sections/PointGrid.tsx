import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Point } from "@/lib/content/types";

/**
 * The site's workhorse card grid: an icon chip, a title and a paragraph.
 * Nearly every "why us / what you get / what you'll do" block on the site is
 * this component with different data, which is what keeps the pages feeling
 * like one site rather than a set of one-offs.
 */
export function PointGrid({
  eyebrow,
  title,
  description,
  points,
  columns = 3,
  tinted = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  points: Point[];
  columns?: 2 | 3 | 4;
  /** Renders on the pale blue wash instead of white. */
  tinted?: boolean;
  align?: "center" | "left";
}) {
  const columnClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section
      className={`py-16 sm:py-20 ${tinted ? "bg-brand-50/60" : ""}`}
    >
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align={align}
        />

        <ul className={`mt-12 grid gap-6 ${columnClass}`}>
          {points.map(({ title: pointTitle, description: body, Icon, tone }) => (
            <li
              key={pointTitle}
              className="flex h-full flex-col gap-4 rounded-card border border-ink-100 bg-white p-6 shadow-card transition-shadow hover:shadow-lift"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl ${
                  tone === "accent"
                    ? "bg-accent-50 text-accent-700"
                    : "bg-brand-50 text-brand-600"
                }`}
              >
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-base font-semibold text-brand-950">
                {pointTitle}
              </h3>
              <p className="text-sm leading-relaxed text-ink-500">{body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
