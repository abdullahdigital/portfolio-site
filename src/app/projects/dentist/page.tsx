import React from 'react';
import Image from 'next/image';

const DentistProjectPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Dentist Website Project</h1>
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
          <video
            controls
            preload="none"
            poster="/projects/4dentist.png" // Using the project image as a poster
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/videos/dentist.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray-300 mb-4">
            This project showcases a professional website designed for a dental clinic. It features a clean and modern interface,
            highlighting various dental services, patient testimonials, and an easy-to-use appointment booking system.
            The goal was to create an inviting online presence that instills trust and encourages patient engagement.
          </p>
          <h3 className="text-xl font-semibold mb-2">Technologies Used:</h3>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>HTML5</li>
            <li>CSS3 (with Bootstrap for responsive design)</li>
            <li>JavaScript (for interactive elements and form validation)</li>
            <li>Responsive Design Principles</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Service Showcase: Detailed descriptions of dental treatments.</li>
            <li>Online Appointment Booking: Streamlined process for scheduling visits.</li>
            <li>Patient Testimonials: Build credibility with patient feedback.</li>
            <li>Contact Form: Easy communication channel for inquiries.</li>
            <li>Responsive Layout: Optimal viewing experience across all devices.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DentistProjectPage;