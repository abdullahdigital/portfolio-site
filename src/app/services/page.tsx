import type { Metadata } from "next";
import ServicesPage from "./ServicesPage";

export const metadata: Metadata = {
  title: "Services | AbdullahDigital - Web Development, AI & Cybersecurity in Pakistan",
  description:
    "Professional web development, AI integration, and cybersecurity services by AbdullahDigital in Rawalpindi, Pakistan. Next.js, Django, MERN, secure websites, SEO, and AI-powered solutions.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | AbdullahDigital - Web Development, AI & Cybersecurity",
    description:
      "Hire AbdullahDigital for web development, AI integration, and cybersecurity services in Rawalpindi, Pakistan.",
    url: "https://abdullahdigital.vercel.app/services",
    siteName: "Abdullah Digital",
    type: "website",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "AbdullahDigital Services - Web Development, AI & Cybersecurity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | AbdullahDigital - Web Development, AI & Cybersecurity",
    description: "Professional web development, AI integration, and cybersecurity services in Pakistan.",
    images: ["/og-services.jpg"],
  },
  keywords: [
    "web development services Pakistan",
    "website developer Rawalpindi",
    "Next.js developer Pakistan",
    "Django developer Pakistan",
    "MERN stack developer",
    "secure website development Pakistan",
    "cybersecurity consultant Pakistan",
    "AI integration services",
    "SEO services Pakistan",
    "full-stack development services",
    "AbdullahDigital services",
    "custom web application Pakistan",
    "e-commerce website Pakistan",
    "AI-powered web solutions",
    "penetration testing services Pakistan",
  ],
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Development, AI Integration, and Cybersecurity Services",
  "provider": {
    "@type": "Person",
    "name": "Muhammad Abdullah",
    "alternateName": "AbdullahDigital",
    "jobTitle": "Full-Stack Developer & Cybersecurity Expert",
    "url": "https://abdullahdigital.vercel.app",
    "email": "abdullahwebhero@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rawalpindi",
      "addressRegion": "Punjab",
      "addressCountry": "Pakistan"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Rawalpindi"
      },
      {
        "@type": "City",
        "name": "Islamabad"
      },
      {
        "@type": "Country",
        "name": "Pakistan"
      },
      {
        "@type": "Place",
        "name": "Worldwide"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development & Cybersecurity Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js / React Web Development",
            "description": "High-performance, SEO-optimized websites and web apps built with Next.js 16+ and React using TypeScript, Tailwind CSS, and Framer Motion."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Django & Python Backend Development",
            "description": "Scalable backend systems, REST APIs, and authentication with Django 5+, Django REST Framework, PostgreSQL, and Redis."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MERN Stack Development",
            "description": "Full-stack applications using MongoDB, Express.js, React, and Node.js for dynamic, real-time platforms."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Secure Website Development & Penetration Testing",
            "description": "OWASP Top 10 hardening, secure authentication, input validation, and penetration testing reports with detailed vulnerability fixes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & LLM Integration",
            "description": "Integrate OpenAI, Claude, Gemini APIs for AI chatbots, content generators, data analysis, agentic workflows, and custom LLM-powered features."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO / GEO / AEO Optimization",
            "description": "Comprehensive SEO with metadata, JSON-LD structured data, sitemap, robots.txt, local Pakistani keywords, and answer engine optimization."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce Website Development",
            "description": "Custom e-commerce stores with secure payments, product management, inventory tracking, and conversion-optimized UI."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DevOps & Server Management",
            "description": "Nginx, Docker, VPS deployment, CI/CD pipelines, SSL, security headers (CSP, HSTS), and performance optimization."
          }
        }
      ]
    }
  },
  "areaServed": ["Pakistan", "Rawalpindi", "Islamabad", "Worldwide"],
  "audience": "Businesses, startups, and individuals needing professional web, AI, and cybersecurity solutions",
  "url": "https://abdullahdigital.vercel.app/services"
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <ServicesPage />
    </>
  );
}
