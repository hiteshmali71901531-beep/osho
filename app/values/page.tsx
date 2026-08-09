import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { values, valuesEdition } from "@/lib/content/values";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/jsonld";

const description =
  "What we value at Owsho: ownership without excuses, clarity over comfort, honesty with yourself first, saying what you mean, and building for the long run.";

export const metadata: Metadata = {
  title: "What We Value",
  description,
  alternates: { canonical: "/values" },
  openGraph: {
    title: "What We Value | Owsho",
    description,
    url: "/values",
  },
};

export default function ValuesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema("WebPage", {
          path: "/values",
          name: "What We Value",
          description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "What We Value", path: "/values" },
        ])}
      />

      <PageHero
        eyebrow="Culture"
        title="What we value"
        description="Five things we hold each other to. Written for the people who work here, and published because anyone considering joining — or partnering with — Owsho deserves to read them first."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "What We Value", href: "/values" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          {/* A wide single column: these read as a letter to the team, not as
              cards in a grid. */}
          <ol className="mx-auto max-w-3xl">
            {values.map((value) => (
              <li
                key={value.number}
                className="border-b border-ink-100 py-10 first:pt-0 last:border-b-0"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-accent-700 uppercase">
                  Value {value.number}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-balance text-brand-950 sm:text-3xl">
                  {value.name}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-600 text-pretty">
                  {value.body}
                </p>
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-12 max-w-3xl border-t border-ink-200 pt-6 text-sm text-ink-500">
            {valuesEdition}
          </p>
        </Container>
      </section>

      <CtaBand
        title="Sound like the way you work?"
        description="We're always looking for people who care about what we're building — regardless of how much experience they carry on paper."
        primary={{ href: "/careers", label: "See how we hire" }}
        secondary={{ href: "/about", label: "About Owsho" }}
      />
    </>
  );
}
