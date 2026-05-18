import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Manrope, Space_Grotesk, Caveat, Poppins } from "next/font/google";
import "./globals.css";

const GA4_ID = "G-P1GMBJ4YCJ";
const GOOGLE_ADS_ID = "AW-383666074";
const META_PIXEL_ID = "1401163937154936";

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

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0F0E2B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fastrfinance.com.au"),
  title: "Caravan Loans — Compare 40+ lenders in 60 seconds | Fastr Finance",
  description:
    "Hassle-free caravan loans. Fastr Technology instantly compares 40+ lenders to show your cheapest repayment. ★★★★★ 200+ Google reviews. No credit score impact.",
  openGraph: {
    title: "Hassle Free Caravan Loans, Fastr.",
    description:
      "Fastr Technology compares 40+ lenders to find your cheapest repayment. 5-star Google rated. No credit score impact.",
    type: "website",
    locale: "en_AU",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${manrope.variable} ${display.variable} ${script.variable} ${poppins.variable}`}>
      <head>
        <Script
          id="gtag-loader"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-white text-[var(--color-navy)]">
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
