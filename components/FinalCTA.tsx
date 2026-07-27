import { HeroForm } from "./HeroForm";

export function FinalCTA() {
  return (
    <section className="relative bg-[var(--color-mint)] overflow-hidden py-20 md:py-28">
      {/* Editorial accent only */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[var(--color-coral)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-white/40 blur-3xl" />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-[1.2fr_minmax(380px,1fr)] gap-12 lg:gap-16 items-center">
          <div className="min-w-0">
            <h2 className="font-[var(--font-display)] text-[clamp(1.9rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-[-0.05em]">
              <span className="block">Your next</span>
              <span className="block">adventure starts</span>
              <span className="block">in <span className="coral-word whitespace-nowrap">60 seconds.</span></span>
            </h2>
            <p className="mt-5 md:mt-6 text-base md:text-xl text-[var(--color-navy)] max-w-lg leading-relaxed">
              Tell us how much. We&apos;ll match you to the cheapest of 40+ lenders. No credit score impact.
            </p>

            <div className="mt-7 md:mt-8 flex items-center gap-5 sm:gap-8 md:gap-10">
              <div>
                <div className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.025em] leading-none">60s</div>
                <div className="text-[10px] sm:text-xs font-bold text-[var(--color-navy-400)] uppercase tracking-[0.12em] mt-1">to match</div>
              </div>
              <div>
                <div className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.025em] leading-none coral-word">40+</div>
                <div className="text-[10px] sm:text-xs font-bold text-[var(--color-navy-400)] uppercase tracking-[0.12em] mt-1">lenders</div>
              </div>
              <div>
                <div className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.025em] leading-none">★ 5.0</div>
                <div className="text-[10px] sm:text-xs font-bold text-[var(--color-navy-400)] uppercase tracking-[0.12em] mt-1">Google</div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <HeroForm id="apply-final" variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
