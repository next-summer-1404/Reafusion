import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "storage.c2.liara.space" },
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
