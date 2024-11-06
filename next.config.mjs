/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['c10.patreonusercontent.com', 'i.pinimg.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET, // This will expose NEXTAUTH_SECRET to the client
  },
};

export default nextConfig;
