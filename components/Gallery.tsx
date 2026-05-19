type Brand = {
  name: string;
  slug?: string;
  // Display tweaks for the text approximation when no logo is supplied
  weight?: number;
  letterSpacing?: string;
  uppercase?: boolean;
  italic?: boolean;
  // If real logo file at /public/brands/<slug>.<ext>, set true.
  useImage?: boolean;
  imageExt?: "svg" | "png" | "webp" | "jpg" | "avif";
  // For logos designed on dark backgrounds (white/gold artwork): invert so they read on light.
  invert?: boolean;
  // Render the logo in its original colours (skip the greyscale wall treatment).
  keepColor?: boolean;
  // Icon-only logos: render the mark + the brand name beside it.
  iconWithText?: boolean;
};

const BRANDS: Brand[] = [
  { name: "Supreme", slug: "supreme", useImage: true },
  { name: "Leader", slug: "leader", useImage: true },
  { name: "AVAN", slug: "avan", useImage: true, imageExt: "png" },
  { name: "Radiant", slug: "radiant", useImage: true, imageExt: "png" },
  { name: "Snowy River", slug: "snowy-river", useImage: true, imageExt: "png" },
  { name: "Titanium", slug: "titanium", useImage: true },
  { name: "Atlas", slug: "atlas", useImage: true, imageExt: "png", invert: true },
  { name: "Essential", slug: "essential", useImage: true, imageExt: "webp" },
];

const SLOT = "h-12 w-[140px] md:h-14 md:w-[170px] flex items-center justify-center shrink-0";
const INNER_IMG = "max-h-9 md:max-h-10 max-w-[120px] md:max-w-[150px] w-auto h-auto object-contain";

export function Gallery() {
  return (
    <section className="bg-[var(--color-sand)] py-14 md:py-20">
      <div className="container-page">
        {/* Header — bold statement leads, stat as supporting */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-[var(--font-display)] text-[clamp(2.2rem,5vw,3.75rem)] font-bold leading-[0.98] tracking-[-0.05em] text-[var(--color-navy)]">
            Every major Australian caravan brand. <span className="coral-word">Financed.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-[var(--color-navy-400)] max-w-md mx-auto">
            New, used, dealer or private — we finance{" "}
            <strong className="font-semibold text-[var(--color-navy)]">100+ brands</strong>{" "}
            across Australia.
          </p>
        </div>

        {/* Brand wall — uniform slots, mix of real logos + text approximations */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 md:gap-x-3 md:gap-y-3">
            {BRANDS.map((b) => (
              <BrandMark key={b.name} brand={b} />
            ))}
          </div>

          <p className="mt-10 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-navy-300)]">
            + 90 more brands
          </p>
        </div>
      </div>
    </section>
  );
}

function BrandMark({ brand }: { brand: Brand }) {
  if (brand.useImage && brand.slug) {
    const ext = brand.imageExt ?? "svg";
    // Greyscale all logos for a unified "trusted by" wall feel,
    // unless keepColor is set. Invert white-on-transparent logos
    // so they read dark on the cream background.
    const filter = brand.keepColor
      ? "none"
      : brand.invert
        ? "grayscale(1) invert(1) brightness(0.4)"
        : "grayscale(1)";

    if (brand.iconWithText) {
      return (
        <span className={`${SLOT} opacity-65 hover:opacity-100 transition gap-2`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/brands/${brand.slug}.${ext}`}
            alt=""
            className="max-h-7 md:max-h-8 w-auto h-auto object-contain"
            style={{ filter }}
          />
          <span
            className="text-[1.05rem] md:text-[1.25rem] font-bold tracking-[0.04em] uppercase text-[var(--color-navy)] leading-none"
          >
            {brand.name}
          </span>
        </span>
      );
    }

    return (
      <span className={`${SLOT} opacity-65 hover:opacity-100 transition`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/brands/${brand.slug}.${ext}`}
          alt={brand.name}
          className={INNER_IMG}
          style={{ filter }}
        />
      </span>
    );
  }

  return (
    <span
      className={`${SLOT} text-[var(--color-navy)] opacity-55 hover:opacity-100 transition`}
    >
      <span
        className="text-[1.05rem] md:text-[1.3rem] whitespace-nowrap leading-none"
        style={{
          fontWeight: brand.weight ?? 700,
          letterSpacing: brand.letterSpacing,
          textTransform: brand.uppercase ? "uppercase" : undefined,
          fontStyle: brand.italic ? "italic" : undefined,
        }}
      >
        {brand.name}
      </span>
    </span>
  );
}
