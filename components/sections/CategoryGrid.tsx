import Link from "next/link";
import { CategoryArt } from "@/components/illustrations/CategoryArt";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/lib/content/categories";

export function CategoryGrid() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What you can find"
            title="Everything from your local stores"
            align="left"
          />
          <Link
            href="/categories"
            className="inline-flex h-11 shrink-0 items-center rounded-pill border-2 border-brand-600 px-5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
          >
            View all categories
          </Link>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={{ pathname: "/categories", hash: category.slug }}
                className="group flex h-full flex-col items-center gap-3 rounded-card border border-ink-100 bg-white p-5 text-center shadow-card transition-shadow hover:shadow-lift"
              >
                <span className="grid h-20 w-20 place-items-center rounded-full bg-brand-50 p-3.5 transition-colors group-hover:bg-brand-100">
                  <CategoryArt slug={category.slug} />
                </span>
                <span className="text-sm font-semibold text-balance text-brand-950">
                  {category.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
