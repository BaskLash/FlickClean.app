import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { BlogIndexLink } from "./BlogIndexLink";
import { blogPosts } from "./posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Short, practical reads on cleaning up your phone gallery and living with less digital clutter.",
  alternates: { canonical: "/blog" },
};

function formatDate(d: string): string {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const posts = [...blogPosts].sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-24">
        <section className="relative overflow-hidden bg-ambient">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back home
            </Link>
            <h1 className="mt-8 text-4xl sm:text-6xl font-semibold tracking-tight">
              Calmer habits, clearer galleries.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/60">
              Short reads on decluttering, storage, and the tiny habits that
              keep your phone feeling light.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6">
          <ul className="divide-y divide-white/5">
            {posts.map((post) => (
              <li key={post.slug} className="py-8">
                <BlogIndexLink
                  slug={post.slug}
                  className="group flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-white/40">
                      <span>{formatDate(post.date)}</span>
                      <span className="size-1 rounded-full bg-white/20" />
                      <span>{post.readingMinutes} min read</span>
                    </div>
                    <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                      {post.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-white/60 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 self-start whitespace-nowrap text-sm text-white/60 group-hover:text-white transition-colors">
                    Read
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </BlogIndexLink>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
