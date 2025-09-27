"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (formData.name && formData.email && formData.message) {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '', });
    } else {
      toast.error('Please fill in all fields.');
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 px-4"> {/* Added id for navigation */}
      <div className="w-full text-center">
        <motion.h2
          className="text-4xl font-bold text-emerald-500 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.form
          className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-emerald-500"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-emerald-500"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-emerald-500"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-emerald-600 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;