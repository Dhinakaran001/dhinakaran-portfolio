import { EngineeringPillar } from './About.interface';

export const getTotalPillarTagsCount = (pillars: EngineeringPillar[]): number => {
  return pillars.reduce((acc, item) => acc + item.tags.length, 0);
};
