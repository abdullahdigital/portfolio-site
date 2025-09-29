"use client";

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image: string;
  url: string;
}

const certificatesData: Certificate[] = [
  {
    id: '2',
    title: 'React Js Developer',
    issuer: 'National Center for Cyber Security Pakistan (NCCS)',
    image: '/cert/react2.jpeg',
    url: '#',
  },
  {
    id: '1',
    title: 'Full Stack Django Developer',
    issuer: 'Not So Formal Show',
    image: '/cert/fullstackdjangodeveloper1.jpeg',
    url: '#',
  },
  {
    id: '3',
    title: 'Wordpress Development',
    issuer: 'Udemy',
    image: '/cert/wordpress3.jpg',
    url: '#',
  },
  {
    id: '6',
    title: 'Udemy Web Hacking',
    issuer: 'Udemy',
    image: '/cert/udemy web intro hacking.png',
    url: '#',
  },
  {
    id: '4',
    title: 'Frontend Website Developer',
    issuer: 'Professional Training Insititute (EVS)',
    image: '/cert/frontend4.png',
    url: '#',
  },
  {
    id: '5',
    title: 'Web Dev E-commerce',
    issuer: 'Great Learning',
    image: '/cert/webdevecommerce5.png',
    url: '#',
  },
];

const CertificateCard: React.FC<{ certificate: Certificate; onClick: () => void }> = ({ certificate, onClick }) => {
  return (
    <motion.div
      className="flex-none w-full md:w-1/2 lg:w-[calc(100%/3)] cursor-pointer flex-shrink-0"
      onClick={onClick}
    >
      <motion.div
        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 p-4 relative z-10"
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative">
          <Image 
            src={certificate.image} 
            alt={certificate.title} 
            width={400} 
            height={250} 
            className="w-full h-48 object-cover rounded-lg"
            priority={true}
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white mb-1">{certificate.title}</h3>
          <p className="text-gray-400 text-sm">{certificate.issuer}</p>
        </div>
      </motion.div>
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
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">&times;</button>
        <h2 className="text-3xl font-bold text-white mb-4">{certificate.title}</h2>
        <p className="text-gray-400 mb-4">{certificate.issuer}</p>
        <Image 
          src={certificate.image} 
          alt={certificate.title} 
          width={800} 
          height={500} 
          className="w-full h-auto rounded-lg mb-4"
          priority={true}
        />
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
    <section id="certificates" className="py-5 bg-slate-900 px-4 relative">
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
            <div className="flex">
              {certificatesData.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} onClick={() => openModal(certificate)} />
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition-colors z-20"
            onClick={scrollPrev}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition-colors z-20"
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