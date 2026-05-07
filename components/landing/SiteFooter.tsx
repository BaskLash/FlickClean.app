import Link from "next/link";
import { Sparkles } from "lucide-react";
import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-white/70">
          <span className="flex size-7 items-center justify-center rounded-lg bg-white text-black">
             <Image 
                src="/icon512x512.jpg" 
                alt="Description"
                width={45} // equivalent to size-4
                height={45}
                className="object-contain"
              />
          </span>
          <span className="text-sm font-medium">FlickClean</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/50">
          <Link
            href="/blog"
            className="hover:text-white transition-colors"
            data-track-id="footer_blog"
            data-track-type="footer_link"
            data-track-click="click_footer_link"
            data-track-hover="true"
          >
            Blog
          </Link>
          <Link
            href="/#how-it-works"
            className="hover:text-white transition-colors"
            data-track-id="footer_how_it_works"
            data-track-type="footer_link"
            data-track-click="click_footer_link"
            data-track-hover="true"
          >
            How it works
          </Link>
          <Link
            href="/privacy"
            className="hover:text-white transition-colors"
            data-track-id="footer_privacy"
            data-track-type="footer_link"
            data-track-click="click_footer_link"
            data-track-hover="true"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-white transition-colors"
            data-track-id="footer_terms"
            data-track-type="footer_link"
            data-track-click="click_footer_link"
            data-track-hover="true"
          >
            Terms
          </Link>
          <a
            href="/sitemap.xml"
            className="hover:text-white transition-colors"
            data-track-id="footer_sitemap"
            data-track-type="footer_link"
            data-track-click="click_footer_link"
            data-track-hover="true"
          >
            Sitemap
          </a>
        </div>
        <div className="text-xs text-white/30">
          © {new Date().getFullYear()} FlickClean
        </div>
      </div>
    </footer>
  );
}
