/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
    ],
  },
  // Configure for Vercel deployment
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig; 