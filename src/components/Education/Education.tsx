import React from 'react';
import { GraduationCap, MapPin, Languages } from 'lucide-react';
import { EducationProps } from './Education.interface';
import {
  EDUCATION_RECORDS,
  EDUCATION_SECTION_HEADER,
  SPOKEN_LANGUAGES,
} from './Education.constants';
import './Education.scss';

export const Education: React.FC<EducationProps> = ({ className = '' }) => {
  return (
    <section
      id="education"
      className={`education ${className}`.trim()}
      aria-labelledby="education-heading"
    >
      <div className="education__container">
        <div className="section-header">
          <div className="section-header__eyebrow">
            <GraduationCap size={14} aria-hidden="true" />
            <span>{EDUCATION_SECTION_HEADER.eyebrow}</span>
          </div>
          <h2 id="education-heading" className="section-header__title">
            {EDUCATION_SECTION_HEADER.titleStart}{' '}
            <span>{EDUCATION_SECTION_HEADER.titleHighlight}</span>
          </h2>
          <p className="section-header__subtitle">
            {EDUCATION_SECTION_HEADER.subtitle}
          </p>
        </div>

        <div className="education__grid">
          {EDUCATION_RECORDS.map((item) => (
            <article
              key={item.id}
              className={`education__card ${
                item.primary ? 'education__card--primary' : ''
              }`}
            >
              <div className="education__card-top">
                <div className="education__icon-badge" aria-hidden="true">
                  <GraduationCap size={20} />
                </div>
                <span className="education__period">{item.period}</span>
              </div>

              <h3 className="education__degree">{item.degree}</h3>
              <p className="education__field">{item.field}</p>

              <p className="education__institution">
                <MapPin size={15} aria-hidden="true" />
                <span>
                  {item.institution} • {item.location}
                </span>
              </p>
            </article>
          ))}
        </div>

        <div className="education__languages-bar">
          <div className="education__languages-title">
            <Languages size={20} aria-hidden="true" />
            <span>Spoken Languages</span>
          </div>

          <div className="education__languages-list">
            {SPOKEN_LANGUAGES.map((lang) => (
              <div key={lang.name} className="education__language-pill">
                <span className="education__language-pill-name">
                  {lang.name}
                </span>
                <span className="education__language-pill-level">
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
