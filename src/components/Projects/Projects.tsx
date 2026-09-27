import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import {
  ProjectCategory,
  ProjectItem,
  ProjectsProps,
} from './Projects.interface';
import {
  PROJECT_CATEGORIES,
  PROJECTS_DATA,
  PROJECTS_SECTION_HEADER,
} from './Projects.constants';
import {
  filterProjectsByCategory,
  getCategoryProjectCount,
} from './Projects.helpers';
import './Projects.scss';

export const Projects: React.FC<ProjectsProps> = ({
  initialCategory = 'all',
}) => {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>(initialCategory);

  const filteredProjects = filterProjectsByCategory(
    PROJECTS_DATA,
    activeCategory
  );

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const showcaseProjects = filteredProjects.filter((p) => !p.featured);

  const renderProjectCard = (project: ProjectItem, isHeroCard = false) => (
    <article
      key={project.id}
      className={`projects__card ${isHeroCard ? 'projects__card--hero' : ''}`}
    >
      {project.image && (
        <div className="projects__thumb-wrapper">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="projects__thumb"
            loading="lazy"
          />
        </div>
      )}

      <div className="projects__body">
        <div className="projects__top-bar">
          <span className="projects__badge">{project.categoryLabel}</span>
          <span className="projects__context">{project.clientOrContext}</span>
        </div>

        <h3 className="projects__title">{project.title}</h3>
        <p className="projects__subtitle">{project.subtitle}</p>
        <p className="projects__desc">{project.description}</p>

        {project.modulesList && project.modulesList.length > 0 && (
          <div className="projects__modules-box">
            <span className="projects__modules-box-label">
              <Layers size={13} style={{ display: 'inline', marginRight: 6 }} />
              11 Enterprise Modules Shipped & Maintained:
            </span>
            <div className="projects__modules-box-list">
              {project.modulesList.map((mod) => (
                <span key={mod} className="projects__modules-box-pill">
                  {mod}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <ul className="projects__highlights">
            {project.highlights.map((item, index) => (
              <li key={index} className="projects__highlights-item">
                <CheckCircle2 size={15} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="projects__footer">
          <div className="projects__tech-stack">
            {project.technologies.map((tech) => (
              <span key={tech} className="projects__tech-tag">
                {tech}
              </span>
            ))}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="projects__live-link"
              aria-label={`View live demo of ${project.title}`}
            >
              <span>Live Demo</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <section
      id="projects"
      className="projects"
      aria-labelledby="projects-heading"
    >
      <div className="projects__container">
        <div className="section-header">
          <div className="section-header__eyebrow">
            <FolderGit2 size={14} aria-hidden="true" />
            <span>{PROJECTS_SECTION_HEADER.eyebrow}</span>
          </div>
          <h2 id="projects-heading" className="section-header__title">
            {PROJECTS_SECTION_HEADER.titleStart}{' '}
            <span>{PROJECTS_SECTION_HEADER.titleHighlight}</span>
          </h2>
          <p className="section-header__subtitle">
            {PROJECTS_SECTION_HEADER.subtitle}
          </p>
        </div>

        <div
          className="projects__tabs"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {PROJECT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            const count = getCategoryProjectCount(PROJECTS_DATA, category.id);
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`projects__tab ${
                  isActive ? 'projects__tab--active' : ''
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span>{category.label}</span>
                <span className="projects__tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        {featuredProjects.length > 0 && (
          <div className="projects__featured-grid">
            {featuredProjects.map((project, index) =>
              renderProjectCard(
                project,
                project.id === 'ringcentral-ace' && index === 0
              )
            )}
          </div>
        )}

        {showcaseProjects.length > 0 && (
          <div className="projects__showcase-grid">
            {showcaseProjects.map((project) =>
              renderProjectCard(project, false)
            )}
          </div>
        )}
      </div>
    </section>
  );
};
