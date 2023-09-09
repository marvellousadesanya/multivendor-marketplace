/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4500",
        pathname: "/product-image/**",
      },
    ],
  },
};

module.exports = nextConfig;
