import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // existing
  allowedDevOrigins: ["192.168.1.10"], // add this
};

export default nextConfig;