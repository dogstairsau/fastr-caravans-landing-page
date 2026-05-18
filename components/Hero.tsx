import { HeroForm } from "./HeroForm";
import { MobileFormGate } from "./MobileFormGate";
import { BadgeCheck, MapPin, Clock } from "lucide-react";

const TRUST = [
  { icon: MapPin, label: "Australia's Caravan Finance Specialists" },
  { icon: Clock, label: "Approvals in hours" },
  { icon: BadgeCheck, label: "Best Rate Guaranteed" },
];

/**
 * Hero image options — flip HERO_VARIANT to compare looks.
 *  A — original couple in convertible at sunset (current)
 *  B — caravan at scenic campsite (mountain/coast vibe)
 *  C — RV on an open highway with mountains
 */
const HERO_VARIANTS = {
  A: "/hero/caravan-coast.png",
  B: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=2200&q=85&auto=format&fit=crop",
  C: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=2200&q=85&auto=format&fit=crop",
} as const;

const HERO_VARIANT: keyof typeof HERO_VARIANTS = "A";

export function Hero() {
  return (
    <section className="relative bg-[var(--color-sand)] overflow-hidden isolate">
      {/* Caravan coast background — still photo with a slow Ken-Burns zoom (no loop jitter) */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_VARIANTS[HERO_VARIANT]}
          alt=""
          aria-hidden
          className="hero-kenburns absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Mobile wash — vertical: keep text readable at top, video punches through lower */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[var(--color-sand)] from-10% via-[var(--color-sand)]/85 via-45% to-[var(--color-sand)]/30" />
        {/* Desktop wash — horizontal: text readable on left, video punches through on right */}
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

