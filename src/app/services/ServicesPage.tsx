"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaShieldAlt,
  FaRobot,
  FaSearch,
  FaShoppingCart,
  FaServer,
  FaDatabase,
  FaPaintBrush,
  FaEnvelope,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiPostgresql } from "react-icons/si";
import Link from "next/link";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  techStack: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Next.js & React Web Development",
    description:
      "High-performance, production-grade websites and web applications built with Next.js 16+ (App Router), React 19, and TypeScript. Optimized for Core Web Vitals (LCP, FID, CLS), SEO, and mobile-first responsiveness.",
    icon: RiNextjsFill,
    features: [
      "Server Components + RSC for maximum SEO and speed",
      "Tailwind CSS + Framer Motion animations",
      "Dynamic sitemap, robots.txt, and JSON-LD structured data",
      "Image optimization with Next.js Image + AVIF/WebP",
      "Deployed on Vercel with 99.9% uptime",
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    title: "Django & Python Backend Development",
    description:
      "Robust, scalable backends and REST APIs using Django 5+, DRF, PostgreSQL, and Redis. Production-ready with JWT authentication, rate limiting, caching, and full admin dashboard.",
    icon: SiDjango,
    features: [
      "Django REST Framework (DRF) with OpenAPI/Swagger docs",
      "JWT + OAuth 2.0 + Google/GitHub social login",
      "PostgreSQL + Redis caching + Celery async tasks",
      "Role-based access control (RBAC)",
      "Nginx + Gunicorn + Docker deployment",
    ],
    techStack: ["Django 5", "Django REST", "Python 3.12", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: 3,
    title: "MERN Stack Full-Stack Applications",
    description:
      "Dynamic real-time platforms, dashboards, SaaS tools, and social apps built with MongoDB + Express + React + Node.js. WebSocket support for chat, live updates, and collaborative features.",
    icon: SiMongodb,
    features: [
      "MongoDB aggregation pipelines & Mongoose ORM",
      "Express.js middleware & JWT auth with refresh tokens",
      "React + Redux Toolkit + React Query state management",
      "Socket.IO / WebSockets for real-time features",
      "Pagination, filtering, and infinite scroll",
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO"],
  },
  {
    id: 4,
    title: "Secure Website Development & Cybersecurity",
    description:
      "OWASP Top 10 hardened websites with penetration testing reports, CSP/HSTS security headers, input sanitization, and secure authentication. I've completed 48+ projects with zero security incidents.",
    icon: FaShieldAlt,
    features: [
      "OWASP Top 10 + SANS 25 vulnerability prevention",
      "Content-Security-Policy (CSP) + HSTS + XSS protection",
      "CSRF tokens, SQLi/XSS/SSRF input sanitization",
      "Penetration testing report with CVSS scores & fixes",
      "TryHackMe Top 4% practitioner (40+ rooms completed)",
    ],
    techStack: ["OWASP ZAP", "Burp Suite", "Nmap", "Nikto", "Snyk"],
  },
  {
    id: 5,
    title: "AI / LLM Integration (OpenAI, Claude, Gemini)",
    description:
      "Production-grade AI integrations: chatbots, RAG systems, content generators, AI agents, and semantic search. Built 2 proprietary cybersecurity AI projects: Agentic Internship Scam Investigator and Advanced Anti-Forensics Detector.",
    icon: FaRobot,
    features: [
      "OpenAI GPT-4o / Claude 3.5 / Gemini 2.0 API integration",
      "RAG (Retrieval-Augmented Generation) with pgvector / Pinecone",
      "LangChain / LlamaIndex agentic workflows",
      "Streaming responses + function calling",
      "Prompt engineering + guardrails + cost optimization",
    ],
    techStack: ["OpenAI API", "LangChain", "pgvector", "Pinecone", "Python", "Next.js"],
  },
  {
    id: 6,
    title: "SEO / GEO / AEO Optimization",
    description:
      "Full search-engine optimization package including technical SEO, on-page SEO, local Pakistani GEO keywords, and answer-engine (AEO) optimization for AI search and featured snippets.",
    icon: FaSearch,
    features: [
      "Unique titles, meta descriptions, canonical URLs on every page",
      "JSON-LD schema: Person, Website, FAQPage, LocalBusiness, Service",
      "Dynamic sitemap.xml + robots.txt + manifest.webmanifest",
      "GEO keywords: Rawalpindi, Islamabad, Pakistan locations",
      "AEO-optimized FAQ with fact-dense, number-rich answers",
    ],
    techStack: ["JSON-LD", "Schema.org", "Google Search Console", "PageSpeed Insights"],
  },
  {
    id: 7,
    title: "E-Commerce Website Development",
    description:
      "Conversion-optimized online stores with Stripe/Razorpay payments, product catalogs, filters, cart, wishlist, admin dashboard, and inventory management. Built 5+ e-commerce platforms (ShopiCore, Dentist Store, Small E-commerce, etc.).",
    icon: FaShoppingCart,
    features: [
      "Stripe / Razorpay / JazzCash secure payment gateway",
      "Product variants, SKUs, inventory tracking",
      "Cart, wishlist, checkout, guest + user accounts",
      "Admin dashboard: orders, sales reports, customers",
      "Abandoned cart emails + discount coupons",
    ],
    techStack: ["Next.js", "Django", "Stripe API", "PostgreSQL", "Redis"],
  },
  {
    id: 8,
    title: "DevOps, Hosting & Performance Optimization",
    description:
      "Full DevOps support: VPS deployment (DigitalOcean, Hetzner, Vercel), Nginx configuration, SSL/HTTPS, Docker, CI/CD pipelines, and performance tuning to achieve 95+ Lighthouse scores.",
    icon: FaServer,
    features: [
      "Vercel / Netlify / DigitalOcean / Hetzner deployment",
      "Nginx reverse proxy + gzip/Brotli compression",
      "Let's Encrypt SSL + auto-renewal",
      "GitHub Actions CI/CD pipelines",
      "Lighthouse 95+ score (Performance, SEO, A11y, Best Practices)",
    ],
    techStack: ["Nginx", "Docker", "GitHub Actions", "Vercel", "Ubuntu", "Cloudflare"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            My Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional web development, AI integration, and cybersecurity services by Muhammad Abdullah (AbdullahDigital) —
            a full-stack developer in Rawalpindi, Pakistan with 48+ delivered projects and a Top 4% TryHackMe ranking.
            Serving clients in Rawalpindi, Islamabad, across Pakistan, and worldwide remotely.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:border-emerald-500/50"
              role="article"
              aria-labelledby={`service-${service.id}-title`}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0) 70%)",
                  zIndex: 0,
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-emerald-400" aria-hidden="true" />
                </div>

                <h2
                  id={`service-${service.id}-title`}
                  className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300"
                >
                  {service.title}
                </h2>

                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                    What's Included
                  </h3>
                  <ul className="space-y-2" role="list">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-emerald-400 mt-1 flex-shrink-0" aria-hidden="true">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-gray-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Technologies I Work With
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Hand-picked, production-ready tools for building fast, secure, and scalable applications
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Next.js", Icon: RiNextjsFill },
              { name: "React", Icon: SiReact },
              { name: "Django", Icon: SiDjango },
              { name: "Node.js", Icon: SiNodedotjs },
              { name: "Express", Icon: SiExpress },
              { name: "MongoDB", Icon: SiMongodb },
              { name: "PostgreSQL", Icon: SiPostgresql },
              { name: "Code", Icon: FaCode },
              { name: "Database", Icon: FaDatabase },
              { name: "Server", Icon: FaServer },
              { name: "Security", Icon: FaShieldAlt },
              { name: "Design", Icon: FaPaintBrush },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, borderColor: "#10B981" }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-colors duration-300"
              >
                <item.Icon className="w-8 h-8 text-emerald-400" aria-hidden="true" />
                <span className="text-sm text-gray-300">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-3xl p-8 md:p-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need a landing page, full web app, AI integration, or a security audit —
            I deliver pixel-perfect, performant, and secure solutions. Located in Rawalpindi, Pakistan,
            available worldwide via remote collaboration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:abdullahwebhero@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <FaEnvelope aria-hidden="true" />
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-bold text-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              View My Work
            </Link>
          </div>
          <p className="text-gray-400 mt-8 text-sm">
            📍 Rawalpindi, Punjab, Pakistan · 📧 abdullahwebhero@gmail.com · 🌐 Remote / Worldwide
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
