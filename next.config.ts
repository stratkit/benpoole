import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "benpoole.me" }],
        destination: "https://www.benpoole.me/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
