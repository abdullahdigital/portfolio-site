import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextNProgress from 'nextjs-toploader';
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://abdullahdigital.vercel.app"),

  title: {
    default: "AbdullahDigital | AI, Cybersecurity & Full-Stack Developer",
    template: "%s | AbdullahDigital",
  },

  description:
    "Portfolio of Muhammad Abdullah showcasing AI, cybersecurity, and full-stack web development projects.",

  keywords: [
    "Muhammad Abdullah",
    "AbdullahDigital",
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
                  "url": "https://abdullahdigital.vercel.app",
                  "name": "Abdullah's Portfolio",
                  "description": "Abdullah is a Full-Stack Developer and UI/UX Enthusiast specializing in building secure and scalable web applications. Explore his portfolio of projects and skills."
                },
                {
                  "@context": "https://schema.org",
                  "@type": "Person",
                  "name": "Abdullah",
                  "url": "https://abdullahdigital.vercel.app",
                  "sameAs": [
                    "https://github.com/abdullahdigital",
                    "https://linkedin.com/in/abdullahdigital",
                    "https://instagram.com/abdullahwebmaster",
                    "https://www.facebook.com/abdullahwebmaster"
                  ],
                  "jobTitle": "Full Stack Web Developer",
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
                    "Access Control Failures"
                  ],
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Freelance / Startups"
                  }
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
