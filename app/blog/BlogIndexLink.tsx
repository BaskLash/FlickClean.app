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
      onClick={() =>
        trackEvent("blog_click", { source: "blog_index", slug })
      }
      className={className}
    >
      {children}
    </Link>
  );
}
