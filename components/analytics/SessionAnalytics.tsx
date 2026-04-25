"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  debounce,
  hasSessionStarted,
  markSessionStarted,
  throttle,
  trackEvent,
} from "@/lib/analytics";

const ACTIVE_WINDOW_MS = 15_000;
const HEARTBEAT_MS = 15_000;
const ENGAGEMENT_FLUSH_MS = 60_000;
const MOUSE_FLUSH_MS = 30_000;
const REVISIT_THRESHOLD = 3;

type ElementMeta = {
  id: string;
  type?: string;
  meta?: Record<string, unknown>;
};

function readMeta(el: HTMLElement): ElementMeta | null {
  const id = el.dataset.trackId;
  if (!id) return null;
  let meta: Record<string, unknown> | undefined;
  if (el.dataset.trackMeta) {
    try {
      meta = JSON.parse(el.dataset.trackMeta) as Record<string, unknown>;
    } catch {
      meta = undefined;
    }
  }
  return { id, type: el.dataset.trackType, meta };
}

function findTracked(target: EventTarget | null): HTMLElement | null {
  if (!(target instanceof Element)) return null;
  const closest = target.closest<HTMLElement>("[data-track-id]");
  return closest;
}

export function SessionAnalytics() {
  const pathname = usePathname();

  // session_start: once per tab
  useEffect(() => {
    if (hasSessionStarted()) return;
    markSessionStarted();
    trackEvent("session_start", {
      referrer: typeof document !== "undefined" ? document.referrer : "",
      viewport_w: window.innerWidth,
      viewport_h: window.innerHeight,
    });
  }, []);

  // page_view on route change (separate from GA's auto-pageview, includes session_id)
  useEffect(() => {
    trackEvent("page_view_session", { path: pathname });
  }, [pathname]);

  // Click delegation, hover/revisit, mouse intensity, active/idle, session duration.
  useEffect(() => {
    const sessionStart = Date.now();
    let lastInteraction = Date.now();
    let activeMs = 0;
    let idleMs = 0;
    let lastTick = Date.now();

    // Mouse-move accumulators.
    let lastMoveX: number | null = null;
    let lastMoveY: number | null = null;
    let moveCount = 0;
    let movePx = 0;
    let moveWindowStart = Date.now();

    // Hover state per-element (track-id -> {enter, lastEnter}).
    const hoverEnter = new Map<string, number>();
    const interactionCount = new Map<string, number>();
    const revisitFired = new Set<string>();

    const noteInteraction = () => {
      lastInteraction = Date.now();
    };

    const incInteraction = (id: string) => {
      const next = (interactionCount.get(id) ?? 0) + 1;
      interactionCount.set(id, next);
      if (next >= REVISIT_THRESHOLD && !revisitFired.has(id)) {
        revisitFired.add(id);
        trackEvent("ui_revisit_element", {
          element_id: id,
          interaction_count: next,
        });
      }
    };

    // ---- Click delegation ----
    const onClick = (e: MouseEvent) => {
      noteInteraction();
      const el = findTracked(e.target);
      if (!el) return;
      const meta = readMeta(el);
      if (!meta) return;
      incInteraction(meta.id);
      const eventName = el.dataset.trackClick;
      if (!eventName) return; // explicit opt-in for click delegation
      trackEvent(eventName, {
        element_id: meta.id,
        element_type: meta.type,
        interaction_type: "click",
        ...(meta.meta ?? {}),
      });
    };

    // ---- Hover delegation (mouseenter / mouseleave via mouseover/mouseout) ----
    const onMouseOver = (e: MouseEvent) => {
      const el = findTracked(e.target);
      if (!el) return;
      if (el.dataset.trackHover !== "true") return;
      const id = el.dataset.trackId!;
      // Re-entering a still-hovered ancestor: ignore if already entered.
      if (hoverEnter.has(id)) return;
      hoverEnter.set(id, Date.now());
    };

    const onMouseOut = (e: MouseEvent) => {
      const el = findTracked(e.target);
      if (!el) return;
      if (el.dataset.trackHover !== "true") return;
      const id = el.dataset.trackId!;
      // Only count when the pointer truly leaves the element subtree.
      const related = e.relatedTarget;
      if (related instanceof Node && el.contains(related)) return;
      const enter = hoverEnter.get(id);
      if (enter === undefined) return;
      hoverEnter.delete(id);
      const duration = Date.now() - enter;
      if (duration < 250) return; // ignore micro-hovers
      incInteraction(id);
      trackEvent("ui_hover_element", {
        element_id: id,
        element_type: el.dataset.trackType,
        interaction_type: "hover",
        duration_ms: duration,
      });
    };

    // ---- Mouse intensity (throttled) ----
    const onMouseMoveRaw = (e: MouseEvent) => {
      noteInteraction();
      if (lastMoveX !== null && lastMoveY !== null) {
        const dx = e.clientX - lastMoveX;
        const dy = e.clientY - lastMoveY;
        movePx += Math.sqrt(dx * dx + dy * dy);
      }
      lastMoveX = e.clientX;
      lastMoveY = e.clientY;
      moveCount += 1;
    };
    const onMouseMove = throttle(onMouseMoveRaw, 50);

    const flushMouseIntensity = () => {
      const windowMs = Date.now() - moveWindowStart;
      if (moveCount > 0) {
        trackEvent("mouse_move_intensity", {
          count: moveCount,
          distance_px: Math.round(movePx),
          window_ms: windowMs,
        });
      }
      moveCount = 0;
      movePx = 0;
      moveWindowStart = Date.now();
    };

    // ---- Active vs idle heartbeat ----
    const heartbeat = () => {
      const now = Date.now();
      const delta = now - lastTick;
      lastTick = now;
      if (now - lastInteraction <= ACTIVE_WINDOW_MS) {
        activeMs += delta;
      } else {
        idleMs += delta;
      }
    };

    const flushEngagement = () => {
      heartbeat();
      if (activeMs === 0 && idleMs === 0) return;
      trackEvent("session_engagement", {
        active_ms: activeMs,
        idle_ms: idleMs,
      });
      activeMs = 0;
      idleMs = 0;
    };

    // ---- Other interaction signals feed into noteInteraction() ----
    const onKey = () => noteInteraction();
    const onScrollDebounced = debounce(noteInteraction, 100);
    const onTouch = () => noteInteraction();

    document.addEventListener("click", onClick, true);
    document.addEventListener("mouseover", onMouseOver, true);
    document.addEventListener("mouseout", onMouseOut, true);
    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("keydown", onKey, { passive: true });
    document.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("scroll", onScrollDebounced, { passive: true });

    const heartbeatTimer = window.setInterval(heartbeat, HEARTBEAT_MS);
    const engagementTimer = window.setInterval(
      flushEngagement,
      ENGAGEMENT_FLUSH_MS
    );
    const mouseTimer = window.setInterval(flushMouseIntensity, MOUSE_FLUSH_MS);

    // ---- Final flush on hide/unload ----
    let endFired = false;
    const flushFinal = () => {
      if (endFired) return;
      endFired = true;
      flushMouseIntensity();
      flushEngagement();
      trackEvent("session_duration", {
        duration_ms: Date.now() - sessionStart,
      });
    };
    const onVisibility = () => {
      if (document.visibilityState === "hidden") flushFinal();
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", flushFinal);

    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("mouseover", onMouseOver, true);
      document.removeEventListener("mouseout", onMouseOut, true);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("touchstart", onTouch);
      window.removeEventListener("scroll", onScrollDebounced);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", flushFinal);
      window.clearInterval(heartbeatTimer);
      window.clearInterval(engagementTimer);
      window.clearInterval(mouseTimer);
    };
  }, []);

  return null;
}
