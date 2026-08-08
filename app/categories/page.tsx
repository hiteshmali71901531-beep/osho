import type { Metadata } from "next";
import { CategoryArt } from "@/components/illustrations/CategoryArt";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Card";
import { CheckIcon } from "@/components/brand/Icons";
import { categories } from "@/lib/content/categories";
import { breadcrumbSchema, JsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Every category you can sell in on OWSHO — Fashion, Grocery, Home & Living, Beauty, Electronics and Sports — with subcategories and typical commission bands.",
  alternates: { canonical: "/categories" },
  openGraph: {
    title: "Categories | OWSHO",
    description:
      "Fashion, Grocery, Home & Living, Beauty, Electronics and Sports — subcategories and commission bands.",
    url: "/categories",
  },
};

export default function CategoriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Categories", path: "/categories" },
        ])}
      />

      <PageHero
        eyebrow="Categories"
        title="Six categories, hundreds of local shops"
        description="Whatever you stock, there is a place for it. Each category has its own commission band, listing rules and licence requirements — all listed here before you apply."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Categories", href: "/categories" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          {/* Not "Categories" — the footer already owns that landmark name. */}
          <nav aria-label="On this page" className="mb-12">
            <ul className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <a
                    href={`#${category.slug}`}
                    className="inline-flex h-10 items-center rounded-pill border border-ink-200 bg-white px-4 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-8">
            {categories.map((category) => (
              <article
                key={category.slug}
                id={category.slug}
                className="scroll-mt-24 rounded-card border border-ink-100 bg-white p-6 shadow-card sm:p-8"
              >
                <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-8">
                  <span className="grid h-24 w-24 place-items-center rounded-card bg-brand-50 p-4">
                    <CategoryArt slug={category.slug} />
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-bold text-brand-950">
                        {category.name}
                      </h2>
                      <Badge tone="neutral">{category.productCount}</Badge>
                      <Badge tone="accent">
                        Commission {category.commission}
                      </Badge>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-500">
                      {category.blurb}
                    </p>

                    <h3 className="mt-6 text-xs font-semibold tracking-[0.14em] text-ink-500 uppercase">
                      Subcategories
                    </h3>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {category.subcategories.map((sub) => (
                        <li
                          key={sub}
                          className="flex items-center gap-2 text-sm text-ink-600"
                        >
                          <CheckIcon className="h-4 w-4 shrink-0 text-brand-600" />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Do not see your category?"
        description="We add categories as sellers ask for them. Apply and tell us what you stock — the onboarding team will let you know where it fits."
      />
    </>
  );
}
