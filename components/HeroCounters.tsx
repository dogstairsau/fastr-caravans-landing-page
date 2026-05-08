"use client";

import { LiveCounter } from "./LiveCounter";

export function HeroCounters() {
  return (
    <div className="h-full bg-[var(--color-mint)] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-7 flex flex-col justify-between gap-5">
      {/* Primary live stat */}
      <div>
        <div className="flex items-center gap-2 mb-2.5">
          <span className="relative inline-flex">
            <span className="absolute inline-flex h-2 w-2 rounded-full bg-[var(--color-coral)] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-coral)]" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-navy-400)]">
            Live · Aussies financed
          </span>
        </div>
        <div className="font-[var(--font-display)] text-[clamp(2.4rem,4.5vw,3.6rem)] font-bold tracking-[-0.035em] text-[var(--color-navy)] leading-none">
          <LiveCounter target={3247} duration={2200} tickEveryMs={6000} tickIncrement={1} />
        </div>
      </div>

      {/* Secondary stat row */}
      <div className="grid grid-cols-2 gap-4 pt-5 border-t border-[var(--color-navy)]/10">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-navy-400)]">Funded</div>
          <div className="font-[var(--font-display)] text-xl md:text-2xl font-bold text-[var(--color-navy)] tracking-[-0.025em] mt-1">
            <LiveCounter target={487} duration={2400} prefix="$" suffix="M+" tickEveryMs={3000} />
          </div>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-navy-400)]">Avg approval</div>
          <div className="font-[var(--font-display)] text-xl md:text-2xl font-bold text-[var(--color-navy)] tracking-[-0.025em] mt-1">
            <LiveCounter target={24} duration={1600} format={(n) => (n / 10).toFixed(1)} suffix="h" />
          </div>
        </div>
      </div>
    </div>
  );
}
