"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LIVE_REVIEWS = [
  { name: "James B", region: "Newcastle", text: "Mandy went above and beyond. Walked me through every detail.", mins: 3 },
  { name: "Sarah K", region: "Geelong", text: "Filled out the form, got a call within an hour, approved that afternoon.", mins: 12 },
  { name: "Mark T", region: "Brisbane", text: "Bought a Jayco off a private seller. Other brokers said no. Fastr made it work.", mins: 28 },
  { name: "Lisa P", region: "Adelaide", text: "Plain English, no pressure. Better deal than the dealer was offering.", mins: 47 },
  { name: "David L", region: "Perth", text: "Sharp rate, no fuss. On the road in two weeks.", mins: 64 },
  { name: "Karen M", region: "Hobart", text: "Saved us $1,200 a year compared to our bank.", mins: 81 },
];

export function HeroLiveReview() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((v) => (v + 1) % LIVE_REVIEWS.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const r = LIVE_REVIEWS[i];

  return (
    <div className="relative h-full bg-[var(--color-coral)] text-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-7 overflow-hidden flex flex-col">
      {/* Decorative quote glyph */}
      <span
        aria-hidden
        className="absolute -bottom-12 -right-4 font-[var(--font-display)] text-[14rem] leading-none select-none text-white/10 pointer-events-none"
      >
        &rdquo;
      </span>

      <div className="flex items-center gap-2 mb-3 relative">
        <span className="relative inline-flex">
          <span className="absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Just approved</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-1 flex flex-col justify-between"
        >
          <p className="font-[var(--font-display)] text-base md:text-[1.05rem] leading-[1.35] font-medium">
            &ldquo;{r.text}&rdquo;
          </p>
          <div className="flex items-end justify-between mt-5 text-xs gap-2">
            <div>
              <div className="font-bold text-sm">{r.name}</div>
              <div className="opacity-80 text-[11px]">{r.region}, AU</div>
            </div>
            <span className="opacity-80 text-[11px] whitespace-nowrap">{r.mins} mins ago</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress ticker */}
      <div className="mt-3 flex gap-1 relative">
        {LIVE_REVIEWS.map((_, idx) => (
          <span
            key={idx}
            className={`h-0.5 flex-1 rounded-full transition ${idx === i ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
