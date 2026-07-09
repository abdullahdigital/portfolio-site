'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            className="text-9xl md:text-[12rem] font-black text-emerald-500 mb-4"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </motion.h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Oops! The page you're looking for doesn't exist. Let's get you back on track!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <FaHome aria-hidden="true" />
            Back to Home
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}