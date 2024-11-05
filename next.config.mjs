// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['c10.patreonusercontent.com', 'i.pinimg.com'],  // Add this domain
    },
    eslint: {
    ignoreDuringBuilds: true,
  },
  };
  
  export default nextConfig;
  
