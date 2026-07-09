import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AbdullahDigital",
    short_name: "AbdullahDigital",
    description:
      "Portfolio of Muhammad Abdullah showcasing AI, cybersecurity, and full-stack web development projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/img/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/img/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}