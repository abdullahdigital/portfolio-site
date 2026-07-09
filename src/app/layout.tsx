import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextNProgress from 'nextjs-toploader';
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://abdullahdigital.vercel.app"),

  title: {
    default: "AbdullahDigital | Full-Stack Developer Rawalpindi, Pakistan | AI & Cybersecurity",
    template: "%s | AbdullahDigital | Rawalpindi Web Developer",
  },

  description:
    "Portfolio of Muhammad Abdullah, a Full-Stack Developer in Rawalpindi, Pakistan specializing in AI, cybersecurity, and scalable web applications.",

  keywords: [
    "Muhammad Abdullah",
    "AbdullahDigital",
    "Full-Stack Developer Pakistan",
    "Full-Stack Developer Rawalpindi",
    "Web Developer Rawalpindi",
    "Web Developer Pakistan",
    "Cybersecurity Rawalpindi",
    "Cybersecurity Pakistan",
    "AI Developer Pakistan",
    "Next.js Developer Rawalpindi",
    "Django Developer Pakistan",
    "Full-Stack Developer",
    "Cybersecurity",
    "Next.js",
    "React",
    "Django",
    "Python",
    "SOC Analyst",
    "Penetration Testing",
    "AI",
    "Portfolio",
  ],

  category: "Technology",

  applicationName: "AbdullahDigital",

  authors: [
    {
      name: "Muhammad Abdullah",
      url: "https://abdullahdigital.vercel.app",
    },
  ],

 openGraph: {
    type: "website",
    siteName: "AbdullahDigital",
    title: "AbdullahDigital | AI, Cybersecurity & Full-Stack Developer",
    description:
      "Portfolio of Muhammad Abdullah showcasing AI, cybersecurity, and full-stack web development projects.",
    url: "https://abdullahdigital.vercel.app",
    images: [
      {
        url: "/img/my pic.jpeg",
        width: 1200,
        height: 630,
        alt: "Muhammad Abdullah - Full-Stack Developer & Cybersecurity",
      },
    ],
  },

  

  creator: "Muhammad Abdullah",

  publisher: "Muhammad Abdullah",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
   verification: {
    google: "tFPb_6bAMaFanrv-SR_WeH1DwnU868unkPdD5V5S0xQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/logo.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://abdullahdigital.vercel.app/#website",
                  "url": "https://abdullahdigital.vercel.app",
                  "name": "AbdullahDigital Portfolio",
                  "alternateName": "Abdullah's Portfolio",
                  "description": "Portfolio of Muhammad Abdullah, a Full-Stack Developer in Rawalpindi, Pakistan specializing in AI, cybersecurity, and scalable web applications.",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://abdullahdigital.vercel.app/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  },
                  "inLanguage": "en"
                },
                {
                  "@type": "Person",
                  "@id": "https://abdullahdigital.vercel.app/#person",
                  "name": "Muhammad Abdullah",
                  "givenName": "Muhammad",
                  "familyName": "Abdullah",
                  "url": "https://abdullahdigital.vercel.app",
                  "image": "https://abdullahdigital.vercel.app/img/my pic.jpeg",
                  "sameAs": [
                    "https://github.com/abdullahdigital",
                    "https://linkedin.com/in/abdullahdigital",
                    "https://instagram.com/abdullahwebmaster",
                    "https://www.facebook.com/abdullahwebmaster"
                  ],
                  "jobTitle": "Full Stack Web Developer",
                  "description": "Full-Stack Developer & Cybersecurity Expert based in Rawalpindi, Pakistan. Specializes in AI-powered applications, penetration testing, and scalable web solutions.",
                  "knowsAbout": [
                    "Next.js",
                    "React",
                    "Django",
                    "Cyber Security",
                    "UI/UX Design",
                    "Problem Solving",
                    "Scalable Web Applications",
                    "Node.js",
                    "Express.js",
                    "Framer Motion",
                    "MongoDB",
                    "SQL",
                    "AWS",
                    "Tailwind CSS",
                    "PostgreSQL",
                    "Git",
                    "GitHub",
                    "Flask",
                    "FastAPI",
                    "Laravel",
                    "PHP",
                    "Python",
                    "JavaScript",
                    "TypeScript",
                    "jQuery",
                    "HTML5",
                    "CSS3",
                    "Bootstrap",
                    "Responsive Web Design",
                    "Web Design",
                    "Back-End Development",
                    "Full Stack Development",
                    "Django REST Framework",
                    "Apache",
                    "Docker",
                    "Shadcn/UI",
                    "REST APIs",
                    "API Testing",
                    "Authentication",
                    "WebSockets",
                    "SQLite",
                    "MySQL",
                    "Elasticsearch",
                    "OWASP Top 10",
                    "SQL Injection",
                    "Cross-Site Scripting (XSS)",
                    "Broken Authentication",
                    "Insecure Design",
                    "Security Misconfiguration",
                    "Vulnerable & Outdated Components",
                    "Identification & Authentication Failures",
                    "Software & Data Integrity Failures",
                    "Server-Side Request Forgery (SSRF)",
                    "Access Control Failures",
                    "Agentic AI",
                    "AI Automation",
                    "SIEM",
                    "Anti-Forensics",
                    "Log Analysis"
                  ],
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Freelance / Startups"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Rawalpindi",
                    "addressRegion": "Punjab",
                    "addressCountry": "PK"
                  },
                  "workLocation": {
                    "@type": "Place",
                    "name": "Rawalpindi, Pakistan"
                  },
                  "knowsLanguage": ["English", "Urdu"],
                  "alumniOf": {
                    "@type": "Organization",
                    "name": "Local Educational Institutions"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://abdullahdigital.vercel.app/#localbusiness",
                  "name": "AbdullahDigital",
                  "description": "Full-Stack Development & Cybersecurity Services in Rawalpindi, Pakistan",
                  "url": "https://abdullahdigital.vercel.app",
                  "telephone": "+92",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Rawalpindi",
                    "addressRegion": "Punjab",
                    "addressCountry": "PK"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 33.5651,
                    "longitude": 73.0169
                  },
                  "openingHours": "Mo-Su 09:00-18:00",
                  "priceRange": "$$",
                  "areaServed": "Rawalpindi, Islamabad, Pakistan, Worldwide",
                  "servesCuisine": "N/A",
                  "sameAs": [
                    "https://github.com/abdullahdigital",
                    "https://linkedin.com/in/abdullahdigital"
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <NextNProgress
          color="#29D"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #29D, 0 0 5px #29D"
        />
        {children}

          <GoogleAnalytics gaId="G-NGNQMKS0BH" />

        {/* Original Portfolio of AbdullahDigital | https://abdullahdigital.vercel.app */}
      </body>
    </html>
  );
}
