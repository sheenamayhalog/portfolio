/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  assetPrefix: isProd ? "/portfolio/" : "",
  trailingSlash: true,
  output: "export",
};

module.exports = nextConfig;
