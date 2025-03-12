import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'jgwhuv97vz.ufs.sh',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
