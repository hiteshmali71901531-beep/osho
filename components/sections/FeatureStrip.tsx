import { Container } from "@/components/ui/Container";
import { features } from "@/lib/content/home";

/**
 * The four-up card that overlaps the bottom of the hero in the design comp.
 * `-mt-*` pulls it up over the blue band; the negative offset is applied only
 * from `sm` upward so it stacks cleanly on phones.
 */
export function FeatureStrip() {
  return (
    <Container>
      <div className="relative z-10 -mt-10 rounded-card border border-ink-100 bg-white shadow-lift sm:-mt-14">
        <ul className="grid divide-ink-100 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {features.map(({ title, description, Icon, tone }, index) => (
            <li
              key={title}
              className={`flex flex-col items-center gap-3 px-6 py-8 text-center ${
                index > 0 ? "border-t border-ink-100 sm:border-t-0" : ""
              } ${index === 2 ? "sm:border-t sm:border-ink-100 lg:border-t-0" : ""} ${
                index === 3 ? "sm:border-t sm:border-ink-100 lg:border-t-0" : ""
              }`}
            >
              <span
                className={`grid h-13 w-13 place-items-center rounded-full ${
                  tone === "accent"
                    ? "bg-accent-50 text-accent-700"
                    : "bg-brand-50 text-brand-600"
                }`}
              >
                <Icon className="h-6.5 w-6.5" />
              </span>
              <h2 className="text-base font-semibold text-brand-950">{title}</h2>
              <p className="text-sm leading-relaxed text-ink-500">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
