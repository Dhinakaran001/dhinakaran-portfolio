import {
  HeroFloatingBadge,
  HeroSocialLink,
  HeroStatItem,
} from './Hero.interface';

export const HERO_CONTENT = {
  availabilityText: 'Senior Frontend Engineer • Open to Opportunities',
  greeting: "Hello, I'm",
  fullName: 'Dhinakaran Nambiraj',
  primaryTitle: 'Senior React.js Developer | Frontend Engineer',
  location: 'Bengaluru & Tamil Nadu, India',
  email: 'karandhina708@gmail.com',
  phone: '+91-9080352865',
  summary:
    'Frontend Engineer with 4+ years of experience architecting large-scale enterprise B2B SaaS & MERN web applications using React.js and TypeScript. Specialized in component-driven design systems, Redux Toolkit & React Query state management, WCAG accessibility compliance, and AI-assisted engineering workflows.',
  resumeUrl:
    'https://drive.google.com/file/d/1JHEOkGg0uMV3Oc3LePz8DxCvjUNQriLG/view?usp=drive_link',
};

export const HERO_ANIMATED_ROLES: string[] = [
  'Senior React.js Developer',
  'TypeScript & UI Architect',
  'Enterprise B2B SaaS Engineer',
  'WCAG Accessibility Specialist',
  'MERN Stack Developer',
];

export const HERO_SOCIAL_LINKS: HeroSocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dhinakaran-n',
    iconName: 'linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/Dhinakaran001',
    iconName: 'github',
  },
  {
    id: 'netlify',
    label: 'Live Demos Hub',
    url: 'https://app.netlify.com/teams/dhinakaran001/overview',
    iconName: 'globe',
  },
  {
    id: 'email',
    label: 'karandhina708@gmail.com',
    url: 'mailto:karandhina708@gmail.com',
    iconName: 'mail',
  },
];

export const HERO_FLOATING_BADGES: HeroFloatingBadge[] = [
  {
    id: 'exp-badge',
    title: '4+ Years',
    subtitle: 'React & TypeScript',
    position: 'top-left',
  },
  {
    id: 'saas-badge',
    title: '11+ Modules',
    subtitle: 'RingCentral ACE SaaS',
    position: 'bottom-left',
  },
  {
    id: 'wcag-badge',
    title: 'WCAG 2.1 AA',
    subtitle: 'Enterprise Accessibility',
    position: 'bottom-right',
  },
];

export const HERO_STATS: HeroStatItem[] = [
  {
    id: 'years',
    value: '4+',
    label: 'Years Experience',
    detail: 'React.js, TypeScript & MERN Stack',
  },
  {
    id: 'modules',
    value: '11+',
    label: 'Enterprise Modules',
    detail: 'Built for RingCentral ACE SaaS',
  },
  {
    id: 'perf',
    value: '30%',
    label: 'Performance Boost',
    detail: 'Across 5+ production MERN apps',
  },
  {
    id: 'a11y',
    value: 'WCAG',
    label: 'Accessible UI',
    detail: 'Inclusive enterprise compliance',
  },
];
