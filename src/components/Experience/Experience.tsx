import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import { ExperienceProps } from './Experience.interface';
import {
  EXPERIENCE_ROLES,
  EXPERIENCE_SECTION_HEADER,
} from './Experience.constants';
import { formatRoleDuration } from './Experience.helpers';
import './Experience.scss';

export const Experience: React.FC<ExperienceProps> = ({ className = '' }) => {
  return (
    <section
      id="experience"
      className={`experience ${className}`.trim()}
      aria-labelledby="experience-heading"
    >
      <div className="experience__container">
        <div className="section-header">
          <div className="section-header__eyebrow">
            <Briefcase size={14} aria-hidden="true" />
            <span>{EXPERIENCE_SECTION_HEADER.eyebrow}</span>
          </div>
          <h2 id="experience-heading" className="section-header__title">
            {EXPERIENCE_SECTION_HEADER.titleStart}{' '}
            <span>{EXPERIENCE_SECTION_HEADER.titleHighlight}</span>
          </h2>
          <p className="section-header__subtitle">
            {EXPERIENCE_SECTION_HEADER.subtitle}
          </p>
        </div>

        <div className="experience__timeline">
          {EXPERIENCE_ROLES.map((item) => {
            const calculatedDuration = formatRoleDuration(
              item.startDateIso,
              item.endDateIso
            );

            return (
              <article key={item.id} className="experience__item">
                <div
                  className={`experience__marker ${
                    item.isCurrent ? 'experience__marker--current' : ''
                  }`}
                  aria-hidden="true"
                />

                <div className="experience__card">
                  <div className="experience__header">
                    <div>
                      <h3 className="experience__role">{item.role}</h3>
                      <div className="experience__company-row">
                        <span>{item.company}</span>
                        <span className="experience__location">
                          <MapPin size={14} aria-hidden="true" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="experience__period-group">
                      <span className="experience__period-badge">
                        <Calendar size={13} aria-hidden="true" />
                        <span>{item.period}</span>
                      </span>
                      {item.isCurrent ? (
                        <span className="experience__current-tag">
                          ● Currently Working
                        </span>
                      ) : calculatedDuration ? (
                        <span className="experience__current-tag">
                          Tenure: {calculatedDuration}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  {item.clientProject && (
                    <div className="experience__client-banner">
                      <Building2 size={15} aria-hidden="true" />
                      <span>{item.clientProject}</span>
                    </div>
                  )}

                  <ul className="experience__highlights">
                    {item.highlights.map((bullet, idx) => (
                      <li key={idx} className="experience__highlights-item">
                        <CheckCircle2 size={16} aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="experience__tech-list"
                    aria-label={`Technologies used at ${item.company}`}
                  >
                    {item.technologies.map((tech) => (
                      <span key={tech} className="experience__tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
