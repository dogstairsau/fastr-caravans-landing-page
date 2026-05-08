import { HeroForm } from "./HeroForm";

export function FinalCTA() {
  return (
    <section className="relative bg-[var(--color-mint)] overflow-hidden py-20 md:py-28">
      {/* Editorial accent only */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[var(--color-coral)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-white/40 blur-3xl" />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-[1.2fr_minmax(380px,1fr)] gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[0.96] tracking-[-0.035em]">
              Your next adventure starts in <span className="coral-word">60 seconds.</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-[var(--color-navy)] max-w-lg leading-relaxed">
              Tell us how much. Drop your number. We&apos;ll match you to the cheapest of 30+ lenders. No credit score impact.
            </p>

            <div className="mt-8 flex items-center gap-8 md:gap-10">
              <div>
                <div className="font-[var(--font-display)] text-3xl md:text-4xl font-bold tracking-[-0.025em] leading-none">60s</div>
                <div className="text-xs font-bold text-[var(--color-navy-400)] uppercase tracking-[0.12em] mt-1">to match</div>
              </div>
              <div>
                <div className="font-[var(--font-display)] text-3xl md:text-4xl font-bold tracking-[-0.025em] leading-none coral-word">30+</div>
                <div className="text-xs font-bold text-[var(--color-navy-400)] uppercase tracking-[0.12em] mt-1">lenders</div>
              </div>
              <div>
                <div className="font-[var(--font-display)] text-3xl md:text-4xl font-bold tracking-[-0.025em] leading-none">★ 5.0</div>
                <div className="text-xs font-bold text-[var(--color-navy-400)] uppercase tracking-[0.12em] mt-1">Google</div>
              </div>
            </div>
          </div>

          <div>
            <HeroForm id="apply-final" variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
