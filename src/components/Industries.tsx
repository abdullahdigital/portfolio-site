'use client';

import { motion } from 'framer-motion';
import { industriesData, Industry } from '@/data/industriesData';
import Link from 'next/link';

export default function Industries() {
  const homepageIndustries = industriesData.slice(0, 6);

  return (
    <section id="industries" className="py-10 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-emerald-500 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Industries Served
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homepageIndustries.map((industry: Industry) => (
            <motion.div
              key={industry.name}
              className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4 cursor-pointer"
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
                      <Link href={project.link} className="hover:text-emerald-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/industries">
            <motion.button
              className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Industries ({industriesData.length}+)
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}