"use client";

import { motion } from "framer-motion";

const statements = [
  "Too many photos.",
  "No space left.",
  "Too much clutter.",
  "Too much time wasted.",
];

export function Impact() {
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="space-y-6">
          {statements.map((text, i) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="text-3xl sm:text-5xl font-semibold tracking-tight text-white/90"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="mx-auto mb-6 h-px w-12 bg-white/20" />
          <p className="text-4xl sm:text-6xl font-semibold tracking-tight bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
            There&rsquo;s a faster way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
