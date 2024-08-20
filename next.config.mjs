/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    workerThreads: true,
  },
  webpack: (config) => config,
};

export default nextConfig;
