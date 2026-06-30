'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaLaptopCode, FaShieldAlt, FaBrain } from 'react-icons/fa';

const AboutPage = () => {
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
            About Me
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate Full-Stack Developer, Cybersecurity Professional, and AI Innovator
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-12 mb-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-8 border border-gray-700 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Who Am I?</h2>
            <p className="text-gray-300 mb-4">
              Hi, I&apos;m Abdullah! I&apos;m a full-stack developer and cybersecurity professional with a passion for building secure, scalable, and intelligent digital solutions. My journey in tech started with curiosity and has evolved into a deep expertise spanning web development, penetration testing, and artificial intelligence.
            </p>
            <p className="text-gray-300">
              My personal brand is <span className="text-emerald-500 font-semibold">abdullahdigital</span>, and I&apos;m dedicated to helping individuals and businesses leverage technology to achieve their goals while prioritizing security and user experience.
            </p>
          </motion.section>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center"
            >
              <FaLaptopCode className="text-4xl text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full-Stack Dev</h3>
              <p className="text-gray-400">
                Building modern web apps with Next.js, Django, React, and more!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center"
            >
              <FaShieldAlt className="text-4xl text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p className="text-gray-400">
                Penetration testing, threat analysis, and secure software development!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center"
            >
              <FaBrain className="text-4xl text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Agents & Automation</h3>
              <p className="text-gray-400">
                Building intelligent systems and automating repetitive tasks!
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;