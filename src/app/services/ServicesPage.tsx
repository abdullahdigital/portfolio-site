"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaTools,
  FaBug,
  FaShieldAlt,
  FaFingerprint,
  FaRobot,
  FaClipboardCheck,
  FaServer,
  FaChartLine,
  FaMicrophone,
  FaHandshake,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

/* ---------------------------------------------------------
   Productized service catalog.

   Pricing logic (updated for AI-era positioning):
   AI has compressed the price of raw implementation
   (landing pages, CRUD apps, standard dashboards) — those
   are held flat or trimmed slightly below prior numbers.

   What AI has NOT compressed is accountability: fixing a
   broken AI-generated app, finding real vulnerabilities,
   deploying detection systems, automating a business
   process end to end, passing a compliance review. Those
   categories (Fix & Rescue, Security, SOC, Forensics,
   AI Automation, GRC) are priced up accordingly.

   All prices use "From $X" since scope drives the real
   number more than the task label does — a fixed point
   price hides that variance instead of pricing for it.
--------------------------------------------------------- */
interface Offer {
  title: string;
  description: string;
  price: string;
}

interface Category {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  offers: Offer[];
}

const categories: Category[] = [
  {
    name: "Web Development",
    icon: FaCode,
    color: "text-emerald-400",
    offers: [
      { title: "Next.js Landing Page", description: "Fast, responsive landing page built and deployed in days.", price: "From $199" },
      { title: "React Admin Dashboard", description: "Custom dashboard UI for managing your data and users.", price: "From $549" },
      { title: "Django REST API Backend", description: "Secure, documented REST API for your app or mobile client.", price: "From $579" },
      { title: "FastAPI Backend Build", description: "Lightweight, high-performance Python API with auto-generated docs.", price: "From $449" },
      { title: "Flask Web App Build", description: "Simple, fast Python web app for internal tools or MVPs.", price: "From $349" },
      { title: "MERN Stack Web App", description: "Full-stack app with MongoDB, Express, React, and Node.", price: "From $999" },
      { title: "Laravel / PHP Web App", description: "PHP backend with clean routing, auth, and database structure.", price: "From $579" },
      { title: "Vue.js Admin Dashboard", description: "Reactive dashboard UI that's easy to extend and maintain.", price: "From $529" },
      { title: "Angular Enterprise Module", description: "Structured, opinionated module built for large, long-lived apps.", price: "From $749" },
      { title: "Svelte Micro-Site Build", description: "Compiles itself away at build time for near-instant load.", price: "From $279" },
      { title: "Astro Content Site", description: "Content-heavy site that ships almost zero JS by default.", price: "From $329" },
      { title: "SolidJS Real-Time Dashboard", description: "Fine-grained reactivity for dashboards under constant updates.", price: "From $579" },
      { title: "WordPress Site Build or Fix", description: "New WordPress site, or fixes to one that's breaking.", price: "From $189" },
      { title: "Website Migration to Next.js", description: "Move an old stack over without breaking your SEO.", price: "From $429" },
      { title: "E-Commerce Store Build", description: "Online store with payments, cart, and inventory tracking.", price: "From $1,149" },
      { title: "React Native Mobile App", description: "One codebase, iOS and Android, from brief to store-ready.", price: "From $1,749" },
      { title: "Desktop App (PyQt / Tkinter)", description: "Cross-platform desktop tool for internal or client use.", price: "From $849" },
      { title: "Chrome Extension Build", description: "Custom browser extension, from idea to Chrome Web Store.", price: "From $379" },
      { title: "Real-Time Feature Build", description: "Live chat, notifications, or dashboards that update instantly.", price: "From $479" },
      { title: "Payment Gateway Integration", description: "Stripe, Razorpay, or JazzCash wired into your checkout.", price: "From $199" },
      { title: "Custom CMS Build", description: "Content system tailored to how your team actually works.", price: "From $549" },
      { title: "Website Redesign", description: "Modernize an outdated site without losing your rankings.", price: "From $349" },
      { title: "Website Speed Optimization", description: "Push your Lighthouse score up and your load time down.", price: "From $119" },
    ],
  },
  {
    name: "Fix & Rescue",
    icon: FaTools,
    color: "text-amber-400",
    offers: [
      { title: "Fix Your Vibe-Coded App", description: "Audit and patch the AI-generated app before it breaks in production.", price: "From $499" },
      { title: "Legacy Code Refactor", description: "Untangle old code into something your next dev can read.", price: "From $599" },
      { title: "Emergency Site Fix", description: "Site down or broken right now? Same-day triage and fix.", price: "From $149" },
      { title: "Pre-Launch Code Review", description: "A second pair of eyes before you ship to real users.", price: "From $229" },
      { title: "Database Cleanup & Optimization", description: "Fix slow queries, bad schemas, and messy data.", price: "From $329" },
    ],
  },
  {
    name: "Security & Penetration Testing",
    icon: FaBug,
    color: "text-rose-400",
    offers: [
      { title: "Website Penetration Test", description: "Manual exploitation of your web app, not just a scan.", price: "From $749" },
      { title: "API Penetration Test", description: "Test your REST/GraphQL API for broken auth and injection.", price: "From $549" },
      { title: "Network Penetration Test", description: "Internal or external network assessment, real attack paths.", price: "From $1,249" },
      { title: "OWASP Top 10 Audit", description: "Full audit against the OWASP Top 10 with a fix-it report.", price: "From $599" },
      { title: "Secure Code Review", description: "Line-by-line review for injection, auth, and logic flaws.", price: "From $499" },
      { title: "Auth & JWT Security Review", description: "Stress-test your login, sessions, and token handling.", price: "From $349" },
      { title: "Security Header Hardening", description: "CSP, HSTS, and headers configured to actually block attacks.", price: "From $149" },
      { title: "XSS / SQLi Remediation Sprint", description: "Find and fix injection points before someone else finds them.", price: "From $399" },
      { title: "Vulnerability Assessment Report", description: "CVSS-scored findings ranked by real-world risk.", price: "From $599" },
      { title: "Pre-Launch Security Checklist", description: "A go/no-go security pass before you launch.", price: "From $249" },
      { title: "Password & Credential Audit", description: "Test password policies and stored credentials against real cracking tools.", price: "From $299" },
      { title: "DDoS Simulation & Mitigation Test", description: "Simulate load-based attacks and verify your defenses hold.", price: "From $649" },
    ],
  },
  {
    name: "SOC & Blue Team",
    icon: FaShieldAlt,
    color: "text-sky-400",
    offers: [
      { title: "Wazuh SIEM Setup", description: "Wazuh installed, agents deployed, dashboard configured.", price: "From $749" },
      { title: "ELK Stack Deployment", description: "Elasticsearch, Logstash, and Kibana for centralized log analysis.", price: "From $729" },
      { title: "Custom Detection Rule Writing", description: "SIEM rules tuned to your actual environment, not defaults.", price: "From $189" },
      { title: "pfSense Firewall Configuration", description: "Network zones, rules, and logging set up properly.", price: "From $449" },
      { title: "Snort / Suricata IDS Setup", description: "Intrusion detection tuned to catch real threats, not noise.", price: "From $529" },
      { title: "Threat Hunting Session", description: "Manual log review to find what your alerts missed.", price: "From $149" },
      { title: "Reverse Shell Detection Rules", description: "Catch reverse shells and C2 callbacks before they matter.", price: "From $269" },
      { title: "SOC Dashboard Build", description: "Custom monitoring UI for your security team.", price: "From $899" },
      { title: "Honeypot Deployment", description: "Deploy and monitor a honeypot to study real attack attempts.", price: "From $349" },
    ],
  },
  {
    name: "Digital Forensics & Reverse Engineering",
    icon: FaFingerprint,
    color: "text-violet-400",
    offers: [
      { title: "Incident Investigation Report", description: "Timeline reconstruction after a suspected breach.", price: "From $699" },
      { title: "Malware Analysis Report", description: "Static and dynamic analysis of a suspicious file or binary.", price: "From $549" },
      { title: "Malware Reverse Engineering", description: "Static and Assembly-level breakdown of what a binary actually does.", price: "From $849" },
      { title: "Anti-Forensics Detection", description: "Find evidence of wiped logs, spoofed files, and tampering.", price: "From $629" },
      { title: "Custom YARA Rule Development", description: "Rules to detect the specific malware family you're facing.", price: "From $189" },
      { title: "Post-Breach Forensic Report", description: "What happened, how, and what to fix so it won't repeat.", price: "From $849" },
    ],
  },
  {
    name: "AI, Agents & Automation",
    icon: FaRobot,
    color: "text-teal-400",
    offers: [
      { title: "Website Chatbox Widget", description: "Embeddable chat widget that answers visitor questions instantly.", price: "From $229" },
      { title: "AI Chatbot Integration", description: "OpenAI, Claude, or Gemini wired into your site or app.", price: "From $349" },
      { title: "Agentic Workflow Automation", description: "Multi-step AI agent that automates a real business process end to end.", price: "From $1,249" },
      { title: "Custom AI Agent Build", description: "Planner, tool-use, and decision agents working together on one task.", price: "From $1,399" },
      { title: "GenAI Content Pipeline", description: "Bulk-generate on-brand content on a schedule, reviewed before it ships.", price: "From $549" },
      { title: "AI Customer Support Automation", description: "Auto-triage and answer support tickets before they reach a human.", price: "From $699" },
      { title: "RAG Knowledge Search", description: "Ask questions, get answers pulled from your own documents.", price: "From $799" },
      { title: "Text-to-Rule Automation Engine", description: "Turn plain-English instructions into working detection or business rules.", price: "From $1,099" },
      { title: "AI Lead Qualification Agent", description: "Scores and routes inbound leads automatically, no manual sorting.", price: "From $499" },
      { title: "Tool & App Automation", description: "Connect your existing tools with AI-driven automation between them.", price: "From $399" },
      { title: "AI Content Generator Tool", description: "Internal tool that drafts reports or summaries on demand.", price: "From $529" },
      { title: "Prompt Engineering & Guardrails", description: "Tighten your prompts so the model stays on-task and on-budget.", price: "From $199" },
      { title: "LLM Cost Optimization", description: "Cut your API bill without cutting output quality.", price: "From $249" },
      { title: "AI-Powered Security Extension", description: "Browser extension that flags phishing or risk in real time.", price: "From $699" },
    ],
  },
  {
    name: "GRC & Compliance",
    icon: FaClipboardCheck,
    color: "text-lime-400",
    offers: [
      { title: "Custom GRC Platform", description: "Risk register, control mapping, and audit reporting in one tool.", price: "From $2,199" },
      { title: "ISO 27001 Gap Assessment", description: "Where you stand against ISO 27001, and what's missing.", price: "From $749" },
      { title: "Risk Register & Report", description: "Documented risks, scored and prioritized for leadership.", price: "From $399" },
      { title: "Security Policy Documentation", description: "Policies written in plain language people actually follow.", price: "From $349" },
      { title: "CTI Threat Intelligence Report", description: "Curated threat intel relevant to your industry, sources, and IOCs.", price: "From $449" },
    ],
  },
  {
    name: "DevOps & Systems Engineering",
    icon: FaServer,
    color: "text-orange-400",
    offers: [
      { title: "VPS Server Setup", description: "Server provisioned, hardened, and ready for production.", price: "From $99" },
      { title: "Dockerize Your App", description: "Containerized so it runs the same everywhere, every time.", price: "From $129" },
      { title: "CI/CD Pipeline Setup", description: "Push to deploy, with tests running automatically.", price: "From $179" },
      { title: "SSL & Domain Setup", description: "HTTPS, DNS, and domain configured correctly the first time.", price: "From $59" },
      { title: "Nginx Reverse Proxy Setup", description: "Routing, caching, and compression configured properly.", price: "From $89" },
      { title: "Uptime & Monitoring Setup", description: "Get alerted before your users notice something's down.", price: "From $99" },
      { title: "Distributed Processing System (Rust)", description: "High-throughput log or data processing built in Rust for real scale.", price: "From $1,899" },
    ],
  },
  {
    name: "SEO & Visibility",
    icon: FaChartLine,
    color: "text-cyan-400",
    offers: [
      { title: "Technical SEO Audit", description: "Find what's actually blocking your rankings, and fix it.", price: "From $139" },
      { title: "Structured Data Implementation", description: "JSON-LD schema so search engines understand your pages.", price: "From $109" },
      { title: "AEO / AI Search Optimization", description: "Optimize for AI answer engines, not just Google.", price: "From $179" },
      { title: "Local SEO Setup", description: "GEO-targeted keywords and listings for local visibility.", price: "From $119" },
      { title: "Sitemap & Robots.txt Setup", description: "The basics done right, so crawlers can actually find you.", price: "From $35" },
    ],
  },
  {
    name: "Content, Podcast & Writing",
    icon: FaMicrophone,
    color: "text-fuchsia-400",
    offers: [
      { title: "Sponsor a Podcast Episode", description: "Get featured on \"When Cyber Asks\" in front of a security-focused audience.", price: "From $149" },
      { title: "Cybersecurity Content Series", description: "A multi-part educational series written for your brand's audience.", price: "From $249" },
      { title: "Technical Blog / Article", description: "One well-researched technical article, ready to publish.", price: "From $69" },
      { title: "LinkedIn Ghostwriting", description: "Monthly technical posts written and scheduled in your voice.", price: "From $199/mo" },
      { title: "Technical Documentation", description: "Docs your team and users will actually read.", price: "From $179" },
      { title: "Website / Product Copywriting", description: "Landing page or product copy that explains, not just sells.", price: "From $119" },
    ],
  },
  {
    name: "Consulting & Mentorship",
    icon: FaHandshake,
    color: "text-indigo-400",
    offers: [
      { title: "1:1 Tech Consulting Call", description: "An hour to work through your specific problem, live.", price: "From $59" },
      { title: "Code Review & Mentorship", description: "Walk through your code together and level up as you go.", price: "From $69" },
      { title: "Resume / Portfolio Review", description: "Feedback on your resume or portfolio from a hiring lens.", price: "From $35" },
      { title: "Free 10-Minute Site Audit", description: "Quick look at your site or app before you commit to anything.", price: "Free" },
    ],
  },
];

const totalOffers = categories.reduce((sum, c) => sum + c.offers.length, 0);

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {totalOffers}+ specific, priced offers across development,
            security, and AI. Pick what you need no vague packages.
          </p>
          <p className="text-xs text-gray-500 mt-3">
            Prices are starting points. Final scope gets confirmed before any work begins.
          </p>
        </motion.div>

        {/* Categories */}
        {categories.map((category) => (
          <motion.section
            key={category.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-5">
              <category.icon className={`w-5 h-5 ${category.color}`} aria-hidden="true" />
              <h2 className="text-xl md:text-2xl font-bold text-white">{category.name}</h2>
              <div className="flex-1 h-px bg-slate-800" />
              <span className="text-xs text-gray-500">{category.offers.length} offers</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {category.offers.map((offer) => (
                <div
                  key={offer.title}
                  className="group bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <h3 className="text-sm font-semibold text-white mb-1 leading-snug">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {offer.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-emerald-400">
                      {offer.price}
                    </span>
                    <FaArrowRight
                      className="w-3 h-3 text-gray-700 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all duration-200"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-3xl p-8 md:p-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't see exactly what you need?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
            Most real projects mix a few of these together. Send a DM with the
            word "audit" and I'll take a free 10-minute look first.
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
          <p className="text-gray-500 mt-8 text-sm">
            📍 Rawalpindi, Punjab, Pakistan · 📧 abdullahwebhero@gmail.com · 🌐 Remote / Worldwide
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;