import React from 'react';
import type { SVGProps } from 'react';

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={32}
      height={32}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='none'
        stroke='var(--base-gold)'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m10 17l5-5l-5-5'
      ></path>
    </svg>
  );
}

export default ArrowIcon;