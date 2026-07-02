// Lightweight, privacy-friendly event tracking helper.
// Pushes to a dataLayer (GTM/GA-style) when present and mirrors to a custom
// window event so any analytics tool can subscribe. Safe to call on the server.

type EventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(event: string, props: EventProps = {}) {
  if (typeof window === "undefined") return;
  const payload = { event, ...props };
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    window.dispatchEvent(new CustomEvent("app:track", { detail: payload }));
  } catch {
    /* analytics must never break the UI */
  }
}

export function trackWhatsAppClick(service: string, source: string) {
  trackEvent("whatsapp_cta_click", { service, source });
}
