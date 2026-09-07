import { Container } from "@/components/ui/Container";
import type { LegalBlock, LegalDoc } from "@/lib/content/legal/types";

/**
 * Shared renderer for the three policy documents. One template means the
 * Privacy Policy, Seller Terms and Security page are typographically
 * identical, and section numbering stays in sync with the source documents —
 * other Owsho documents cross-reference these clause numbers.
 */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-14">
          <TableOfContents doc={doc} />

          <article className="min-w-0 max-w-3xl">
            {/* The page's <h1> lives in the PageHero above, so this header
                carries the document's own title as a caption rather than a
                second top-level heading. */}
            <header className="border-b border-ink-100 pb-8">
              <p className="text-lg font-bold text-brand-950">{doc.title}</p>
              <p className="mt-1.5 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm text-ink-500">
                {doc.version ? <span className="font-medium text-ink-700">Version {doc.version}</span> : null}
              </p>
              <p className="mt-1 text-xs text-ink-400">Last updated: {doc.lastUpdated}</p>
              <div className="mt-6 space-y-4">
                {doc.intro.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-ink-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </header>

            {doc.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 border-b border-ink-100 py-8 last:border-b-0"
              >
                <h2 className="text-xl font-bold text-brand-950">
                  <span className="text-brand-600">{section.number}.</span>{" "}
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.blocks.map((block, index) => (
                    <Block key={index} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
}

function TableOfContents({ doc }: { doc: LegalDoc }) {
  return (
    <nav
      aria-label="Page sections"
      className="lg:sticky lg:top-24 lg:self-start"
    >
      <ol className="max-h-[60vh] space-y-1.5 overflow-y-auto pr-2 text-sm">
        {doc.sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="flex gap-2 rounded-lg py-1 text-ink-500 hover:text-brand-700"
            >
              <span className="w-6 shrink-0 tabular-nums">{section.number}.</span>
              <span>{section.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "p":
      return <p className="text-sm leading-relaxed text-ink-600">{block.text}</p>;

    case "h3":
      return (
        <h3 className="pt-2 text-base font-semibold text-brand-950">{block.text}</h3>
      );

    case "ul":
      return (
        <div className="space-y-3">
          {block.intro ? (
            <p className="text-sm leading-relaxed text-ink-600">{block.intro}</p>
          ) : null}
          <ul className="space-y-2 text-sm leading-relaxed text-ink-600">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {block.outro ? (
            <p className="text-sm leading-relaxed text-ink-600">{block.outro}</p>
          ) : null}
        </div>
      );

    case "dl":
      return (
        <dl className="grid gap-3 rounded-card border border-ink-100 bg-brand-50/50 p-5 sm:grid-cols-[10rem_1fr] sm:gap-x-5">
          {block.items.map((item) => (
            <div key={item.term} className="contents">
              <dt className="text-sm font-semibold text-brand-950">{item.term}</dt>
              <dd className="text-sm leading-relaxed text-ink-600">{item.detail}</dd>
            </div>
          ))}
        </dl>
      );

    case "note":
      return (
        <p
          className={`rounded-card border-l-4 p-5 text-sm leading-relaxed ${
            block.tone === "warning"
              ? "border-accent-500 bg-accent-50 text-accent-900"
              : "border-brand-400 bg-brand-50 text-brand-900"
          }`}
        >
          {block.text}
        </p>
      );
  }
}
