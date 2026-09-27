import { SkillCategoryFilter, SkillGroup } from './Skills.interface';

export const SKILLS_SECTION_HEADER = {
  eyebrow: 'Technical Arsenal',
  titleStart: 'Full-Spectrum',
  titleHighlight: 'Engineering Skills',
  subtitle:
    'Production-tested expertise across modern React ecosystems, strict TypeScript architectures, WCAG accessibility, MERN backend services, and AI-native developer tooling.',
};

export const SKILL_CATEGORY_FILTERS: SkillCategoryFilter[] = [
  { id: 'all', label: 'All Categories' },
  { id: 'frontend', label: 'Frontend & Architecture' },
  { id: 'state-ui', label: 'State, UI & Accessibility' },
  { id: 'backend-api', label: 'Backend, DB & Auth' },
  { id: 'testing-devops', label: 'Testing & DevOps' },
  { id: 'ai-tools', label: 'AI-Assisted Dev' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend & Architecture',
    subtitle: 'Core UI engineering & modern web architecture',
    iconName: 'code',
    skills: [
      { name: 'React.js', level: 'Expert', percentage: 96, highlight: true },
      { name: 'TypeScript', level: 'Expert', percentage: 92, highlight: true },
      { name: 'JavaScript (ES6+)', level: 'Expert', percentage: 95, highlight: true },
      { name: 'Next.js', level: 'Advanced', percentage: 85 },
      { name: 'HTML5 & Semantic Web', level: 'Expert', percentage: 95 },
      { name: 'CSS3 & SCSS', level: 'Expert', percentage: 95 },
      { name: 'Vite', level: 'Expert', percentage: 92 },
      { name: 'Reusable Component Architecture', level: 'Expert', percentage: 94 },
      { name: 'Component-Driven Development', level: 'Expert', percentage: 94 },
      { name: 'Performance Optimization', level: 'Advanced', percentage: 90 },
      { name: 'Vue.js', level: 'Proficient', percentage: 78 },
    ],
  },
  {
    id: 'state-ui',
    title: 'State Management, UI & Accessibility',
    subtitle: 'Predictable data flow & inclusive design systems',
    iconName: 'sliders',
    skills: [
      { name: 'Redux Toolkit', level: 'Expert', percentage: 94, highlight: true },
      { name: 'React Query (TanStack)', level: 'Expert', percentage: 92, highlight: true },
      { name: 'React Hooks & Context API', level: 'Expert', percentage: 95 },
      { name: 'WCAG Accessibility Standards', level: 'Expert', percentage: 92, highlight: true },
      { name: 'Material UI (MUI)', level: 'Expert', percentage: 90 },
      { name: 'Tailwind CSS & Bootstrap', level: 'Advanced', percentage: 88 },
      { name: 'Responsive & Cross-Browser UI', level: 'Expert', percentage: 95 },
    ],
  },
  {
    id: 'backend-api',
    title: 'Backend, Database & Authentication',
    subtitle: 'MERN stack services & enterprise security flows',
    iconName: 'server',
    skills: [
      { name: 'REST APIs & API Integration', level: 'Expert', percentage: 95, highlight: true },
      { name: 'Single Sign-On (SSO)', level: 'Advanced', percentage: 88, highlight: true },
      { name: 'Role-Based Access Control (RBAC)', level: 'Advanced', percentage: 90, highlight: true },
      { name: 'Email-Based Authentication', level: 'Advanced', percentage: 90 },
      { name: 'Node.js', level: 'Proficient', percentage: 76 },
      { name: 'Express.js', level: 'Proficient', percentage: 76 },
      { name: 'MongoDB', level: 'Proficient', percentage: 75 },
    ],
  },
  {
    id: 'testing-devops',
    title: 'Testing, CI/CD & DevOps',
    subtitle: 'Automated quality assurance & cloud delivery',
    iconName: 'terminal',
    skills: [
      { name: 'Jest & Unit Testing', level: 'Advanced', percentage: 86, highlight: true },
      { name: 'React Testing Library', level: 'Advanced', percentage: 86, highlight: true },
      { name: 'Git, GitHub & GitLab', level: 'Expert', percentage: 92 },
      { name: 'GitLab CI/CD & Jenkins', level: 'Proficient', percentage: 78 },
      { name: 'Docker', level: 'Proficient', percentage: 74 },
      { name: 'AWS S3', level: 'Proficient', percentage: 75 },
      { name: 'Jira & Agile Scrum', level: 'Expert', percentage: 94 },
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI-Assisted Engineering',
    subtitle: 'MCP integrations & specification-driven automation',
    iconName: 'sparkles',
    skills: [
      { name: 'Cursor (MCP Integrations)', level: 'Expert', percentage: 95, highlight: true },
      { name: 'OpenAI Codex Workflows', level: 'Expert', percentage: 92, highlight: true },
      { name: 'Google Gemini AI', level: 'Advanced', percentage: 90, highlight: true },
      { name: 'Claude Code', level: 'Advanced', percentage: 90 },
      { name: 'ChatGPT Prompt Engineering', level: 'Expert', percentage: 94 },
    ],
  },
];
