"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter(); // Initialize useRouter
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-violet-900 to-emerald-900 pt-16">
      {/* Background with subtle animated shapes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/2 right-1/4 w-48 h-48 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
        ></motion.div>
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center text-center lg:text-center">
        {/* Left: Typewriter Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="lg:w-2/5 mb-8 lg:mb-0 flex flex-col justify-center h-full"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 leading-tight">
            Hi, I'm Abdullah,
            <br />
            <TypeAnimation
              sequence={[
                'A Full-Stack Developer',
                1000,
                'A UI/UX Enthusiast',
                1000,
                'A Problem Solver',
                1000,
                'Builder of Secure & Scalable Apps',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-emerald-400"
            />
          </h1>
          <p className="mt-3 text-base text-gray-300">
              I design, build, and secure modern web apps — blending creativity with clean, scalable code.
          </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 mx-auto px-6 py-2 bg-emerald-600 text-white text-base font-semibold rounded-lg shadow-lg hover:bg-emerald-700 transition duration-300"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              onClick={() => router.push('#contact')}
            >
              Hire Me
            </motion.button>
          </motion.div>

          {/* Right: Your Photo */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.5 }}
          className="lg:w-1/2 flex justify-center mt-8 lg:mt-0"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              boxShadow: ['0 0 10px rgba(0,255,0,0.5)', '0 0 20px rgba(0,255,0,0.8)', '0 0 10px rgba(0,255,0,0.5)'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-emerald-500 shadow-lg"
          >
            <Image
              src="/img/my pic.jpeg" // Updated to use the correct image path
              alt="Abdullah"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;