import React from 'react';
import { Layers, ShieldCheck, Cpu, Zap, UserCheck } from 'lucide-react';
import { AboutProps, EngineeringPillar } from './About.interface';
import {
  ABOUT_BIO_PARAGRAPHS,
  ABOUT_SECTION_HEADER,
  ENGINEERING_PILLARS,
  PERSONAL_INFO_ITEMS,
} from './About.constants';
import './About.scss';

export const About: React.FC<AboutProps> = ({ className = '' }) => {
  const renderPillarIcon = (iconName: EngineeringPillar['iconName']) => {
    switch (iconName) {
      case 'layers':
        return <Layers size={22} />;
      case 'shield':
        return <ShieldCheck size={22} />;
      case 'zap':
        return <Zap size={22} />;
      case 'cpu':
        return <Cpu size={22} />;
    }
  };

  return (
    <section
      id="about"
      className={`about ${className}`.trim()}
      aria-labelledby="about-heading"
    >
      <div className="about__container">
        <div className="section-header">
          <div className="section-header__eyebrow">
            <UserCheck size={14} aria-hidden="true" />
            <span>{ABOUT_SECTION_HEADER.eyebrow}</span>
          </div>
          <h2 id="about-heading" className="section-header__title">
            {ABOUT_SECTION_HEADER.titleStart}{' '}
            <span>{ABOUT_SECTION_HEADER.titleHighlight}</span>
          </h2>
          <p className="section-header__subtitle">
            {ABOUT_SECTION_HEADER.subtitle}
          </p>
        </div>

        <div className="about__layout">
          <div className="about__story-card">
            <h3 className="about__story-heading">
              Professional Summary & Background
            </h3>

            {ABOUT_BIO_PARAGRAPHS.map((paragraph, index) => (
              <p key={index} className="about__paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about__info-grid">
              {PERSONAL_INFO_ITEMS.map((item) => (
                <div key={item.label} className="about__info-item">
                  <span className="about__info-item-label">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="about__info-item-value about__info-item-value--link"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="about__info-item-value">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="about__pillars">
            {ENGINEERING_PILLARS.map((pillar) => (
              <article key={pillar.id} className="about__pillar-card">
                <div className="about__pillar-icon" aria-hidden="true">
                  {renderPillarIcon(pillar.iconName)}
                </div>
                <div className="about__pillar-body">
                  <h3 className="about__pillar-title">{pillar.title}</h3>
                  <p className="about__pillar-desc">{pillar.description}</p>
                  <div className="about__pillar-tags">
                    {pillar.tags.map((tag) => (
                      <span key={tag} className="about__pillar-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
