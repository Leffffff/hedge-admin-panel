import * as React from 'react';
import { SVGProps } from 'react';

const TransferIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={18}
    fill='#3885E8'
    {...props}
  >
    <path d='M9 0C4.375 0 .558 3.507.06 8.001H7v-3l5 4-5 4v-3H.06C.56 14.494 4.377 18 9 18c4.964 0 9-4.037 9-9s-4.036-9-9-9Z' />
  </svg>
);
export default TransferIcon;
