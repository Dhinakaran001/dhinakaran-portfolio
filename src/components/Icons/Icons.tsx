import React from 'react';
import { BrandIconProps } from './Icons.interface';
import {
  GITHUB_SVG_PATHS,
  ICON_VIEWBOX,
  LINKEDIN_SVG_PATHS,
} from './Icons.constants';
import { resolveIconDimension } from './Icons.helpers';
import './Icons.scss';

export const LinkedInIcon: React.FC<BrandIconProps> = ({
  size,
  className = '',
  ...rest
}) => {
  const dimension = resolveIconDimension(size);

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox={ICON_VIEWBOX}
      className={`brand-icon ${className}`.trim()}
      aria-hidden="true"
      {...rest}
    >
      <path d={LINKEDIN_SVG_PATHS.mainPath} />
      <rect
        width={LINKEDIN_SVG_PATHS.rect.width}
        height={LINKEDIN_SVG_PATHS.rect.height}
        x={LINKEDIN_SVG_PATHS.rect.x}
        y={LINKEDIN_SVG_PATHS.rect.y}
      />
      <circle
        cx={LINKEDIN_SVG_PATHS.circle.cx}
        cy={LINKEDIN_SVG_PATHS.circle.cy}
        r={LINKEDIN_SVG_PATHS.circle.r}
      />
    </svg>
  );
};

export const GitHubIcon: React.FC<BrandIconProps> = ({
  size,
  className = '',
  ...rest
}) => {
  const dimension = resolveIconDimension(size);

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox={ICON_VIEWBOX}
      className={`brand-icon ${className}`.trim()}
      aria-hidden="true"
      {...rest}
    >
      <path d={GITHUB_SVG_PATHS.bodyPath} />
      <path d={GITHUB_SVG_PATHS.armPath} />
    </svg>
  );
};
