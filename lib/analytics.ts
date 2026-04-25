type GtagFn = (
  command: "event" | "config" | "set",
  targetOrName?: string | Record<string, unknown>,
  params?: Record<string, unknown>
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

const SESSION_KEY = "fc_session_id";
const SESSION_START_FLAG = "fc_session_started";

export function getSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    const existing = window.sessionStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const id = generateId();
    window.sessionStorage.setItem(SESSION_KEY, id);
    return id;
  } catch {
    // sessionStorage may be unavailable (private mode, sandboxed iframe).
    return "ephemeral";
  }
}

function generateId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function hasSessionStarted(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return window.sessionStorage.getItem(SESSION_START_FLAG) === "1";
  } catch {
    return false;
  }
}

export function markSessionStarted(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(SESSION_START_FLAG, "1");
  } catch {
    /* ignore */
  }
}

export function trackEvent(
  name: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;
  const enriched: Record<string, unknown> = {
    session_id: getSessionId(),
    timestamp: Date.now(),
    page_url: window.location.pathname + window.location.search,
    ...params,
  };
  if (typeof window.gtag === "function") {
    window.gtag("event", name, enriched);
  } else {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event: name, ...enriched });
  }
}

export function throttle<T extends (...args: never[]) => void>(
  fn: T,
  ms: number
): (...args: Parameters<T>) => void {
  let last = 0;
  let pending: Parameters<T> | null = null;
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    const remaining = ms - (now - last);
    if (remaining <= 0) {
      last = now;
      fn(...args);
    } else {
      pending = args;
      if (timer) return;
      timer = setTimeout(() => {
        last = Date.now();
        timer = null;
        if (pending) {
          fn(...pending);
          pending = null;
        }
      }, remaining);
    }
  };
}

export function debounce<T extends (...args: never[]) => void>(
  fn: T,
  ms: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn(...args);
    }, ms);
  };
}
