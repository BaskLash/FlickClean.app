"use client";

import { motion } from "framer-motion";
import {
  AppStoreBadge,
  StartCleaningButton,
} from "@/components/CTAButtons";
import { useSectionTracker } from "@/components/analytics/SectionTracker";

export function CTA() {
  const ref = useSectionTracker<HTMLElement>("section_cta");
  return (
    <section
      ref={ref}
      id="download"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 p-10 sm:p-16 text-center"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(124,156,255,0.25),transparent_60%),radial-gradient(600px_400px_at_50%_100%,rgba(255,120,180,0.15),transparent_60%)]"
          />
          <div aria-hidden className="absolute inset-0 bg-black/40" />

          <div className="relative">
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight">
              Your gallery,
              <br className="sm:hidden" />
              <span className="bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
                {" "}lighter in minutes.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-white/70">
              One swipe session is all it takes to feel the difference.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <StartCleaningButton location="cta_section" />
              <AppStoreBadge location="cta_section" size="lg" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
