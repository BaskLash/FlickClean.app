"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  DownloadButton,
  StartCleaningButton,
} from "@/components/CTAButtons";

const floatingTiles = [
  { top: "6%", left: "4%", size: 110, delay: 0, hue: "from-pink-400/40 to-fuchsia-500/30" },
  { top: "12%", right: "6%", size: 140, delay: 0.6, hue: "from-blue-400/40 to-cyan-400/30" },
  { top: "60%", left: "2%", size: 90, delay: 1.1, hue: "from-emerald-400/40 to-teal-400/30" },
  { top: "68%", right: "4%", size: 130, delay: 1.6, hue: "from-amber-400/40 to-orange-400/30" },
  { top: "35%", left: "46%", size: 80, delay: 0.3, hue: "from-violet-400/40 to-indigo-400/30" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ambient">
      {/* Floating blurred photo tiles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        {floatingTiles.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: t.delay }}
            className={`absolute rounded-3xl bg-gradient-to-br ${t.hue} blur-2xl ${
              i % 2 === 0 ? "animate-floatY" : "animate-floatY2"
            }`}
            style={{
              width: t.size,
              height: t.size,
              top: t.top,
              left: t.left,
              right: t.right,
            }}
          />
        ))}

        {/* Crisp smaller photo chips floating in foreground */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: -6 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="hidden md:block absolute top-[18%] left-[8%] w-24 h-32 rounded-2xl bg-gradient-to-br from-pink-300/30 to-purple-400/20 border border-white/10 backdrop-blur-sm animate-floatY2"
        />
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 8 }}
          animate={{ opacity: 1, y: 0, rotate: 8 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          className="hidden md:block absolute top-[22%] right-[10%] w-28 h-36 rounded-2xl bg-gradient-to-br from-blue-300/30 to-cyan-400/20 border border-white/10 backdrop-blur-sm animate-floatY"
        />
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="hidden md:block absolute bottom-[14%] left-[14%] w-28 h-28 rounded-2xl bg-gradient-to-br from-emerald-300/30 to-teal-400/20 border border-white/10 backdrop-blur-sm animate-floatY"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 sm:pt-28 pb-20 sm:pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/70"
        >
          <Sparkles className="size-3.5 text-white/80" />
          A calmer way to clean your gallery
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          Clean your gallery
          <br />
          <span className="bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-transparent">
            in minutes, not hours.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg sm:text-xl text-white/60"
        >
          Stop scrolling forever. Swipe through your photos and free up space
          instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <StartCleaningButton location="hero" />
          <DownloadButton location="hero" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 text-xs uppercase tracking-[0.18em] text-white/30"
        >
          Nothing is deleted instantly · You always review first
        </motion.div>
      </div>
    </section>
  );
}
