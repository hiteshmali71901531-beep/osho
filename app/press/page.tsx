import type { Metadata } from "next";
import Image from "next/image";
import { LogoMark } from "@/components/brand/Logo";
import { FaqSection } from "@/components/sections/FaqSection";
import { RegisteredOffice } from "@/components/sections/ContactCards";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MailIcon, PinIcon } from "@/components/brand/Icons";
import {
  background,
  modelPillars,
  pressFaqs,
  pressPullQuote,
} from "@/lib/content/press";
import { breadcrumbSchema, faqSchema, JsonLd, webPageSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

const description =
  "Owsho Press Center — background on why Owsho was founded in 2024 in Deesa, Gujarat, how the hybrid local commerce model works, media contact and registered company details.";

export const metadata: Metadata = {
  title: "Press Center",
  description,
  alternates: { canonical: "/press" },
  openGraph: {
    title: "Press Center | Owsho",
    description,
    url: "/press",
  },
};

export default function PressPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema("WebPage", {
          path: "/press",
          name: "Press Center",
          description,
        })}
      />
      <JsonLd data={faqSchema(pressFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Press Center", path: "/press" },
        ])}
      />

      {/* Hero Banner */}
      <section className="relative w-full bg-[#0570be] pt-6 pb-2 sm:pt-9 sm:pb-4">
        <h1 className="sr-only">Press Center — Owsho</h1>
        <Image
          src="/osho_banner.jpeg"
          alt="Owsho Marketplace — Local store In Minutes App"
          width={1170}
          height={280}
          sizes="100vw"
          className="h-auto w-full"
          priority
        />
      </section>

      {/* Logo / brand assets */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-8 rounded-card border border-ink-100 bg-white p-6 shadow-card sm:grid-cols-[auto_1fr] sm:gap-10 sm:p-8">
            <span className="grid h-28 w-28 place-items-center rounded-card bg-brand-800">
              <LogoMark className="h-16 w-16" title="Owsho logo mark" />
            </span>
            <div>
              <h2 className="text-2xl font-bold text-brand-950">Logo</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600">
                {/* TODO(owsho): link a hosted brand kit here once the asset
                    files exist. Until then, requests go to the media address. */}
                For Owsho logo files and brand guidelines, write to our media
                contact and we will send the current brand kit.
              </p>
              <a
                href={`mailto:${site.email}?subject=Owsho%20brand%20kit%20request`}
                className="mt-5 inline-flex min-h-11 max-w-full items-center gap-2 rounded-pill border-2 border-brand-600 px-5 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
              >
                <MailIcon className="h-4.5 w-4.5 shrink-0" />
                <span className="break-all">Request the brand kit</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Background */}
      <section className="bg-brand-50/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Background"
            title="Why Owsho exists"
            description="The observation Owsho started from, how the model took shape, and where it is going."
          />

          <div className="mx-auto mt-12 max-w-3xl space-y-12">
            {background.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h3 className="text-xl font-bold text-brand-950 sm:text-2xl">
                  {section.title}
                </h3>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-ink-600 text-pretty"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.id === "our-model" ? (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {modelPillars.map((pillar) => (
                      <li
                        key={pillar}
                        className="inline-flex items-center rounded-pill bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
                      >
                        {pillar}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <blockquote className="rounded-card border-l-4 border-accent-500 bg-white p-6 text-lg leading-relaxed font-semibold text-brand-950 shadow-card text-pretty sm:p-8">
              {pressPullQuote}
            </blockquote>
          </div>
        </Container>
      </section>

      <FaqSection
        eyebrow="Press FAQ"
        title="Frequently asked questions"
        faqs={pressFaqs}
      />

      {/* Where we operate + media contact + company details */}
      <section className="bg-brand-50/60 py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="rounded-card border border-ink-100 bg-white p-6 shadow-card sm:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                  <PinIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-brand-950">
                  Where we operate
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Owsho currently serves Deesa, Banaskantha, Gujarat, and is
                  building out operations market by market.
                </p>
              </div>

              <div className="rounded-card border border-ink-100 bg-white p-6 shadow-card sm:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-50 text-accent-700">
                  <MailIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-brand-950">
                  Media contact
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  For media enquiries, and for all other enquiries, write to us
                  at{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="font-semibold break-all text-brand-700 hover:underline"
                  >
                    {site.email}
                  </a>
                  .
                </p>
              </div>
            </div>

            <RegisteredOffice />
          </div>
        </Container>
      </section>
    </>
  );
}
