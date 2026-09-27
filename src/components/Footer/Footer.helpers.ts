export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
