export interface ExperienceRole {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  startDateIso?: string;
  endDateIso?: string;
  isCurrent?: boolean;
  clientProject?: string;
  highlights: string[];
  technologies: string[];
}

export interface ExperienceProps {
  className?: string;
}
