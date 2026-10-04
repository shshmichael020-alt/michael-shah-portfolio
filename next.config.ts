import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/michael-shah-portfolio" : "",
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  devIndicators: false,
};

export default nextConfig;
