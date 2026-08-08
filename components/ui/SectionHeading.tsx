import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
  tone = "light",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
  tone?: "light" | "dark";
}) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold tracking-[0.18em] uppercase ${
            tone === "dark" ? "text-accent-300" : "text-accent-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={`text-3xl leading-tight font-bold text-balance sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-brand-950"
        }`}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={`text-base leading-relaxed text-pretty ${
            tone === "dark" ? "text-brand-100" : "text-ink-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
