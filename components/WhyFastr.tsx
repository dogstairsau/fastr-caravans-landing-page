import Image from "next/image";
import { ArrowRight, Caravan, Mountain, Truck, Home, Tent } from "lucide-react";

const TEAM =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=85&auto=format&fit=crop";

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
    icon: HourglassIcon,
    color: "var(--color-yellow)",
    title: "40+ lenders, one form",
    body: "More lenders means more chances of approval and a sharper rate.",
  },
  {
    icon: WavesIcon,
    color: "var(--color-cyan)",
    title: "Specialist brokers, no scripts",
    body: "Real brokers with deep caravan-lending experience — not a call centre.",
  },
];

const VAN_TYPES = [
  { icon: Caravan, label: "Towed caravans" },
  { icon: Mountain, label: "Off-road & hybrid" },
  { icon: Truck, label: "Motorhomes" },
  { icon: Home, label: "Fifth-wheelers" },
  { icon: Tent, label: "Camper trailers" },
];

export function WhyFastr() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left — team photo with sticker */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[5/4] photo-arch shadow-[var(--shadow-pop)] max-w-md mx-auto lg:max-w-none">
              <Image
                src={TEAM}
                alt="The Fastr Finance team"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[var(--color-coral)] text-white rounded-2xl px-6 py-4 shadow-[var(--shadow-pop)] rotate-[-3deg]">
              <div className="font-[var(--font-display)] text-3xl md:text-4xl font-bold tracking-[-0.025em] leading-none">
                3,000+
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider opacity-90 mt-1">
                Aussies financed
              </div>
            </div>
          </div>

          {/* Right — copy + pillars */}
          <div className="order-1 lg:order-2">
            <h2 className="font-[var(--font-display)] text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.05em] text-[var(--color-navy)]">
              Most brokers treat caravan finance like car finance.{" "}
              <span className="coral-word">We don&rsquo;t.</span>
            </h2>
            <p className="mt-5 text-base md:text-[1.05rem] text-[var(--color-navy-400)] max-w-xl leading-relaxed">
              Caravans need different lenders, terms and structures — and that&rsquo;s
              all we do. We&rsquo;ve helped more than{" "}
              <strong className="font-semibold text-[var(--color-navy)]">3,000 Aussies</strong>{" "}
              get on the road, and we&rsquo;d like you to be next.
            </p>

            {/* Pillars — vertical list, no card chrome */}
            <ul className="mt-8 space-y-5">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.title} className="flex items-start gap-4">
                    <span
                      className="shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ color: p.color, width: 28, height: 28 }}
                    >
                      <Icon className="h-full w-full" />
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--color-navy)] text-[15px]">
                        {p.title}
                      </p>
                      <p className="text-[14.5px] text-[var(--color-navy-400)] leading-snug mt-0.5 max-w-md">
                        {p.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#apply" className="btn-coral">
                Apply now <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Van types row — quiet trust signal */}
        <div className="mt-10 md:mt-14 max-w-5xl mx-auto">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-navy-300)] mb-5">
            We fund every kind of van
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
            {VAN_TYPES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.label}
                  className="inline-flex items-center gap-2 rounded-full bg-white pl-3 pr-4 py-2.5 text-sm font-semibold text-[var(--color-navy)] border border-[var(--color-navy)]/10 shadow-[0_1px_2px_rgba(15,14,43,0.04),0_8px_20px_-12px_rgba(15,14,43,0.15)] hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(15,14,43,0.06),0_12px_28px_-12px_rgba(15,14,43,0.22)] transition-all"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--color-coral-soft)] text-[var(--color-coral)]">
                    <Icon size={13} strokeWidth={2.4} />
                  </span>
                  {v.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
