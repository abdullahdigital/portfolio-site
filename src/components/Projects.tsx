"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { projectsData, ProjectCardProps } from '@/data/projectsData';

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, tags }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.02}
      gyroscope={true}
      className="w-full h-full"
    >
      <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-300 text-base mb-4 flex-grow">{description}</p>
          {/* Removed tags section as per user request */}
          {/*
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out mt-auto"
          >
            View Project
          </a>
        </div>
      </div>
    </Tilt>
  );
};

const Projects = () => {
  const featuredProjects = projectsData.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-slate-950 px-4">
      <div className="max-w-6xl mx-auto w-full text-center">
        <motion.h2
          className="text-4xl font-bold text-emerald-500 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project: ProjectCardProps, index: number) => (
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
        <motion.a
          href="/projects"
          className="mt-16 px-8 py-3 bg-emerald-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-emerald-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: featuredProjects.length * 0.1 }}
        >
          All Projects ({projectsData.length}+)
        </motion.a>
      </div>
    </section>
  );
};

export default Projects;