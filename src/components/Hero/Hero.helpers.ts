export const getNextRoleIndex = (currentIndex: number, totalRoles: number): number => {
  if (totalRoles <= 0) return 0;
  return (currentIndex + 1) % totalRoles;
};

export const calculateExperienceDuration = (startDateIso = '2022-05-01'): string => {
  const start = new Date(startDateIso);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return years >= 4 ? `${years}+ Years` : '4+ Years';
};
