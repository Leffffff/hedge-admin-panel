import * as React from 'react';
import { SVGProps } from 'react';

const DistributionWalletsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={33}
    height={34}
    fill='none'
    {...props}
  >
    <path
      fill='#3885E8'
      d='M29.333.5H3.667A3.667 3.667 0 0 0 0 4.167v25.666A3.667 3.667 0 0 0 3.667 33.5h25.666A3.667 3.667 0 0 0 33 29.833V4.167A3.667 3.667 0 0 0 29.333.5Zm0 3.667v16.5H3.667v-16.5h25.666ZM3.667 29.833v-5.5h25.666v5.5H3.667Z'
    />
  </svg>
);
export default DistributionWalletsIcon;
