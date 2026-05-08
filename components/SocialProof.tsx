"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StarRating } from "./StarRating";

type Review = { name: string; location: string; body: string };

const REVIEWS: Review[] = [
  {
    name: "James B",
    location: "Newcastle, NSW",
    body: "I recently used Fastr Finance for my new caravan and couldn't be more impressed. From the very first call, Mandy went above and beyond — walked me through every detail, answered every question, made sure I fully understood each step.",
  },
  {
    name: "Sarah K",
    location: "Geelong, VIC",
    body: "Couldn't believe how quick it was. Filled out the form, got a call within an hour, approved that afternoon. Saved us thousands compared to going direct to our bank.",
  },
  {
    name: "Mark T",
    location: "Brisbane, QLD",
    body: "Bought a Jayco off a private seller. Other brokers said it was too hard. Fastr made it work and got us a sharp rate.",
  },
  {
    name: "Lisa P",
    location: "Adelaide, SA",
    body: "Plain English, no pressure. Better deal than the dealer was offering and we were on the road two weeks later.",
  },
  {
    name: "Karen M",
    location: "Hobart, TAS",
    body: "Saved us $1,200 a year compared to our bank. The team made the whole thing painless.",
  },
  {
    name: "David L",
    location: "Perth, WA",
    body: "Sharp rate, no fuss. On the road in two weeks. Best finance experience I've had.",
  },
  {
    name: "Wendy R",
    location: "Cairns, QLD",
    body: "Pre-approval came through in 90 minutes and we bought the next day. Couldn't recommend them more.",
  },
  {
    name: "Greg P",
    location: "Bendigo, VIC",
    body: "Three weeks of dealer pressure didn't get me anywhere. Fastr undercut their rate by 1.2% and explained every line of the contract.",
  },
];

export function SocialProof() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const gap = 20;
    track.scrollBy({ left: (card.offsetWidth + gap) * dir, behavior: "smooth" });
  };

  return (
    <section className="bg-[var(--color-mint)] pt-16 pb-20 md:pt-20 md:pb-24 overflow-hidden">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6 mb-8 md:mb-12">
          <div className="max-w-2xl">
            <h2 className="font-[var(--font-display)] text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[var(--color-navy)]">
              5-star Google rated.
            </h2>
            <p className="mt-4 text-base md:text-lg text-[var(--color-navy-400)] max-w-md">
              Thousands of real <strong className="font-semibold text-[var(--color-navy)]">(and repeat)</strong> Aussies trust us to get their caravan finance approved, fast.
            </p>
          </div>

          {/* Desktop nav buttons */}
          <div className="hidden md:flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous review"
              className="h-11 w-11 rounded-full border border-[var(--color-navy)]/15 hover:border-[var(--color-navy)] flex items-center justify-center text-[var(--color-navy)] transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next review"
              className="h-11 w-11 rounded-full border border-[var(--color-navy)]/15 hover:border-[var(--color-navy)] flex items-center justify-center text-[var(--color-navy)] transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll-snap carousel — bleeds beyond container */}
      <div
        ref={trackRef}
        className="flex items-start gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scroll-pl-4 md:scroll-pl-12 lg:scroll-pl-[max(2rem,calc((100vw-1200px)/2))] px-4 md:px-12 lg:px-[max(2rem,calc((100vw-1200px)/2))] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {REVIEWS.map((r) => (
          <article
            key={r.name}
            data-card
            className="snap-start shrink-0 w-[80%] sm:w-[55%] md:w-[42%] lg:w-[32%] rounded-[1.75rem] bg-white p-7 md:p-8 flex flex-col"
          >
            <div className="flex items-center justify-between">
              <StarRating size={15} />
              <span className="font-[var(--font-display)] text-[3rem] leading-none text-[var(--color-coral)]/15 select-none -mt-2" aria-hidden>
                &ldquo;
              </span>
            </div>

            <blockquote className="mt-3 text-[1rem] md:text-[1.05rem] leading-[1.55] text-[var(--color-navy)] flex-1">
              {r.body}
            </blockquote>

            <div className="mt-6 pt-5 border-t border-[var(--color-navy)]/10 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-navy)] text-white font-bold text-sm shrink-0">
                {r.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-[var(--color-navy)] text-sm leading-tight truncate">
                  {r.name}
                </p>
                <p className="text-[11px] text-[var(--color-navy-300)] mt-0.5 truncate">
                  {r.location} · Verified Google
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
