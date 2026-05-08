"use client";

import { Phone, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="m-3 flex items-center gap-2 rounded-full bg-[var(--color-navy)] p-1.5 shadow-[0_12px_32px_rgb(15_14_43/0.45)]">
        <a
          href="tel:1300604183"
          aria-label="Call Fastr Finance"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-white"
        >
          <Phone size={18} />
        </a>
        <a href="#apply" className="btn-coral flex-1 h-12 text-sm">
          Apply now <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
