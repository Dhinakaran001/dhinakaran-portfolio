export const isScrolledPastThreshold = (scrollY: number, threshold = 24): boolean => {
  return scrollY > threshold;
};

export const scrollToSectionById = (sectionId: string): void => {
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
