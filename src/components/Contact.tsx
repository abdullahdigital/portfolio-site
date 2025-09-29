"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  FaEnvelope,
  FaLinkedinIn, // Corrected from FaLinkedin
  FaFacebookF, // Reverted from FaFacebook to FaFacebookF
  FaInstagram,
} from "react-icons/fa";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Contact = () => {
    const [state, handleSubmit] = useForm("xjkayakq");
  
    if (state.succeeded) {
      return <p className="text-white text-center text-lg">Thanks for your message! I'll get back to you soon.</p>;
    }
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black text-white py-12 px-4"
        id="contact"
      >
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="z-10 relative text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          Contact <span className="text-purple-500">Me</span>
        </motion.p>
  
        <div className="z-10 relative w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Message"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-semibold transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </form>
        </div>
  
        <div className="z-10 relative mt-8 flex space-x-6">
          <a href="mailto:youremail@example.com" className="text-gray-400 hover:text-white transition duration-300">
            <FaEnvelope size={30} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaLinkedinIn size={30} />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaFacebookF size={30} />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaInstagram size={30} />
          </a>
        </div>
  
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 w-full h-full bg-gradient-to-r from-emerald-600 to-violet-600 opacity-70 blur-3xl lg:static lg:w-64 lg:h-64 lg:mt-8"
        ></motion.div>
      </motion.div>
    );
  };

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
          Let’s Connect
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
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
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
