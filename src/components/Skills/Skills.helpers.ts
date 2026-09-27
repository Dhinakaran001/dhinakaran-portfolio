import { SkillCategoryId, SkillGroup } from './Skills.interface';

export const filterSkillGroups = (
  groups: SkillGroup[],
  selectedCategory: SkillCategoryId
): SkillGroup[] => {
  if (selectedCategory === 'all') {
    return groups;
  }
  return groups.filter((group) => group.id === selectedCategory);
};

export const countTotalSkills = (groups: SkillGroup[]): number => {
  return groups.reduce((total, group) => total + group.skills.length, 0);
};
