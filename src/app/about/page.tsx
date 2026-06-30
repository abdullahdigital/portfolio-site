import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About | Abdullah - Full-Stack Developer & Cybersecurity Expert",
  description:
    "Learn about Abdullah, a full-stack developer, cybersecurity professional, and AI innovator. Specializing in Next.js, React, Django, penetration testing, and AI-powered security solutions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Abdullah - Full-Stack Developer & Cybersecurity Expert",
    description:
      "Learn about Abdullah, a full-stack developer, cybersecurity professional, and AI innovator.",
    url: "https://abdullahdigital.vercel.app/about",
    siteName: "Abdullah Digital",
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Abdullah - Full-Stack Developer & Cybersecurity Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Abdullah - Full-Stack Developer & Cybersecurity Expert",
    description: "Learn about Abdullah, a full-stack developer, cybersecurity professional, and AI innovator.",
    images: ["/og-about.jpg"],
  },
  keywords: [
    "about Abdullah",
    "full-stack developer",
    "cybersecurity professional",
    "AI developer",
    "Next.js developer",
    "Django developer",
    "penetration tester",
    "Abdullah digital",
  ],
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "name": "About Abdullah - Full-Stack Developer & Cybersecurity Expert",
  "description": "Learn about Abdullah, a full-stack developer, cybersecurity professional, and AI innovator.",
  "url": "https://abdullahdigital.vercel.app/about",
  "mainEntity": {
    "@type": "Person",
    "name": "Muhammad Abdullah",
    "alternateName": "AbdullahDigital",
    "jobTitle": "Full-Stack Developer & Cybersecurity Professional",
    "url": "https://abdullahdigital.vercel.app",
    "sameAs": [
      "https://github.com/abdullahdigital",
      "https://linkedin.com/in/abdullahdigital",
      "https://instagram.com/abdullahwebmaster",
      "https://www.facebook.com/abdullahwebmaster"
    ],
    "email": "abdullahwebhero@gmail.com",
    "knowsAbout": [
      "Full-Stack Development",
      "Cybersecurity",
      "Penetration Testing",
      "Artificial Intelligence",
      "SOC Operations",
      "Web Development",
      "Next.js",
      "React",
      "Django",
      "Python",
      "AI Automation"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "AbdullahDigital"
    },
    "description": "Full-stack developer and cybersecurity professional with expertise in Next.js, React, Django, penetration testing, and AI-powered security solutions."
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />
      <AboutPage />
    </>
  );
}