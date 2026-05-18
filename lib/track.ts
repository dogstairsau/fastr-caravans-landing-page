// Tracking helpers — wired to Meta Pixel + GA4. Both pixels are inert until
// IDs are configured (see app/layout.tsx). Calls are safe no-ops in dev.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type LeadPayload = {
  value?: number;
  currency?: string;
  content_name?: string;
};

export function trackLead(payload: LeadPayload = {}) {
  if (typeof window === "undefined") return;
  const { value, currency = "AUD", content_name = "caravan_loan_lead" } = payload;

  window.fbq?.("track", "Lead", { value, currency, content_name });
  window.gtag?.("event", "generate_lead", { value, currency, content_name });
}

export function trackInitiateCheckout(payload: LeadPayload = {}) {
  if (typeof window === "undefined") return;
  const { value, currency = "AUD", content_name = "caravan_loan_checkout" } = payload;

  window.fbq?.("track", "InitiateCheckout", { value, currency, content_name });
  window.gtag?.("event", "begin_checkout", { value, currency, content_name });
}

export function buildFormUrl(amount: number, phone?: string) {
  const url = new URL("https://fastrfinance.com.au/form/classic");
  url.searchParams.set("loan_amount", String(amount));
  if (phone) url.searchParams.set("phone", phone);
  url.searchParams.set("asset_type", "caravan");

  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid", "gclid"].forEach((k) => {
      const v = params.get(k);
      if (v) url.searchParams.set(k, v);
    });
  }
  return url.toString();
}
