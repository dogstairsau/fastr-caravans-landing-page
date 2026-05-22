"use client";

import { useEffect, useState } from "react";
import { HeroForm } from "./HeroForm";
import { MobileFormGate } from "./MobileFormGate";
import { BadgeCheck, MapPin, Clock, ArrowRight, Star } from "lucide-react";

const TRUST = [
  { icon: MapPin, label: "Australia's Caravan Finance Specialists" },
  { icon: Clock, label: "Approvals in hours" },
  { icon: BadgeCheck, label: "Best Rate Guaranteed" },
];

/**
 * Three full hero design directions — switch by visiting:
 *   /concept       → A (default)
 *   /concept?hero=B → cinematic full-bleed overlay
 *   /concept?hero=C → mint illustrated brand-forward
 */
type HeroVariantKey = "A" | "B" | "C";
const DEFAULT_HERO_VARIANT: HeroVariantKey = "A";

function useHeroVariant(): HeroVariantKey {
  const [v, setV] = useState<HeroVariantKey>(DEFAULT_HERO_VARIANT);
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("hero")?.toUpperCase();
    if (p === "A" || p === "B" || p === "C") setV(p);
  }, []);
  return v;
}

export function Hero() {
  const variant = useHeroVariant();
  if (variant === "B") return <HeroVariantB />;
  if (variant === "C") return <HeroVariantC />;
  return <HeroVariantA />;
}

/* ------------------------------------------------------------------ */
/* VARIANT A — Current. Video bg + sand fade, copy left, form right.   */
/* ------------------------------------------------------------------ */
function HeroVariantA() {
  return (
    <section className="relative bg-[var(--color-sand)] overflow-hidden isolate">
      <div className="absolute inset-0 -z-10">
        <video
          src="/hero/caravan-coast-v2.mp4"
          poster="/hero/caravan-coast.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[var(--color-sand)] from-10% via-[var(--color-sand)]/85 via-45% to-[var(--color-sand)]/30" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[var(--color-sand)] via-[var(--color-sand)]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-sand)]/40" />
      </div>

      <div className="container-page relative pt-24 md:pt-28 pb-10 md:pb-24">
        <div className="grid lg:grid-cols-[1.15fr_minmax(380px,1fr)] gap-10 lg:gap-14 items-start">
          <div className="relative min-w-0">
            <h1 className="font-[var(--font-display)] text-[clamp(2.6rem,6vw,5.25rem)] font-extrabold tracking-[-0.025em] leading-[1.02] text-[var(--color-navy)]">
              Hassle Free
              <br />
              <span className="whitespace-nowrap">Caravan Loans,</span>
              <br />
              Fastr<span className="text-[var(--color-coral)]">.</span>
            </h1>
            <p className="mt-5 md:mt-7 max-w-md text-base md:text-lg leading-snug text-[var(--color-navy)] text-balance">
              Instantly compares 40+ lenders to show your cheapest repayment.
            </p>
            <ul className="mt-5 md:mt-7 space-y-2.5">
              {TRUST.map((t) => {
                const Icon = t.icon;
                return (
                  <li
                    key={t.label}
                    className="flex items-center gap-3 text-sm font-semibold text-[var(--color-navy)]"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--color-navy)] text-white shrink-0">
                      <Icon size={14} strokeWidth={2.25} />
                    </span>
                    {t.label}
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 md:mt-8">
              <MobileFormGate />
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroForm variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* VARIANT B — Cinematic. Full-bleed video, centered overlay copy,      */
/* form card sits in a clean section directly beneath the hero.        */
/* ------------------------------------------------------------------ */
function HeroVariantB() {
  return (
    <>
      <section className="relative isolate overflow-hidden h-[78vh] min-h-[600px] md:h-[88vh] md:min-h-[720px] flex items-center justify-center text-white">
        {/* Full-bleed video — no sand fade so the image owns the space */}
        <video
          src="/hero/caravan-coast-v2.mp4"
          poster="/hero/caravan-coast.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 -z-10 w-full h-full object-cover object-center"
        />
        {/* Cinematic gradient overlay — keeps text legible without washing the image */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--color-navy)]/55 via-[var(--color-navy)]/35 to-[var(--color-navy)]/75" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--color-navy)]/40 via-transparent to-transparent" />

        <div className="container-page relative text-center max-w-3xl">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="inline-flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={11} fill="#FCB400" stroke="#FCB400" />
              ))}
            </span>
            <span className="opacity-90">200+ five-star Google reviews</span>
          </p>

          <h1 className="mt-6 font-[var(--font-display)] text-[clamp(2.9rem,7vw,6rem)] font-extrabold tracking-[-0.025em] leading-[1.02]">
            Hassle Free
            <br />
            <span className="whitespace-nowrap">Caravan Loans,</span>
            <br />
            <span>Fastr<span className="text-[var(--color-coral)]">.</span></span>
          </h1>

          <p className="mt-6 md:mt-7 mx-auto max-w-xl text-lg md:text-xl leading-snug text-white/90 text-balance">
            Instantly compares 40+ lenders to show your cheapest repayment. No credit score impact.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* Mobile: send straight to the external form. Desktop: anchor to the form section below. */}
            <a
              href="https://fastrfinance.com.au/form/classic?asset_type=caravan"
              className="btn-coral text-base md:text-lg py-4 px-7 lg:hidden"
            >
              Get My Options <ArrowRight size={18} />
            </a>
            <a href="#hero-form" className="btn-coral text-base md:text-lg py-4 px-7 hidden lg:inline-flex">
              Get My Options <ArrowRight size={18} />
            </a>
            <a
              href="tel:1300604183"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-3 text-sm md:text-base font-semibold text-white/90 hover:text-white transition"
            >
              or call 1300 604 183 →
            </a>
          </div>

          {/* Trust strip — always three across */}
          <ul className="mt-10 md:mt-14 grid grid-cols-3 items-center justify-items-center gap-x-4 sm:gap-x-6 md:gap-x-10 text-[11.5px] sm:text-[12.5px] md:text-sm font-semibold text-white/90 max-w-4xl mx-auto">
            {TRUST.map((t) => {
              const Icon = t.icon;
              return (
                <li key={t.label} className="inline-flex items-center gap-2 text-center sm:text-left">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur-md text-white">
                    <Icon size={12} strokeWidth={2.5} />
                  </span>
                  <span className="leading-tight">{t.label}</span>
                </li>
              );
            })}
          </ul>

          {/* Animated scroll cue — sits directly below the three trust pillars. Desktop only (form lives below on desktop). */}
          <a
            href="#hero-form"
            aria-label="Scroll to form"
            className="hero-scroll-cue mt-8 md:mt-10 hidden lg:inline-flex flex-col items-center gap-3 text-white/90 hover:text-white transition group"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.24em]">
              Start in 60 seconds
            </span>
            <span className="hero-scroll-cue__chevron grid h-10 w-10 md:h-12 md:w-12 place-items-center rounded-full border-2 border-white/60 group-hover:border-white transition">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* Form lives in its own clean section directly below the hero — desktop only.
          On mobile, the hero CTA goes straight to the external form. */}
      <section id="hero-form" className="hidden lg:block relative bg-white py-16 md:py-24">
        <div className="container-page">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-[var(--font-display)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.035em] text-[var(--color-navy)]">
                Start in 60 seconds.
              </h2>
              <p className="mt-3 text-base md:text-lg text-[var(--color-navy-400)]">
                Won&apos;t affect your credit score.
              </p>
            </div>
            <HeroForm id="apply" variant="light" />
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* VARIANT C — Mint Illustrated. Solid mint gradient, decorative brand */
/* mark + dot pattern. No photo. Same skeleton (text-left, form-right). */
/* ------------------------------------------------------------------ */
function HeroVariantC() {
  return (
    <section className="relative overflow-hidden isolate bg-gradient-to-br from-[var(--color-mint)] via-[var(--color-mint)] to-[var(--color-mint-deep)]">
      {/* Decorative brand mark watermark (right) — large, low opacity */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/fastr-mark.png"
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute right-[-8%] top-[6%] w-[42vw] max-w-[640px] opacity-15 rotate-[8deg] hidden md:block"
      />
      {/* Decorative dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15,14,43,0.07) 1px, transparent 1.2px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
        }}
      />
      {/* Soft floating colour orbs to add depth */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[var(--color-cyan)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[460px] w-[460px] rounded-full bg-[var(--color-yellow)]/20 blur-3xl" />

      <div className="container-page relative pt-24 md:pt-32 pb-12 md:pb-28">
        <div className="grid lg:grid-cols-[1.15fr_minmax(380px,1fr)] gap-10 lg:gap-14 items-start">
          <div className="relative min-w-0">
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-[var(--color-navy)]/8 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-navy)]">
              <span className="inline-flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} fill="#FCB400" stroke="#FCB400" />
                ))}
              </span>
              <span>200+ Google reviews</span>
            </p>

            <h1 className="mt-5 font-[var(--font-display)] text-[clamp(2.7rem,6.2vw,5.5rem)] font-extrabold tracking-[-0.025em] leading-[1.02] text-[var(--color-navy)]">
              Hassle Free
              <br />
              <span className="whitespace-nowrap">Caravan Loans,</span>
              <br />
              <span className="font-bold">Fastr<span className="text-[var(--color-coral)]">.</span></span>
            </h1>

            <p className="mt-5 md:mt-7 max-w-md text-base md:text-lg leading-snug text-[var(--color-navy)] text-balance">
              Instantly compares 40+ lenders to show your cheapest repayment.
            </p>

            <ul className="mt-5 md:mt-7 space-y-2.5">
              {TRUST.map((t) => {
                const Icon = t.icon;
                return (
                  <li
                    key={t.label}
                    className="flex items-center gap-3 text-sm font-semibold text-[var(--color-navy)]"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--color-navy)] text-white shrink-0">
                      <Icon size={14} strokeWidth={2.25} />
                    </span>
                    {t.label}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 md:mt-8">
              <MobileFormGate />
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroForm variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
