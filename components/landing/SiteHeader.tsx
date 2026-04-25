"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { APP_STORE_URL } from "@/components/AppStoreBadge";
import { trackEvent } from "@/lib/analytics";
import Image from 'next/image'

function NavAppleLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-3.5"
    >
      <path d="M17.543 13.298a4.474 4.474 0 0 1 2.131-3.758 4.577 4.577 0 0 0-3.607-1.951c-1.517-.159-2.989.908-3.762.908-.789 0-1.98-.892-3.26-.867a4.804 4.804 0 0 0-4.04 2.465c-1.739 3.013-.442 7.445 1.237 9.883.843 1.194 1.828 2.528 3.119 2.481 1.254-.05 1.723-.807 3.237-.807 1.51 0 1.95.807 3.267.777 1.35-.021 2.205-1.208 3.029-2.407a10 10 0 0 0 1.39-2.848 4.331 4.331 0 0 1-2.64-3.876zM15.11 6.027A4.428 4.428 0 0 0 16.121 3a4.53 4.53 0 0 0-2.923 1.527 4.197 4.197 0 0 0-1.04 2.925 3.744 3.744 0 0 0 2.952-1.425z" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          data-track-id="nav_home_logo"
          data-track-type="nav"
          data-track-click="click_nav"
          data-track-hover="true"
        >
          <span className="flex size-8 items-center justify-center rounded-xl bg-white text-black">
            <Image 
    src="/icon512x512.jpg" 
    alt="Description"
    width={45} // equivalent to size-4
    height={45}
    className="object-contain"
  />
          </span>
          <span className="text-base font-semibold tracking-tight">
            FlickClean
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          <Link
            href="/#how-it-works"
            className="hover:text-white transition-colors"
            data-track-id="nav_how_it_works"
            data-track-type="nav"
            data-track-click="click_nav"
            data-track-hover="true"
          >
            How it works
          </Link>
          <Link
            href="/blog"
            className="hover:text-white transition-colors"
            data-track-id="nav_blog"
            data-track-type="nav"
            data-track-click="click_nav"
            data-track-hover="true"
          >
            Blog
          </Link>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("download_click", {
                location: "nav",
                destination: "app_store",
              })
            }
            aria-label="Get FlickClean on the App Store"
            data-track-id="nav_app_store"
            data-track-type="cta"
            data-track-hover="true"
            className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-3.5 py-1.5 font-medium hover:bg-white/90 transition-colors"
          >
            <NavAppleLogo />
            App Store
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
