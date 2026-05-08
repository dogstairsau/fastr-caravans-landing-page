"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { trackInitiateCheckout, buildFormUrl } from "@/lib/track";

const TERMS = [3, 5, 7];
const PHOTO =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=85&auto=format&fit=crop";

function pmt(rateMonthly: number, periods: number, principal: number) {
  if (rateMonthly === 0) return principal / periods;
  return (principal * rateMonthly) / (1 - Math.pow(1 + rateMonthly, -periods));
}
function fmtAud(n: number) {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(n);
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

  const onApply = () => {
    trackInitiateCheckout({ value: amount, content_name: "calculator_cta" });
    window.location.href = buildFormUrl(amount, "");
  };

  const sliderProgress = ((amount - 10000) / (250000 - 10000)) * 100;

  return (
    <section id="calculator" className="bg-[var(--color-sand)] py-20 md:py-24">
      <div className="container-page">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Photo — appears AFTER calculator on mobile, before on desktop */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[5/6] photo-arch shadow-[var(--shadow-pop)] max-w-md mx-auto lg:max-w-none">
              <Image
                src={PHOTO}
                alt="Open road, ready for the caravan"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 md:-bottom-6 md:-right-6 bg-[var(--color-yellow)] text-[var(--color-navy)] rounded-2xl px-5 py-3 shadow-[var(--shadow-pop)] rotate-[-3deg]">
              <div className="font-[var(--font-display)] text-2xl md:text-3xl font-bold tracking-[-0.025em] leading-none">
                {fmtAud(weekly)}
                <span className="text-sm md:text-base font-bold opacity-70 ml-0.5">/wk</span>
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-wider opacity-80 mt-0.5">
                Indicative weekly
              </div>
            </div>
          </div>

          {/* Right — copy + calculator card. Comes first on mobile */}
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-4">Repayment calculator</p>
            <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1] tracking-[-0.03em] text-[var(--color-navy)]">
              Run the numbers before you hit the <span className="coral-word">road.</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[var(--color-navy-400)] max-w-md leading-relaxed">
              Slide to your loan amount, pick a term — see what it costs each week.
            </p>

            {/* Calculator card */}
            <div className="mt-8 bg-white rounded-[var(--radius-card)] border border-[var(--color-navy-100)] shadow-[var(--shadow-soft)] p-6 md:p-7">
              {/* Amount */}
              <div className="flex items-baseline justify-between gap-3 mb-3">
                <label className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-navy-300)]">
                  Loan amount
                </label>
                <span className="font-[var(--font-display)] text-3xl md:text-[2.5rem] font-bold tracking-[-0.03em] text-[var(--color-navy)]">
                  {fmtAud(amount)}
                </span>
              </div>

              {/* Slider with custom track tint */}
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
              <div className="mt-7 flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-navy-300)] mr-1">
                  Term
                </span>
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
                    {t} yrs
                  </button>
                ))}
              </div>

              {/* Results */}
              <div className="mt-7 grid grid-cols-3 gap-3 md:gap-5 pt-6 border-t border-[var(--color-navy-100)]">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-navy-300)]">
                    Weekly
                  </div>
                  <div className="font-[var(--font-display)] text-[1.5rem] md:text-[1.875rem] font-bold tracking-[-0.025em] text-[var(--color-coral)] mt-1">
                    {fmtAud(weekly)}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-navy-300)]">
                    Monthly
                  </div>
                  <div className="font-[var(--font-display)] text-[1.5rem] md:text-[1.875rem] font-bold tracking-[-0.025em] text-[var(--color-navy)] mt-1">
                    {fmtAud(monthly)}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-navy-300)]">
                    Total
                  </div>
                  <div className="font-[var(--font-display)] text-[1.5rem] md:text-[1.875rem] font-bold tracking-[-0.025em] text-[var(--color-navy)] mt-1">
                    {fmtAud(total)}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button onClick={onApply} className="btn-coral w-full mt-7">
                Apply now <ArrowRight size={18} />
              </button>

              <p className="mt-4 text-[11px] text-[var(--color-navy-300)] leading-relaxed">
                *Indicative only at {(indicativeRate * 100).toFixed(2)}% p.a. over {years} years. Your actual rate depends on lender assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
