import React from 'react';

export type BrandIconName = 'linkedin' | 'github';

export interface BrandIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}
