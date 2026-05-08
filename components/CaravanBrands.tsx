import Image from "next/image";

// SWAP: client to confirm photo. Coastal/outback caravan shot ties this section
// to brand finance message visually.
const BG =
  "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=1600&q=80&auto=format&fit=crop";

const BRANDS = [
  { name: "Jayco", tagline: "Australia's #1" },
  { name: "Avida", tagline: "Family-owned" },
  { name: "New Age", tagline: "Off-road ready" },
  { name: "Lotus", tagline: "Premium build" },
  { name: "Crusader", tagline: "Family touring" },
];

export function CaravanBrands() {
  return (
    <section className="relative py-14 md:py-20 bg-white overflow-hidden">
      {/* Decorative photo strip on the right (desktop only) */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[35%] opacity-[0.07]">
        <Image src={BG} alt="" fill className="object-cover" sizes="35vw" />
      </div>

      <div className="container-page relative">
        <div className="text-center mb-10">
          <p className="eyebrow">We finance every major brand</p>
          <h2 className="font-[var(--font-display)] mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            New, used, dealer or private &mdash; we&apos;ve got you.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className="group rounded-2xl border border-[var(--color-navy-100)] bg-white p-6 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-pop)] hover:-translate-y-0.5 transition"
            >
              <div className="font-[var(--font-display)] text-2xl md:text-3xl font-bold tracking-tight">
                {b.name}
              </div>
              <div className="mt-1 text-xs text-[var(--color-navy-300)] uppercase tracking-wider">{b.tagline}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--color-navy-300)]">
          Don&apos;t see your brand? <a href="#apply" className="text-[var(--color-cyan-deep)] font-semibold hover:underline">We finance them all.</a>
        </p>
      </div>
    </section>
  );
}
