import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {}

const ArrowDownIcon = (props: IconProps) => {
  return (
    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11.0934 0.439484L0.426718 0.439484L5.76005 8.82044L11.0934 0.439484Z" fill="black" />
    </svg>
  );
};

export default ArrowDownIcon;
