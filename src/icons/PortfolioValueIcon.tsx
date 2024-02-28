import * as React from 'react';
import { SVGProps } from 'react';

const PortfolioValueIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={39}
    height={34}
    fill='none'
    {...props}
  >
    <path
      fill='#3885E8'
      d='M.32 32.628c.361.544.969.872 1.621.872H31.06c.776 0 1.479-.462 1.784-1.176l5.823-13.589a1.937 1.937 0 0 0-1.784-2.706h-1.94V8.265a3.886 3.886 0 0 0-3.883-3.883H19.218L14.784.913A1.935 1.935 0 0 0 13.588.5H3.882A3.886 3.886 0 0 0 0 4.382V31.56h.014c-.005.379.102.75.306 1.07Zm29.46-3.01H4.886l4.16-9.706H33.94l-4.16 9.706Zm1.279-21.353v7.764H7.765c-.777 0-1.48.462-1.784 1.177l-2.099 4.897V8.265H31.06Z'
    />
  </svg>
);
export default PortfolioValueIcon;
