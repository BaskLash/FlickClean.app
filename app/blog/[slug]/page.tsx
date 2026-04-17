import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import {
  AppStoreBadge,
  StartCleaningButton,
} from "@/components/CTAButtons";
import { blogPosts, getPostBySlug } from "../posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(d: string): string {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-24">
        <article>
          <section className="relative overflow-hidden bg-ambient">
            <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <ArrowLeft className="size-4" />
                All posts
              </Link>
              <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-wider text-white/40">
                <span>{formatDate(post.date)}</span>
                <span className="size-1 rounded-full bg-white/20" />
                <span>{post.readingMinutes} min read</span>
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
                {post.title}
              </h1>
              <p className="mt-5 text-lg text-white/60">{post.description}</p>
            </div>
          </section>

          <section className="mx-auto max-w-2xl px-6 pt-4">
            <MarkdownRenderer content={post.content} />
          </section>

          <section className="mx-auto mt-16 max-w-2xl px-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
              <h2 className="text-2xl font-semibold tracking-tight">
                Ready for a lighter gallery?
              </h2>
              <p className="mt-2 text-white/60">
                Start cleaning in under a minute.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <StartCleaningButton location="blog_post" />
                <AppStoreBadge location="blog_post" />
              </div>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
