"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaTimes, FaBars, FaArrowUp } from 'react-icons/fa';

interface NavLink {
  name: string;
  href: string;
}

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks: NavLink[] = useMemo(() => [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Industries', href: '#industries' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Referral', href: '/referral' },
    { name: 'Contact', href: '#contact' },
  ], []);

  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      // if (pathname !== '/'') return; // Only track sections on the homepage

      const sections = navLinks.filter((link: NavLink) => link.href.startsWith('#'))
        .map((link: NavLink) => document.getElementById(link.href.substring(1)))
        .filter((section: HTMLElement | null): section is HTMLElement => section !== null) as HTMLElement[];

      const scrollY = window.scrollY;

      let currentActiveSection = 'hero'; // Default to hero
      for (let i = 0; i < sections.length; i++) {
        const section: HTMLElement = sections[i];
        if (section.offsetTop <= scrollY + 100) {
          currentActiveSection = section.id;
        } else {
          break; // We've passed the active section
        }
      }
      setActiveSection(currentActiveSection);

      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, navLinks]); // Re-run effect if pathname changes

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, delay: 0.1 }}
        className={`fixed w-full z-50 transition-all duration-300 py-4 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-lg shadow-xl' : 'bg-gradient-to-r from-gray-800/70 to-gray-900/70 backdrop-blur-lg shadow-lg'}`}
      >
        <div className="mx-auto flex justify-between items-center px-4">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image src="/img/logo.png" alt="Logo" width={40} height={40} />
            </motion.div>
            <span className="text-white text-xl font-semibold">Abdullah</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link: NavLink) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05, color: "#34D399" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href.startsWith('#') ? (pathname === '/' ? link.href : '/' + link.href) : link.href}
                  className={`relative text-lg transition-colors duration-300 ${pathname === '/' && activeSection === link.href.substring(1) || pathname === link.href ? 'text-emerald-400' : 'text-white hover:text-emerald-400'}`}
                >
                  {link.name}
                  <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-emerald-400 transition-transform duration-300 ease-out ${pathname === '/' && activeSection === link.href.substring(1) || pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gray-800/90 py-4 mt-2"
            >
              <ul className="flex flex-col items-center space-y-4">
                {navLinks.map((link: NavLink) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="py-2"
                  >
                    <Link
                      href={pathname === '/' ? link.href : (link.href.startsWith('#') ? '/' + link.href : link.href)}
                      className={`block text-lg transition-colors duration-300 ${pathname === '/' && activeSection === link.href.substring(1) || pathname === link.href ? 'text-emerald-400' : 'text-white hover:text-emerald-400'}`}
                      onClick={() => {
                        setActiveSection(link.href.substring(1));
                        setIsOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-emerald-500 text-white p-3 rounded-full shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75 z-[999]"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;