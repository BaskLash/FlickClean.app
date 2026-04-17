"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import type { BlogPost } from "@/app/blog/posts";

export function BlogPreview({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="blog" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
              From the blog
            </h2>
            <p className="mt-3 text-white/60">
              Quick reads on decluttering, storage, and calmer photo habits.
            </p>
          </motion.div>

          <Link
            href="/blog"
            onClick={() =>
              trackEvent("blog_click", { source: "home_header" })
            }
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
          >
            All posts
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                onClick={() =>
                  trackEvent("blog_click", {
                    source: "home_card",
                    slug: post.slug,
                  })
                }
                className="group block h-full rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/40">
                  <span>{post.readingMinutes} min read</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white group-hover:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-white/60 leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-white/70 group-hover:text-white transition-colors">
                  Read
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
