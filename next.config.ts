import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/oasis-palace-ostra',
        permanent: true, // Use `false` if you might change this in the future
      },
    ];
  },
};

export default nextConfig;
