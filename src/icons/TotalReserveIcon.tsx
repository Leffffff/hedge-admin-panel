import * as React from 'react';
import { SVGProps } from 'react';

const TotalReserveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={48}
    height={49}
    fill='none'
    {...props}
  >
    <path
      fill='#3885E8'
      d='M26 12.5h4v22h-4v-22Zm8-6h4v28h-4v-28Zm-16 12h4v16h-4v-16Zm-10 20h32v4H8v-4Zm2-14h4v10h-4v-10Z'
    />
  </svg>
);
export default TotalReserveIcon;
