"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// Anchored to a known date so the count is stable per-day across reloads.
const ANCHOR_DATE = new Date(Date.UTC(2026, 4, 1)); // 2026-05-01
const ANCHOR_VALUE = 3295;
const DAILY_GROWTH = 12;
const SESSION_CAP = 18;
const COUNTUP_MS = 1800;
const TICK_EVERY_MS = 4500;

function getDailyBase() {
  const days = Math.max(0, Math.floor((Date.now() - ANCHOR_DATE.getTime()) / 86400000));
  return ANCHOR_VALUE + days * DAILY_GROWTH;
}

// How far back to start the count-up so it feels alive without showing 0
const COUNTUP_START_OFFSET = 24;

export function HeroLiveTicker() {
  const target = useMemo(() => getDailyBase(), []);
  // Start near the target so users never see "0"; count up the last few digits.
  const [value, setValue] = useState(() => Math.max(0, target - COUNTUP_START_OFFSET));
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();
    const startValue = Math.max(0, target - COUNTUP_START_OFFSET);
    let raf = 0;
    let sessionAdds = 0;

    const animate = (t: number) => {
      const progress = Math.min((t - start) / COUNTUP_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(startValue + (target - startValue) * eased));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };
    raf = requestAnimationFrame(animate);

    const id = setInterval(() => {
      if (sessionAdds >= SESSION_CAP) return;
      sessionAdds += 1;
      setValue((v) => v + 1);
    }, TICK_EVERY_MS);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(id);
    };
  }, [target]);

  const formatted = value.toLocaleString("en-AU");

  return (
    <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-white/70 backdrop-blur px-3.5 py-1.5 ring-1 ring-[var(--color-navy)]/5">
      <span className="relative inline-flex">
        <span className="absolute inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-coral)] opacity-75 animate-ping" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-coral)]" />
      </span>
      <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--color-coral)]">
        Live
      </span>
      <span className="h-3 w-px bg-[var(--color-navy)]/15" />
      <span className="text-[12px] font-semibold text-[var(--color-navy)] tabular-nums flex items-baseline gap-1.5">
        <span className="font-bold text-[13px]" style={{ fontVariantNumeric: "tabular-nums" }}>
          {formatted}
        </span>
        <span className="text-[10px] tracking-[0.16em] uppercase text-[var(--color-navy-300)] font-bold">
          Aussies financed
        </span>
      </span>
    </div>
  );
}
