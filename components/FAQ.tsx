"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  { q: "How does a loan through Fastr Finance work?", a: "You tell us how much you want to borrow and a few quick details. Our Fastr matching technology compares 30+ lenders and finds your cheapest repayment options — usually in under a minute. A specialist then handles the application, paperwork and settlement. You stay in control the whole way." },
  { q: "Will checking my options affect my credit score?", a: "No. Our initial match uses a soft credit check that does not impact your credit score. You can see your real options before deciding to apply." },
  { q: "Are your rates fixed or variable?", a: "Most caravan loans are fixed rate, which means your repayment stays the same for the life of the loan. We'll show you both fixed and variable options if available." },
  { q: "Do I need a deposit?", a: "No deposit is required for most caravan loans, subject to lender approval and the asset type. A deposit can sometimes get you a sharper rate — your specialist will walk you through your options." },
  { q: "Can I finance new and used caravans?", a: "Yes — new, used, dealer or private sale. We finance every major Australian brand including Jayco, Avida, New Age, Lotus and Crusader." },
  { q: "How long can the loan term be?", a: "Caravan loan terms typically run from 1 to 7 years. Longer terms mean lower repayments but more interest paid overall." },
  { q: "Can I make extra repayments or pay out my loan early?", a: "Most lenders we work with allow extra repayments and early payouts. We'll match you with options that suit how you want to manage the loan." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20">
          <div>
            <h2 className="font-[var(--font-display)] text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.98] tracking-[-0.045em] text-[var(--color-navy)]">
              Got a question? <br />
              We can <span className="coral-word">help.</span>
            </h2>
            <p className="mt-5 text-lg text-[var(--color-navy-400)] max-w-md">
              Still need a hand? Call <a href="tel:1300604183" className="font-bold text-[var(--color-navy)] underline decoration-[var(--color-coral)] decoration-2 underline-offset-4">1300 604 183</a> and chat to a specialist.
            </p>
          </div>

          <div>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-t border-[var(--color-navy-100)] last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left py-5 md:py-6"
                  >
                    <span className="font-[var(--font-display)] text-lg md:text-xl font-bold tracking-[-0.02em] text-[var(--color-navy)]">
                      {f.q}
                    </span>
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition ${isOpen ? "bg-[var(--color-coral)] text-white rotate-45" : "border border-[var(--color-navy-100)] text-[var(--color-navy)]"}`}>
                      <Plus size={16} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-[var(--color-navy-400)] leading-relaxed text-[15px] md:text-base max-w-2xl">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
