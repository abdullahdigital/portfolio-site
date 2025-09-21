"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiTailwindcss, SiPostgresql, SiMongodb, SiExpress, SiFramer, SiTypescript, SiJquery, SiNginx, SiFlask, SiFastapi, SiLaravel, SiPhp, SiMysql, SiSqlite, SiElasticsearch, SiApache, SiDocker } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { TbApi } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { BsArrowsMove } from "react-icons/bs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Skill {
  name: string;
  icon: React.ElementType;
  category: string;
}

const skillsData: Skill[] = [
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend' },
  { name: 'Django', icon: SiDjango, category: 'Backend' },
  { name: 'React.js', icon: FaReact, category: 'Frontend' },
  { name: 'Svelte', icon: SiFramer, category: 'Frontend' },
  { name: 'Nginx', icon: SiNginx, category: 'Cloud & Deployment' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
  { name: 'Node.js', icon: FaNodeJs, category: 'Backend' },
  { name: 'Express.js', icon: SiExpress, category: 'Backend' },
  { name: 'Framer Motion', icon: SiFramer, category: 'Animation' },
  { name: 'SQL', icon: DiMsqlServer, category: 'Database' },
  { name: 'AWS', icon: FaAws, category: 'Cloud & Deployment' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Animation' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database' },
  { name: 'Git', icon: FaGitAlt, category: 'Version Control' },
  { name: 'GitHub', icon: FaGithub, category: 'Version Control' },
  { name: 'Django REST Framework', icon: SiDjango, category: 'Backend' },
  { name: 'Flask', icon: SiFlask, category: 'Backend' },
  { name: 'FastAPI', icon: SiFastapi, category: 'Backend' },
  { name: 'Laravel', icon: SiLaravel, category: 'Backend' },
  { name: 'PHP', icon: SiPhp, category: 'Language' },
  { name: 'Python', icon: FaPython, category: 'Language' },
  { name: 'JavaScript', icon: FaNodeJs, category: 'Language' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Language' },
  { name: 'jQuery', icon: SiJquery, category: 'Frontend' },
  { name: 'HTML5', icon: FaHtml5, category: 'Frontend' },
  { name: 'CSS3', icon: FaCss3Alt, category: 'Animation' },
  { name: 'Bootstrap', icon: FaBootstrap, category: 'Frontend' },
  { name: 'Responsive Web Design', icon: BsArrowsMove, category: 'Frontend' },
  { name: 'Front-End Design', icon: FaReact, category: 'Frontend' },
  { name: 'Web Design', icon: FaHtml5, category: 'Frontend' },
  { name: 'Back-End Development', icon: FaNodeJs, category: 'Backend' },
  { name: 'Full Stack Development', icon: FaPython, category: 'Full Stack' },
  { name: 'MERN Stack', icon: FaReact, category: 'Full Stack' },
  { name: 'Django Stack', icon: SiDjango, category: 'Full Stack' },
  { name: 'LAMP Stack', icon: FaHtml5, category: 'Full Stack' },
  { name: 'Apache', icon: SiApache, category: 'Cloud & Deployment' },
  { name: 'Docker', icon: SiDocker, category: 'Cloud & Deployment' },
  { name: 'Shadcn/UI', icon: FaReact, category: 'Animation' },
  { name: 'REST APIs', icon: TbApi, category: 'Backend' },
  { name: 'API Testing', icon: MdSecurity, category: 'Security' },
  { name: 'Authentication', icon: MdSecurity, category: 'Security' },
  { name: 'WebSockets', icon: BsArrowsMove, category: 'Backend' },
  { name: 'SQLite', icon: SiSqlite, category: 'Database' },
  { name: 'MySQL', icon: SiMysql, category: 'Database' },
  { name: 'Elasticsearch', icon: SiElasticsearch, category: 'Database' },
  { name: 'OWASP Top 10', icon: MdSecurity, category: 'Security' },
  { name: 'SQL Injection', icon: MdSecurity, category: 'Security' },
  { name: 'Cross-Site Scripting (XSS)', icon: MdSecurity, category: 'Security' },
  { name: 'Broken Authentication', icon: MdSecurity, category: 'Security' },
  { name: 'Insecure Design', icon: MdSecurity, category: 'Security' },
  { name: 'Security Misconfiguration', icon: MdSecurity, category: 'Security' },
  { name: 'Vulnerable & Outdated Components', icon: MdSecurity, category: 'Security' },
  { name: 'Identification & Authentication Failures', icon: MdSecurity, category: 'Security' },
  { name: 'Software & Data Integrity Failures', icon: MdSecurity, category: 'Security' },
  { name: 'Server-Side Request Forgery (SSRF)', icon: MdSecurity, category: 'Security' },
  { name: 'Access Control Failures', icon: MdSecurity, category: 'Security' },
];

const SkillsPage = () => {
  const [displayMode, setDisplayMode] = useState('all');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(skillsData.map(skill => skill.category)))];

  const filteredSkills = skillsData.filter(skill => {
    if (activeCategory === 'All') {
      return true;
    }
    return skill.category === activeCategory;
  });

  const SkillCard = ({ skill }: { skill: Skill }) => (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <skill.icon className="text-emerald-400 text-5xl mb-4" />
      <h3 className="text-white text-xl font-semibold text-center mb-2">{skill.name}</h3>
      <p className="text-gray-400 text-sm text-center">{skill.category}</p>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-24">
        <motion.h1
          className="text-5xl font-bold text-center mb-12 text-emerald-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All My Skills
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300
                ${activeCategory === category
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredSkills.map(skill => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;