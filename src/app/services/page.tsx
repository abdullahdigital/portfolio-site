import type { Metadata } from "next";
import ServicesPage from "./ServicesPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services & Pricing | AbdullahDigital - Web Dev, Pentesting, SOC & AI Agents",
  description:
    "96+ priced services from AbdullahDigital: Next.js/Django/MERN development, penetration testing, Wazuh SIEM setup, digital forensics, AI agents & automation, GRC, and more. Rawalpindi, Pakistan · Remote worldwide.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services & Pricing | AbdullahDigital",
    description:
      "Web development, penetration testing, SOC/SIEM setup, digital forensics, and AI agent development priced per offer, no vague packages.",
    url: "https://abdullahdigital.vercel.app/services",
    siteName: "Abdullah Digital",
    type: "website",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "AbdullahDigital Services - Web Development, Pentesting, SOC & AI Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Pricing | AbdullahDigital",
    description: "96+ priced services: web development, penetration testing, SOC/SIEM, digital forensics, and AI agents.",
    images: ["/og-services.jpg"],
  },
  keywords: [
    "web development services Pakistan",
    "website developer Rawalpindi",
    "penetration testing services Pakistan",
    "Next.js developer Pakistan",
    "Django developer Pakistan",
    "MERN stack developer",
    "Wazuh SIEM setup",
    "SOC analyst freelancer",
    "digital forensics services",
    "AI agent developer Pakistan",
    "agentic AI automation",
    "AI chatbot integration",
    "GRC compliance consultant",
    "AEO SEO services Pakistan",
    "fix vibe coded app",
    "AbdullahDigital services",
  ],
};

/* ---------------------------------------------------------
   Prices below use priceSpecification + minPrice rather than
   a flat "price" field, since every offer on the page is now
   "From $X" — scope confirmed before work begins. minPrice
   is the schema.org-correct way to represent a starting price
   without implying a fixed, final cost.
   Keep this in sync with ServicesPage.tsx when prices change.
--------------------------------------------------------- */
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Development, Penetration Testing, SOC Engineering, Digital Forensics, and AI Agent Development",
  "provider": {
    "@type": "Person",
    "name": "Muhammad Abdullah",
    "alternateName": "AbdullahDigital",
    "jobTitle": "Full-Stack Developer & Penetration Tester",
    "url": "https://abdullahdigital.vercel.app",
    "email": "abdullahwebhero@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rawalpindi",
      "addressRegion": "Punjab",
      "addressCountry": "Pakistan"
    },
    "areaServed": [
      { "@type": "City", "name": "Rawalpindi" },
      { "@type": "City", "name": "Islamabad" },
      { "@type": "Country", "name": "Pakistan" },
      { "@type": "Place", "name": "Worldwide" }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/abdullahdigital/",
      "https://github.com/abdullahdigital/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AbdullahDigital Service Catalog",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Web Development",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "199" },
              "itemOffered": { "@type": "Service", "name": "Next.js Landing Page", "description": "Fast, responsive landing page built and deployed in days." }
            },
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "999" },
              "itemOffered": { "@type": "Service", "name": "MERN Stack Web App", "description": "Full-stack app with MongoDB, Express, React, and Node." }
            },
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "1149" },
              "itemOffered": { "@type": "Service", "name": "E-Commerce Store Build", "description": "Online store with payments, cart, and inventory tracking." }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Fix & Rescue",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "499" },
              "itemOffered": { "@type": "Service", "name": "Fix Your Vibe-Coded App", "description": "Audit and patch an AI-generated app before it breaks in production." }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Security & Penetration Testing",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "749" },
              "itemOffered": { "@type": "Service", "name": "Website Penetration Test", "description": "Manual exploitation of a web app, not just an automated scan." }
            },
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "1249" },
              "itemOffered": { "@type": "Service", "name": "Network Penetration Test", "description": "Internal or external network assessment with real attack paths." }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "SOC & Blue Team",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "749" },
              "itemOffered": { "@type": "Service", "name": "Wazuh SIEM Setup", "description": "Wazuh installed, agents deployed, dashboard and detection rules configured." }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Digital Forensics & Reverse Engineering",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "849" },
              "itemOffered": { "@type": "Service", "name": "Malware Reverse Engineering", "description": "Static and Assembly-level breakdown of what a binary actually does." }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "AI, Agents & Automation",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "349" },
              "itemOffered": { "@type": "Service", "name": "AI Chatbot Integration", "description": "OpenAI, Claude, or Gemini wired into a website or app." }
            },
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "1399" },
              "itemOffered": { "@type": "Service", "name": "Custom AI Agent Build", "description": "Planner, tool-use, and decision agents working together on one task." }
            },
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "1249" },
              "itemOffered": { "@type": "Service", "name": "Agentic Workflow Automation", "description": "Multi-step AI agent that automates a real business process end to end." }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "GRC & Compliance",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "2199" },
              "itemOffered": { "@type": "Service", "name": "Custom GRC Platform", "description": "Risk register, control mapping, and audit reporting in one tool." }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "DevOps & Systems Engineering",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "1899" },
              "itemOffered": { "@type": "Service", "name": "Distributed Processing System (Rust)", "description": "High-throughput log or data processing built in Rust for real scale." }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "SEO & Visibility",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "179" },
              "itemOffered": { "@type": "Service", "name": "AEO / AI Search Optimization", "description": "Optimize for AI answer engines, not just Google." }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Content, Podcast & Writing",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "149" },
              "itemOffered": { "@type": "Service", "name": "Sponsor a Podcast Episode", "description": "Get featured on \"When Cyber Asks\" in front of a security-focused audience." }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Consulting & Mentorship",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "minPrice": "0" },
              "itemOffered": { "@type": "Service", "name": "Free 10-Minute Site Audit", "description": "Quick look at a site or app before committing to anything." }
            }
          ]
        }
      ]
    }
  },
  "areaServed": ["Pakistan", "Rawalpindi", "Islamabad", "Worldwide"],
  "audience": "Businesses, startups, and individuals needing web development, security, or AI services",
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
      <Navbar />
      <ServicesPage />
      <Footer />
    </>
  );
}