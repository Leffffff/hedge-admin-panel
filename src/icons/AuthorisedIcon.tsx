import * as React from 'react';
import { SVGProps } from 'react';

const AuthorisedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={36}
    height={37}
    fill='none'
    {...props}
  >
    <path
      fill='#3885E8'
      d='M32 36.5c2.206 0 4-1.794 4-4v-28c0-2.206-1.794-4-4-4H4c-2.206 0-4 1.794-4 4v28c0 2.206 1.794 4 4 4h28ZM13.106 13.816l8 4 3.106-6.21 3.578 1.79-4.894 9.79-8-4-3.106 6.21-3.578-1.79 4.894-9.79Z'
    />
  </svg>
);
export default AuthorisedIcon;
