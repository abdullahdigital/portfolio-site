import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BloodDonationProject = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-blue-400 hover:underline mb-8 block">
          &larr; Back to Projects
        </Link>
        <h1 className="text-5xl font-bold mb-6 text-center text-blue-400">Blood Donation App</h1>
        <p className="text-lg mb-8 text-center">
          An application to connect blood donors with recipients, managing requests and donations.
        </p>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-blue-300">Project Video</h2>
          <div className="relative w-full max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden">
            <video
              className="w-full h-auto"
              controls
              preload="none"
              poster="/projects/7blood-donation.png"
            >
              <source src="/videos/bloodDonation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-blue-300">Technologies Used</h2>
          <ul className="list-disc list-inside text-lg grid grid-cols-1 sm:grid-cols-2 gap-2">
            <li>React Native</li>
            <li>Firebase</li>
            <li>Healthcare Domain Knowledge</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-blue-300">Features</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Donor and Recipient Registration</li>
            <li>Blood Request Management</li>
            <li>Donation Scheduling and Tracking</li>
            <li>Location-based Donor Search</li>
            <li>Notification System</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4 text-blue-300">Description</h2>
          <p className="text-lg leading-relaxed">
            The Blood Donation App is designed to streamline the process of blood donation, making it easier for donors to connect with those in need. It provides a robust platform for managing blood requests, scheduling donations, and tracking donor history. The app aims to bridge the gap between demand and supply in blood banks, ultimately saving lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BloodDonationProject;