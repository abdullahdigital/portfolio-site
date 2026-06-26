export interface Industry {
  name: string;
  description: string;
  projects: { title: string; link: string }[]; // Array of project titles and links
}

export const industriesData: Industry[] = [
  {
    name: 'Cybersecurity',
    description: 'Securing businesses against modern digital threats.',
    projects: [
      { title: 'AI-Powered Parallel Log Analyzer', link: 'https://drive.google.com/file/d/13XXwpDGmJx4TP1IB0GR3X6O-ZC538Gek/view?usp=sharing' },
      { title: 'Advanced Anti Forensics Detector', link: 'https://drive.google.com/file/d/1P-7_miDS_qlspqadcwrtsG4SYwveBnWL/view?usp=sharing' },
      { title: 'Agentic Internship Scam Investigator (OSINT + AI Agents)', link: 'https://drive.google.com/file/d/1ZCTl0cOpFL3D4EutgOHmI8tMyhEXHMrR/view' },
      { title: 'AI-Powered GRC Platform', link: 'https://drive.google.com/file/d/1YD8lOEjx6DiDOBX3yXMD7bx2hIut9UKY/view' },
      { title: 'SIEM Dashboard', link: 'https://siem-nimbus.vercel.app/' },
      { title: 'Flask SIEM', link: 'https://www.linkedin.com/posts/abdullahdigital_websitedevelopment-flaskdeveloper-businesswebsite-activity-7231896232263065600-0k5A?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESxBI8BxvPwjujJf4hh5F_riANWHXN8Vt8' },
      { title: 'SIEM System', link: 'https://www.linkedin.com/posts/abdullahdigital_webdevelopment-techinnovation-projectshowcase-activity-7232974479205826560-lZEZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESxBI8BxvPwjujJf4hh5F_riANWHXN8Vt8' },
      { title: 'Cybersecurity Blog', link: 'https://www.linkedin.com/posts/abdullahdigital_websitedeveloper-buildyourbrand-startablog-activity-7228644717570265088--yKk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESxBI8BxvPwjujJf4hh5F_riANWHXN8Vt8' },
    ],
  },
  {
    name: 'Personal Branding',
    description: 'Designing unique online identities that stand out.',
    projects: [
      { title: 'Web Pricing Page', link: 'https://web-pricing.vercel.app/' },
      { title: 'AI Startup Landing Page', link: 'https://abdullahdigital.github.io/vapi/' },
      { title: 'Personal Portfolio', link: 'https://abdullahdigital.github.io/portfolio/' },
      { title: 'Coming Soon Page', link: 'https://abdullahdigital.github.io/comingsoon/' },
      { title: 'Landing Page', link: 'https://abdullahdigital.github.io/landingpage/' },
    ],
  },
  {
    name: 'Freelance Platforms',
    description: 'Empowering freelancers by connecting skills with opportunities.',
    projects: [
      { title: 'Freelance Jobs Platform', link: 'https://drive.google.com/file/d/1bNDfD9i6xd60CFRePHl-Z8mF1pQkOcyr/view?usp=sharing' },
    ],
  },
  {
    name: 'Healthcare',
    description: 'Building reliable, scalable, and tailored web solutions for diverse healthcare needs.',
    projects: [
      { title: 'Dentist Website', link: 'https://drive.google.com/file/d/1bNDfD9i6xd60CFRePHl-Z8mF1pQkOcyr/view?usp=sharing' },
      { title: 'Blood Donation App', link: 'https://drive.google.com/file/d/1YE414TJXeFz-9Mnw9U8BaIHllY3gjr9w/view?usp=sharing' },
    ],
  },
  {
    name: 'Food & Hospitality',
    description: 'Boosting dining experiences with seamless digital solutions.',
    projects: [
      { title: 'Restaurant Website', link: 'https://abdullahdigital.github.io/restaurant/' },
    ],
  },
  {
    name: 'Communication & Collaboration',
    description: 'Creating smarter ways for teams to connect and grow.',
    projects: [
      { title: 'Real timeChat App', link: 'https://www.linkedin.com/posts/abdullahdigital_webdev-chatapp-buildyourbrand-activity-7229778659383873536-u4Nr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESxBI8BxvPwjujJf4hh5F_riANWHXN8Vt8' },
    ],
  },
  {
    name: 'E-Commerce',
    description: 'Driving online growth with powerful e-commerce solutions.',
    projects: [
      { title: 'E-commerce Store', link: 'https://www.linkedin.com/posts/abdullahdigital_webdevelopment-ecommercewebsite-techsolutions-activity-7234047281337974784-96Kj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESxBI8BxvPwjujJf4hh5F_riANWHXN8Vt8' },
      { title: 'Small E-commerce', link: 'https://abdullahdigital.github.io/womanandchild/' },
      { title: 'Printer E-commerce', link: 'https://abdullahdigital.github.io/printer/' },
      { title: 'ShopiCore E-commerce', link: 'https://abdullahdigital.github.io/shopicore/' },
    ],
  },
  {
    name: 'News & Media',
    description: 'Delivering timely and engaging content through modern news platforms.',
    projects: [
      { title: 'News App', link: 'https://drive.google.com/file/d/1U4Wner4q60Vy1hkMKHV3M8-tGA5TcAl2/view?usp=sharing' },
    ],
  },
  {
    name: 'Education & Learning',
    description: 'Making learning engaging, interactive, and accessible.',
    projects: [
      { title: 'E-Learning Platform', link: 'https://www.linkedin.com/posts/abdullahdigital_websitedevelopment-onlinebussiness-businessgrowth-activity-7222806588179259392-SLOi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESxBI8BxvPwjujJf4hh5F_riANWHXN8Vt8' },
    ],
  },
  {
    name: 'Content & Publishing',
    description: 'Simplifying content creation and distribution.',
    projects: [
      { title: 'Advanced Blog', link: 'https://www.linkedin.com/posts/abdullahdigital_websitedeveloper-ngo-bloggingjourney-activity-7230801396810366976-GP1I?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESxBI8BxvPwjujJf4hh5F_riANWHXN8Vt8' },
      { title: 'Cybersecurity Blog', link: 'https://www.linkedin.com/posts/abdullahdigital_websitedeveloper-buildyourbrand-startablog-activity-7228644717570265088--yKk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESxBI8BxvPwjujJf4hh5F_riANWHXN8Vt8' },
    ],
  },
  {
    name: 'Utilities & Tools',
    description: 'Smart tools that improve everyday productivity.',
    projects: [
      { title: 'Text Utility App', link: 'https://www.linkedin.com/posts/abdullahdigital_webdevelopment-techsolutions-businessgrowth-activity-7226455256988037120-yhbu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESxBI8BxvPwjujJf4hh5F_riANWHXN8Vt8' },
      { title: 'Weather App', link: 'https://www.linkedin.com/posts/abdullahdigital_websitedevelopment-techsolutions-businessgrowth-activity-7227693291918536704-Ucfx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESxBI8BxvPwjujJf4hh5F_riANWHXN8Vt8' },
      { title: 'Text Editor', link: 'https://text-hero.vercel.app/' },
      { title: 'Robo Speaker', link: 'https://www.linkedin.com/posts/abdullahdigital_websitedevelopment-backendwebsite-businessgrowth-activity-7225336759339880448-vI19?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESxBI8BxvPwjujJf4hh5F_riANWHXN8Vt8' },
    ],
  },
  {
    name: 'Music & Media',
    description: 'Immersive platforms for music and media lovers.',
    projects: [
      { title: 'Music Player', link: 'https://abdullahdigital.github.io/music/' },
    ],
  },
  {
    name: 'Entertainment & Gaming',
    description: 'Captivating digital spaces for endless fun and play.',
    projects: [
      { title: 'Gaming Platform', link: 'https://abdullahdigital.github.io/ali/' },
    ],
  },
  {
    name: 'Sales & Marketing',
    description: 'Tools to boost sales, outreach, and client engagement.',
    projects: [
      { title: 'CRM For Linkedin', link: 'https://drive.google.com/file/d/1LHuXt0aDXiMNjCEp7q7i6LE-zBSMB_6r/view' },
    ],
  },
];
