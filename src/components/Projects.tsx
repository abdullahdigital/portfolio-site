"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const projectsData: ProjectCardProps[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product management, and payment gateway integration.',
    image: '/images/project-ecommerce.jpg', // Placeholder image
    link: '#',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB'],
  },
  {
    title: 'AI Chatbot',
    description: 'An intelligent chatbot powered by natural language processing, capable of understanding and responding to user queries.',
    image: '/images/project-chatbot.jpg', // Placeholder image
    link: '#',
    tags: ['Python', 'Flask', 'OpenAI API', 'React'],
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects, skills, and contact information with modern UI/UX.',
    image: '/images/project-portfolio.jpg', // Placeholder image
    link: '#',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and user roles.',
    image: '/images/project-task-manager.jpg', // Placeholder image
    link: '#',
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
  },
  {
    title: 'Recipe Finder',
    description: 'An application to discover and save recipes based on available ingredients and dietary preferences.',
    image: '/images/project-recipe.jpg', // Placeholder image
    link: '#',
    tags: ['Vue.js', 'Firebase', 'Sass'],
  },
  {
    title: 'Fitness Tracker',
    description: 'A mobile-first fitness tracking application to log workouts, monitor progress, and set goals.',
    image: '/images/project-fitness.jpg', // Placeholder image
    link: '#',
    tags: ['React Native', 'GraphQL', 'AWS Amplify'],
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, tags }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionEasing="cubic-bezier(.03,.98,.52,.99)"
      scale={1.02}
      gyroscope={true}
    >
      <motion.div
        className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <Image src={image} alt={title} width={500} height={300} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors duration-300"
          >
            View Project
          </a>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950 px-4"> {/* Added id for navigation */}
      <div className="w-full text-center">
        <motion.h2
          className="text-4xl font-bold text-emerald-500 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
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
        <motion.button
          className="mt-12 px-8 py-3 bg-emerald-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-emerald-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: projectsData.length * 0.1 }}
        >
          More Projects
        </motion.button>
      </div>
    </section>
  );
};

export default Projects;