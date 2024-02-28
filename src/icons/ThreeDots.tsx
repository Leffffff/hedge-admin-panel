import * as React from 'react';
import { SVGProps } from 'react';

const ThreeDots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path fill='#BAB8B3' d='M10 10h4v4h-4v-4Zm0-6h4v4h-4V4Zm0 12h4v4h-4v-4Z' />
  </svg>
);
export default ThreeDots;
