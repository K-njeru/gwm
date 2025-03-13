import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '', // Leave empty unless using a specific port
        pathname: '/**', // Allows all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
