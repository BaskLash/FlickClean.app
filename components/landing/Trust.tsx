"use client";

import { motion } from "framer-motion";
import { EyeOff, Clock, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Nothing is deleted instantly",
    body: "Everything you remove waits in a safety zone until you say otherwise.",
  },
  {
    icon: EyeOff,
    title: "Review before confirming",
    body: "See every photo you've cleared. Bring anything back in a single tap.",
  },
  {
    icon: ShieldCheck,
    title: "Full control over your files",
    body: "Your gallery stays yours. FlickClean only ever does what you ask it to.",
  },
];

export function Trust() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/70"
          >
            <ShieldCheck className="size-3.5" />
            Trust & control
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-3xl sm:text-5xl font-semibold tracking-tight"
          >
            Nothing leaves without your say.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-white/60"
          >
            Cleaning shouldn&rsquo;t feel risky. FlickClean is built so the worst
            thing that can happen is nothing at all.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass rounded-3xl p-6"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white/80">
                <it.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {it.title}
              </h3>
              <p className="mt-2 text-white/60 leading-relaxed">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
