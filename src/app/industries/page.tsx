'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { industriesData } from '../../data/industriesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Industry = {
  name: string;
  description: string;
  projects: {
    title: string;
    link: string;
  }[];
};

export default function IndustriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredIndustries, setFilteredIndustries] = useState<Industry[]>([]);

  useEffect(() => {
    setFilteredIndustries(
      industriesData.filter(
        (industry) =>
          industry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          industry.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-24">
        <motion.h2
          className="text-4xl font-bold text-emerald-500 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          All Industries
        </motion.h2>

        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Search industries..."
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 w-full md:w-1/2 lg:w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIndustries.map((industry) => (
            <motion.div
              key={industry.name}
              className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4"
              whileHover={{ scale: 1.02, borderColor: '#10B981' }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">{industry.name}</h3>
              <p className="text-gray-300 mb-4">{industry.description}</p>
              <div className="mt-2">
                <h4 className="text-lg font-medium text-emerald-300 mb-2">Projects:</h4>
                <ul className="list-disc list-inside text-gray-400">
                  {industry.projects.map((project, projIndex) => (
                    <li key={projIndex}>
                      <a href={project.link} className="hover:text-emerald-400 transition-colors duration-200">
                        {project.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}