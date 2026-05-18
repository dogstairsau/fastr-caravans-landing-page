"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { trackInitiateCheckout, buildFormUrl } from "@/lib/track";

const TERMS = [3, 5, 7];

function pmt(rateMonthly: number, periods: number, principal: number) {
  if (rateMonthly === 0) return principal / periods;
  return (principal * rateMonthly) / (1 - Math.pow(1 + rateMonthly, -periods));
}
function fmtAud(n: number) {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(n);
}

// Smoothly tween a number toward target. Used for the count-up effect on the result panel.
function useAnimatedNumber(target: number, durationMs = 350) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  const targetRef = useRef(target);

  useEffect(() => {
    fromRef.current = value;
    targetRef.current = target;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = fromRef.current + (targetRef.current - fromRef.current) * eased;
      setValue(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return value;
}

export function Calculator() {
  const [amount, setAmount] = useState(60000);
  const [years, setYears] = useState(5);
  const indicativeRate = 0.0699;

  const { weekly, monthly, total } = useMemo(() => {
    const months = years * 12;
    const m = pmt(indicativeRate / 12, months, amount);
    return { monthly: m, weekly: (m * 12) / 52, total: m * months };
  }, [amount, years]);

  // Animate the headline weekly number for the count-up effect
  const animatedWeekly = useAnimatedNumber(weekly);

  const onApply = () => {
    trackInitiateCheckout({ value: amount, content_name: "calculator_cta" });
    window.location.href = buildFormUrl(amount, "");
  };

  const sliderProgress = ((amount - 10000) / (250000 - 10000)) * 100;

  return (
    <section id="calculator" className="bg-[var(--color-sand)] py-10 md:py-14">
      <div className="container-page">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-xl mb-10 md:mb-12">
            <p className="eyebrow mb-4">Repayment calculator</p>
            <h2 className="font-[var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1] tracking-[-0.045em] text-[var(--color-navy)]">
              Run the numbers before you hit the <span className="coral-word">road.</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[var(--color-navy-400)] max-w-md leading-relaxed">
              Slide to your loan amount, pick a term — see what it&rsquo;ll cost each week.
            </p>
          </div>

          {/* Calculator: inputs left, result right */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-5 lg:gap-6 rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-pop)]">
            {/* Inputs panel */}
            <div className="bg-white p-6 md:p-8">
              {/* Loan amount */}
              <div className="flex items-baseline justify-between gap-3 mb-3">
                <label className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-navy-300)]">
                  Loan amount
                </label>
                <span className="font-[var(--font-display)] text-[1.75rem] md:text-[2.25rem] font-bold tracking-[-0.03em] text-[var(--color-navy)] tabular-nums">
                  {fmtAud(amount)}
                </span>
              </div>

              <div className="relative">
                <input
                  type="range"
                  min={10000}
                  max={250000}
                  step={1000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full appearance-none bg-transparent cursor-pointer
                    [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full
                    [&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--color-coral)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-[0_4px_10px_rgba(255,72,94,0.4)] [&::-webkit-slider-thumb]:-mt-1.5
                    [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[var(--color-coral)] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-[0_4px_10px_rgba(255,72,94,0.4)]"
                  style={{
                    background: `linear-gradient(to right, var(--color-coral) 0%, var(--color-coral) ${sliderProgress}%, rgb(226 226 235) ${sliderProgress}%, rgb(226 226 235) 100%)`,
                    height: 8,
                    borderRadius: 999,
                  }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-[var(--color-navy-300)] mt-2">
                <span>$10k</span>
                <span>$250k</span>
              </div>

              {/* Term */}
              <div className="mt-7">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-navy-300)] mb-3">
                  Term
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {TERMS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setYears(t)}
                      className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                        years === t
                          ? "bg-[var(--color-coral)] border-[var(--color-coral)] text-white shadow-[0_4px_12px_rgba(255,72,94,0.25)]"
                          : "bg-white border-[var(--color-navy-100)] text-[var(--color-navy)] hover:border-[var(--color-navy)]"
                      }`}
                    >
                      {t} years
                    </button>
                  ))}
                </div>
              </div>

              {/* Footnote */}
              <p className="mt-7 text-[11px] text-[var(--color-navy-300)] leading-relaxed">
                Indicative only at {(indicativeRate * 100).toFixed(2)}% p.a. Your actual rate depends on lender assessment.
              </p>
            </div>

            {/* Result panel — navy with big weekly number */}
            <div className="bg-[var(--color-navy)] text-white p-6 md:p-8 flex flex-col justify-center min-h-[320px] md:min-h-[360px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                Estimated weekly repayment from
              </p>

              <div className="mt-3 md:mt-4">
                <span className="font-[var(--font-display)] text-[clamp(3.5rem,8vw,5.5rem)] font-bold leading-none tracking-[-0.04em] tabular-nums">
                  {fmtAud(animatedWeekly)}
                </span>
                <span className="font-[var(--font-display)] text-2xl md:text-3xl font-bold opacity-60 ml-1">/wk</span>
              </div>

              <div className="mt-5 md:mt-6 grid grid-cols-2 gap-4 pt-5 md:pt-6 border-t border-white/15">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                    Monthly
                  </div>
                  <div className="font-[var(--font-display)] text-xl md:text-2xl font-bold tracking-[-0.025em] mt-0.5 tabular-nums">
                    {fmtAud(monthly)}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                    Total over {years} yrs
                  </div>
                  <div className="font-[var(--font-display)] text-xl md:text-2xl font-bold tracking-[-0.025em] mt-0.5 tabular-nums">
                    {fmtAud(total)}
                  </div>
                </div>
              </div>

              <button
                onClick={onApply}
                className="mt-6 md:mt-7 inline-flex items-center justify-center gap-2 bg-white text-[var(--color-navy)] font-semibold rounded-full px-6 py-3.5 text-base hover:translate-y-[-1px] transition"
              >
                Get My Real Options <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
