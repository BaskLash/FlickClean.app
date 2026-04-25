"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/flickclean-photo-cleaner/id6761820156";

type Size = "md" | "lg";

function AppleLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.543 13.298a4.474 4.474 0 0 1 2.131-3.758 4.577 4.577 0 0 0-3.607-1.951c-1.517-.159-2.989.908-3.762.908-.789 0-1.98-.892-3.26-.867a4.804 4.804 0 0 0-4.04 2.465c-1.739 3.013-.442 7.445 1.237 9.883.843 1.194 1.828 2.528 3.119 2.481 1.254-.05 1.723-.807 3.237-.807 1.51 0 1.95.807 3.267.777 1.35-.021 2.205-1.208 3.029-2.407a10 10 0 0 0 1.39-2.848 4.331 4.331 0 0 1-2.64-3.876zM15.11 6.027A4.428 4.428 0 0 0 16.121 3a4.53 4.53 0 0 0-2.923 1.527 4.197 4.197 0 0 0-1.04 2.925 3.744 3.744 0 0 0 2.952-1.425z" />
    </svg>
  );
}

export function AppStoreBadge({
  location,
  size = "md",
  className = "",
}: {
  location: string;
  size?: Size;
  className?: string;
}) {
  const sizing =
    size === "lg"
      ? "h-14 px-5 gap-3"
      : "h-12 px-4 gap-2.5";
  const appleSize = size === "lg" ? "size-8" : "size-7";
  const smallText = size === "lg" ? "text-[11px]" : "text-[10px]";
  const bigText = size === "lg" ? "text-[20px]" : "text-[17px]";

  return (
    <motion.a
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download FlickClean on the App Store"
      data-track-id={`app_store_badge_${location}`}
      data-track-type="cta"
      data-track-hover="true"
      onClick={() =>
        trackEvent("download_click", {
          location,
          destination: "app_store",
          element_id: `app_store_badge_${location}`,
          interaction_type: "click",
        })
      }
      className={`inline-flex items-center justify-center rounded-xl border border-white/15 bg-black text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.7)] transition-colors hover:bg-[#0a0a0a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${sizing} ${className}`}
    >
      <AppleLogo className={`${appleSize} shrink-0`} />
      <span className="flex flex-col items-start leading-none">
        <span
          className={`${smallText} font-medium tracking-wide text-white/90`}
        >
          Download on the
        </span>
        <span
          className={`${bigText} font-semibold tracking-tight leading-[1.05]`}
        >
          App&nbsp;Store
        </span>
      </span>
    </motion.a>
  );
}
