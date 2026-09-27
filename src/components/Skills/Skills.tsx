import React, { useState } from 'react';
import { Code2, Sliders, Server, Terminal, Sparkles, Cpu } from 'lucide-react';
import {
  SkillCategoryId,
  SkillGroup,
  SkillsProps,
} from './Skills.interface';
import {
  SKILL_CATEGORY_FILTERS,
  SKILL_GROUPS,
  SKILLS_SECTION_HEADER,
} from './Skills.constants';
import { filterSkillGroups } from './Skills.helpers';
import './Skills.scss';

export const Skills: React.FC<SkillsProps> = ({ defaultCategory = 'all' }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<SkillCategoryId>(defaultCategory);

  const visibleGroups = filterSkillGroups(SKILL_GROUPS, selectedCategory);

  const renderGroupIcon = (iconName: SkillGroup['iconName']) => {
    switch (iconName) {
      case 'code':
        return <Code2 size={21} />;
      case 'sliders':
        return <Sliders size={21} />;
      case 'server':
        return <Server size={21} />;
      case 'terminal':
        return <Terminal size={21} />;
      case 'sparkles':
        return <Sparkles size={21} />;
    }
  };

  return (
    <section
      id="skills"
      className="skills"
      aria-labelledby="skills-section-title"
    >
      <div className="skills__container">
        <div className="section-header">
          <div className="section-header__eyebrow">
            <Cpu size={14} aria-hidden="true" />
            <span>{SKILLS_SECTION_HEADER.eyebrow}</span>
          </div>
          <h2 id="skills-section-title" className="section-header__title">
            {SKILLS_SECTION_HEADER.titleStart}{' '}
            <span>{SKILLS_SECTION_HEADER.titleHighlight}</span>
          </h2>
          <p className="section-header__subtitle">
            {SKILLS_SECTION_HEADER.subtitle}
          </p>
        </div>

        <div
          className="skills__filters"
          role="tablist"
          aria-label="Filter technical skills by category"
        >
          {SKILL_CATEGORY_FILTERS.map((filter) => {
            const isActive = selectedCategory === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`skills__filter-btn ${
                  isActive ? 'skills__filter-btn--active' : ''
                }`}
                onClick={() => setSelectedCategory(filter.id)}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="skills__grid">
          {visibleGroups.map((group) => (
            <article key={group.id} className="skills__group-card">
              <div className="skills__group-header">
                <div className="skills__group-icon" aria-hidden="true">
                  {renderGroupIcon(group.iconName)}
                </div>
                <div>
                  <h3 className="skills__group-title">{group.title}</h3>
                  <p className="skills__group-subtitle">{group.subtitle}</p>
                </div>
              </div>

              <div className="skills__items">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skills__item">
                    <div className="skills__item-top">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-badge">{skill.level}</span>
                    </div>
                    <div
                      className="skills__item-track"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuenow={skill.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="skills__item-bar"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
