import type { Metadata } from "next";
import { CategoryArt } from "@/components/illustrations/CategoryArt";
import { AppBand } from "@/components/sections/AppBand";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { categories } from "@/lib/content/categories";
import {
  breadcrumbSchema,
  itemListSchema,
  JsonLd,
  webPageSchema,
} from "@/lib/jsonld";

const description =
  "What you can find on Owsho: Grocery & Kitchen, Snacks & Drinks, Fashion & Lifestyle, Beauty & Personal Care, Household Items, Sports & Stationery and Pooja Store — all from local sellers.";

export const metadata: Metadata = {
  title: "Categories",
  description,
  alternates: { canonical: "/categories" },
  openGraph: {
    title: "Categories | Owsho",
    description,
    url: "/categories",
  },
};

export default function CategoriesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema("CollectionPage", {
          path: "/categories",
          name: "Categories",
          description,
        })}
      />
      <JsonLd
        data={itemListSchema(
          "Owsho shopping categories",
          categories.map((category) => ({
            name: category.name,
            description: category.blurb,
            path: `/categories#${category.slug}`,
          })),
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Categories", path: "/categories" },
        ])}
      />

      <PageHero
        eyebrow="Categories"
        title="What you can find on Owsho"
        description="Seven categories of everyday essentials, all stocked and sold by businesses in your own neighbourhood."
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

          <div className="grid gap-6 lg:grid-cols-2">
            {categories.map((category) => (
              <article
                key={category.slug}
                id={category.slug}
                className="flex scroll-mt-24 gap-6 rounded-card border border-ink-100 bg-white p-6 shadow-card transition-shadow hover:shadow-lift sm:p-8"
              >
                <span className="grid h-20 w-20 shrink-0 place-items-center rounded-card bg-brand-50 p-3.5">
                  <CategoryArt slug={category.slug} />
                </span>
                <div>
                  <h2 className="text-xl font-bold text-balance text-brand-950">
                    {category.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {category.blurb}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <AppBand />

      <CtaBand
        title="Sell in any of these categories"
        description="Eligible products from permitted categories can be listed, subject to applicable laws and Owsho marketplace policies. Free listing, no hidden charges."
      />
    </>
  );
}
