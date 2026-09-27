import { EducationRecord } from './Education.interface';

export const getPrimaryEducation = (
  records: EducationRecord[]
): EducationRecord[] => {
  return records.filter((record) => Boolean(record.primary));
};
