/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['c10.patreonusercontent.com', 'i.pinimg.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
