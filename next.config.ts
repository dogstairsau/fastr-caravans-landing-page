import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "fastrfinance.com.au" },
      { protocol: "https", hostname: "staging.fastrfinance.com.au" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default config;
