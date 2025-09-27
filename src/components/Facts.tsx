"use client";

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useState } from 'react';

interface FactCardProps {
  title: string;
  value: number;
  suffix?: string;
  description: string;
}

const FactCard: React.FC<FactCardProps> = ({ title, value, suffix, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`relative bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 overflow-hidden
        ${title === 'Industries Served' || title === 'Projects Completed' ? 'cursor-pointer' : ''}
        ${hovered ? 'hover-effect' : ''}
      `}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.05, borderColor: '#10B981' }}
      transition={{ duration: 0.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      onClick={() => {
        if (title === 'Industries Served') window.location.href = '#industries';
        if (title === 'Projects Completed') window.location.href = '#projects';
      }}
      style={{
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {hovered && (
        <motion.div
          className="absolute inset-0 rounded-lg"
          initial={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0) 0%)' }}
          animate={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2) 50%, rgba(16, 185, 129, 0) 100%)' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ zIndex: -1 }}
        />
      )}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div className="text-4xl font-bold text-emerald-400 mb-4">
        <CountUp end={value} duration={2.5} enableScrollSpy scrollSpyOnce />{suffix}
      </div>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Facts = () => {
  const factsData = [
    {
      title: 'Years Experience',
      value: 3,
      suffix: '+',
      description: 'Building and deploying robust web applications.',
    },
    {
      title: 'Projects Completed',
      value: 45,
      suffix: '+',
      description: 'Delivering high-quality solutions across various domains.',
    },
    {
      title: 'Industries Served',
      value: 12,
      suffix: '+',
      description: 'Experience in SaaS, E-commerce, Healthcare, and more.',
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-emerald-500 mb-12"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Facts & Figures
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {factsData.map((fact, index) => (
            <FactCard key={index} {...fact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;