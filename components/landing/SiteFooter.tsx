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
        <div className="flex items-center gap-5 text-sm text-white/50">
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/#how-it-works" className="hover:text-white transition-colors">
            How it works
          </Link>
          <a
            href="/sitemap.xml"
            className="hover:text-white transition-colors"
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
