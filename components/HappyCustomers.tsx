"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Story = {
  name: string;
  location: string;
  van: string;
  rate: string; // displayed rate
  term: string; // e.g. "7 yrs"
  amount: string; // e.g. "$72k"
  quote: string;
  photo: string;
};

const STORIES: Story[] = [
  {
    name: "Gemma",
    location: "Newcastle, NSW",
    van: "Jayco Silverline",
    rate: "5.49% p.a.",
    term: "7 yrs",
    amount: "$78k",
    quote: "We had three knock-backs from the bank. Fastr came back with a yes the same afternoon.",
    photo:
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1400&q=85&auto=format&fit=crop",
  },
  {
    name: "James",
    location: "Geelong, VIC",
    van: "Lotus Trooper off-road",
    rate: "6.29% p.a.",
    term: "7 yrs",
    amount: "$98k",
    quote: "Off-road van, private seller, soft credit history. Other brokers said no. Fastr made it work.",
    photo:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=85&auto=format&fit=crop",
  },
  {
    name: "Sarah & Tom",
    location: "Sunshine Coast, QLD",
    van: "Avida Motorhome",
    rate: "5.99% p.a.",
    term: "10 yrs",
    amount: "$132k",
    quote: "First-time motorhome buyers. They walked us through every option in plain English.",
    photo:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&q=85&auto=format&fit=crop",
  },
  {
    name: "Mark",
    location: "Perth, WA",
    van: "New Age Manta Ray",
    rate: "5.79% p.a.",
    term: "7 yrs",
    amount: "$64k",
    quote: "Sharp rate, no fuss. On the road in two weeks.",
    photo:
      "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=1400&q=85&auto=format&fit=crop",
  },
  {
    name: "Lisa",
    location: "Adelaide, SA",
    van: "Crusader Excalibur",
    rate: "6.49% p.a.",
    term: "5 yrs",
    amount: "$48k",
    quote: "Plain English, no pressure. Better deal than the dealer was offering.",
    photo:
      "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=1400&q=85&auto=format&fit=crop",
  },
  {
    name: "Karen",
    location: "Hobart, TAS",
    van: "Coromal Element",
    rate: "5.39% p.a.",
    term: "7 yrs",
    amount: "$52k",
    quote: "Saved us $1,200 a year compared to our bank.",
    photo:
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1400&q=85&auto=format&fit=crop",
  },
  {
    name: "Daniel",
    location: "Brisbane, QLD",
    van: "Roma Elegance",
    rate: "6.79% p.a.",
    term: "5 yrs",
    amount: "$42k",
    quote: "First-time buyer. They explained every fee in plain English.",
    photo:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=85&auto=format&fit=crop",
  },
  {
    name: "Wendy",
    location: "Cairns, QLD",
    van: "Concept Innovation",
    rate: "5.69% p.a.",
    term: "7 yrs",
    amount: "$86k",
    quote: "Pre-approval came through in 90 minutes. Bought the next day.",
    photo:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&q=85&auto=format&fit=crop",
  },
  {
    name: "Greg",
    location: "Bendigo, VIC",
    van: "Universal Caravans",
    rate: "5.99% p.a.",
    term: "7 yrs",
    amount: "$58k",
    quote: "Three weeks of dealer pressure. Fastr undercut by 1.2%.",
    photo:
      "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=1400&q=85&auto=format&fit=crop",
  },
];

export function HappyCustomers() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const gap = 16;
    track.scrollBy({ left: (card.offsetWidth + gap) * dir, behavior: "smooth" });
  };

  return (
    <section className="bg-white pt-12 pb-10 md:pt-16 md:pb-12 overflow-hidden">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
          <div className="max-w-2xl">
            <h2 className="font-[var(--font-display)] text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.045em]">
              <span className="block">Customers we&rsquo;ve</span>
              <span className="block">
                <em className="coral-word italic">actually</em> helped.
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[var(--color-navy-400)] max-w-md">
              Real Fastr customers — names and locations changed for privacy.
            </p>
          </div>

          {/* Desktop nav buttons */}
          <div className="hidden md:flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous"
              className="h-11 w-11 rounded-full border border-[var(--color-navy)]/15 hover:border-[var(--color-navy)] flex items-center justify-center text-[var(--color-navy)] transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next"
              className="h-11 w-11 rounded-full border border-[var(--color-navy)]/15 hover:border-[var(--color-navy)] flex items-center justify-center text-[var(--color-navy)] transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll-snap carousel — bleeds beyond container for edge fade */}
      <div
        ref={trackRef}
        className="flex items-start gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scroll-pl-4 md:scroll-pl-12 lg:scroll-pl-[max(2rem,calc((100vw-1200px)/2))] px-4 md:px-12 lg:px-[max(2rem,calc((100vw-1200px)/2))] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {STORIES.map((s) => (
          <article
            key={s.name + s.van}
            data-card
            className="snap-start shrink-0 w-[68%] sm:w-[42%] md:w-[30%] lg:w-[22%] rounded-[1.5rem] overflow-hidden bg-[var(--color-navy-50)]"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={s.photo}
                alt={`${s.name}'s ${s.van}`}
                fill
                sizes="(min-width: 1024px) 32vw, (min-width: 768px) 44vw, 80vw"
                className="object-cover"
              />
              {/* Gradient for legibility */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[var(--color-navy)]/85 via-[var(--color-navy)]/30 to-transparent" />

              {/* Bottom: name + meta */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div className="font-[var(--font-display)] text-[1.25rem] font-bold leading-tight tracking-[-0.02em]">
                  {s.name}
                </div>
                <div className="mt-0.5 text-[11px] text-white/80 truncate">{s.location} · {s.van}</div>
                <div className="mt-2 flex items-center gap-1.5 text-[10.5px] font-semibold">
                  <span className="rounded-full bg-white/15 backdrop-blur px-2 py-0.5">{s.amount}</span>
                  <span className="rounded-full bg-white/15 backdrop-blur px-2 py-0.5">{s.term}</span>
                </div>
              </div>
            </div>

            <div className="bg-white px-4 py-3.5">
              <div className="flex items-center gap-0.5 mb-1.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={11} fill="#FCB400" stroke="#FCB400" />
                ))}
              </div>
              <p className="text-[12.5px] leading-snug text-[var(--color-navy)] italic line-clamp-3">
                &ldquo;{s.quote}&rdquo;
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
