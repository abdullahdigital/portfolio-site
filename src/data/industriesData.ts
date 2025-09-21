export type Industry = {
  name: string;
  description: string;
  projects: {
    title: string;
    link: string;
  }[];
};

export const industriesData: Industry[] = [
  {
    name: 'Cybersecurity',
    description: 'SIEM Dashboards, Threat Detection, Security Monitoring',
    projects: [
      { title: 'Threat Detection System', link: '#projects' },
      { title: 'SIEM Dashboard Integration', link: '#projects' },
    ],
  },
  {
    name: 'E-Commerce',
    description: 'Online Stores, Payment Integration, Printer Shops, Discord Shops',
    projects: [
      { title: 'Online Retail Store', link: '#projects' },
      { title: 'Payment Gateway Integration', link: '#projects' },
    ],
  },
  {
    name: 'Healthcare',
    description: 'Blood Donation & Patient Support Systems',
    projects: [
      { title: 'Blood Donation App', link: '#projects' },
      { title: 'Patient Support Portal', link: '#projects' },
    ],
  },
  {
    name: 'Freelance Platforms',
    description: 'Marketplace & Collaboration Tools',
    projects: [
      { title: 'Freelancer Marketplace', link: '#projects' },
      { title: 'Collaboration Suite', link: '#projects' },
    ],
  },
  {
    name: 'Content & Publishing',
    description: 'Blogs, News Portals',
    projects: [
      { title: 'Dynamic Blog Platform', link: '#projects' },
      { title: 'News Aggregator', link: '#projects' },
    ],
  },
  {
    name: 'Communication & Collaboration',
    description: 'Chat Applications, Freelancers’ Support Platforms',
    projects: [
      { title: 'Real-time Chat App', link: '#projects' },
      { title: 'Freelance Support System', link: '#projects' },
    ],
  },
  {
    name: 'Utilities & Tools',
    description: 'Weather Apps, Text Manipulation, Text-to-Speech Solutions',
    projects: [
      { title: 'Weather Forecast App', link: '#projects' },
      { title: 'Text Utility Suite', link: '#projects' },
    ],
  },
  {
    name: 'Education & Learning',
    description: 'Online Academies, Tutorial Platforms',
    projects: [
      { title: 'E-Learning Platform', link: '#projects' },
      { title: 'Interactive Tutorial Site', link: '#projects' },
    ],
  },
  {
    name: 'Food & Hospitality',
    description: 'Restaurant Websites & Ordering Systems',
    projects: [
      { title: 'Restaurant Booking System', link: '#projects' },
      { title: 'Online Ordering Platform', link: '#projects' },
    ],
  },
  {
    name: 'Entertainment & Gaming',
    description: 'Gaming Platforms & Interactive Apps',
    projects: [
      { title: 'Gaming Community Portal', link: '#projects' },
      { title: 'Interactive Quiz App', link: '#projects' },
    ],
  },
  {
    name: 'Music & Media',
    description: 'Streaming & Audio Platforms',
    projects: [
      { title: 'Music Streaming Service', link: '#projects' },
      { title: 'Podcast Hosting Platform', link: '#projects' },
    ],
  },
  {
    name: 'Personal Branding',
    description: 'Portfolio Websites, Landing Pages for Startups',
    projects: [
      { title: 'Personal Portfolio Site', link: '#projects' },
      { title: 'Startup Landing Page', link: '#projects' },
    ],
  },
  {
    name: 'Healthcare (Specialized)',
    description: 'Dentist Practice Websites',
    projects: [
      { title: 'Dental Clinic Website', link: '#projects' },
      { title: 'Appointment Booking System', link: '#projects' },
    ],
  },
];