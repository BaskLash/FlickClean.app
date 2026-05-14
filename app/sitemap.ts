import type { MetadataRoute } from "next";
import { blogPosts } from "@/app/blog/posts";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://flickclean.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // Only include posts explicitly marked as SEO-indexable.
  // Founder stories and update notes stay on the site but are
  // excluded from the sitemap and rendered with noindex.
  const postEntries: MetadataRoute.Sitemap = blogPosts
    .filter((post) => post.seoIndex === true)
    .map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "weekly",
      priority: 0.9,
    }));

  return [...staticEntries, ...postEntries];
}
