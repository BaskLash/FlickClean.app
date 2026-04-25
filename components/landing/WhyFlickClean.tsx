"use client";

import { motion } from "framer-motion";
import { useSectionTracker } from "@/components/analytics/SectionTracker";

export function WhyFlickClean() {
  const ref = useSectionTracker<HTMLElement>("section_why_flickclean");
  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl font-semibold tracking-tight"
        >
          Why FlickClean?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-xl sm:text-2xl text-white/70 leading-relaxed"
        >
          Most gallery apps are slow and overwhelming.
          <br className="hidden sm:block" />
          <span className="text-white">
            FlickClean is built for speed, clarity, and control.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
