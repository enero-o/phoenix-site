import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {}

const DivideCircle = (props: IconProps) => {
  return (
    <svg width="9" height="54" viewBox="0 0 9 54" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <line
        x1="4.43139"
        y1="0.192261"
        x2="4.43138"
        y2="53.9157"
        stroke="#1C1C1C"
        stroke-opacity="0.1"
        stroke-width="0.914286"
      />
      <ellipse cx="4.54565" cy="26.5374" rx="4" ry="3.616" fill="#009053" />
      <path
        d="M8.08851 26.5374C8.08851 28.2397 6.54682 29.6963 4.54565 29.6963C2.54449 29.6963 1.0028 28.2397 1.0028 26.5374C1.0028 24.8351 2.54449 23.3785 4.54565 23.3785C6.54682 23.3785 8.08851 24.8351 8.08851 26.5374Z"
        stroke="#1C1C1C"
        stroke-opacity="0.1"
        stroke-width="0.914286"
      />
    </svg>
  );
};

export default DivideCircle;
