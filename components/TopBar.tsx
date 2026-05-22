"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow,backdrop-filter,padding] duration-300 " +
        (scrolled
          ? "bg-white/94 backdrop-blur-md backdrop-saturate-150 shadow-[0_4px_18px_rgb(15_14_43/0.08)]"
          : "bg-transparent")
      }
      style={{ backgroundColor: scrolled ? "rgba(255,255,255,0.94)" : "transparent" }}
    >
      <div
        className={
          "container-page flex items-center justify-between gap-3 transition-[height] duration-300 " +
          (scrolled ? "h-14 md:h-16" : "h-16 md:h-20")
        }
      >
        <a href="#" aria-label="Fastr Finance home" className="inline-flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={scrolled ? "/fastr-logo-dark.svg" : "/fastr-logo.svg"}
            alt="Fastr Finance"
            className="h-7 md:h-8 w-auto select-none transition-opacity"
            draggable={false}
          />
        </a>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="tel:1300604183"
            className={
              "hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors " +
              (scrolled
                ? "text-[var(--color-navy)] hover:text-[var(--color-navy-900)]"
                : "text-white/90 hover:text-white")
            }
          >
            <Phone size={16} />
            1300 604 183
          </a>
          {/* Mobile → external form. Desktop → anchor to the hero form card. */}
          <a
            href="https://fastrfinance.com.au/form/classic?asset_type=caravan"
            className="btn-coral text-sm py-2.5 px-4 lg:hidden"
          >
            Get My Options
          </a>
          <a
            href="#apply"
            className="btn-coral hidden lg:inline-flex text-sm md:text-[0.95rem] py-2.5 px-4 md:px-5"
          >
            Get My Options
          </a>
        </div>
      </div>
    </header>
  );
}
