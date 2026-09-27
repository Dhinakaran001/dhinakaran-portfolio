export type SkillCategoryId =
  | 'all'
  | 'frontend'
  | 'state-ui'
  | 'backend-api'
  | 'testing-devops'
  | 'ai-tools';

export interface SkillItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  percentage: number;
  highlight?: boolean;
}

export interface SkillGroup {
  id: Exclude<SkillCategoryId, 'all'>;
  title: string;
  subtitle: string;
  iconName: 'code' | 'sliders' | 'server' | 'terminal' | 'sparkles';
  skills: SkillItem[];
}

export interface SkillCategoryFilter {
  id: SkillCategoryId;
  label: string;
}

export interface SkillsProps {
  defaultCategory?: SkillCategoryId;
}
