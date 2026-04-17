type GtagArgs =
  | ["event", string, Record<string, unknown>?]
  | ["config", string, Record<string, unknown>?]
  | ["set", Record<string, unknown>];

declare global {
  interface Window {
    gtag?: (...args: GtagArgs[number] extends infer _ ? unknown[] : never) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  name: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  } else {
    // Fallback: queue on dataLayer so events aren't lost before gtag loads
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event: name, ...params });
  }
}
