import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { estates } from "@/data/estates";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/estates", "/services", "/buy-land", "/academy", "/about", "/insights", "/careers", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.8 })),
    ...estates.map((e) => ({ url: `${site.url}/estates/${e.slug}`, changeFrequency: "weekly" as const, priority: e.status === "sold-out" ? 0.4 : 0.9 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...articles.map((a) => ({ url: `${site.url}/insights/${a.slug}`, lastModified: a.date, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
