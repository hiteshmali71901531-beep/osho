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
    body: "Thank you — your shop details are with the onboarding team. Someone will call you within one working day to complete verification. Keep your PAN, bank proof and shop proof handy for that call.",
  },
  subscribed: {
    heading: "You're on the list",
    body: "Thank you for subscribing. You'll hear from us about once a month with seller tips, new category launches and campaign dates — and you can unsubscribe from any email.",
  },
  invalid: {
    heading: "We couldn't read that",
    body: "Something in the form didn't look right — usually an email address or a pin code. Please go back and try again, or call seller support and we'll take the details over the phone.",
  },
} as const;

type Status = keyof typeof MESSAGES;

export default async function ThankYouPage({
  searchParams,
}: PageProps<"/thank-you">) {
  const params = await searchParams;
  const raw = Array.isArray(params.status) ? params.status[0] : params.status;
  const status: Status =
    raw === "applied" || raw === "subscribed" || raw === "invalid"
      ? raw
      : "subscribed";
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
              Read the FAQ
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
