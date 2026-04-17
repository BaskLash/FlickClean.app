import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { Impact } from "@/components/landing/Impact";
import { Problems } from "@/components/landing/Problems";
import { Solution } from "@/components/landing/Solution";
import { FeatureVisual } from "@/components/landing/FeatureVisual";
import { Trust } from "@/components/landing/Trust";
import { WhyFlickClean } from "@/components/landing/WhyFlickClean";
import { CTA } from "@/components/landing/CTA";
import { BlogPreview } from "@/components/landing/BlogPreview";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { blogPosts } from "@/app/blog/posts";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Impact />
        <Problems />
        <Solution />
        <FeatureVisual />
        <Trust />
        <WhyFlickClean />
        <CTA />
        <BlogPreview posts={blogPosts.slice(0, 3)} />
      </main>
      <SiteFooter />
    </>
  );
}
