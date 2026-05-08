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

export default function Page() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <LenderBar />
        <WhyFastr />
        <HappyCustomers />
        <Calculator />
        <Process />
        <Gallery />
        <SocialProof />
        <FAQ />
        <FounderNote />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      <HelpBubble />
    </>
  );
}
