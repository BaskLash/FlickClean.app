"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Check,
  X,
  Image as ImageIcon,
  Calendar,
  HardDrive,
} from "lucide-react";

const demoCards = [
  { hue: "from-rose-400/70 to-fuchsia-500/40", label: "IMG_2024" },
  { hue: "from-sky-400/70 to-indigo-500/40", label: "IMG_2025" },
  { hue: "from-emerald-400/70 to-teal-500/40", label: "IMG_2026" },
  { hue: "from-amber-400/70 to-orange-500/40", label: "IMG_2027" },
];

function SwipeDemo() {
  const [index, setIndex] = useState(0);
  const controls = useAnimationControls();
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      while (!cancelled) {
        const dir: "left" | "right" = Math.random() > 0.5 ? "right" : "left";
        setDirection(dir);
        await controls.start({
          x: dir === "right" ? 220 : -220,
          rotate: dir === "right" ? 12 : -12,
          opacity: 0,
          transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
        });
        if (cancelled) return;
        setIndex((i) => (i + 1) % demoCards.length);
        setDirection(null);
        await controls.set({ x: 0, rotate: 0, opacity: 0 });
        await controls.start({
          opacity: 1,
          transition: { duration: 0.35 },
        });
        await new Promise((r) => setTimeout(r, 900));
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [controls]);

  const card = demoCards[index];

  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/70 p-5 shadow-[0_40px_100px_-30px_rgba(124,156,255,0.35)]">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/40">
        <span>March 2026</span>
        <span>24 / 312</span>
      </div>

      {/* Directional hints */}
      <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
        <div
          className={`flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-rose-300 transition-opacity ${
            direction === "left" ? "opacity-100" : "opacity-30"
          }`}
        >
          <X className="size-5" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <div
          className={`flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-emerald-300 transition-opacity ${
            direction === "right" ? "opacity-100" : "opacity-30"
          }`}
        >
          <Check className="size-5" />
        </div>
      </div>

      <div className="mt-6 grid place-items-center">
        <motion.div
          animate={controls}
          className={`relative h-[300px] w-[200px] rounded-3xl bg-gradient-to-br ${card.hue} border border-white/10 shadow-xl`}
        >
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)]" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-[11px] text-white/70">
            <ImageIcon className="size-3.5" />
            <span>{card.label}</span>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 text-[11px] text-white/50">
        <span className="flex items-center gap-1">
          <X className="size-3.5 text-rose-300" /> Swipe left
        </span>
        <span className="flex items-center gap-1">
          <Check className="size-3.5 text-emerald-300" /> Swipe right
        </span>
      </div>
    </div>
  );
}

function StorageBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="glass rounded-3xl p-6"
    >
      <div className="flex items-center gap-3 text-white/70">
        <HardDrive className="size-5" />
        <span className="text-sm font-medium">Storage</span>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-xs text-white/50">
          <span>Before</span>
          <span className="text-rose-300">121.4 GB / 128 GB</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "95%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-rose-400 to-orange-400"
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-xs text-white/50">
          <span>After 10 minutes with FlickClean</span>
          <span className="text-emerald-300">73.2 GB / 128 GB</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "57%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
          />
        </div>
      </div>

      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-white">+48.2 GB</span>
        <span className="text-sm text-white/50">reclaimed</span>
      </div>
    </motion.div>
  );
}

function MonthlyView() {
  const months = [
    { label: "Jan", count: 312, cleaned: 100 },
    { label: "Feb", count: 288, cleaned: 100 },
    { label: "Mar", count: 401, cleaned: 74 },
    { label: "Apr", count: 196, cleaned: 0 },
    { label: "May", count: 355, cleaned: 0 },
    { label: "Jun", count: 228, cleaned: 0 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="glass rounded-3xl p-6"
    >
      <div className="flex items-center gap-3 text-white/70">
        <Calendar className="size-5" />
        <span className="text-sm font-medium">Monthly view</span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2.5 sm:grid-cols-6">
        {months.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-3"
          >
            <div className="text-[11px] uppercase tracking-wider text-white/40">
              {m.label}
            </div>
            <div className="mt-1 text-lg font-semibold text-white">
              {m.count}
            </div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${m.cleaned}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                  delay: 0.3 + i * 0.06,
                }}
                className={`h-full rounded-full ${
                  m.cleaned === 100
                    ? "bg-emerald-400"
                    : m.cleaned > 0
                    ? "bg-amber-400"
                    : "bg-white/20"
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function FeatureVisual() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Watch the mess disappear.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Swipe, review, reclaim. A tiny loop that turns thousands of photos
            into a gallery that feels light again.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
          <div className="flex items-center justify-center rounded-3xl glass p-8 sm:p-12">
            <SwipeDemo />
          </div>

          <div className="flex flex-col gap-4">
            <StorageBar />
            <MonthlyView />
          </div>
        </div>
      </div>
    </section>
  );
}
