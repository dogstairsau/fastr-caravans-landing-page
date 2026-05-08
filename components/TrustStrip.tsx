"use client";

import { LiveCounter } from "./LiveCounter";

export function TrustStrip() {
  return (
    <section className="bg-white border-b border-[var(--color-navy-100)]">
      <div className="container-page py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-10 md:gap-6">
          <Stat
            n={
              <LiveCounter target={3247} duration={2000} tickEveryMs={6500} tickIncrement={1} />
            }
            live
            label="Aussies financed"
          />
          <Stat
            n={
              <LiveCounter
                target={487}
                duration={2400}
                tickEveryMs={3000}
                tickIncrement={1}
                prefix="$"
                suffix="M+"
              />
            }
            live
            label="Funded into the open road"
          />
          <Stat
            n={<LiveCounter target={24} duration={1600} format={(n) => (n / 10).toFixed(1)} suffix="h" />}
            label="Average approval time"
            sub="From signed application"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({
  n,
  label,
  live = false,
  sub,
}: {
  n: React.ReactNode;
  label: string;
  live?: boolean;
  sub?: string;
}) {
  return (
    <div className="flex items-baseline gap-5 md:gap-6 md:flex-col md:items-start">
      <div className="font-[var(--font-display)] text-[clamp(2.6rem,5vw,4rem)] font-bold tracking-[-0.035em] text-[var(--color-navy)] leading-none flex items-center gap-3">
        {n}
        {live && (
          <span className="relative inline-flex shrink-0">
            <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-coral)] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-coral)]" />
          </span>
        )}
      </div>
      <div className="md:mt-2">
        <div className="text-xs md:text-sm font-bold text-[var(--color-navy)] uppercase tracking-[0.14em]">
          {label}
        </div>
        {sub && <div className="text-xs text-[var(--color-navy-300)] mt-1">{sub}</div>}
      </div>
    </div>
  );
}
