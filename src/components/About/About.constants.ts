import { EngineeringPillar, PersonalInfoItem } from './About.interface';

export const ABOUT_SECTION_HEADER = {
  eyebrow: 'About Me & Engineering Philosophy',
  titleStart: 'Architecting Scalable, Accessible',
  titleHighlight: 'Enterprise Frontends',
  subtitle:
    'Combining 4+ years of deep React.js & TypeScript expertise with modern AI-assisted development workflows to deliver resilient B2B SaaS products.',
};

export const ABOUT_BIO_PARAGRAPHS: string[] = [
  'I am a Senior React.js Developer and Frontend Engineer currently building enterprise-grade contact center analytics modules for RingCentral ACE at Dbiz.ai. Over the past 4+ years, I have specialized in transforming complex product requirements into clean, modular, and strictly typed React applications.',
  'My approach centers on Reusable Component Architecture, predictable state management with Redux Toolkit and React Query, and strict adherence to WCAG accessibility standards so every user experience is fast, inclusive, and maintainable.',
  'Beyond core frontend architecture, I bring full-stack MERN capabilities (Node.js, Express.js, MongoDB) and actively champion developer productivity by integrating Cursor MCP servers and OpenAI Codex automation workflows into daily sprint execution.',
];

export const ENGINEERING_PILLARS: EngineeringPillar[] = [
  {
    id: 'architecture',
    title: 'Component-Driven Architecture',
    description:
      'Designing scalable, reusable UI component libraries and strict TypeScript interfaces that keep large enterprise codebases maintainable.',
    iconName: 'layers',
    tags: ['React.js', 'TypeScript', 'SCSS', 'Design Systems'],
  },
  {
    id: 'accessibility',
    title: 'WCAG Accessibility & UX',
    description:
      'Implementing WCAG 2.1 AA compliance, semantic HTML, keyboard navigation, and responsive layouts across enterprise B2B SaaS modules.',
    iconName: 'shield',
    tags: ['WCAG 2.1', 'ARIA', 'Cross-Browser', 'Material UI'],
  },
  {
    id: 'performance',
    title: 'State & Performance Optimization',
    description:
      'Optimizing rendering lifecycles, server-state caching with React Query, and Redux Toolkit slices—achieving ~30% faster load and runtime performance.',
    iconName: 'zap',
    tags: ['Redux Toolkit', 'React Query', 'Vite', 'REST APIs'],
  },
  {
    id: 'ai-workflow',
    title: 'AI-Augmented Engineering',
    description:
      'Connecting Jira and internal UI libraries into the IDE via Cursor MCP and automating specification-driven code generation with OpenAI Codex & Gemini.',
    iconName: 'cpu',
    tags: ['Cursor MCP', 'OpenAI Codex', 'Google Gemini', 'Claude Code'],
  },
];

export const PERSONAL_INFO_ITEMS: PersonalInfoItem[] = [
  { label: 'Name', value: 'Dhinakaran Nambiraj' },
  { label: 'Current Role', value: 'Senior Software Engineer @ Dbiz.ai' },
  { label: 'Location', value: 'Bengaluru / Tamil Nadu, India' },
  {
    label: 'Email',
    value: 'karandhina708@gmail.com',
    href: 'mailto:karandhina708@gmail.com',
  },
  {
    label: 'Phone',
    value: '+91-9080352865',
    href: 'tel:+919080352865',
  },
  { label: 'Languages', value: 'English, Tamil' },
];
