import React, { useEffect, useState } from 'react';
import { Navbar, ThemeMode } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import {
  applyThemeToDocument,
  detectActiveSection,
  getInitialTheme,
} from './App.helpers';
import './App.scss';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = (): void => {
      setActiveSection(detectActiveSection());
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = (): void => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        activeSection={activeSection}
      />

      <main id="main-content" className="app__main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
