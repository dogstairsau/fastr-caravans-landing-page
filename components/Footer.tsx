import { Logo } from "./Logo";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy-900)] text-white/70 pt-14 pb-32 md:pb-14">
      <div className="container-page">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 mb-10">
          <div>
            <div className="text-white"><Logo /></div>
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              Australia&apos;s trusted online vehicle finance experts. Hassle-free caravan, car, boat and equipment finance.
            </p>

            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href="tel:1300604183" className="flex items-center gap-2 hover:text-white transition">
                <Phone size={14} /> 1300 604 183
              </a>
              <a href="mailto:hello@fastrfinance.com.au" className="flex items-center gap-2 hover:text-white transition">
                <Mail size={14} /> hello@fastrfinance.com.au
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Lending</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://fastrfinance.com.au/caravan-loans/" className="hover:text-white">Caravan Loans</a></li>
              <li><a href="https://fastrfinance.com.au/car-loans/" className="hover:text-white">Car Loans</a></li>
              <li><a href="https://fastrfinance.com.au/boat-loans/" className="hover:text-white">Boat Loans</a></li>
              <li><a href="https://fastrfinance.com.au/business-loans/" className="hover:text-white">Business Loans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://fastrfinance.com.au/privacy-policy/" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="https://fastrfinance.com.au/credit-guide/" className="hover:text-white">Credit Guide</a></li>
              <li><a href="https://fastrfinance.com.au/complaints/" className="hover:text-white">Complaints Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs leading-relaxed space-y-3">
          <p>
            Fastr Finance Pty Ltd (ABN 70 635 779 707) is an authorised credit representative (ACR #530028) of Fintelligence Pty Ltd (Australian Credit Licence #511803).
          </p>
          <p>
            *Approval times depend on lender assessment and documentation provided. Rates, terms and approvals are set by individual lenders and can vary based on your circumstances. The repayment calculator on this page is indicative only and is not an offer of finance. Subject to credit assessment, lender criteria, fees and charges.
          </p>
          <p className="text-white/50">© Fastr Finance {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
