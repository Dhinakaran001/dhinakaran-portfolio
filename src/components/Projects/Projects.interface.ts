export type ProjectCategory =
  | 'all'
  | 'enterprise-saas'
  | 'ai-fullstack'
  | 'ui-templates';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  clientOrContext: string;
  description: string;
  highlights?: string[];
  modulesList?: string[];
  technologies: string[];
  image?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ProjectCategoryOption {
  id: ProjectCategory;
  label: string;
}

export interface ProjectsProps {
  initialCategory?: ProjectCategory;
}
