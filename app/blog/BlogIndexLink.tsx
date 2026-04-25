"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export function BlogIndexLink({
  slug,
  className,
  children,
}: {
  slug: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      data-track-id={`blog_index_${slug}`}
      data-track-type="blog_card"
      data-track-hover="true"
      onClick={() =>
        trackEvent("blog_click", {
          source: "blog_index",
          slug,
          element_id: `blog_index_${slug}`,
          interaction_type: "click",
        })
      }
      className={className}
    >
      {children}
    </Link>
  );
}
