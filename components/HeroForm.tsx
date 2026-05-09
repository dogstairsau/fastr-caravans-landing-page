"use client";

import { useState, useMemo } from "react";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackLead, trackInitiateCheckout, buildFormUrl } from "@/lib/track";

const PRESETS = [30000, 50000, 80000, 120000];
const EST_RATE_PCT = 7.99;
const EST_TERM_YEARS = 7;

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(n);
}

function calcMonthly(principal: number, ratePct = EST_RATE_PCT, years = EST_TERM_YEARS) {
  const r = ratePct / 100 / 12;
  const n = years * 12;
  return Math.round((principal * r) / (1 - Math.pow(1 + r, -n)));
}

function GoogleProofRow() {
  return (
    <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[var(--color-navy-300)]">
      <GoogleG className="w-4 h-4" />
      <span>
        <span className="font-bold text-[var(--color-navy)]">200+ five-star reviews</span> on Google
      </span>
    </div>
  );
}

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.6 2.4-7.2 2.4-5.2 0-9.7-3.4-11.3-8L6.1 32.9C9.5 39.4 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C41.9 35.6 44 30.2 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

function normalisePhone(input: string) {
  return input.replace(/[^\d+]/g, "");
}

function isValidAuPhone(input: string) {
  const digits = input.replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 12;
}

export function HeroForm({ id = "apply", variant = "light" }: { id?: string; variant?: "light" | "navy" }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [amount, setAmount] = useState(50000);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  const monthly = useMemo(
    () => (amount >= 5000 ? calcMonthly(amount) : 0),
    [amount]
  );

  const onAmountInput = (raw: string) => {
    const digits = raw.replace(/\D/g, "");
    const next = digits === "" ? 0 : Math.min(500000, parseInt(digits, 10));
    setAmount(next);
  };

  const onNext = () => {
    setError(null);
    if (amount < 5000) {
      setError("Minimum loan amount is $5,000.");
      return;
    }
    trackInitiateCheckout({ value: amount });
    setStep(2);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = normalisePhone(phone);
    if (!isValidAuPhone(cleaned)) {
      setError("Please enter a valid Australian mobile number.");
      return;
    }
    trackLead({ value: amount });
    window.location.href = buildFormUrl(amount, cleaned);
  };

  const isNavy = variant === "navy";
  const cardClass = useMemo(
    () =>
      isNavy
        ? "bg-[var(--color-navy)] text-white border border-white/10"
        : "bg-white text-[var(--color-navy)] border border-[var(--color-navy-100)]",
    [isNavy]
  );
  const subtleText = isNavy ? "text-white/70" : "text-[var(--color-navy-300)]";

  return (
    <div id={id} className={`w-full h-full rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-7 ${cardClass}`}>
      <div className="flex items-center justify-between gap-3 mb-5">
        <p className={`text-[11px] font-bold tracking-[0.18em] uppercase ${subtleText}`}>
          Step {step} / 2 <span className="opacity-60">· 30 sec</span>
        </p>
        <div className="flex items-center gap-1">
          <span className="h-1 w-10 rounded-full bg-[var(--color-coral)]" />
          <span
            className={`h-1 w-10 rounded-full transition ${step === 2 ? "bg-[var(--color-coral)]" : isNavy ? "bg-white/15" : "bg-[var(--color-navy-100)]"}`}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="font-[var(--font-display)] text-[1.7rem] md:text-[2rem] font-bold leading-[1.05] tracking-[-0.025em] mb-5">
              How much would you like to <span className="coral-word">borrow?</span>
            </h3>

            <label className={`block text-[11px] font-bold uppercase tracking-[0.18em] mb-1.5 ${subtleText}`}>
              Loan amount
            </label>
            <div
              className={`relative flex items-center rounded-2xl border transition ${
                isNavy
                  ? "bg-white/5 border-white/15 focus-within:border-[var(--color-coral)]"
                  : "bg-[var(--color-navy-50)] border-[var(--color-navy-100)] focus-within:border-[var(--color-coral)] focus-within:bg-white"
              }`}
            >
              <span className="pl-5 pr-1 font-[var(--font-display)] text-4xl md:text-5xl font-bold tracking-[-0.03em] select-none">$</span>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9,]*"
                aria-label="Loan amount"
                value={amount === 0 ? "" : amount.toLocaleString("en-AU")}
                onChange={(e) => onAmountInput(e.target.value)}
                onFocus={(e) => e.target.select()}
                placeholder="50,000"
                className="flex-1 min-w-0 bg-transparent py-4 pr-5 font-[var(--font-display)] text-4xl md:text-5xl font-bold tracking-[-0.03em] outline-none placeholder:text-[var(--color-navy-200)]"
              />
            </div>

            <div className="mt-3 mb-5 flex items-center justify-between text-xs">
              <span className={subtleText}>
                {monthly > 0 ? (
                  <>
                    <span className="font-bold text-[var(--color-navy)] text-sm">≈ {formatCurrency(monthly)}/mo</span>
                    <span className="ml-1.5 opacity-80">· {EST_TERM_YEARS}-yr est. at {EST_RATE_PCT}% p.a.</span>
                  </>
                ) : (
                  <>Min $5,000 · max $500,000</>
                )}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {PRESETS.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setAmount(v)}
                  className={`rounded-full border text-xs font-semibold py-1.5 px-3 transition ${
                    amount === v
                      ? "bg-[var(--color-coral)] border-[var(--color-coral)] text-white"
                      : isNavy
                        ? "border-white/15 text-white/80 hover:border-white/40"
                        : "border-[var(--color-navy-100)] text-[var(--color-navy)] hover:border-[var(--color-navy)]"
                  }`}
                >
                  ${v / 1000}k
                </button>
              ))}
            </div>

            {error && <p className="mb-3 text-xs text-[var(--color-coral)]">{error}</p>}

            <button type="button" onClick={onNext} className="btn-coral w-full">
              Apply now <ArrowRight size={18} />
            </button>

            <p className={`mt-3 flex items-center justify-center gap-1.5 text-xs ${subtleText}`}>
              <ShieldCheck size={14} /> Won&apos;t affect your credit score
            </p>

            <p className="mt-3 text-center text-[12.5px] text-[var(--color-navy-400)]">
              Not sure how much you need?{" "}
              <a
                href="tel:1300604183"
                className="font-semibold text-[var(--color-navy)] underline decoration-[var(--color-coral)] decoration-2 underline-offset-[3px] hover:decoration-[3px] transition"
              >
                Talk to a broker →
              </a>
            </p>

            <GoogleProofRow />
          </motion.div>
        ) : (
          <motion.form
            key="step2"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="font-[var(--font-display)] text-[1.7rem] md:text-[2rem] font-bold leading-[1.05] tracking-[-0.025em] mb-2">
              Where should we <span className="coral-word whitespace-nowrap">send it?</span>
            </h3>
            <p className={`text-sm mb-5 ${subtleText}`}>
              Your <span className="font-bold text-[var(--color-navy)]">≈ {formatCurrency(monthly)}/mo</span> estimate plus the cheapest 3 lender matches — by text in under 60 seconds.
            </p>

            <label className={`block text-[11px] font-bold uppercase tracking-[0.18em] mb-1.5 ${subtleText}`}>
              Mobile number
            </label>
            <input
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              autoFocus
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="04XX XXX XXX"
              className={`w-full rounded-2xl px-4 py-4 text-lg font-medium outline-none transition ${
                isNavy
                  ? "bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:border-[var(--color-coral)]"
                  : "bg-[var(--color-navy-50)] border border-[var(--color-navy-100)] focus:border-[var(--color-coral)] focus:bg-white"
              }`}
            />
            {error && <p className="mt-2 text-xs text-[var(--color-coral)]">{error}</p>}

            <button type="submit" className="btn-coral w-full mt-4">
              Send my repayments <ArrowRight size={18} />
            </button>

            <p className={`mt-3 flex items-center justify-center gap-1.5 text-xs ${subtleText}`}>
              <ShieldCheck size={14} /> Won&apos;t affect your credit score
            </p>

            <GoogleProofRow />

            <div className="mt-4 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => setStep(1)}
                className={isNavy ? "text-white/60 hover:text-white" : "text-[var(--color-navy-300)] hover:text-[var(--color-navy)]"}
              >
                ← Change amount
              </button>
              <span className={`flex items-center gap-1 ${subtleText}`}>
                <Lock size={12} /> 256-bit secure
              </span>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
