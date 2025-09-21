"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  return (
    <motion.footer
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border-t border-gray-700 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="flex justify-center space-x-6 mb-8"
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
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-3xl"
              whileHover={{ scale: 1.2, color: '#34D399' }} // Emerald-400 color
              whileTap={{ scale: 0.9 }}
              aria-label={link.label}
            >
              <link.icon />
            </motion.a>
          ))}
        </motion.div>

        <motion.nav
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ul className="flex justify-center space-x-8 text-lg">
            <li>
              <Link href="#hero" className="text-gray-300 hover:text-white transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-gray-300 hover:text-white transition-colors duration-300">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </motion.nav>

        <motion.p
          className="text-gray-500 text-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;