import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Display = Oakes Grotesk (client supplies .woff2). Space Grotesk = visually-close placeholder.
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const script = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: ["500", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0F0E2B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fastrfinance.com.au"),
  title: "Caravan Loans — Compare 30+ lenders in 60 seconds | Fastr Finance",
  description:
    "Hassle-free caravan loans. Fastr Technology instantly compares 30+ lenders to show your cheapest repayment. ★★★★★ 200+ Google reviews. No credit score impact.",
  openGraph: {
    title: "Hassle Free Caravan Loans, Fastr.",
    description:
      "Fastr Technology compares 30+ lenders to find your cheapest repayment. 5-star Google rated. No credit score impact.",
    type: "website",
    locale: "en_AU",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${manrope.variable} ${display.variable} ${script.variable}`}>
      <body className="min-h-screen bg-white text-[var(--color-navy)]">
        {children}
      </body>
    </html>
  );
}
