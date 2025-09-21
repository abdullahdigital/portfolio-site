"use client";

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  url: string;
}

const certificatesData: Certificate[] = [
  {
    id: '1',
    title: 'Full Stack Web Development',
    issuer: 'Coursera',
    date: 'Jan 2023',
    image: '/images/certificate-fullstack.jpg', // Placeholder image
    url: '#',
  },
  {
    id: '2',
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: 'Mar 2023',
    image: '/images/certificate-aws.jpg', // Placeholder image
    url: '#',
  },
  {
    id: '3',
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University',
    date: 'May 2023',
    image: '/images/certificate-ml.jpg', // Placeholder image
    url: '#',
  },
  {
    id: '4',
    title: 'React Advanced Concepts',
    issuer: 'Udemy',
    date: 'Jul 2023',
    image: '/images/certificate-react.jpg', // Placeholder image
    url: '#',
  },
  {
    id: '5',
    title: 'DevOps Fundamentals',
    issuer: 'LinkedIn Learning',
    date: 'Sep 2023',
    image: '/images/certificate-devops.jpg', // Placeholder image
    url: '#',
  },
];

const CertificateCard: React.FC<{ certificate: Certificate; onClick: () => void }> = ({ certificate, onClick }) => {
  return (
    <motion.div
      className="flex-none w-full md:w-1/2 lg:w-1/3 p-4 cursor-pointer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
        <Image src={certificate.image} alt={certificate.title} width={400} height={250} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white mb-1">{certificate.title}</h3>
          <p className="text-gray-400 text-sm">{certificate.issuer} - {certificate.date}</p>
        </div>
      </div>
    </motion.div>
  );
};

const CertificateModal: React.FC<{ certificate: Certificate; onClose: () => void }> = ({ certificate, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full mx-auto p-6 relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">&times;</button>
        <h2 className="text-3xl font-bold text-white mb-4">{certificate.title}</h2>
        <p className="text-gray-400 mb-4">{certificate.issuer} - {certificate.date}</p>
        <Image src={certificate.image} alt={certificate.title} width={800} height={500} className="w-full h-auto rounded-lg mb-4" />
        <a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors duration-300"
        >
          View Credential
        </a>
      </motion.div>
    </motion.div>
  );
};

const Certificates = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="py-20 bg-slate-900 px-4"> {/* Added id for navigation */}
      <div className="w-full text-center">
        <motion.h2
          className="text-4xl font-bold text-emerald-500 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          My Certificates
        </motion.h2>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {certificatesData.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} onClick={() => openModal(certificate)} />
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition-colors"
            onClick={scrollPrev}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition-colors"
            onClick={scrollNext}
          >
            &#10095;
          </button>
        </motion.div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {certificatesData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${index === selectedIndex ? 'bg-emerald-500' : 'bg-gray-600'}`}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedCertificate && (
            <CertificateModal certificate={selectedCertificate} onClose={closeModal} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;