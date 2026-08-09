import {
  HeadsetIcon,
  MailIcon,
  NewspaperIcon,
  PhoneIcon,
  PinIcon,
  ScalesIcon,
} from "@/components/brand/Icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registeredAddress, site, telHref } from "@/lib/site";

type Channel = {
  title: string;
  purpose: string;
  Icon: typeof MailIcon;
  tone: "brand" | "accent";
  email: string;
  phone?: string;
  note?: string;
};

const channels: Channel[] = [
  {
    title: "General & seller support",
    purpose:
      "Questions about selling on Owsho, an order, your account or an existing application.",
    Icon: HeadsetIcon,
    tone: "brand",
    email: site.email,
    phone: site.phone,
  },
  {
    title: "Grievance redressal",
    purpose: `${site.grievanceOfficer.name}, ${site.grievanceOfficer.title}. For complaints not resolved through standard support.`,
    Icon: ScalesIcon,
    tone: "accent",
    email: site.grievanceOfficer.email,
    phone: site.grievanceOfficer.phone,
    note: `Acknowledged ${site.grievanceOfficer.acknowledgement}, and where reasonably possible resolved ${site.grievanceOfficer.resolution}.`,
  },
  {
    title: "Media enquiries",
    purpose:
      "Press, interviews and brand assets. For all other enquiries, use the general address above.",
    Icon: NewspaperIcon,
    tone: "brand",
    email: site.email,
  },
];

export function ContactCards() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Get in touch"
          title="How to reach Owsho"
          description="Three channels, one company. Use the one that matches your question so it reaches the right desk first."
        />

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {channels.map((channel) => (
            <li
              key={channel.title}
              className="flex h-full flex-col gap-4 rounded-card border border-ink-100 bg-white p-6 shadow-card"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl ${
                  channel.tone === "accent"
                    ? "bg-accent-50 text-accent-700"
                    : "bg-brand-50 text-brand-600"
                }`}
              >
                <channel.Icon className="h-6 w-6" />
              </span>
              <h3 className="text-base font-semibold text-brand-950">
                {channel.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-500">
                {channel.purpose}
              </p>

              <dl className="mt-auto space-y-2 pt-2 text-sm">
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Email</dt>
                  <MailIcon className="h-4 w-4 shrink-0 text-brand-600" />
                  <dd>
                    <a
                      href={`mailto:${channel.email}`}
                      className="break-all font-medium text-brand-700 hover:underline"
                    >
                      {channel.email}
                    </a>
                  </dd>
                </div>
                {channel.phone ? (
                  <div className="flex items-center gap-2">
                    <dt className="sr-only">Phone</dt>
                    <PhoneIcon className="h-4 w-4 shrink-0 text-brand-600" />
                    <dd>
                      <a
                        href={telHref(channel.phone)}
                        className="font-medium text-brand-700 hover:underline"
                      >
                        {channel.phone}
                      </a>
                    </dd>
                  </div>
                ) : null}
              </dl>

              {channel.note ? (
                <p className="text-xs leading-relaxed text-ink-500">{channel.note}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** The registered-office block. Also used on the press page. */
export function RegisteredOffice({ heading = "Company details" }: { heading?: string }) {
  return (
    <div className="rounded-card border border-ink-100 bg-brand-50/60 p-6 sm:p-8">
      <h2 className="text-xs font-semibold tracking-[0.18em] text-accent-700 uppercase">
        {heading}
      </h2>
      <p className="mt-4 text-lg font-bold text-brand-950">{site.legalName}</p>
      <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-[9rem_1fr] sm:gap-x-5">
        <dt className="font-semibold text-brand-950">Registered office</dt>
        <dd className="flex gap-2 text-ink-600">
          <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
          <span>{registeredAddress}</span>
        </dd>

        <dt className="font-semibold text-brand-950">CIN</dt>
        <dd className="font-mono text-ink-600">{site.cin}</dd>

        <dt className="font-semibold text-brand-950">Email</dt>
        <dd>
          <a
            href={`mailto:${site.email}`}
            className="break-all text-brand-700 hover:underline"
          >
            {site.email}
          </a>
        </dd>

        <dt className="font-semibold text-brand-950">Phone</dt>
        <dd>
          <a href={telHref(site.phone)} className="text-brand-700 hover:underline">
            {site.phone}
          </a>
        </dd>
      </dl>
    </div>
  );
}
