import Image from "next/image";
import { ArrowRight, Calculator } from "lucide-react";

// SWAP: client team photo when supplied
const TEAM =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=85&auto=format&fit=crop";

const POINTS = [
  "A team of Brokers who specialise in caravan finance",
  "Smarter loan structuring",
  "Lenders and dealership options across Australia",
  "Award-winning broker support from application through to settlement",
];

export function RealPeople() {
  return (
    <section className="bg-white pt-20 pb-14 md:pt-28 md:pb-16">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left: photo */}
          <div className="relative">
            <div className="relative aspect-[5/4] photo-arch shadow-[var(--shadow-pop)]">
              <Image
                src={TEAM}
                alt="The Fastr Finance team"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[var(--color-coral)] text-white rounded-2xl px-6 py-4 shadow-[var(--shadow-pop)] rotate-[-3deg]">
              <div className="font-[var(--font-display)] text-3xl md:text-4xl font-bold tracking-[-0.025em] leading-none">3,000+</div>
              <div className="text-xs font-semibold uppercase tracking-wider opacity-90 mt-1">Aussies financed</div>
            </div>
          </div>

          {/* Right: editorial list — staging-inspired */}
          <div>
            <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.025em]">
              At Fastr Finance, <span className="whitespace-nowrap">you&rsquo;ll get:</span>
            </h2>

            <ul className="mt-8 border-t border-[var(--color-navy)]/15">
              {POINTS.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-5 py-5 border-b border-[var(--color-navy)]/15"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-3 w-3 rounded-full bg-[var(--color-cyan)] shrink-0"
                  />
                  <span className="text-[1.05rem] md:text-[1.125rem] text-[var(--color-navy)] leading-snug">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[var(--color-navy-400)] text-base md:text-lg max-w-md">
              We&apos;ve helped more than <strong className="font-semibold text-[var(--color-navy)]">3,000 Aussies</strong> finance their caravan.
            </p>

            <p className="mt-3 font-bold text-[var(--color-navy)] text-lg">
              It&apos;s your turn.
            </p>

            {/* Dual CTA — staging signature: yellow primary + coral secondary */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#apply" className="btn-yellow">
                Get Approved <ArrowRight size={18} />
              </a>
              <a href="#calculator" className="btn-coral">
                <Calculator size={18} /> Calculate my repayments
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
