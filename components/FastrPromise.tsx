function CloverIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="currentColor" aria-hidden>
      <ellipse cx="20" cy="7" rx="6" ry="9" />
      <ellipse cx="20" cy="33" rx="6" ry="9" />
      <ellipse cx="7" cy="20" rx="9" ry="6" />
      <ellipse cx="33" cy="20" rx="9" ry="6" />
    </svg>
  );
}

function HourglassIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="currentColor" aria-hidden>
      <path d="M8 5 L32 5 L20 20 Z" />
      <path d="M8 35 L32 35 L20 20 Z" />
    </svg>
  );
}

function WavesIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 28"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 6 Q 20 26 35 6" />
      <path d="M5 16 Q 20 36 35 16" />
    </svg>
  );
}

const PILLARS = [
  {
    icon: CloverIcon,
    color: "var(--color-coral)",
    title: "Smarter tech stack.",
    body:
      "We use advanced AI and in-house tools to fast-track approvals and cut down paperwork.",
  },
  {
    icon: HourglassIcon,
    color: "var(--color-yellow)",
    title: "40+ lenders.",
    body:
      "More lenders means more chances of approval and more chances at finding the best deal sooner.",
  },
  {
    icon: WavesIcon,
    color: "var(--color-cyan)",
    title: "Specialist brokers.",
    body:
      "No call-centre scripts. Real brokers with deep lending experience to get you approved quicker.",
  },
];

export function FastrPromise() {
  return (
    <section className="relative bg-[var(--color-navy)] py-20 md:py-28 text-white overflow-hidden">
      {/* Floating brand accents — staging-style abstract shapes */}
      <img
        src="/decor/abstract-40.svg"
        alt=""
        aria-hidden
        className="hidden md:block absolute top-14 left-[6%] w-9 h-9 opacity-90 -rotate-[18deg] pointer-events-none"
      />
      <img
        src="/decor/abstract-206.svg"
        alt=""
        aria-hidden
        className="hidden md:block absolute bottom-24 right-[7%] w-10 h-10 opacity-90 rotate-[24deg] pointer-events-none"
      />
      <img
        src="/decor/abstract-40.svg"
        alt=""
        aria-hidden
        className="absolute top-32 right-[12%] w-7 h-7 opacity-70 rotate-[8deg] pointer-events-none"
      />

      <div className="relative container-page">
        {/* Headline */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[var(--font-display)] text-[clamp(1.75rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.03em]">
            <span className="block">
              Find the right <span className="text-[var(--color-coral)]">lender</span> in minutes.
            </span>
            <span className="block">
              Get approval in hours
              <sup className="text-[var(--color-yellow)] font-semibold">*</sup>.
            </span>
          </h2>
        </div>

        {/* Pillars */}
        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-y-12 md:gap-y-0 md:gap-x-10 lg:gap-x-16">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="text-center max-w-sm mx-auto px-2">
                <div
                  className="mx-auto mb-7 inline-flex items-center justify-center"
                  style={{ color: p.color, width: 44, height: 44 }}
                >
                  <Icon className="h-full w-full" />
                </div>
                <h3 className="font-[var(--font-display)] text-xl md:text-2xl font-semibold tracking-[-0.02em]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14.5px] md:text-[15px] leading-[1.65] text-white/65">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Divider + footnote */}
        <div className="mt-16 md:mt-20 max-w-6xl mx-auto">
          <div className="h-px bg-white/12" />
          <p className="mt-6 text-center text-[12.5px] italic text-white/55">
            *Approval times depend on lender assessment and documentation provided.
          </p>
        </div>
      </div>
    </section>
  );
}
