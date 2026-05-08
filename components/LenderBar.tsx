// To swap in real logos: drop SVG files into public/logos/ named after the
// `slug`, e.g. public/logos/westpac.svg. The component will use the SVG when
// `useImage: true` is set on a lender below.

type Lender = {
  name: string;
  slug: string;
  // Visual hint for the wordmark: most brands use a tighter, weightier mark.
  weight?: number;
  letterSpacing?: string;
  uppercase?: boolean;
  italic?: boolean;
  // Optional small mark rendered before the name (an inline SVG component).
  mark?: () => React.ReactElement;
  // If real logo file exists at /public/logos/<slug>.<ext>, set true.
  // Defaults to .svg; override with `imageExt: "png"` (or jpg/webp) for raster files.
  useImage?: boolean;
  imageExt?: "svg" | "png" | "jpg" | "webp";
};

const LENDERS: Lender[] = [
  { name: "Westpac", slug: "westpac", useImage: true },
  { name: "Macquarie", slug: "macquarie", useImage: true },
  { name: "Plenti", slug: "plenti", useImage: true },
  { name: "Pepper Money", slug: "pepper", useImage: true },
  { name: "Wisr", slug: "wisr", useImage: true },
  { name: "Money3", slug: "money3", useImage: true },
  { name: "Latitude", slug: "latitude", useImage: true },
  { name: "Liberty", slug: "liberty", useImage: true },
  { name: "Metro Finance", slug: "metro", useImage: true, imageExt: "png" },
  { name: "firstmac", slug: "firstmac", useImage: true },
  { name: "BOQ", slug: "boq", useImage: true },
  { name: "ANZ", slug: "anz", useImage: true, imageExt: "png" },
  { name: "AMMF", slug: "ammf", useImage: true, imageExt: "png" },
  { name: "Now Finance", slug: "now", useImage: true },
  { name: "Resimac", slug: "resimac", useImage: true },
];

export function LenderBar() {
  return (
    <section className="relative bg-white py-10 md:py-14 border-y border-[var(--color-navy-100)]">
      <div className="container-page mb-7 md:mb-9 flex items-baseline justify-center text-center">
        <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-navy-300)]">
          We compare with <span className="text-[var(--color-navy)]">Australia&rsquo;s top lenders</span>
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-white to-transparent" />

        <div className="marquee-track items-center gap-x-4 md:gap-x-6">
          <LenderRow />
          <LenderRow />
        </div>
      </div>
    </section>
  );
}

function LenderRow() {
  return (
    <div className="flex items-center gap-x-4 md:gap-x-6 shrink-0">
      {LENDERS.map((l) => (
        <LogoMark key={l.slug} lender={l} />
      ))}
    </div>
  );
}

// All logos sit inside an equal-sized slot so the row reads as a uniform wall.
// Inner image is capped well below the slot so logos with tight vs loose viewBoxes
// end up with similar visual weight.
const LOGO_SLOT = "h-12 w-[150px] md:h-14 md:w-[170px] flex items-center justify-center shrink-0";
const LOGO_INNER = "max-h-6 md:max-h-7 max-w-[120px] md:max-w-[140px] w-auto h-auto object-contain";

function LogoMark({ lender }: { lender: Lender }) {
  if (lender.useImage) {
    const ext = lender.imageExt ?? "svg";
    return (
      <span className={`${LOGO_SLOT} opacity-70 hover:opacity-100 transition`}>
        {/* Plain <img>: tiny logo files are smaller than the Next/Image optimizer overhead. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/logos/${lender.slug}.${ext}`}
          alt={lender.name}
          className={LOGO_INNER}
        />
      </span>
    );
  }

  const Mark = lender.mark;
  return (
    <span
      className={`${LOGO_SLOT} text-[var(--color-navy)] opacity-55 hover:opacity-100 transition`}
    >
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
        {Mark && <Mark />}
        <span
          className="text-[1.05rem] md:text-[1.15rem] leading-none"
          style={{
            fontWeight: lender.weight ?? 700,
            letterSpacing: lender.letterSpacing,
            textTransform: lender.uppercase ? "uppercase" : undefined,
            fontStyle: lender.italic ? "italic" : undefined,
          }}
        >
          {lender.name}
        </span>
      </span>
    </span>
  );
}

// ---- Inline brand-mark approximations (monochrome) ----

function WestpacMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 md:h-[22px] md:w-[22px]" fill="currentColor" aria-hidden>
      <path d="M2 4 L7 20 L12 8 L17 20 L22 4 L19 4 L17 13 L13 4 L11 4 L7 13 L5 4 Z" />
    </svg>
  );
}

function CircleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 md:h-[22px] md:w-[22px]" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FlagMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 md:h-[18px] md:w-[18px]" fill="currentColor" aria-hidden>
      <path d="M3 22 L3 4 L21 4 L13 13 L21 22 Z" />
    </svg>
  );
}

function RibbonMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 md:h-[18px] md:w-[18px]" fill="currentColor" aria-hidden>
      <path d="M12 3 L20 7 L20 13 C 20 18 16 21 12 21 C 8 21 4 18 4 13 L4 7 Z" />
    </svg>
  );
}

function BracketMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 md:h-[18px] md:w-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" aria-hidden>
      <path d="M7 4 L4 4 L4 20 L7 20" />
      <path d="M17 4 L20 4 L20 20 L17 20" />
    </svg>
  );
}
