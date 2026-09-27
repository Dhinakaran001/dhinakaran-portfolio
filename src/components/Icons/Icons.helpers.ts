import { DEFAULT_ICON_SIZE } from './Icons.constants';

export const resolveIconDimension = (size?: number): number => {
  return typeof size === 'number' && size > 0 ? size : DEFAULT_ICON_SIZE;
};
