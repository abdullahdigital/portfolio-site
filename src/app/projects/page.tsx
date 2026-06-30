import type { Metadata } from "next";
import ProjectsPage from "./ProjectsPage";
import { projectsData } from "@/data/projectsData";

export const metadata: Metadata = {
  title: "Projects | Abdullah - Web Development & Cybersecurity Portfolio",
  description:
    "Explore Abdullah's portfolio of web development, AI-powered security tools, penetration testing, and full-stack applications. See real-world projects built with Next.js, Django, React, and more.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Abdullah - Web Developer & Cybersecurity Portfolio",
    description: "Explore Abdullah's portfolio of web development, AI-powered security tools, and full-stack applications.",
    url: "https://abdullahdigital.vercel.app/projects",
    siteName: "Abdullah Digital",
    type: "website",
    images: [
      {
        url: "/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Abdullah's Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Abdullah - Web Developer & Cybersecurity Portfolio",
    description: "Explore Abdullah's portfolio of web development and cybersecurity projects.",
    images: ["/og-projects.jpg"],
  },
  keywords: [
    "web development projects",
    "cybersecurity portfolio",
    "full-stack developer projects",
    "AI security tools",
    "React Next.js projects",
    "Django applications",
    "penetration testing projects",
    "SaaS development",
    "Abdullah portfolio",
  ],
};

// Generate dynamic ItemList schema from project data
const generateProjectsSchema = () => {
  // Get unique categories
  const categories = ['Web Development', 'Cybersecurity', 'Artificial Intelligence', 'Full-Stack Development'];
  
  // Create item list from projects
  const itemListElement = projectsData.map((project, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.description,
      "url": `https://abdullahdigital.vercel.app/projects`,
      "about": {
        "@type": "Thing",
        "name": project.category || "Web Development"
      },
      ...(project.image && { "image": `https://abdullahdigital.vercel.app${project.image}` })
    }
  }));

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Abdullah's Web Development & Cybersecurity Projects",
    "description": "A portfolio of web development, AI-powered security tools, and full-stack applications built by Abdullah.",
    "url": "https://abdullahdigital.vercel.app/projects",
    "about": categories.map(cat => ({
      "@type": "Thing",
      "name": cat
    })),
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": itemListElement
    }
  };
};

const projectsSchema = generateProjectsSchema();

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsSchema),
        }}
      />
      <ProjectsPage />
    </>
  );
}