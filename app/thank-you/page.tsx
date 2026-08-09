import type { Metadata } from "next";
import { CheckCircleIcon } from "@/components/brand/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Thank you",
  // Post-submission confirmation: never a search result.
  robots: { index: false, follow: false },
};

const MESSAGES = {
  applied: {
    heading: "Application received",
    body: "Thank you — your details are with the Owsho team. We will review them and get in touch with you regarding the next steps, including any verification and documentation we need.",
  },
  invalid: {
    heading: "We couldn't read that",
    body: "Something in the form didn't look right — usually the mobile number or a missing required field. Please go back and try again, or write to us and we'll take the details over email.",
  },
} as const;

type Status = keyof typeof MESSAGES;

export default async function ThankYouPage({
  searchParams,
}: PageProps<"/thank-you">) {
  const params = await searchParams;
  const raw = Array.isArray(params.status) ? params.status[0] : params.status;
  const status: Status = raw === "invalid" ? "invalid" : "applied";
  const message = MESSAGES[status];
  const isError = status === "invalid";

  return (
    <section className="bg-brand-800 py-20 text-white sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span
            className={`mx-auto grid h-16 w-16 place-items-center rounded-full ${
              isError ? "bg-white/15 text-white" : "bg-accent-500 text-ink-900"
            }`}
          >
            <CheckCircleIcon className="h-8 w-8" />
          </span>
          <h1 className="mt-6 text-3xl font-bold text-balance sm:text-4xl">
            {message.heading}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-100 text-pretty">
            {message.body}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/" variant="accent" size="lg">
              Back to home
            </ButtonLink>
            <ButtonLink href="/faq" variant="ghost-light" size="lg">
              Read the seller FAQs
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
