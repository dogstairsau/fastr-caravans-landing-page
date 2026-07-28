const STEPS = [
  {
    n: "01",
    title: "Apply & get matched",
    body:
      "Tell us how much you're looking to borrow, plus a few quick details. We instantly compare 40+ lenders to find the best of the best for your circumstances.",
  },
  {
    n: "02",
    title: "Get approved",
    body:
      "We prepare your documents, handle the paperwork and walk you through every step of the approval.",
  },
  {
    n: "03",
    title: "Settle & drive away",
    body:
      "Dealer or private sale — we handle settlement and the seller comms. Pick up your caravan and focus on where you'll head first.",
  },
];

export function Process() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-page">
        {/* Header — left aligned, single column (no duplicate CTA) */}
        <div className="max-w-2xl mx-auto md:mx-0 max-w-6xl md:max-w-2xl mb-6 md:mb-10">
          <h2 className="font-[var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.02] tracking-[-0.05em] text-[var(--color-navy)]">
            How we help you get into your{" "}
            <span className="coral-word">dream caravan.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[var(--color-navy-400)] max-w-md">
            Three steps from first form to picking up the keys — most of it, we handle.
          </p>
        </div>

        {/* Steps — editorial list with hairline dividers */}
        <ol className="max-w-6xl mx-auto border-t border-[var(--color-navy)]/10">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="group grid grid-cols-[auto_1fr] md:grid-cols-[auto_minmax(220px,260px)_1fr] gap-x-5 md:gap-x-10 gap-y-2 py-4 md:py-5 border-b border-[var(--color-navy)]/10 transition"
            >
              <span
                className="font-[var(--font-display)] text-[2.25rem] md:text-[2.75rem] leading-none font-bold tracking-[-0.04em] text-[var(--color-coral)]/30 tabular-nums select-none group-hover:text-[var(--color-coral)] transition-colors"
              >
                {s.n}
              </span>
              <h3 className="font-[var(--font-display)] text-xl md:text-2xl font-bold tracking-[-0.025em] text-[var(--color-navy)] self-center">
                {s.title}
              </h3>
              <p className="col-start-2 md:col-start-3 text-[15px] md:text-[1.05rem] leading-[1.55] text-[var(--color-navy-400)] max-w-xl self-center">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="max-w-6xl mx-auto mt-6 text-xs text-[var(--color-navy-300)]">
          *Approval times depend on lender assessment and documentation provided.
        </p>
      </div>
    </section>
  );
}
