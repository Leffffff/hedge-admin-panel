import * as React from 'react';
import { SVGProps } from 'react';

const BankValueIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={37}
    height={34}
    fill='none'
    {...props}
  >
    <path
      fill='#3885E8'
      d='M33 4.167H17.259l-3.13-3.13A1.827 1.827 0 0 0 12.834.5H3.667A3.67 3.67 0 0 0 0 4.167v25.666A3.67 3.67 0 0 0 3.667 33.5H33a3.67 3.67 0 0 0 3.667-3.667v-22A3.67 3.67 0 0 0 33 4.167ZM3.667 29.833v-22H33l.004 22H3.667Z'
    />
    <path fill='#3885E8' d='M10.769 17h14.667v3.667H10.769V17Z' />
  </svg>
);
export default BankValueIcon;
