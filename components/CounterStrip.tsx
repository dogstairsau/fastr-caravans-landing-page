"use client";

import { LiveCounter } from "./LiveCounter";

export function CounterStrip() {
  return (
    <div
      className="relative overflow-hidden bg-[var(--color-navy)] text-white"
      role="region"
      aria-label="Live financing stats"
    >
      {/* Scanline texture — subtle data-feed feel */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0 1px, transparent 1px 4px)",
        }}
      />

      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[var(--color-navy)] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[var(--color-navy)] to-transparent pointer-events-none" />

      {/* Marquee track */}
      <div className="py-4 md:py-5">
        <div className="marquee-track items-center gap-x-10 md:gap-x-14">
          <TickerRow />
          <TickerRow />
          <TickerRow />
        </div>
      </div>
    </div>
  );
}

function TickerRow() {
  return (
    <div className="flex items-center gap-x-10 md:gap-x-14 shrink-0 whitespace-nowrap pr-10 md:pr-14">
      <Item
        value={<LiveCounter target={3295} duration={2000} tickEveryMs={6000} />}
        unit="Aussies"
        label="financed"
        accent
      />
      <Marker />
      <Item
        value={<LiveCounter target={584} duration={2000} prefix="$" suffix="M+" tickEveryMs={3500} />}
        unit="dollars"
        label="put on the road"
      />
      <Marker />
      <Item
        value={<LiveCounter target={24} duration={1600} format={(n) => (n / 10).toFixed(1)} suffix="h" />}
        unit="hours"
        label="avg approval"
      />
      <Marker />
      <Item value="6.99" unit="% p.a." label="caravan rates from*" />
      <Marker />
    </div>
  );
}

function Item({
  value,
  unit,
  label,
  accent = false,
}: {
  value: React.ReactNode;
  unit: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-2">
      <span
        className={`font-[var(--font-display)] text-xl md:text-[1.55rem] font-bold tabular-nums tracking-[-0.02em] ${
          accent ? "text-[var(--color-yellow)]" : "text-white"
        }`}
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {value}
      </span>
      <span className="text-[11px] md:text-xs font-semibold text-white/55">
        <span className="text-white/85">{unit}</span> {label}
      </span>
    </div>
  );
}

function Marker() {
  return (
    <span aria-hidden className="inline-flex items-center text-white/25">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="1.4" fill="currentColor" />
      </svg>
    </span>
  );
}
