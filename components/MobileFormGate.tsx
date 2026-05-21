"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import { trackInitiateCheckout, trackLead } from "@/lib/track";

const APPLY_URL = "https://fastrfinance.com.au/form/classic?asset_type=caravan";

export function MobileFormGate() {
  const onApplyClick = () => {
    trackInitiateCheckout({ content_name: "mobile_hero_cta" });
    trackLead({ content_name: "mobile_hero_cta" });
  };

  return (
    <div className="lg:hidden bg-white rounded-[1.75rem] border border-[var(--color-navy-100)] shadow-[var(--shadow-pop)] p-5">
      <a
        href={APPLY_URL}
        onClick={onApplyClick}
        className="btn-coral w-full text-base py-4"
      >
        Get My Options <ArrowRight size={18} />
      </a>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[var(--color-navy-300)]">
        <ShieldCheck size={14} /> Won&apos;t affect your credit score
      </p>

      <p className="mt-2.5 text-center text-[12.5px] text-[var(--color-navy-400)]">
        Not sure how much?{" "}
        <a
          href="tel:1300604183"
          className="font-semibold text-[var(--color-navy)] underline decoration-[var(--color-coral)] decoration-2 underline-offset-[3px]"
        >
          Talk to a broker →
        </a>
      </p>

      <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-[var(--color-navy-300)]">
        <GoogleG className="w-4 h-4" />
        <span>
          <span className="font-bold text-[var(--color-navy)]">200+ five-star reviews</span> on Google
        </span>
      </div>
    </div>
  );
}

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.6 2.4-7.2 2.4-5.2 0-9.7-3.4-11.3-8L6.1 32.9C9.5 39.4 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C41.9 35.6 44 30.2 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}
