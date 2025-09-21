"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaCheckCircle } from 'react-icons/fa';

export default function ReferralPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

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
    "Starter referral guide (tips to share my services with friends & businesses)",
  ];

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16 pt-32">
        <motion.section
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-emerald-400 mb-4">
            Partner with Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join my referral program and earn commissions by connecting me with clients who need exceptional web development services.
          </p>
        </motion.section>

        <section className="py-10 px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-emerald-400 mb-16"
            variants={itemVariants}
          >
            Our Collaboration Plans
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-3xl font-bold text-emerald-400 mb-4">{plan.name}</h3>
                <p className="text-gray-300 mb-6 text-lg">{plan.description}</p>
                <div className="text-4xl font-extrabold text-white mb-6">{plan.commission}</div>
                <button
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg text-lg transition duration-300 ease-in-out"
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="py-10 px-4 bg-gray-900 rounded-lg shadow-xl mt-2">
          <h2 className="text-3xl font-bold text-emerald-400 text-center mb-6">Additional Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <FaCheckCircle className="text-emerald-500 text-4xl mb-3" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* <motion.section
          ref={formRef}
          className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center text-emerald-400 mb-8">
            Refer a Client
          </h2>
          <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-lg font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 text-lg font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="clientName" className="block text-gray-300 text-lg font-medium mb-2">
                Client's Name
              </label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Client's Company or Name"
                required
              />
            </div>
            <div>
              <label htmlFor="clientEmail" className="block text-gray-300 text-lg font-medium mb-2">
                Client's Email (Optional)
              </label>
              <input
                type="email"
                name="clientEmail"
                id="clientEmail"
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="client@example.com"
              />
            </div>
            <div>
              <label htmlFor="plan" className="block text-gray-300 text-lg font-medium mb-2">
                Proposed Plan
              </label>
              <select
                name="plan"
                id="plan"
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-emerald-500 focus:border-emerald-500"
                required
              >
                <option value="" disabled>Select a plan</option>
                {plans.map((plan) => (
                  <option key={plan.name} value={plan.name}>{plan.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 text-lg font-medium mb-2">
                Message / Project Details
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Tell me more about the client's needs..."
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Referral
            </motion.button>
          </form>
        </motion.section> */}

        <motion.section
          id="contact-form"
          className="py-20 px-4 bg-gray-800 rounded-xl shadow-xl max-w-4xl mx-auto mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center text-emerald-400 mb-12">Get in Touch</h2>
          <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-lg font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-emerald-500 text-white text-lg"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 text-lg font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-emerald-500 text-white text-lg"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="plan" className="block text-gray-300 text-lg font-medium mb-2">
                Interested Plan
              </label>
              <select
                id="plan"
                name="plan"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-emerald-500 text-white text-lg"
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                required
              >
                <option value="">Select a plan</option>
                {plans.map((plan) => (
                  <option key={plan.name} value={plan.name}>
                    {plan.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 text-lg font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-emerald-500 text-white text-lg"
                placeholder="Tell me more about your collaboration ideas..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send Inquiry
            </button>
          </form>
          <p className="text-center text-gray-500 text-sm mt-6">
            Powered by <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Formspree</a>
          </p>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}