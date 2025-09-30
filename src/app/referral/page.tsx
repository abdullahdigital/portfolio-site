"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaCheckCircle, FaEnvelope, FaLinkedinIn, FaFacebookF, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

export default function ReferralPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  const [state, handleSubmit] = useForm("xkgqjqoq");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const plans = [
    {
      name: "Bronze Partner",
      description: "Refer clients for projects under $500. Ideal for individuals looking to start their referral journey.",
      commission: "10% Commission (for projects under $500)",
    },
    {
      name: "Silver Partner",
      description: "Refer clients for projects between $500 and $2000. Perfect for experienced networkers bringing in mid-value clients.",
      commission: "15% Commission (for projects $500-$2000)",
    },
    {
      name: "Gold Partner",
      description: "Refer clients for projects above $2000+. For top-tier referrers seeking maximum returns from high-value clients.",
      commission: "20-25% Commission (for projects $2000+)",
    },
  ];

  const additionalBenefits = [
    "Simple one-time bonus on project completion",
    "Shoutout / recognition on my LinkedIn or website (optional)",
    "Get a discount or bonus on your next project for every successful referral",
  ];

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
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
            Your referral has been successfully submitted. I&apos;ll get back to you soon!
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg w-full md:w-auto"
          >
            Submit Another Referral
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section
        id="referral"
        className="flex-grow py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-center mt-4 mb-12 text-emerald-400"
          >
            Work with  <span className="text-purple-500">Us</span>
          </motion.h2>
  
          {/* Plans Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-emerald-400">
              Our Referral Plans
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-8 rounded-2xl shadow-xl border-2 ${
                    selectedPlan === plan.name
                      ? "border-emerald-500 bg-gray-800"
                      : "border-gray-700 bg-gray-800/70"
                  } hover:border-emerald-500 transition-all duration-300 cursor-pointer`}
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  <h4 className="text-2xl font-bold mb-4 text-purple-400">
                    {plan.name}
                  </h4>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <p className="text-lg font-semibold text-emerald-300">
                    {plan.commission}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePlanSelect(plan.name)}
                    className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 shadow-lg"
                  >
                    Select {plan.name}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
  
          {/* Additional Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-emerald-400">
              Additional Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, borderColor: "#10B981" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 p-4 bg-gray-800/70 rounded-xl shadow-md border border-gray-700"
                >
                  <FaCheckCircle className="text-emerald-400 text-2xl" />
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
  
          <div className="flex flex-col lg:flex-row items-start justify-center lg:space-x-16">
            {/* Left: Referral Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 max-w-lg mb-10 lg:mb-0"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="backdrop-blur-md bg-gray-800/70 p-6 rounded-2xl shadow-2xl border border-gray-700">
                <div className="mb-4">
                  <label
                    htmlFor="referrerName"
                    className="block text-white text-sm font-semibold mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="referrerName"
                    name="referrerName"
                    className="w-full px-3 py-2 bg-gray-700/70 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white transition"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="referrerEmail"
                    className="block text-white text-sm font-semibold mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="referrerEmail"
                    name="referrerEmail"
                    className="w-full px-3 py-2 bg-gray-700/70 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white transition"
                    placeholder="Your Email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="referrerEmail"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="serviceOfInterest"
                    className="block text-white text-sm font-semibold mb-1"
                  >
                    Selected Plan
                  </label>
                  <select
                    id="serviceOfInterest"
                    name="serviceOfInterest"
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700/70 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white transition"
                    required
                  >
                    <option value="" disabled className="text-white">Select a plan</option>
                    {plans.map((plan) => (
                      <option key={plan.name} value={plan.name}>
                        {plan.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="additionalDetails" className="block text-white text-sm font-semibold mb-1">
                    Additional Details (Optional)
                  </label>
                  <textarea
                    id="additionalDetails"
                    name="additionalDetails"
                    rows={3}
                    className="w-full px-3 py-2 bg-gray-700/70 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white transition"
                    placeholder="Any other information you&apos;d like to share..."
                  />
                  <ValidationError
                    prefix="Additional Details"
                    field="additionalDetails"
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
                  Submit Referral
                </motion.button>
              </form>
            </motion.div>
      
            {/* Right: Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 relative"
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
      <Footer />
      <AnimatePresence>
          {isScrolled && (
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 bg-emerald-500 text-white p-3 rounded-full shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75 z-[999]"
            >
              <FaArrowUp />
            </motion.button>
          )}
      </AnimatePresence>
    </div>
  );
}