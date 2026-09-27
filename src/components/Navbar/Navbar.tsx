import React, { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { NavbarProps } from './Navbar.interface';
import {
  BRAND_NAME,
  BRAND_ROLE_BADGE,
  NAV_ITEMS,
  RESUME_DOWNLOAD_URL,
} from './Navbar.constants';
import { isScrolledPastThreshold, scrollToSectionById } from './Navbar.helpers';
import './Navbar.scss';

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(isScrolledPastThreshold(window.scrollY));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ): void => {
    event.preventDefault();
    scrollToSectionById(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__container" aria-label="Primary Navigation">
        <a
          href="#home"
          className="navbar__brand"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <span className="navbar__brand-mark" aria-hidden="true">
            DN
          </span>
          <span>{BRAND_NAME}</span>
          <span className="navbar__brand-badge">{BRAND_ROLE_BADGE}</span>
        </a>

        <ul
          id="primary-navigation-menu"
          className={`navbar__menu ${mobileMenuOpen ? 'navbar__menu--open' : ''}`}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__theme-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={RESUME_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__resume-btn"
            aria-label="Download Resume PDF (opens in new tab)"
          >
            <Download size={15} />
            <span>Resume</span>
          </a>

          <button
            type="button"
            className="navbar__mobile-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
};
