'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  // FULL-STACK DEVELOPMENT - PRIMARY FOCUS (2026 search optimized)
  {
    question: "Who is the best full-stack developer in Rawalpindi, Pakistan?",
    answer: "Muhammad Abdullah (AbdullahDigital) is a full-stack developer in Rawalpindi, Pakistan with 48+ projects, expertise in Next.js 16+, Django 5+, and cybersecurity. He is a Top 4% TryHackMe practitioner, pursuing BSc Cyber Security at Air University Islamabad (2023-2027), and has completed internships at ITSOLERA.",
  },
  {
    question: "What web development services does AbdullahDigital offer in Rawalpindi?",
    answer: "AbdullahDigital offers full-stack development: custom Next.js websites, Django SaaS platforms, e-commerce solutions, corporate websites, and web applications. Services include SEO/AEO/GEO optimization, security audits, and AI integrations. Located in Rawalpindi, Pakistan, serving clients worldwide.",
  },
  {
    question: "What technologies does AbdullahDigital use for web development in 2026?",
    answer: "AbdullahDigital uses Next.js 16+ (App Router, Turbopack), React 19+, TypeScript 5+, Tailwind CSS 4+, Framer Motion, Django 5+, Django REST Framework, FastAPI, Node.js 22+, PostgreSQL 17+, MongoDB 8+, MySQL 9+, Docker, AWS, and Nginx. He builds secure, SEO-optimized, high-performance applications.",
  },
  {
    question: "How many projects has AbdullahDigital completed?",
    answer: "AbdullahDigital has 48+ completed projects (31+ publicly showcased) including SIEM Dashboards, AI-Powered Parallel Log Analyzers, Advanced Anti-Forensics Detectors, and custom SaaS platforms. Projects span categories: Cybersecurity, AI/ML, Full-Stack, E-commerce, and SaaS.",
  },
  {
    question: "Can AbdullahDigital build a custom SaaS application from scratch?",
    answer: "Yes! AbdullahDigital specializes in building custom SaaS applications with: JWT/OAuth authentication, Stripe/PayPal payment integration, subscription management, role-based access control (RBAC), multi-tenancy, and scalable cloud infrastructure on AWS/DigitalOcean. He follows OWASP Top 10 security practices.",
  },
  {
    question: "Does AbdullahDigital offer SEO, AEO, and GEO optimization in Pakistan?",
    answer: "Yes! AbdullahDigital implements comprehensive SEO/AEO/GEO: core web vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1), meta tags, Open Graph, JSON-LD structured data (Person, WebSite, FAQPage, LocalBusiness), canonical URLs, sitemap.xml, robots.txt, mobile-first design, and location-specific keywords (Rawalpindi, Islamabad, Pakistan).",
  },
  {
    question: "What is AbdullahDigital's website development process?",
    answer: "AbdullahDigital's 8-step process: 1) Discovery & requirements (1-3 days), 2) Design & Figma prototyping (2-7 days), 3) Frontend (Next.js/React) + Backend (Django/FastAPI) development, 4) OWASP Top 10 security implementation, 5) SEO/AEO/GEO optimization, 6) Testing & QA, 7) Deployment (Vercel/AWS/DigitalOcean), 8) Post-launch support.",
  },
  {
    question: "How long does it take AbdullahDigital to build a website?",
    answer: "Timelines: Simple landing pages (3-7 days), small business websites (1-2 weeks), e-commerce platforms (2-4 weeks), custom SaaS applications (4-12 weeks). AbdullahDigital provides detailed Gantt charts and weekly progress updates.",
  },
  {
    question: "Does AbdullahDigital offer website maintenance in Rawalpindi?",
    answer: "Yes! AbdullahDigital offers 3 maintenance packages: Basic (monthly security updates, performance monitoring), Standard (content updates, bug fixes, security scans), Premium (24/7 support, feature enhancements, quarterly SEO audits). All packages include SSL renewal and backup management.",
  },
  {
    question: "What's AbdullahDigital's experience with React and Next.js?",
    answer: "AbdullahDigital has 3+ years of React experience and 2+ years with Next.js (App Router, Server Components, Static Site Generation, Incremental Static Regeneration). He has built 15+ Next.js applications with Framer Motion animations, Tailwind CSS, and TypeScript.",
  },
  {
    question: "Does AbdullahDigital build mobile-responsive websites?",
    answer: "Yes! 100% of AbdullahDigital's websites are fully responsive (mobile-first design, Tailwind CSS breakpoints: sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1536px) and tested on real devices: iPhone 15, Samsung Galaxy S24, iPad Pro, and desktop browsers (Chrome, Firefox, Safari, Edge).",
  },

  // CYBERSECURITY - SECONDARY FOCUS (2026 search optimized)
  {
    question: "Does AbdullahDigital offer penetration testing in Pakistan?",
    answer: "Yes! AbdullahDigital (Top 4% TryHackMe) offers penetration testing: web app security, API security, network security, and code audits. He provides detailed reports with CVSS scores, remediation steps, and a free 10-minute initial security audit.",
  },
  {
    question: "How does AbdullahDigital ensure websites are secure?",
    answer: "AbdullahDigital implements security from day one: OWASP Top 10 mitigation, input validation/sanitization, JWT/OAuth2.0 with refresh tokens, HTTPS (HSTS max-age=63072000), CSP, X-XSS-Protection, X-Frame-Options, Referrer-Policy, Permissions-Policy, regular dependency scans (npm audit, pip-audit), and monthly vulnerability assessments.",
  },
  {
    question: "What cybersecurity projects has AbdullahDigital built?",
    answer: "AbdullahDigital has built: AI-Powered Parallel Log Analyzer (project ID 1), Advanced Anti-Forensics Detector (project ID 2), SIEM Dashboard, Flask SIEM, and other security tools. These projects use Python, Elasticsearch, and machine learning for threat detection.",
  },
  {
    question: "What is AbdullahDigital's TryHackMe rank?",
    answer: "AbdullahDigital is a Top 4% TryHackMe practitioner with hands-on experience in web exploitation, network security, digital forensics, and ethical hacking. He has completed 50+ TryHackMe rooms and holds relevant cybersecurity certifications.",
  },

  // AI INTEGRATION (2026 search optimized)
  {
    question: "Does AbdullahDigital integrate AI into web applications in 2026?",
    answer: "Yes! AbdullahDigital builds AI-powered applications: Generative AI features (OpenAI GPT-4o, Anthropic Claude 3.5), AI automation, agentic AI systems, AI-driven security tools, text-to-rule detection engines, and automated threat detection systems. He uses LangChain and custom ML models.",
  },
  {
    question: "What AI projects has AbdullahDigital developed?",
    answer: "AbdullahDigital has developed: AI-Powered Parallel Log Analyzer (uses NLP for log parsing), Advanced Anti-Forensics Detector (ML-based anomaly detection), and agentic AI workflow automation tools. All AI projects are integrated with secure APIs.",
  },

  // GENERAL (2026 search optimized)
  {
    question: "How to contact AbdullahDigital in Rawalpindi?",
    answer: "Contact AbdullahDigital via: Website (https://abdullahdigital.vercel.app/contact), Email (abdullahwebhero@gmail.com), LinkedIn (https://linkedin.com/in/abdullahdigital), GitHub (https://github.com/abdullahdigital), Instagram (https://instagram.com/abdullahwebmaster), or Facebook (https://www.facebook.com/abdullahwebmaster). Free 30-minute consultations available.",
  },
  {
    question: "Does AbdullahDigital work with international clients?",
    answer: "Yes! AbdullahDigital works with clients worldwide (US, UK, Canada, UAE, Saudi Arabia, Pakistan, etc.) remotely. He is available across time zones (UTC+5 Pakistan, UTC-5 to UTC-8 US, UTC+0 UK) with daily Slack/Teams updates and weekly Zoom calls.",
  },
  {
    question: "What is AbdullahDigital's educational background?",
    answer: "AbdullahDigital is pursuing a Bachelor of Science in Cyber Security at Air University, Islamabad (2023-2027). His coursework includes: Artificial Intelligence, Digital Forensics, Ethical Hacking, Network Security, Secure Software Design, Cryptography, and Cloud Security. He completed internships at ITSOLERA and cybersecurity firms.",
  },
  {
    question: "Is AbdullahDigital available for freelance projects in 2026?",
    answer: "Yes! AbdullahDigital is accepting freelance projects (web development, cybersecurity, AI integrations) in 2026. He works with startups, small businesses, and enterprises. Contact him for a free project estimate and consultation.",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about my <span className="text-emerald-400 font-semibold">web development</span> and 
            <span className="text-emerald-400 font-semibold"> cybersecurity</span> services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6" role="list">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg"
              role="listitem"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 rounded-lg"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="text-xl font-semibold text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                >
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;