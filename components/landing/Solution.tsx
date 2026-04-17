"use client";

import { motion } from "framer-motion";
import {
  Hand,
  Zap,
  Calendar,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const bullets = [
  {
    icon: Hand,
    title: "Swipe to clean",
    body: "One direction keeps. The other clears. That's the whole app.",
  },
  {
    icon: Zap,
    title: "Decide in a second",
    body: "Your brain already knows. Flick, move on. No menus, no checklists.",
  },
  {
    icon: Calendar,
    title: "Organized by month",
    body: "See only what matters right now. Finish one month. Feel the relief.",
  },
  {
    icon: ShieldCheck,
    title: "Safe by default",
    body: "Nothing is deleted instantly. Everything gets a final review.",
  },
  {
    icon: BarChart3,
    title: "Space, visibly reclaimed",
    body: "Watch your free storage grow as you go. Instant satisfaction.",
  },
];

export function Solution() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/70"
        >
          Meet FlickClean
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight"
        >
          One swipe at a time.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mx-auto mt-5 max-w-xl text-lg text-white/60"
        >
          Keep or delete. Done. Built so the whole thing feels effortless —
          on purpose.
        </motion.p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-3 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {bullets.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass rounded-3xl p-6 transition-colors hover:bg-white/[0.05]"
          >
            <div className="flex size-10 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white/80">
              <b.icon className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">
              {b.title}
            </h3>
            <p className="mt-1.5 text-white/60 leading-relaxed">{b.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
