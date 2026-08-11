"use client";

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useMemo } from 'react';
import { projectsData } from '@/data/projectsData';
import { industriesData } from '@/data/industriesData';

interface FactCardProps {
  title: string;
  value: number;
  suffix?: string;
  description: string;
}

const FactCard: React.FC<FactCardProps> = ({ title, value, suffix, description }) => {
  return (
    <motion.div
      className={`group relative bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 overflow-hidden transition-all duration-300
        ${title === 'Industries Served' || title === 'Projects Completed' ? 'cursor-pointer' : ''}
        hover:scale-105 hover:border-emerald-500
      `}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      onClick={() => {
        if (title === 'Industries Served') window.location.href = '/industries';
        if (title === 'Projects Completed') window.location.href = '/projects';
      }}
      style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2) 50%, rgba(16, 185, 129, 0) 100%)',
          zIndex: -1,
        }}
        aria-hidden="true"
      />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div className="text-4xl font-bold text-emerald-400 mb-4">
        <CountUp end={value} duration={2.5} enableScrollSpy scrollSpyOnce />{suffix}
      </div>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Facts = () => {
  const factsData = useMemo(() => [
    {
      title: 'Years Experience',
      value: 3,
      suffix: '+',
      description: 'Mastering web development, delivering impactful digital solutions.',
    },
    {
      title: 'Projects Completed',
      value: projectsData.length + 19,
      suffix: '+',
      description: 'Transforming ideas into stunning, functional web experiences.',
    },
    {
      title: 'Industries Served',
      value: industriesData.length,
      suffix: '+',
      description: 'Driving innovation across diverse sectors with tailored web solutions.',
    },
  ], []);

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