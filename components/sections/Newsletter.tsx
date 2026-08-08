import { subscribeToNewsletter } from "@/app/actions";
import { MailIcon } from "@/components/brand/Icons";
import { Container } from "@/components/ui/Container";

export function Newsletter() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="flex flex-col items-center gap-8 rounded-card bg-brand-50 px-6 py-10 sm:px-10 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-5">
            <span className="hidden h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white sm:grid">
              <MailIcon className="h-8 w-8" />
            </span>
            <div>
              <h2 className="text-xl font-bold text-brand-950 sm:text-2xl">
                Stay updated with{" "}
                <span className="text-brand-600">OWSHO</span>{" "}
                <span className="text-accent-700">Marketplace</span>
              </h2>
              <p className="mt-1.5 text-sm text-ink-600">
                Seller tips, new category launches and campaign dates — about
                once a month, never more.
              </p>
            </div>
          </div>

          <form
            action={subscribeToNewsletter}
            className="flex w-full max-w-md gap-2"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Enter your email"
              className="h-12 min-w-0 flex-1 rounded-pill border border-ink-200 bg-white px-5 text-sm text-ink-800 placeholder:text-ink-500"
            />
            <button
              type="submit"
              className="h-12 shrink-0 rounded-pill bg-brand-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
