"use client";

import { motion } from "framer-motion";
import {
  ChevronsDown,
  HardDrive,
  Timer,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

type Problem = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const problems: Problem[] = [
  {
    icon: ChevronsDown,
    title: "Scrolling never ends",
    body: "Thousands of photos. Years of moments. And a thumb that's tired of scrolling before it even begins.",
  },
  {
    icon: HardDrive,
    title: "Your storage is always full",
    body: "A new warning every week. You delete one app, then another — and you still don't feel any room.",
  },
  {
    icon: Timer,
    title: "Cleaning feels like a chore",
    body: "Opening the gallery with the intent to clean is exhausting. Most people close the app within a minute.",
  },
  {
    icon: ShieldAlert,
    title: "You&rsquo;re afraid to delete the wrong things",
    body: "One wrong tap. One missing memory. So you do nothing — and the mess just keeps growing.",
  },
];

export function Problems() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center text-3xl sm:text-5xl font-semibold tracking-tight"
        >
          It&rsquo;s not you. It&rsquo;s the gallery.
        </motion.h2>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {problems.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-3xl p-7 sm:p-8 transition-colors hover:bg-white/[0.05]"
            >
              <div
                aria-hidden
                className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-opacity group-hover:opacity-90 opacity-60"
              />
              <div className="relative flex items-start gap-4">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white/80">
                  <p.icon className="size-5" />
                </div>
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-semibold tracking-tight text-white"
                    dangerouslySetInnerHTML={{ __html: p.title }}
                  />
                  <p
                    className="mt-2 text-white/60 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
