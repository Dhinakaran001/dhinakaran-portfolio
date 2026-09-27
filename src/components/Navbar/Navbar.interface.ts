export type ThemeMode = 'dark' | 'light';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  activeSection: string;
}
