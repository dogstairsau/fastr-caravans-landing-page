// Preview-only route for the original landing-page concept.
// Production / is rewritten to /homepage-caravan for the A/B test, so this
// path keeps the concept reviewable. Swap the hero photo with /concept?hero=A|B|C.

import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { LenderBar } from "@/components/LenderBar";
import { WhyFastr } from "@/components/WhyFastr";
import { HappyCustomers } from "@/components/HappyCustomers";
import { Calculator } from "@/components/Calculator";
import { Process } from "@/components/Process";
import { Gallery } from "@/components/Gallery";
import { FounderNote } from "@/components/FounderNote";
import { SocialProof } from "@/components/SocialProof";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { HelpBubble } from "@/components/HelpBubble";

export default function ConceptPage() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <LenderBar />
        <WhyFastr />
        <FounderNote />
        <HappyCustomers />
        <Calculator />
        <Process />
        <Gallery />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      <HelpBubble />
    </>
  );
}
