"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/abdullahdigital/', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:abdullahwebhero@gmail.com', label: 'Email' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/abdullahdigital', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://www.facebook.com/abdullahwebmaster', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/abdullahwebmaster', label: 'Instagram' },
  ];

  return (
    <motion.footer
      className="bg-gray-900 shadow-lg border-t border-emerald-700 py-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="flex justify-center space-x-4 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-full p-2"
              whileHover={{ scale: 1.2, color: '#34D399' }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Visit ${link.label} profile of Abdullah`}
            >
              <link.icon aria-hidden="true" />
            </motion.a>
          ))}
        </motion.div>

        <motion.nav
          className="mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          aria-label="Footer navigation"
        >
          <ul className="flex flex-wrap justify-center gap-4 text-md">
            <li>
              <Link href={pathname === '/' ? '#hero' : '/#hero'} className="text-white hover:text-gray-300 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded px-2 py-1">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-300 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded px-2 py-1">
                About
              </Link>
            </li>
            <li>
              <Link href={pathname === '/' ? '#skills' : '/#skills'} className="text-white hover:text-gray-300 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded px-2 py-1">
                Skills
              </Link>
            </li>
            <li>
              <Link href={pathname === '/' ? '#projects' : '/#projects'} className="text-white hover:text-gray-300 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded px-2 py-1">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-white hover:text-gray-300 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded px-2 py-1">
                FAQ
              </Link>
            </li>
            <li>
              <Link href={pathname === '/' ? '#contact' : '/#contact'} className="text-white hover:text-gray-300 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded px-2 py-1">
                Contact
              </Link>
            </li>
          </ul>
        </motion.nav>

        <motion.p
          className="text-white text-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          &copy; {new Date().getFullYear()} Abdullah Digital. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;