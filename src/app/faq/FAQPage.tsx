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
  // FULL-STACK DEVELOPMENT - PRIMARY FOCUS
  {
    question: "What web development services do you offer?",
    answer: "I offer full-stack web development including custom websites, SaaS applications, e-commerce platforms, corporate websites, and web applications. I specialize in building secure, scalable, and SEO-optimized solutions using modern technologies.",
  },
  {
    question: "What technologies do you use for web development?",
    answer: "I work with Next.js, React, Angular, Vue.js, Django, Django REST Framework, Flask, FastAPI, Node.js, Laravel, PostgreSQL, MongoDB, MySQL, Tailwind CSS, Bootstrap, TypeScript, JavaScript, and Python. I choose the best tech stack for each project's specific needs.",
  },
  {
    question: "Do you build custom websites from scratch?",
    answer: "Yes! I build custom websites tailored to your business needs - from simple landing pages to complex web applications and SaaS platforms. Every website I build is unique, responsive, and optimized for performance.",
  },
  {
    question: "Do you offer SEO optimization for websites?",
    answer: "Yes! All websites I build are SEO optimized with core web vitals, meta tags, Open Graph tags, structured data (JSON-LD), semantic HTML, mobile-first design, fast loading times, and accessibility compliance. I also implement AEO and GEO best practices.",
  },
  {
    question: "What's your website development process?",
    answer: "My process includes: 1) Discovery & requirements gathering, 2) Design & prototyping, 3) Development (frontend + backend), 4) Security implementation, 5) SEO optimization, 6) Testing & quality assurance, 7) Deployment, and 8) Post-launch support.",
  },
  {
    question: "Can you build SaaS applications?",
    answer: "Yes! I specialize in building custom SaaS applications from scratch including user authentication, subscription management, payment integration, and scalable infrastructure. I've helped startups launch their SaaS products with secure architecture.",
  },
  {
    question: "Do you build API integrations and backend systems?",
    answer: "Yes! I build robust backend systems and REST APIs using Django, Django REST Framework, Node.js, FastAPI, Flask, and Laravel. I implement API integrations with payment gateways, CRMs, email services, and more with secure authentication (JWT, OAuth).",
  },
  {
    question: "What's your experience with React and Next.js?",
    answer: "I have extensive experience with React and Next.js for building modern, fast, and SEO-friendly web applications. I build server-side rendered (SSR) and static (SSG) applications with Next.js with responsive, component-based UIs.",
  },
  {
    question: "Do you ensure websites are mobile-responsive?",
    answer: "Yes! Every website I build is fully responsive on all devices - desktops, tablets, and smartphones. I use mobile-first design principles and responsive frameworks like Tailwind CSS and Bootstrap.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Timelines depend on project scope. Simple websites may take a few days, while larger applications can take several weeks. I provide a clear timeline during the planning phase and keep you updated throughout development.",
  },
  {
    question: "Do you offer website maintenance and support?",
    answer: "Yes! I offer ongoing maintenance including security updates, performance monitoring, content updates, bug fixes, and technical support. I offer flexible maintenance packages based on your needs.",
  },

  // CYBERSECURITY - SECONDARY FOCUS
  {
    question: "Do you offer cybersecurity and penetration testing?",
    answer: "Yes! I provide penetration testing, vulnerability assessments, code security audits, and SOC implementation. I'm a Top 4% TryHackMe practitioner with hands-on experience in web and network security. I offer a free 10-minute security audit.",
  },
  {
    question: "How do you ensure websites are secure?",
    answer: "I implement security from day one with secure coding practices (OWASP Top 10), input validation, secure authentication (JWT, OAuth), HTTPS, security headers (HSTS, CSP), regular security audits, and vulnerability scanning. I think like an attacker while building systems.",
  },
  {
    question: "What security services do you provide?",
    answer: "I offer penetration testing (web, API, network), vulnerability assessments, code security reviews, SOC implementation, SIEM configuration, incident response, and security audits. I've built AI-powered security projects and SIEM solutions.",
  },

  // AI INTEGRATION
  {
    question: "Do you integrate AI into web applications?",
    answer: "Yes! I build AI-powered web applications with Generative AI features, automation, intelligent systems, and AI-driven security solutions including text-to-rule detection engines and automated threat detection systems.",
  },

  // GENERAL
  {
    question: "How can I contact you?",
    answer: "You can contact me via the Contact section on this website, email at abdullahwebhero@gmail.com, or connect on LinkedIn at linkedin.com/in/abdullahdigital. I offer free consultations for new projects!",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: "Yes! I work with startups, agencies, and enterprises of all sizes. I understand startup challenges and offer flexible solutions including custom development, security audits, and technical consulting.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! I work with clients worldwide remotely. I've collaborated with startups and enterprises from different countries. I'm available across multiple time zones with clear communication throughout the project.",
  },
  {
    question: "What's your background and education?",
    answer: "I'm pursuing a Bachelor of Science in Cyber Security at Air University, Islamabad (2023-2027). I've studied Artificial Intelligence, Digital Forensics, Ethical Hacking, Network Security, and Secure Software Design. I've completed internships at ITSOLERA and other cybersecurity firms.",
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

        <div className="max-w-3xl mx-auto space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
                aria-expanded={activeIndex === index}
              >
                <span className="text-xl font-semibold text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden"
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