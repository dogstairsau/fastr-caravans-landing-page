"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, MessageSquareText, HelpCircle } from "lucide-react";

// HelpBubble — persistent "need a hand?" affordance.
// Acts as a low-fi precursor to the chat bot: tap to reveal a small panel
// with options (call, SMS, FAQ jump). The chat option is reserved for later.
export function HelpBubble() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hidden on mobile to avoid colliding with StickyMobileCTA
  return (
    <div
      className={`hidden md:block fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 pointer-events-none"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {open ? (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="w-[320px] rounded-2xl bg-white shadow-[0_24px_60px_-12px_rgba(15,14,43,0.35)] ring-1 ring-[var(--color-navy)]/8 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[var(--color-navy)] text-white px-5 pt-5 pb-7 relative">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close help"
                className="absolute top-3 right-3 grid h-7 w-7 place-items-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition"
              >
                <X size={14} />
              </button>
              <p className="font-[var(--font-display)] text-xl font-bold tracking-[-0.02em] leading-tight">
                Need a hand?
              </p>
              <p className="text-sm text-white/70 mt-1.5 leading-snug">
                Not sure how much you need or how it works? Talk to a real broker — no obligation.
              </p>
            </div>

            {/* Options */}
            <ul className="p-2">
              <li>
                <a
                  href="tel:1300604183"
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[var(--color-navy-50)] transition"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-coral-soft)] text-[var(--color-coral)]">
                    <Phone size={16} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-bold text-[var(--color-navy)]">
                      Call a broker
                    </span>
                    <span className="block text-xs text-[var(--color-navy-300)]">
                      1300 604 183 · Mon–Fri 9–5 AEST
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="sms:1300604183"
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[var(--color-navy-50)] transition"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-yellow-soft)] text-[#7C5A00]">
                    <MessageSquareText size={16} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-bold text-[var(--color-navy)]">
                      Text us
                    </span>
                    <span className="block text-xs text-[var(--color-navy-300)]">
                      Quick question? We&rsquo;ll text back.
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[var(--color-navy-50)] transition"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-cyan-soft)] text-[var(--color-cyan-deep)]">
                    <HelpCircle size={16} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-bold text-[var(--color-navy)]">
                      How finance works
                    </span>
                    <span className="block text-xs text-[var(--color-navy-300)]">
                      Common questions, plain English answers
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            <div className="border-t border-[var(--color-navy-100)] px-4 py-3 text-[11px] text-[var(--color-navy-300)] text-center">
              Live chat coming soon
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="bubble"
            type="button"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            aria-label="Need a hand?"
            className="group flex items-center gap-2.5 rounded-full bg-[var(--color-navy)] text-white pl-3 pr-5 py-3 shadow-[0_12px_32px_rgba(15,14,43,0.35)] hover:translate-y-[-1px] transition"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-full bg-[var(--color-coral)]">
              <MessageCircle size={18} />
              <span className="absolute -top-0.5 -right-0.5 inline-flex">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-[var(--color-yellow)] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-yellow)]" />
              </span>
            </span>
            <span className="font-semibold text-sm tracking-tight">Need a hand?</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
