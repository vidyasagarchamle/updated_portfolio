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
  // Disable ESLint during build
  eslint: {
    // Only run ESLint on local development, not during builds
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript checking during build
  typescript: {
    // Only check types on local development, not during builds
    ignoreBuildErrors: true,
  },
  // Ensure correct output tracing and tree-shaking
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // Fix trailing slash behavior for Next.js App Router
  trailingSlash: false,
  // Needed for certain deployment environments
  assetPrefix: undefined,
};

export default nextConfig; 