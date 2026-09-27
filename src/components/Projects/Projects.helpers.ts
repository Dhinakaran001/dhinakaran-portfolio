import { ProjectCategory, ProjectItem } from './Projects.interface';

export const filterProjectsByCategory = (
  projects: ProjectItem[],
  category: ProjectCategory
): ProjectItem[] => {
  if (category === 'all') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
};

export const getCategoryProjectCount = (
  projects: ProjectItem[],
  category: ProjectCategory
): number => {
  return filterProjectsByCategory(projects, category).length;
};
