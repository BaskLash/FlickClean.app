"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex size-8 items-center justify-center rounded-xl bg-white text-black">
            <Sparkles className="size-4" />
          </span>
          <span className="text-base font-semibold tracking-tight">
            FlickClean
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          <Link href="/#how-it-works" className="hover:text-white transition-colors">
            How it works
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <Link
            href="/#download"
            className="rounded-full bg-white text-black px-4 py-1.5 font-medium hover:bg-white/90 transition-colors"
          >
            Download
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
