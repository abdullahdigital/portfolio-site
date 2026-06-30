import type { Metadata } from "next";
import SkillsPage from "./SkillsPage";

export const metadata: Metadata = {
  title: "Skills | Abdullah - Full-Stack Developer & Cybersecurity Expert",
  description:
    "Explore Abdullah's technical skills including Next.js, React, Django, Python, Penetration Testing, SOC, AI, Cloud, and modern web technologies. Full-stack development and cybersecurity expertise.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    title: "Skills | Abdullah - Full-Stack Developer & Cybersecurity Expert",
    description:
      "Explore Abdullah's technical skills in AI, cybersecurity, full-stack development, cloud, databases, and modern web technologies.",
    url: "https://abdullahdigital.vercel.app/skills",
    siteName: "Abdullah Digital",
    type: "website",
    images: [
      {
        url: "/og-skills.jpg",
        width: 1200,
        height: 630,
        alt: "Abdullah's Skills and Expertise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills | Abdullah - Full-Stack Developer & Cybersecurity Expert",
    description: "Explore Abdullah's technical skills in AI, cybersecurity, full-stack development, and modern web technologies.",
    images: ["/og-skills.jpg"],
  },
  keywords: [
    "full-stack developer skills",
    "cybersecurity skills",
    "Next.js developer",
    "React developer",
    "Django developer",
    "Python developer",
    "penetration testing",
    "SOC analyst",
    "AI developer",
    "web development skills",
  ],
};

const skillsSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "name": "Abdullah's Skills and Expertise",
  "description": "Technical skills in full-stack development, cybersecurity, AI, and modern web technologies.",
  "url": "https://abdullahdigital.vercel.app/skills",
  "about": {
    "@type": "Thing",
    "name": "Full-Stack Development & Cybersecurity"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Thing",
          "name": "Frontend Development",
          "description": "Next.js, React, Angular, Vue.js, Svelte, Astro, Tailwind CSS, Bootstrap, TypeScript"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Thing",
          "name": "Backend Development",
          "description": "Django, Django REST Framework, Flask, FastAPI, Node.js, Express.js, Laravel, PHP"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Thing",
          "name": "Cybersecurity",
          "description": "Penetration Testing, SOC, SIEM (Wazuh, ELK), OWASP Top 10, Vulnerability Assessment"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Thing",
          "name": "Databases",
          "description": "PostgreSQL, MongoDB, MySQL, SQLite, Elasticsearch"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Thing",
          "name": "Cloud & DevOps",
          "description": "AWS, Docker, Nginx, Apache, Git, GitHub"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Thing",
          "name": "Programming Languages",
          "description": "Python, JavaScript, TypeScript, Rust, PHP, C, C++, Assembly, Bash"
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Thing",
          "name": "AI & Automation",
          "description": "Generative AI, AI-powered security tools, text-to-rule engines, automation"
        }
      }
    ]
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(skillsSchema),
        }}
      />
      <SkillsPage />
    </>
  );
}