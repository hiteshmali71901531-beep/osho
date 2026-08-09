export type Value = { number: string; name: string; body: string };

/**
 * "What we value" — written in the second person and addressed directly to the
 * team, exactly as approved. This is a living document; the edition line below
 * is revised whenever the values are.
 */
export const values: Value[] = [
  {
    number: "01",
    name: "Ownership Without Excuses",
    body: "When you take on a problem, the outcome is yours — not just the task. You don't wait to be told what “done” looks like. If something's off, you fix it, you don't point elsewhere.",
  },
  {
    number: "02",
    name: "Clarity Over Comfort",
    body: "You're able to tell the difference between what's urgent and what actually matters, and you act on that difference — even when the urgent thing is louder. You care about the work without holding onto it so tightly that you can't let it go when priorities shift.",
  },
  {
    number: "03",
    name: "Honesty With Yourself First",
    body: "You're aware of your own blind spots and not afraid to say “I was wrong” or “I don't know yet.” When you hit a wall, you ask for help quickly instead of pretending you haven't.",
  },
  {
    number: "04",
    name: "Say What You Mean",
    body: "You're known for being straightforward — with good news and bad. You notice your own biases before they shape a decision, and you correct for them.",
  },
  {
    number: "05",
    name: "Build for the Long Run",
    body: "You don't optimise for what looks good this week at the cost of what's actually sustainable. Growth that doesn't last isn't growth — it's a debt someone pays later.",
  },
];

/** TODO(owsho): add the founder's name to the signature line when confirmed. */
export const valuesEdition = "First edition — August 2026";
