/** Building blocks for the legal documents rendered by `LegalPage`. */
export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; intro?: string; items: string[]; outro?: string }
  | { kind: "dl"; items: { term: string; detail: string }[] }
  /** A highlighted callout — used sparingly, for security warnings. */
  | { kind: "note"; tone: "warning" | "info"; text: string };

export type LegalSection = {
  id: string;
  number: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  version?: string;
  lastUpdated: string;
  /** Unnumbered paragraphs that open the document. */
  intro: string[];
  sections: LegalSection[];
};
