import { ChevronDownIcon } from "@/components/brand/Icons";
import type { Faq } from "@/lib/content/faqs";

/**
 * Native <details>/<summary> disclosure — full keyboard support, works with
 * JavaScript disabled, and ships zero bytes of behaviour. The chevron rotates
 * via the `open` attribute, so there is no state to hydrate.
 */
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-ink-100 overflow-hidden rounded-card border border-ink-100 bg-white shadow-card">
      {faqs.map((faq) => (
        <details key={faq.question} className="group">
          <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4.5 text-left text-base font-semibold text-brand-950 hover:bg-brand-50/60 sm:px-6">
            {faq.question}
            <ChevronDownIcon className="h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <div className="px-5 pb-5 text-sm leading-relaxed text-ink-600 sm:px-6">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
