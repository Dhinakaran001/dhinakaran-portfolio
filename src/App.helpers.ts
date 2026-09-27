import { ThemeMode } from './components/Navbar';
import { SECTION_IDS, THEME_STORAGE_KEY } from './App.constants';

export const getInitialTheme = (): ThemeMode => {
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
  } catch {
    // Fallback to dark theme
  }
  return 'dark';
};

export const applyThemeToDocument = (theme: ThemeMode): void => {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage write errors
  }
};

export const detectActiveSection = (): string => {
  const scrollPosition = window.scrollY + 180;

  for (let i = SECTION_IDS.length - 1; i >= 0; i -= 1) {
    const sectionId = SECTION_IDS[i];
    const element = document.getElementById(sectionId);
    if (element && element.offsetTop <= scrollPosition) {
      return sectionId;
    }
  }

  return 'home';
};
