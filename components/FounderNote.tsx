import Image from "next/image";

export function FounderNote() {
  return (
    <section className="relative bg-[var(--color-sand)] py-20 md:py-24 lg:py-28 overflow-hidden isolate">
      {/* Photo bleeds in from the right, dissolves into sand on its left edge — magazine-style blend */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[58%] -z-10">
        <Image
          src="/founder/zac-crop.png"
          alt=""
          fill
          sizes="58vw"
          className="object-cover object-[center_30%]"
          priority={false}
        />
        {/* Soft wash on the left edge of the photo so the text reads, photo punches through quickly */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-sand)] from-0% via-[var(--color-sand)]/30 via-22% to-transparent to-50%" />
      </div>

      <div className="relative container-page">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-coral)]">
              A note from the founder
            </p>

            <p className="mt-6 md:mt-8 font-[var(--font-display)] text-[1.7rem] md:text-[2.4rem] leading-[1.1] tracking-[-0.025em] font-bold text-[var(--color-navy)]">
              Buying a caravan is one of the biggest decisions you&rsquo;ll
              make &ndash; and the finance side shouldn&rsquo;t be the part
              that holds you up.
            </p>

            <p className="mt-6 md:mt-8 text-[0.95rem] md:text-[1rem] leading-[1.65] text-[var(--color-navy-400)] max-w-md">
              We built Fastr to feel like having a mate in the industry. My
              team and I will fight for a better deal, explain every fee in
              plain English, and treat your application like it&rsquo;s our
              own family getting on the road.
            </p>

            <p className="mt-5 text-[0.95rem] md:text-[1rem] leading-[1.5] font-bold text-[var(--color-navy)] max-w-md">
              Whatever&rsquo;s getting you out there &mdash; let&rsquo;s make
              it happen.
            </p>

            {/* Signature */}
            <div className="mt-8 md:mt-10">
              <div
                className="text-[var(--color-coral)] text-[3rem] md:text-[3.6rem] leading-none -mb-1 select-none"
                style={{
                  fontFamily: "var(--font-script)",
                  fontWeight: 700,
                  transform: "rotate(-3deg)",
                  display: "inline-block",
                }}
                aria-hidden
              >
                Zac
              </div>
              <div className="mt-2 text-sm font-semibold text-[var(--color-navy)]">
                Founder · Fastr Finance
              </div>
            </div>
          </div>

          {/* Mobile/tablet photo — below text since horizontal blend doesn't fit */}
          <div className="lg:hidden mt-10 relative w-full max-w-md mx-auto">
            <div className="relative aspect-[3/4] photo-arch shadow-[var(--shadow-pop)]">
              <Image
                src="/founder/zac-crop.png"
                alt="Zac, founder of Fastr Finance"
                fill
                sizes="(max-width: 1024px) 80vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
