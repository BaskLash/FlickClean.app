"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

const THRESHOLDS = [25, 50, 75, 100] as const;

export function ScrollDepthTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const fired = new Set<number>();

    const computeDepth = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const viewport = window.innerHeight;
      const total = Math.max(doc.scrollHeight - viewport, 1);
      const pct = Math.min(100, Math.round((scrollTop / total) * 100));

      for (const threshold of THRESHOLDS) {
        if (pct >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          trackEvent("scroll_depth", {
            depth: threshold,
            path: pathname,
          });
        }
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        computeDepth();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    computeDepth();

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
