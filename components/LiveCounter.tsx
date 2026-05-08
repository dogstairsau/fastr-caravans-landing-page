"use client";

import { useEffect, useRef, useState } from "react";

interface LiveCounterProps {
  target: number;
  duration?: number;
  tickEveryMs?: number;
  tickIncrement?: number;
  format?: (n: number) => string;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function LiveCounter({
  target,
  duration = 1800,
  tickEveryMs,
  tickIncrement = 1,
  format = (n) => n.toLocaleString("en-AU"),
  prefix = "",
  suffix = "",
  className = "",
}: LiveCounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();

          const animate = (t: number) => {
            const elapsed = t - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setValue(Math.floor(target * eased));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setValue(target);
              if (tickEveryMs) {
                intervalId = setInterval(() => {
                  setValue((v) => v + tickIncrement);
                }, tickEveryMs);
              }
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (intervalId) clearInterval(intervalId);
    };
  }, [target, duration, tickEveryMs, tickIncrement]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format(value)}
      {suffix}
    </span>
  );
}
