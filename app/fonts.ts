import { Poppins } from "next/font/google";

/**
 * Single source of truth for typography.
 *
 * The OWSHO brand guidelines specify Konnect (display) + Poppins (body).
 * Konnect is not freely licensed, so the whole site currently runs on Poppins.
 * To add Konnect later: drop the .woff2 files into `app/fonts/`, add a
 * `localFont({ ... variable: "--font-konnect" })` call here, expose it from
 * `brandFontVariables`, and point `--font-display` at it in globals.css.
 * No other file needs to change.
 */
export const poppins = Poppins({
  subsets: ["latin"],
  // Only the weights the design actually uses — every extra weight is a
  // separate woff2 subset shipped to the browser.
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
  // Generates a metric-matched local fallback so the swap causes no reflow.
  adjustFontFallback: true,
});

export const brandFontVariables = poppins.variable;
