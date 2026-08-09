import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  typedRoutes: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    // Inlines the Tailwind atomic CSS into <head> instead of emitting a
    // render-blocking <link>. Biggest single FCP/LCP win for this site.
    inlineCss: true,
  },

  /**
   * The pre-launch site carried three marketing routes whose content could not
   * be sourced from any approved Owsho document. They were removed; these
   * redirects send anything already linking to them to the real equivalent.
   */
  async redirects() {
    return [
      { source: "/seller-benefits", destination: "/become-a-seller", permanent: true },
      { source: "/seller-requirements", destination: "/faq", permanent: true },
      { source: "/how-it-works", destination: "/express", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
