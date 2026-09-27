export interface HeroStatItem {
  id: string;
  value: string;
  label: string;
  detail: string;
}

export interface HeroSocialLink {
  id: string;
  label: string;
  url: string;
  iconName: 'linkedin' | 'github' | 'mail' | 'phone' | 'globe';
}

export interface HeroFloatingBadge {
  id: string;
  title: string;
  subtitle: string;
  position: 'top-left' | 'bottom-left' | 'bottom-right';
}

export interface HeroProps {
  onExploreProjects?: () => void;
}
