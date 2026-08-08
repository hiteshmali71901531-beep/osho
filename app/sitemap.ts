import type { MetadataRoute } from "next";
import { absoluteUrl, allRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return allRoutes.map((route) => ({
    url: absoluteUrl(route.href),
    lastModified,
    changeFrequency: route.href === "/" ? "weekly" : "monthly",
    priority: route.priority,
  }));
}
