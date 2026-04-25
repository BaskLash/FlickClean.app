"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Attach to an existing section element (no extra DOM) to fire
 * section_view (once) and section_dwell (on exit / page hide).
 */
export function useSectionTracker<T extends HTMLElement>(
  sectionId: string,
  threshold = 0.5
): React.RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") return;

    let viewFired = false;
    let enterTs: number | null = null;

    const fireExit = () => {
      if (enterTs === null) return;
      const dwellMs = Date.now() - enterTs;
      enterTs = null;
      if (dwellMs < 500) return;
      trackEvent("section_dwell", {
        section_id: sectionId,
        element_id: sectionId,
        interaction_type: "view",
        dwell_ms: dwellMs,
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!viewFired) {
              viewFired = true;
              trackEvent("section_view", {
                section_id: sectionId,
                element_id: sectionId,
                interaction_type: "view",
              });
            }
            if (enterTs === null) enterTs = Date.now();
          } else {
            fireExit();
          }
        }
      },
      { threshold }
    );

    observer.observe(node);

    const onHide = () => {
      if (document.visibilityState === "hidden") fireExit();
    };
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", fireExit);

    return () => {
      fireExit();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", fireExit);
    };
  }, [sectionId, threshold]);

  return ref;
}
