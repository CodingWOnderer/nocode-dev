/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    disableStaticImages: true,
    remotePatterns: [
      { protocol: "https", hostname: "assets.lummi.ai", pathname: "/**" },
    ],
  },
  typescript:{
    ignoreBuildErrors:true
  }
};

export default nextConfig;
