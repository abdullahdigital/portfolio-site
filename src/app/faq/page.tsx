import type { Metadata } from "next";
import FAQPage from "./FAQPage";

export const metadata: Metadata = {
  title: "FAQ | Abdullah - Web Developer & Cybersecurity Expert",
  description: "Frequently asked questions about Abdullah's web development, AI integration, and cybersecurity services. Get answers about custom websites, SaaS, React, Django, and more.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Abdullah - Web Developer & Cybersecurity Expert",
    description: "Frequently asked questions about Abdullah's web development, AI integration, and cybersecurity services.",
    url: "https://abdullahdigital.vercel.app/faq",
    siteName: "Abdullahdigital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Abdullah - Web Developer & Cybersecurity Expert",
    description: "Frequently asked questions about Abdullah's web development, AI integration, and cybersecurity services.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    // WEB DEVELOPMENT FAQs
    {
      "@type": "Question",
      "name": "What web development services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I offer full-stack web development including custom websites, SaaS applications, e-commerce platforms, corporate websites, and web applications. I specialize in building secure, scalable, and SEO-optimized solutions using modern technologies."
      }
    },
    {
      "@type": "Question",
      "name": "What technologies do you use for web development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I work with Next.js, React, Angular, Vue.js, Django, Django REST Framework, Flask, FastAPI, Node.js, Laravel, PostgreSQL, MongoDB, MySQL, Tailwind CSS, Bootstrap, TypeScript, JavaScript, and Python. I choose the best tech stack for each project's specific needs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you build custom websites from scratch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! I build custom websites tailored to your business needs - from simple landing pages to complex web applications and SaaS platforms. Every website I build is unique, responsive, and optimized for performance."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer SEO optimization for websites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! All websites I build are SEO optimized with core web vitals, meta tags, Open Graph tags, structured data (JSON-LD), semantic HTML, mobile-first design, fast loading times, and accessibility compliance. I also implement AEO and GEO best practices."
      }
    },
    {
      "@type": "Question",
      "name": "What's your website development process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "My process includes: 1) Discovery & requirements gathering, 2) Design & prototyping, 3) Development (frontend + backend), 4) Security implementation, 5) SEO optimization, 6) Testing & quality assurance, 7) Deployment, and 8) Post-launch support."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build SaaS applications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! I specialize in building custom SaaS applications from scratch including user authentication, subscription management, payment integration, and scalable infrastructure. I've helped startups launch their SaaS products with secure architecture."
      }
    },
    {
      "@type": "Question",
      "name": "Do you build API integrations and backend systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! I build robust backend systems and REST APIs using Django, Django REST Framework, Node.js, FastAPI, Flask, and Laravel. I implement API integrations with payment gateways, CRMs, email services, and more with secure authentication (JWT, OAuth)."
      }
    },
    {
      "@type": "Question",
      "name": "What's your experience with React and Next.js?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I have extensive experience with React and Next.js for building modern, fast, and SEO-friendly web applications. I build server-side rendered (SSR) and static (SSG) applications with Next.js with responsive, component-based UIs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you ensure websites are mobile-responsive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Every website I build is fully responsive on all devices - desktops, tablets, and smartphones. I use mobile-first design principles and responsive frameworks like Tailwind CSS and Bootstrap."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timelines depend on project scope. Simple websites may take a few days, while larger applications can take several weeks. I provide a clear timeline during the planning phase and keep you updated throughout development."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer website maintenance and support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! I offer ongoing maintenance including security updates, performance monitoring, content updates, bug fixes, and technical support. I offer flexible maintenance packages based on your needs."
      }
    },
    // CYBERSECURITY FAQs
    {
      "@type": "Question",
      "name": "Do you offer cybersecurity and penetration testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! I provide penetration testing, vulnerability assessments, code security audits, and SOC implementation. I'm a Top 4% TryHackMe practitioner with hands-on experience in web and network security. I offer a free 10-minute security audit."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure websites are secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I implement security from day one with secure coding practices (OWASP Top 10), input validation, secure authentication (JWT, OAuth), HTTPS, security headers (HSTS, CSP), regular security audits, and vulnerability scanning. I think like an attacker while building systems."
      }
    },
    {
      "@type": "Question",
      "name": "What security services do you provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I offer penetration testing (web, API, network), vulnerability assessments, code security reviews, SOC implementation, SIEM configuration, incident response, and security audits. I've built AI-powered security projects and SIEM solutions."
      }
    },
    // AI INTEGRATION FAQ
    {
      "@type": "Question",
      "name": "Do you integrate AI into web applications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! I build AI-powered web applications with Generative AI features, automation, intelligent systems, and AI-driven security solutions including text-to-rule detection engines and automated threat detection systems."
      }
    },
    // GENERAL FAQs
    {
      "@type": "Question",
      "name": "How can I contact you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact me via the Contact section on this website, email at abdullahwebhero@gmail.com, or connect on LinkedIn at linkedin.com/in/abdullahdigital. I offer free consultations for new projects!"
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with startups and small businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! I work with startups, agencies, and enterprises of all sizes. I understand startup challenges and offer flexible solutions including custom development, security audits, and technical consulting."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with international clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! I work with clients worldwide remotely. I've collaborated with startups and enterprises from different countries. I'm available across multiple time zones with clear communication throughout the project."
      }
    },
    {
      "@type": "Question",
      "name": "What's your background and education?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I'm pursuing a Bachelor of Science in Cyber Security at Air University, Islamabad (2023-2027). I've studied Artificial Intelligence, Digital Forensics, Ethical Hacking, Network Security, and Secure Software Design. I've completed internships at ITSOLERA and other cybersecurity firms."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <FAQPage />
    </>
  );
}