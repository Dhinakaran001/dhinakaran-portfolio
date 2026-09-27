import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Download,
  MapPin,
  Mail,
  Phone,
  Globe,
  Terminal,
} from 'lucide-react';
import profilePhoto from '../../assets/images/profile.jpg';
import { LinkedInIcon, GitHubIcon } from '../Icons';
import { HeroProps, HeroSocialLink } from './Hero.interface';
import {
  HERO_ANIMATED_ROLES,
  HERO_CONTENT,
  HERO_FLOATING_BADGES,
  HERO_SOCIAL_LINKS,
  HERO_STATS,
} from './Hero.constants';
import { getNextRoleIndex } from './Hero.helpers';
import './Hero.scss';

export const Hero: React.FC<HeroProps> = () => {
  const [roleIndex, setRoleIndex] = useState<number>(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((prev) => getNextRoleIndex(prev, HERO_ANIMATED_ROLES.length));
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  const renderSocialIcon = (iconName: HeroSocialLink['iconName']) => {
    switch (iconName) {
      case 'linkedin':
        return <LinkedInIcon size={16} />;
      case 'github':
        return <GitHubIcon size={16} />;
      case 'globe':
        return <Globe size={16} />;
      case 'mail':
        return <Mail size={16} />;
      case 'phone':
        return <Phone size={16} />;
    }
  };

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero__bg-glow" aria-hidden="true" />

      <div className="hero__container">
        <div className="hero__grid">
          <div className="hero__content">
            <div className="hero__status-pill">
              <span className="hero__status-pill-dot" aria-hidden="true" />
              <span>{HERO_CONTENT.availabilityText}</span>
            </div>

            <span className="hero__greeting">{HERO_CONTENT.greeting}</span>

            <h1 className="hero__title">
              Dhinakaran{' '}
              <span className="hero__title-highlight">Nambiraj</span>
            </h1>

            <div className="hero__role-wrapper" aria-live="polite">
              <Terminal size={20} aria-hidden="true" />
              <span className="hero__role-prefix">&gt;</span>
              <span>{HERO_ANIMATED_ROLES[roleIndex]}</span>
            </div>

            <p className="hero__summary">{HERO_CONTENT.summary}</p>

            <div className="hero__meta">
              <span className="hero__meta-item">
                <MapPin size={16} aria-hidden="true" />
                <span>{HERO_CONTENT.location}</span>
              </span>
              <a
                href={`mailto:${HERO_CONTENT.email}`}
                className="hero__meta-item"
              >
                <Mail size={16} aria-hidden="true" />
                <span>{HERO_CONTENT.email}</span>
              </a>
              <a
                href={`tel:${HERO_CONTENT.phone}`}
                className="hero__meta-item"
              >
                <Phone size={16} aria-hidden="true" />
                <span>{HERO_CONTENT.phone}</span>
              </a>
            </div>

            <div className="hero__cta-group">
              <a href="#projects" className="hero__btn hero__btn--primary">
                <span>Explore Projects</span>
                <ArrowRight size={17} />
              </a>

              <a
                href={HERO_CONTENT.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__btn hero__btn--secondary"
              >
                <Download size={17} />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="hero__socials" aria-label="Social Links">
              {HERO_SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.url.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="hero__socials-link"
                >
                  {renderSocialIcon(link.iconName)}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__portrait-card">
              <div className="hero__portrait-inner">
                <img
                  src={profilePhoto}
                  alt="Dhinakaran Nambiraj — Senior React.js Developer and Frontend Engineer"
                  className="hero__portrait-img"
                  loading="eager"
                />
              </div>

              {HERO_FLOATING_BADGES.map((badge) => (
                <div
                  key={badge.id}
                  className={`hero__badge hero__badge--${badge.position}`}
                >
                  <span className="hero__badge-title">{badge.title}</span>
                  <span className="hero__badge-subtitle">{badge.subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero__stats" role="region" aria-label="Career Highlights">
          {HERO_STATS.map((stat) => (
            <div key={stat.id} className="hero__stat-card">
              <span className="hero__stat-card-value">{stat.value}</span>
              <span className="hero__stat-card-label">{stat.label}</span>
              <span className="hero__stat-card-detail">{stat.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
