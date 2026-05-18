"use client";

import { useEffect, useState } from "react";
import { HeroForm } from "./HeroForm";
import { MobileFormGate } from "./MobileFormGate";
import { BadgeCheck, MapPin, Clock } from "lucide-react";

const TRUST = [
  { icon: MapPin, label: "Australia's Caravan Finance Specialists" },
  { icon: Clock, label: "Approvals in hours" },
  { icon: BadgeCheck, label: "Best Rate Guaranteed" },
];

/**
 * Hero background options — switch by visiting /?hero=A | B | C
 * (or edit DEFAULT_HERO_VARIANT below to lock one in).
 *
 *  A — new client-supplied looping video (no glitch at the loop point)
 *  B — caravan at scenic campsite (mountain/coast vibe, Unsplash)
 *  C — RV on an open highway with mountains (Unsplash)
 */
type HeroVariant = {
  kind: "video" | "image";
  src: string;
  poster?: string;
};

const HERO_VARIANTS: Record<"A" | "B" | "C", HeroVariant> = {
  A: { kind: "video", src: "/hero/caravan-coast-v2.mp4", poster: "/hero/caravan-coast.png" },
  B: {
    kind: "image",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=2200&q=85&auto=format&fit=crop",
  },
  C: {
    kind: "image",
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=2200&q=85&auto=format&fit=crop",
  },
};

const DEFAULT_HERO_VARIANT: keyof typeof HERO_VARIANTS = "A";

function useHeroVariant(): keyof typeof HERO_VARIANTS {
  const [variant, setVariant] = useState<keyof typeof HERO_VARIANTS>(DEFAULT_HERO_VARIANT);
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("hero")?.toUpperCase();
    if (param && param in HERO_VARIANTS) {
      setVariant(param as keyof typeof HERO_VARIANTS);
    }
  }, []);
  return variant;
}

export function Hero() {
  const variant = useHeroVariant();
  const config = HERO_VARIANTS[variant];

  return (
    <section className="relative bg-[var(--color-sand)] overflow-hidden isolate">
      {/* Background — looping video or still image with Ken-Burns zoom */}
      <div className="absolute inset-0 -z-10">
        {config.kind === "video" ? (
          <video
            key={config.src}
            src={config.src}
            poster={config.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={config.src}
            src={config.src}
            alt=""
            aria-hidden
            className="hero-kenburns absolute inset-0 w-full h-full object-cover object-center"
          />
        )}
        {/* Mobile wash — vertical */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[var(--color-sand)] from-10% via-[var(--color-sand)]/85 via-45% to-[var(--color-sand)]/30" />
        {/* Desktop wash — horizontal */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[var(--color-sand)] via-[var(--color-sand)]/55 to-transparent" />
        {/* Bottom feathering into the lender bar */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-sand)]/40" />
      </div>

      <div className="container-page relative pt-8 md:pt-20 pb-10 md:pb-24">
        <div className="grid lg:grid-cols-[1.15fr_minmax(380px,1fr)] gap-10 lg:gap-14 items-start">
          {/* Left — copy */}
          <div className="relative min-w-0">
            <h1 className="font-[var(--font-display)] text-[clamp(2.6rem,6vw,5.25rem)] font-bold tracking-[-0.05em] leading-[0.95] text-[var(--color-navy)]">
              Hassle Free
              <br />
              <span className="whitespace-nowrap">Caravan Loans,</span>
              <br />
              <span className="font-bold">Fastr<span className="coral-word">.</span></span>
            </h1>

            <p className="mt-5 md:mt-7 max-w-md text-base md:text-lg leading-snug text-[var(--color-navy)] text-balance">
              Instantly compares 40+ lenders to show your cheapest repayment.
            </p>

            {/* Trust signals — vertical list */}
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

            {/* Mobile-only: gated form CTA — sits after the trust row */}
            <div className="mt-6 md:mt-8">
              <MobileFormGate />
            </div>
          </div>

          {/* Right — form (desktop) */}
          <div className="hidden lg:block">
            <HeroForm variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
