import * as React from 'react';
import { SVGProps } from 'react';

const FloorPriceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={44}
    height={34}
    fill='none'
    {...props}
  >
    <path
      fill='#3885E8'
      d='M43.742 1.68A2.204 2.204 0 0 0 41.791.5H2.195A2.204 2.204 0 0 0 .387 3.952L20.186 32.55a2.195 2.195 0 0 0 3.616 0L43.601 3.952a2.195 2.195 0 0 0 .14-2.273ZM21.994 27.432 6.392 4.9h31.203L21.994 27.433Z'
    />
  </svg>
);
export default FloorPriceIcon;
