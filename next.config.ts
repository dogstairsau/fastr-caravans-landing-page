import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "fastrfinance.com.au" },
      { protocol: "https", hostname: "staging.fastrfinance.com.au" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/homepage-caravan" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default config;
