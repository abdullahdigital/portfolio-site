import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextNProgress from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdullah's Portfolio",
  description: "A personal portfolio website showcasing my skills and projects.",
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
        <script type="application/ld+json">
          {`
${JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abdullah",
            "url": "https://abdullahdigital.vercel.app",
            "sameAs": [
              "https://github.com/abdullahdigital",
              "https://linkedin.com/in/yourprofile",
              "https://instagram.com/yourprofile"
            ],
            "jobTitle": "Full Stack Web Developer",
            "knowsAbout": ["Next.js", "React", "Django", "Cyber Security"],
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance / Startups"
            }
          }, null, 2)}
          `}
        </script>
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
        {/* Original Portfolio of AbdullahDigital | https://abdullahdigital.vercel.app */}
      </body>
    </html>
  );
}
