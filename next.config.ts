import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/iletisim-2",
        destination: "/iletisim",
        permanent: true,
      },
      {
        source: "/hakkimizda-2",
        destination: "/hakkimizda",
        permanent: true,
      },
      {
        source: "/hizmetlerimiz",
        destination: "/hizmetler",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
