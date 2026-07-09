"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link'; // Import Link
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiTailwindcss, SiPostgresql, SiMongodb, SiExpress, SiFramer, SiTypescript, SiJquery, SiNginx, SiFlask, SiFastapi, SiLaravel, SiPhp, SiMysql, SiSqlite, SiElasticsearch, SiApache, SiDocker, SiSolid, SiQwik, SiAngular, SiVuedotjs, SiAstro, SiRust } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { TbApi } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { BsArrowsMove } from "react-icons/bs";

interface SkillProps {
  name: string;
  Icon: React.ElementType;
  category: string;
}

const skillsData: SkillProps[] = [
  { name: 'Next.js', Icon: SiNextdotjs, category: 'Frontend' },
  { name: 'Django', Icon: SiDjango, category: 'Backend' },
  { name: 'MERN Stack', Icon: FaReact, category: 'Full Stack' },
  { name: 'Nginx', Icon: SiNginx, category: 'Cloud & Deployment' },
  { name: 'PostgreSQL', Icon: SiPostgresql, category: 'Database' },
  { name: 'OWASP Top 10', Icon: MdSecurity, category: 'Security' },
  { name: 'React.js', Icon: FaReact, category: 'Frontend' },
  { name: 'Solid.js', Icon: SiSolid, category: 'Frontend' },
  { name: 'Qwik', Icon: SiQwik, category: 'Frontend' },
  { name: 'Angular', Icon: SiAngular, category: 'Frontend' },
  { name: 'Vue.js', Icon: SiVuedotjs, category: 'Frontend' },
  { name: 'Astro', Icon: SiAstro, category: 'Frontend' },
  { name: 'Svelte', Icon: SiFramer, category: 'Frontend' },
  { name: 'MEAN Stack', Icon: SiAngular, category: 'Full Stack' },
  { name: 'PERN Stack', Icon: SiPostgresql, category: 'Full Stack' },
  { name: 'Node.js', Icon: FaNodeJs, category: 'Backend' },
  { name: 'Express.js', Icon: SiExpress, category: 'Backend' },
  { name: 'Framer Motion', Icon: SiFramer, category: 'Animation' },
  { name: 'MongoDB', Icon: SiMongodb, category: 'Database' },
  { name: 'SQL', Icon: DiMsqlServer, category: 'Database' },
  { name: 'AWS', Icon: FaAws, category: 'Cloud & Deployment' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, category: 'Animation' },
  { name: 'Git', Icon: FaGitAlt, category: 'Version Control' },
  { name: 'GitHub', Icon: FaGithub, category: 'Version Control' },
  { name: 'Django REST Framework', Icon: SiDjango, category: 'Backend' },
  { name: 'Flask', Icon: SiFlask, category: 'Backend' },
  { name: 'FastAPI', Icon: SiFastapi, category: 'Backend' },
  { name: 'Laravel', Icon: SiLaravel, category: 'Backend' },
  { name: 'PHP', Icon: SiPhp, category: 'Language' },
  { name: 'Python', Icon: FaPython, category: 'Language' },
  { name: 'JavaScript', Icon: FaNodeJs, category: 'Language' },
  { name: 'TypeScript', Icon: SiTypescript, category: 'Language' },
  { name: 'Rust', Icon: SiRust, category: 'Language' },
  { name: 'jQuery', Icon: SiJquery, category: 'Frontend' },
  { name: 'HTML5', Icon: FaHtml5, category: 'Frontend' },
  { name: 'CSS3', Icon: FaCss3Alt, category: 'Animation' },
  { name: 'Bootstrap', Icon: FaBootstrap, category: 'Frontend' },
  { name: 'Responsive Web Design', Icon: BsArrowsMove, category: 'Frontend' },
  { name: 'Front-End Design', Icon: FaReact, category: 'Frontend' },
  { name: 'Web Design', Icon: FaHtml5, category: 'Frontend' },
  { name: 'Back-End Development', Icon: FaNodeJs, category: 'Backend' },
  { name: 'Full Stack Development', Icon: FaPython, category: 'Full Stack' },
  { name: 'Django Stack', Icon: SiDjango, category: 'Full Stack' },
  { name: 'LAMP Stack', Icon: FaHtml5, category: 'Full Stack' },
  { name: 'Apache', Icon: SiApache, category: 'Cloud & Deployment' },
  { name: 'Docker', Icon: SiDocker, category: 'Cloud & Deployment' },
  { name: 'Shadcn/UI', Icon: FaReact, category: 'Animation' },
  { name: 'REST APIs', Icon: TbApi, category: 'Backend' },
  { name: 'API Testing', Icon: MdSecurity, category: 'Security' },
  { name: 'Authentication', Icon: MdSecurity, category: 'Security' },
  { name: 'WebSockets', Icon: BsArrowsMove, category: 'Backend' },
  { name: 'SQLite', Icon: SiSqlite, category: 'Database' },
  { name: 'MySQL', Icon: SiMysql, category: 'Database' },
  { name: 'Elasticsearch', Icon: SiElasticsearch, category: 'Database' },
  { name: 'SQL Injection', Icon: MdSecurity, category: 'Security' },
  { name: 'Cross-Site Scripting (XSS)', Icon: MdSecurity, category: 'Security' },
  { name: 'Broken Authentication', Icon: MdSecurity, category: 'Security' },
  { name: 'Insecure Design', Icon: MdSecurity, category: 'Security' },
  { name: 'Security Misconfiguration', Icon: MdSecurity, category: 'Security' },
  { name: 'Vulnerable & Outdated Components', Icon: MdSecurity, category: 'Security' },
  { name: 'Identification & Authentication Failures', Icon: MdSecurity, category: 'Security' },
  { name: 'Software & Data Integrity Failures', Icon: MdSecurity, category: 'Security' },
  { name: 'Server-Side Request Forgery (SSRF)', Icon: MdSecurity, category: 'Security' },
  { name: 'Access Control Failures', Icon: MdSecurity, category: 'Security' },
];

const SkillCard: React.FC<SkillProps> = ({ name, Icon, category }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`relative bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 overflow-hidden
        ${hovered ? 'hover-effect' : ''}
      `}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.05, borderColor: '#10B981' }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
      role="article"
      aria-label={`${name}, a ${category} skill`}
    >
      {hovered && (
        <motion.div
          className="absolute inset-0 rounded-lg"
          initial={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0) 0%)' }}
          animate={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2) 50%, rgba(16, 185, 129, 0) 100%)' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ zIndex: -1 }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-4xl text-emerald-400 mb-4" aria-hidden="true">
          {<Icon />}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-center">{category}</p>
      </div>
    </motion.div>
  );
};

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
    <section id="skills" className="py-10 bg-slate-900 px-4"> {/* Added id for navigation */}
      <div className="w-full text-center">
        <motion.h2
            className="text-4xl font-bold text-emerald-500 mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            My Full-Stack Development Skills
          </motion.h2>

        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          role="tablist"
          aria-label="Skill category filters"
        >
          <motion.button
            onClick={() => setDisplayMode('top6')}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
              ${displayMode === 'top6'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            role="tab"
            aria-selected={displayMode === 'top6'}
            aria-controls="skills-grid"
          >
            Top 6 Skills
          </motion.button>
          {categories.filter(cat => cat !== 'top6').map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setDisplayMode(cat)}
              className={`px-6 py-2 mx-2 rounded-full text-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                ${displayMode === cat
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              role="tab"
              aria-selected={displayMode === cat}
              aria-controls="skills-grid"
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="skills-grid" role="tabpanel">
          {skillsToDisplay.map((skill, index) => (
            <SkillCard key={index} name={skill.name} Icon={skill.Icon} category={skill.category} />
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
            className="px-8 py-3 rounded-full text-lg font-medium bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            View All Skills
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;