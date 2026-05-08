"use client";

import { Phone } from "lucide-react";
import { Logo } from "./Logo";

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--color-navy)] text-white shadow-[0_1px_0_rgb(255_255_255/0.06)]">
      <div className="container-page flex h-16 items-center justify-between gap-3 md:h-18">
        <a href="#" aria-label="Fastr Finance home" className="text-white">
          <Logo />
        </a>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="tel:1300604183"
            className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white/90 hover:text-white transition"
          >
            <Phone size={16} />
            1300 604 183
          </a>
          <a href="#apply" className="btn-coral text-sm md:text-[0.95rem] py-2.5 px-4 md:px-5">
            Apply now
          </a>
        </div>
      </div>
    </header>
  );
}
