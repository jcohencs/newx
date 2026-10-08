export const site = {
  name: 'Joshua Cohen',
  initials: 'JC',
  title: 'Joshua Cohen — Resume',
  description:
    'Joshua Cohen is an IT professional and UCF undergraduate building smarter solutions in IoT, support tooling, and automation.',
};

export const contact = {
  email: 'jcohenworkcontact@gmail.com',
  phone: '(470) 234-6245',
  phoneHref: '+14702346245',
  linkedin: 'linkedin.com/in/jcohenwc',
  linkedinHref: 'https://linkedin.com/in/jcohenwc',
  location: 'Orlando, FL',
};

export const hero = {
  eyebrow: 'IT Professional · UCF Undergraduate',
  name: 'Joshua',
  nameAccent: 'Cohen',
  tagline: 'Creating smarter solutions at iRez Solutions.',
};

export const about = {
  paragraphs: [
    `I'm an IT enthusiast with a love for technology and the applications of how it connects people on a global scale. The scale at which science and technology can surpass human capabilities is extremely fascinating. A quote from my favorite piece of media, "Science is Might" — Dr. Stone — is so simplistic, but the pursuit of knowledge and advancement of technology is mightier than an individual's strength. This is what pushes me forward to pursue the field.`,
    `A large part of my life, which started when I was just 13, is competitive trading card games. Something about the strategy, crafting, learning interactions, learning the meta, and translating that into how I create the perfect list to counter and adapt to the popular choices fascinates me. The game taught me how to manage resources, adapt gameplans, and think multiple moves ahead — all skills that have genuinely translated into my career.`,
    `When I'm not sleeving cards or assisting with technological issues, I'm tinkering with game development or looking for the next card to complete my sets.`,
  ],
};

export type Experience = {
  title: string;
  badge: string;
  org: string;
  context: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    title: 'IT Operations & Support Specialist',
    badge: 'Current',
    org: 'iRez Solutions',
    context: 'IoT / Smart Communities',
    period: 'Oct 2025 — Present',
    bullets: [
      'Built and maintained technician support guides and diagnostic tools, reducing on-site resolution time for field teams',
      'Created and managed a unit progress integration tracker for residential complexes and living communities, giving stakeholders real-time visibility into deployment status',
      'Designed a fully functional time-sheet system within Notion, streamlining payroll reporting and team accountability',
      'Developed a centralized Notion resource hub for properties, consolidating documentation, SOPs, and reference materials into a single organized workspace',
      'Engineered a web scraper to pull unit connectivity data and package it into client-ready reports, replacing a manual process',
      'Managed helpdesk operations via Freshdesk — triaged tickets, handled phone-line support, and defined communication channel structures to improve response flow across teams',
    ],
  },
  {
    title: 'Shift Lead',
    badge: 'Current',
    org: 'Crumbl Cookies',
    context: 'Waterford Lakes, Orlando, FL',
    period: 'May 2022 — Present',
    bullets: [
      'Supervised daily operations and led team members during high-volume shifts, fostering a collaborative and efficient environment',
      'Managed inventory, restocked supplies, and coordinated with management to maintain optimal workflow',
      'Resolved customer concerns with professionalism and care, contributing to a positive brand reputation',
    ],
  },
  {
    title: 'IT Fundamentals — Coursework',
    badge: 'Summer 2024',
    org: 'University of Central Florida',
    context: 'Orlando, FL',
    period: '',
    bullets: [
      'Gained broad understanding of IT systems including hardware, software, and networking basics across Windows, macOS, and Linux',
      'Collaborated on a group project designing a mock IT infrastructure for a small business — hardware selection, network layout, and support plan',
    ],
  },
];

export type SkillGroup = {
  label: string;
  skills: { name: string; accent?: boolean }[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'Core Technical',
    skills: [
      { name: 'Notion (Advanced)', accent: true },
      { name: 'IoT Systems', accent: true },
      { name: 'Freshdesk' },
      { name: 'SQL / Databases' },
      { name: 'Python' },
      { name: 'Hardware Troubleshooting' },
      { name: 'Network Basics' },
    ],
  },
  {
    label: 'Tools & Platforms',
    skills: [
      { name: 'Windows / macOS / Linux' },
      { name: 'Microsoft Office Suite' },
      { name: 'Godot / GDScript' },
      { name: 'GitHub' },
      { name: 'Helpdesk Systems' },
    ],
  },
  {
    label: 'Communication & Ops',
    skills: [
      { name: 'Process Documentation', accent: true },
      { name: 'Client Reporting', accent: true },
      { name: 'Technical Writing' },
      { name: 'Cross-team Coordination' },
      { name: 'Phone Line Support' },
    ],
  },
  {
    label: 'Soft Skills',
    skills: [
      { name: 'Critical Thinking' },
      { name: 'Time Management' },
      { name: 'Adaptability' },
      { name: 'Team Leadership' },
    ],
  },
];

export type EducationEntry = {
  name: string;
  date: string;
  degree: string;
  coursework?: string[];
};

export const education: EducationEntry[] = [
  {
    name: 'University of Central Florida',
    date: 'Expected 2026',
    degree: 'Pursuing B.S. in Information Technology · Orlando, FL',
    coursework: ['IT Fundamentals', 'Database Concepts', 'Networking', 'Systems Admin'],
  },
  {
    name: 'West Forsyth High School',
    date: 'June 2021',
    degree: 'High School Diploma · Cumming, GA',
  },
];

export type Certification = {
  name: string;
  id?: string;
  date?: string;
  icon: string;
};

export const certifications: Certification[] = [
  {
    name: 'TestOut IT Fundamentals Pro',
    id: 'ID: 6-1C6-VHEJF3',
    date: 'Aug 2024',
    icon: 'ti-certificate',
  },
  {
    name: 'TestOut Office Pro',
    id: 'ID: 6-2C6RAPF9',
    date: 'Dec 2022',
    icon: 'ti-certificate',
  },
  {
    name: 'Native English',
    id: 'Language proficiency',
    icon: 'ti-language',
  },
];

export const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#education', label: 'Education' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];
