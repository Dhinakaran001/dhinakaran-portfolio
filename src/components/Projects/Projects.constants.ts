import fullMernImg from '../../assets/images/projects/fullMernStack.png';
import multiVendorImg from '../../assets/images/projects/multivendor.png';
import btsImg from '../../assets/images/projects/P-BTS.png';
import cakeImg from '../../assets/images/projects/P-cake.png';
import argonImg from '../../assets/images/projects/P-ARGON.png';
import gridImg from '../../assets/images/projects/P-GRID.png';
import flexImg from '../../assets/images/projects/P-FLEX.png';
import foodImg from '../../assets/images/projects/P-FOOD.png';
import popDesignImg from '../../assets/images/projects/P-POPDESIGN.png';
import { ProjectCategoryOption, ProjectItem } from './Projects.interface';

export const PROJECTS_SECTION_HEADER = {
  eyebrow: 'Featured Work & Case Studies',
  titleStart: 'Enterprise Products &',
  titleHighlight: 'Web Applications',
  subtitle:
    'From 11-module enterprise B2B SaaS contact center platforms and Google Gemini AI tools to full-stack MERN commerce and live frontend showcases.',
};

export const PROJECT_CATEGORIES: ProjectCategoryOption[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'enterprise-saas', label: 'Enterprise & B2B SaaS' },
  { id: 'ai-fullstack', label: 'AI & Full-Stack MERN' },
  { id: 'ui-templates', label: 'Live UI Showcases' },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'ringcentral-ace',
    title: 'ACE – AI Contact Center Enterprise',
    subtitle: 'Enterprise B2B SaaS Contact Center Analytics Platform',
    category: 'enterprise-saas',
    categoryLabel: 'Enterprise B2B SaaS',
    clientOrContext: 'Client: RingCentral • Role: Senior React.js / TypeScript Developer',
    description:
      'B2B SaaS contact center analytics platform supporting customer interaction management, AI-assisted performance coaching, sales tracking, and business intelligence reporting.',
    modulesList: [
      'Insights',
      'CSAT',
      'Interaction',
      'Coaching',
      'Deals',
      'Library',
      'Trackers',
      'Reports',
      'Admin Settings',
      'SSO',
      'Email Login',
    ],
    highlights: [
      'Built and maintained 11 core product modules across the platform.',
      'Developed interactive analytics dashboards for Insights and CSAT modules to visualize customer satisfaction scores and KPIs.',
      'Implemented interaction tracking, AI-assisted coaching workflows, deal management, resource library, and configurable reporting with data export support.',
      'Engineered Role-Based Access Control (RBAC), Single Sign-On (SSO), and email authentication flows in Admin Settings.',
      'Applied WCAG 2.1 accessibility standards consistently across all modules.',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'React Query',
      'WCAG 2.1',
      'REST APIs',
      'SSO & RBAC',
    ],
    featured: true,
  },
  {
    id: 'ai-code-review',
    title: 'AI Code Review Assistant',
    subtitle: 'Multi-Language Automated Code Analysis Web Application',
    category: 'ai-fullstack',
    categoryLabel: 'Generative AI App',
    clientOrContext: 'AI Developer Tooling • Google Gemini AI',
    description:
      'Intelligent web application powered by Google Gemini AI that analyzes source code across multiple programming languages to detect bugs, security flaws, and performance bottlenecks with actionable refactoring suggestions.',
    highlights: [
      'Integrated Google Generative AI SDK for real-time multi-language code review and architectural feedback.',
      'Architected a fast, responsive React.js + Vite frontend with syntax-highlighted diff recommendations.',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Vite',
      'Google Generative AI (Gemini)',
      'SCSS',
    ],
    liveUrl: 'https://github.com/Dhinakaran001/AI-Code-Review-Assistant',
    featured: true,
  },
  {
    id: 'dms-platform',
    title: 'DMS – Distributor Management System',
    subtitle: 'Enterprise Field Sales & Invoice Operations Platform',
    category: 'enterprise-saas',
    categoryLabel: 'Enterprise Web Platform',
    clientOrContext: 'Censanext • B2B Operations Platform',
    description:
      'Comprehensive web platform for enterprise invoice management and Salesman App operations oversight, engineered to track, audit, and optimize field sales activities in real time.',
    highlights: [
      'Designed Redux state slices and REST API integrations for high-volume invoice and route tracking.',
      'Built operational oversight dashboards for regional sales managers and distributors.',
    ],
    technologies: ['React.js', 'Redux', 'REST APIs', 'JavaScript (ES6+)', 'Material UI'],
    featured: true,
  },
  {
    id: 'procurement-system',
    title: 'Enterprise Procurement System',
    subtitle: 'Purchase Order, Reverse Auction & RFQ Workflow Engine',
    category: 'enterprise-saas',
    categoryLabel: 'Supply Chain SaaS',
    clientOrContext: 'Censanext • Vendor & Procurement Management',
    description:
      'Internal and external purchase order management platform featuring live vendor auction and Request for Quotation (RFQ) workflows for procurement cost optimization.',
    highlights: [
      'Engineered end-to-end RFQ creation, vendor bidding comparison, and purchase order approval workflows.',
      'Optimized complex form state and table rendering performance by ~30%.',
    ],
    technologies: ['React.js', 'Redux', 'REST APIs', 'Role-Based Access Control'],
    featured: true,
  },
  {
    id: 'multi-vendor-mern',
    title: 'Multi-Vendor E-Commerce Platform',
    subtitle: 'Full-Stack MERN Marketplace Application',
    category: 'ai-fullstack',
    categoryLabel: 'Full-Stack MERN',
    clientOrContext: 'Full Stack Architecture',
    description:
      'Complete multi-vendor e-commerce platform with vendor dashboards, product catalog management, cart & checkout workflows, and role-based authentication.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux'],
    image: multiVendorImg,
  },
  {
    id: 'pizzaworld-mern',
    title: 'PizzaWorld – Online Ordering App',
    subtitle: 'Full-Stack MERN Food Delivery Platform',
    category: 'ai-fullstack',
    categoryLabel: 'Full-Stack MERN',
    clientOrContext: 'Full Stack MERN Application',
    description:
      'End-to-end food ordering web application featuring custom pizza builder, real-time order status tracking, and admin inventory management.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    image: fullMernImg,
  },
  {
    id: 'bundle-books',
    title: 'Bundle Books Storefront',
    subtitle: 'Responsive E-Book & Publishing Showcase',
    category: 'ui-templates',
    categoryLabel: 'Live Web UI',
    clientOrContext: 'Frontend UI Engineering',
    description:
      'Clean, responsive book storefront and catalog layout built with modern CSS grid/flexbox and interactive UI components.',
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    image: btsImg,
    liveUrl: 'https://bundle-bts.netlify.app',
  },
  {
    id: 'dhina-bakery',
    title: 'Dhina Artisan Bakery & Cake Shop',
    subtitle: 'Modern E-Commerce Landing Experience',
    category: 'ui-templates',
    categoryLabel: 'Live Web UI',
    clientOrContext: 'Frontend UI Engineering',
    description:
      'Visually rich storefront for an artisan bakery featuring interactive product cards, category showcases, and mobile-first responsive design.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    image: cakeImg,
    liveUrl: 'https://dhina-bakery.netlify.app',
  },
  {
    id: 'argon-polygon',
    title: 'Argon Polygon SaaS Landing',
    subtitle: 'Single-Page Modern Web Template',
    category: 'ui-templates',
    categoryLabel: 'Live Web UI',
    clientOrContext: 'Frontend UI Engineering',
    description:
      'Single-page geometric SaaS landing page with custom polygon clip-paths, smooth scroll navigation, and responsive feature sections.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    image: argonImg,
    liveUrl: 'https://argon-polygon.netlify.app',
  },
  {
    id: 'game-dev-grid',
    title: 'Game Studio Grid Architecture',
    subtitle: 'Advanced CSS Grid Interactive Layout',
    category: 'ui-templates',
    categoryLabel: 'Live Web UI',
    clientOrContext: 'Frontend UI Engineering',
    description:
      'Showcase of complex 2D CSS Grid layouts tailored for a gaming studio portfolio and media gallery.',
    technologies: ['HTML5', 'CSS Grid', 'Responsive Design'],
    image: gridImg,
    liveUrl: 'https://game-development-grid.netlify.app',
  },
  {
    id: 'adventure-flex',
    title: 'Adventure Travel Flex UI',
    subtitle: 'Responsive Flexbox Travel Portal',
    category: 'ui-templates',
    categoryLabel: 'Live Web UI',
    clientOrContext: 'Frontend UI Engineering',
    description:
      'Fluid Flexbox-driven travel and outdoor adventure booking interface with interactive destination cards.',
    technologies: ['HTML5', 'CSS Flexbox', 'JavaScript'],
    image: flexImg,
    liveUrl: 'https://adventure-flex.netlify.app',
  },
  {
    id: 'food-desktop',
    title: 'Gourmet Food Discovery UI',
    subtitle: 'Restaurant & Culinary Web Experience',
    category: 'ui-templates',
    categoryLabel: 'Live Web UI',
    clientOrContext: 'Frontend UI Engineering',
    description:
      'Modern culinary discovery interface with curated menu sections, promotional banners, and clean typography.',
    technologies: ['HTML5', 'CSS3', 'Responsive Layout'],
    image: foodImg,
    liveUrl: 'https://food-desktop.netlify.app',
  },
  {
    id: 'pop-design',
    title: 'POP-Design Creative Studio',
    subtitle: 'Digital Agency Portfolio Concept',
    category: 'ui-templates',
    categoryLabel: 'Live Web UI',
    clientOrContext: 'Frontend UI Engineering',
    description:
      'Bold agency showcase template emphasizing vibrant visual hierarchy, grid alignment, and interactive hover micro-interactions.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    image: popDesignImg,
    liveUrl: 'https://popdesign.netlify.app/',
  },
];
