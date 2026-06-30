import type { Metadata } from "next";
import IndustriesPage from "./IndustriesPage";

export const metadata: Metadata = {
  title: "Industries Served | Abdullah - Web Development & Cybersecurity",
  description: "Explore the industries Abdullah has built software for including healthcare, finance, education, e-commerce, and more. Full-stack development and security solutions.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries Served | Abdullah - Web Developer & Cybersecurity Expert",
    description: "Explore the industries Abdullah has built software for including healthcare, finance, education, and e-commerce.",
    url: "https://abdullahdigital.vercel.app/industries",
    siteName: "Abdullahdigital",
    type: "website",
  },
};

export default function Page() {
  return <IndustriesPage />;
}