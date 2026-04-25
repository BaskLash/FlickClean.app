"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { APP_STORE_URL } from "@/components/AppStoreBadge";

export function StartCleaningButton({
  location,
  href = APP_STORE_URL,
}: {
  location: string;
  href?: string;
}) {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <motion.a
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      data-track-id={`start_cleaning_${location}`}
      data-track-type="cta"
      data-track-hover="true"
      onClick={() =>
        trackEvent("start_cleaning_click", {
          location,
          destination: isExternal ? "app_store" : "anchor",
          element_id: `start_cleaning_${location}`,
          interaction_type: "click",
        })
      }
      className="group inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-7 rounded-full text-sm sm:text-base font-medium bg-white text-black hover:bg-white/90 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.45)] transition-colors will-change-transform"
    >
      Start Cleaning
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </motion.a>
  );
}

export { AppStoreBadge } from "@/components/AppStoreBadge";
