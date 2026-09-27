import { FooterQuickLink } from './Footer.interface';

export const FOOTER_CONTENT = {
  fullName: 'Dhinakaran Nambiraj',
  role: 'Senior React.js Developer | Frontend Engineer',
  tagline:
    'Built with React.js, TypeScript, Vite & SCSS • Engineered for WCAG 2.1 AA Accessibility',
  linkedinUrl: 'https://www.linkedin.com/in/dhinakaran-n',
  netlifyUrl: 'https://app.netlify.com/teams/dhinakaran001/overview',
  email: 'karandhina708@gmail.com',
};

export const FOOTER_QUICK_LINKS: FooterQuickLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
