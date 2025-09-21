"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { projectsData, ProjectCardProps } from '@/data/projectsData';
import { ProjectCard } from '@/components/Projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<ProjectCardProps[]>([]);

  const categories = ['All', ...new Set(projectsData.map(project => project.category))];

  useEffect(() => {
    const filtered = projectsData.filter(
      (project) =>
        (selectedCategory === 'All' || project.category === selectedCategory) &&
        (
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        )
    );
    setFilteredProjects(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-24">
        <motion.h2
          className="text-4xl font-bold text-emerald-500 mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          All My Projects
        </motion.h2>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300
                ${selectedCategory === category ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Search projects..."
            className="p-3 rounded-lg bg-slate-800 text-white border border-slate-700 w-full md:w-1/2 lg:w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: ProjectCardProps, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;