import { Caravan, Truck, Mountain, Tent, Home, Anchor } from "lucide-react";

const TYPES = [
  { icon: Caravan, label: "Towed caravans" },
  { icon: Mountain, label: "Off-road & hybrid" },
  { icon: Truck, label: "Motorhomes" },
  { icon: Home, label: "Fifth-wheelers" },
  { icon: Tent, label: "Camper trailers" },
  { icon: Anchor, label: "Pop-tops & slide-ons" },
];

export function CaravanThing() {
  return (
    <section className="relative bg-[var(--color-lavender)] overflow-hidden py-20 md:py-32">
      {/* Editorial geometric accents only */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-white/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[480px] w-[480px] rounded-full bg-[var(--color-coral)]/8 blur-3xl" />

      <div className="container-page relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-[var(--font-display)] text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.92] tracking-[-0.045em] text-[var(--color-navy)]">
            Caravan <span className="coral-word">finance</span> is our thing.
          </h2>

          <p className="mt-6 text-xl md:text-2xl font-semibold text-[var(--color-navy)] max-w-2xl mx-auto">
            Most brokers treat caravan finance like car finance. Not us.
          </p>

          <p className="mt-5 text-lg text-[var(--color-navy-400)] max-w-xl mx-auto leading-relaxed">
            Caravans need different lenders, loan terms and structures. So knowing who to partner with makes all the difference.
          </p>
        </div>

        <div className="mt-12 md:mt-14 max-w-5xl mx-auto">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-navy-300)] mb-5">
            We fund every kind of van
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
            {TYPES.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.label}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-navy)] border border-[var(--color-navy)]/8 shadow-[0_1px_2px_rgba(15,14,43,0.04)]"
                >
                  <Icon size={16} className="text-[var(--color-coral)]" strokeWidth={2.2} />
                  {t.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
