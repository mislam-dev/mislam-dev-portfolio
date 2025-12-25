import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,

    // 2. Add a security policy to prevent scripts inside SVGs from running
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
        port: "",
        pathname: "/**", // Allows all paths from this host
      },
      {
        protocol: "https",
        hostname: "go-skill-icons.vercel.app",
        port: "",
        pathname: "/**", // Allows all paths from this host
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Allows all paths from this host
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**", // Allows all paths from this host
      },
    ],
  },
};

export default nextConfig;
