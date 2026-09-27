export interface EducationRecord {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  primary?: boolean;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
}

export interface EducationProps {
  className?: string;
}
