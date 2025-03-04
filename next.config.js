/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // ✅ Enable static export

  reactStrictMode: true,

  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"], // Allowed external image domain
  },

  env: {
    JWT_SECRET: process.env.JWT_SECRET ?? "",
    SMTP_FROM_EMAIL: process.env.SMTP_FROM_EMAIL ?? "",
    SMTP_HOST: process.env.SMTP_HOST ?? "",
    SMTP_PORT: process.env.SMTP_PORT ?? "",
    SMTP_USER: process.env.SMTP_USER ?? "",
    SMTP_PASS: process.env.SMTP_PASS ?? "",
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",
  },

  // 🚨 Rewrites may not work with static export.
  // Static export requires pages to be pre-rendered at build time.
  // Comment out or remove rewrites if you don't have fallback handling.
  async rewrites() {
    return [
      {
        source: "/reset-password",
        destination: "/api/reset-password", // ⚠️ This may break static export.
      },
    ];
  },
};

module.exports = nextConfig;
