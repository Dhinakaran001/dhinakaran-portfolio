export interface EngineeringPillar {
  id: string;
  title: string;
  description: string;
  iconName: 'layers' | 'shield' | 'cpu' | 'zap';
  tags: string[];
}

export interface PersonalInfoItem {
  label: string;
  value: string;
  href?: string;
}

export interface AboutProps {
  className?: string;
}
