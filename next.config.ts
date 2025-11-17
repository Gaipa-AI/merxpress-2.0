import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allow images served from Builder.io CDN (used with query params)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
        port: '',
        // matches: /api/v1/image/assets/TEMP/... (and any query string)
        pathname: '/api/**',
      },
    ],
  },
};



export default nextConfig;
