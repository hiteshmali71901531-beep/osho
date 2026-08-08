import { Container } from "@/components/ui/Container";
import { stats } from "@/lib/content/home";

export function StatsBand() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="rounded-card bg-brand-800 px-6 py-10 sm:px-10">
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ value, label, Icon }, index) => (
              <div
                key={label}
                className={`flex items-center gap-4 ${
                  index > 0 ? "lg:border-l lg:border-white/15 lg:pl-6" : ""
                }`}
              >
                <span
                  className={`grid h-13 w-13 shrink-0 place-items-center rounded-2xl ${
                    index % 2 === 0
                      ? "bg-accent-500 text-ink-900"
                      : "bg-white/15 text-white"
                  }`}
                >
                  <Icon className="h-6.5 w-6.5" />
                </span>
                <div>
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <span className="block text-3xl leading-none font-bold text-white">
                      {value}
                    </span>
                    <span className="mt-1.5 block text-sm text-brand-100">{label}</span>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
