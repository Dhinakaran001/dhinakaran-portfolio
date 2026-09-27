export const formatRoleDuration = (
  startDateIso?: string,
  endDateIso?: string
): string | null => {
  if (!startDateIso) return null;

  const start = new Date(startDateIso);
  const end = endDateIso ? new Date(endDateIso) : new Date();

  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  if (totalMonths < 1) totalMonths = 1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`);

  return parts.join(' ');
};
