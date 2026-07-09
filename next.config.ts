import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",

              // Scripts
              `script-src 'self' 'unsafe-inline' https://www.googletagmanager.com ${
                isDev ? "'unsafe-eval'" : ""
              }`,

              // Styles
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",

              // Fonts
              "font-src 'self' https://fonts.gstatic.com data:",

              // Images
              "img-src 'self' data: blob: https:",

              // AJAX / fetch / analytics
              "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://*.googleapis.com https://vitals.vercel-insights.com",

              // Frames
              "frame-ancestors 'none'",

              // Forms
              "form-action 'self'",

              // Base URI
              "base-uri 'self'",

              // Objects
              "object-src 'none'",

              // Prevent mixed content
              "upgrade-insecure-requests",
            ].join("; "),
          },

          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },

          {
            key: "X-Frame-Options",
            value: "DENY",
          },

          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },

          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
          },

          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },

          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },

          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },

          {
            key: "Origin-Agent-Cluster",
            value: "?1",
          },
        ],
      },
    ];
  },
};

export default nextConfig;