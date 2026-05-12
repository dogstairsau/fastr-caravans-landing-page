import { Poppins } from "next/font/google";
import "./styles.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Caravan Finance Loans | Compares 30+ Lenders | Fastr Finance",
  description:
    "Hassle free caravan loans. Fastr Technology instantly compares 30+ lenders to show your cheapest repayment options. Australia's trusted online vehicle finance experts.",
};

export default function HomepageCaravanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${poppins.variable} hc-root`} style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
      {children}
    </div>
  );
}
