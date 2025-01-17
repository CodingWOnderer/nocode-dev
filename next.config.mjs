/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint:{
    ignoreDuringBuilds:true
  },
  images: {
    unoptimized: true,
    disableStaticImages: true,
    remotePatterns: [
      { protocol: "https", hostname: "assets.lummi.ai", pathname: "/**" },
      {
        protocol: "https",
        hostname:"placehold.co",
        pathname: "/**",
      }
    ],
  },
  typescript:{
    ignoreBuildErrors:true
  }
};

export default nextConfig;
