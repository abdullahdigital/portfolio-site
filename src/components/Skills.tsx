"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link'; // Import Link
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiTailwindcss, SiPostgresql, SiMongodb, SiExpress, SiFramer, SiTypescript, SiJquery, SiNginx, SiFlask, SiFastapi, SiLaravel, SiPhp, SiMysql, SiSqlite, SiElasticsearch, SiApache, SiDocker } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { TbApi } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { BsArrowsMove } from "react-icons/bs";

interface SkillProps {
  name: string;
  icon: React.ElementType;
  category: string;
}

const skillsData: SkillProps[] = [
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

const Skills = () => {
  const [displayMode, setDisplayMode] = useState<'top6' | string>('top6');

  const categories = [
    'top6',
    ...new Set(skillsData.map(skill => skill.category))
  ];

  const filteredSkills = skillsData.filter((skill) => {
    if (displayMode === 'top6') return true;
    return skill.category === displayMode;
  });

  const skillsToDisplay = filteredSkills.slice(0, 6);

  return (
    <section id="skills" className="py-20 bg-slate-900 px-4"> {/* Added id for navigation */}
      <div className="w-full text-center">
        <motion.h2
          className="text-4xl font-bold text-emerald-500 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            onClick={() => setDisplayMode('top6')}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300
              ${displayMode === 'top6'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Top 6 Skills
          </motion.button>
          {categories.filter(cat => cat !== 'top6').map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setDisplayMode(cat)}
              className={`px-6 py-2 mx-2 rounded-full text-lg font-medium transition-all duration-300
                ${displayMode === cat
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsToDisplay.map((skill, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col items-center justify-center"
              whileHover={{ scale: 1.05, borderColor: '#10B981', boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-5xl mb-4"><skill.icon /></div>
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.category}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/skills"
            className="px-8 py-3 rounded-full text-lg font-medium bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 transition-colors duration-300"
          >
            View All Skills
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;