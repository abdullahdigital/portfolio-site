"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaCheckCircle,
} from "react-icons/fa";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xkgqjqoq"); // Using the same Formspree ID for now

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/70 p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-700 text-center w-full max-w-md mx-auto"
        >
          <FaCheckCircle className="text-emerald-400 text-6xl mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-emerald-400 mb-4">Thank You!</h3>
          <p className="text-lg text-gray-300 mb-6">
            Your message has been successfully sent. I&apos;ll get back to you soon!
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg w-full md:w-auto"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center mb-12 text-emerald-400"
        >
          Contact Abdullah: Let&apos;s Build Something Great Together
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-start justify-center lg:space-x-16">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 max-w-lg mb-10 lg:mb-0"
          >
            <form
              action="https://formspree.io/f/xjkayakq"
              method="POST"
              onSubmit={handleSubmit}
              className="backdrop-blur-md bg-gray-800/70 p-8 rounded-2xl shadow-2xl border border-gray-700"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white transition"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-semibold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white transition"
                  placeholder="example@email.com"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-semibold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white transition"
                  placeholder="Write your message here..."
                  required
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={state.submitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Info + Illustration */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-lg text-gray-300 text-center lg:text-left z-10 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Prefer direct contact? Here are my links:
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full z-10 relative">
              <a
                href="mailto:abdullahwebhero@gmail.com"
                className="flex items-center space-x-3 p-4 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition"
              >
                <FaEnvelope className="text-2xl text-emerald-400" />
                <span>abdullahwebhero@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdullahdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition"
              >
                <FaLinkedinIn className="text-2xl text-emerald-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/abdullahwebmaster"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition"
              >
                <FaFacebookF className="text-2xl text-emerald-400" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/abdullahwebmaster"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition"
              >
                <FaInstagram className="text-2xl text-emerald-400" />
                <span>Instagram</span>
              </a>
            </div>

            {/* Animated Illustration / Decoration */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 z-0 w-full h-full rounded-full bg-gradient-to-r from-emerald-600 to-violet-600 opacity-70 blur-3xl lg:static lg:w-64 lg:h-64 lg:mt-8"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
