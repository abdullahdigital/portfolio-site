import type { Metadata } from "next";
import ProjectsPage from "./ProjectsPage";

export const metadata: Metadata = {
  title: "Projects | Abdullah",
  description:
    "Browse Abdullahdigital portfolio of cybersecurity, AI, full-stack, and web development projects.",
  alternates: {
    canonical: "/projects",
  },
};

export default function Page() {
  return <ProjectsPage />;
}