import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FooterProps } from './Footer.interface';
import { FOOTER_CONTENT, FOOTER_QUICK_LINKS } from './Footer.constants';
import { getCurrentYear, scrollToTop } from './Footer.helpers';
import './Footer.scss';

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const year = getCurrentYear();

  return (
    <footer className={`footer ${className}`.trim()}>
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__brand-name">
              {FOOTER_CONTENT.fullName}
            </span>
            <span className="footer__brand-role">{FOOTER_CONTENT.role}</span>
          </div>

          <ul className="footer__links" aria-label="Footer Quick Links">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer__links-item">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {year} {FOOTER_CONTENT.fullName}. {FOOTER_CONTENT.tagline}
          </p>

          <button
            type="button"
            className="footer__back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};
