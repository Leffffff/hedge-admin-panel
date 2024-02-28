import * as React from 'react';
import { SVGProps } from 'react';

const EscrowWalletsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={36}
    height={34}
    fill='none'
    {...props}
  >
    <path
      fill='#3885E8'
      d='M27.775 1.955a3.501 3.501 0 0 0-1.25-1.07A3.545 3.545 0 0 0 24.92.5H10.21c-1.13 0-2.199.544-2.928 1.561L.256 13.49a1.721 1.721 0 0 0 .193 2.063l15.809 17.366a1.744 1.744 0 0 0 1.306.582 1.76 1.76 0 0 0 1.306-.58l15.808-17.366a1.722 1.722 0 0 0 .194-2.063L27.775 1.955Zm-10.21 27.207L5.7 16.129h23.728L17.565 29.162ZM4.878 12.656l5.332-8.683 14.636-.108 5.404 8.79H4.878Z'
    />
  </svg>
);
export default EscrowWalletsIcon;
