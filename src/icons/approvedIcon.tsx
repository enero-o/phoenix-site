import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {}

const ApprovedIcon = (props: IconProps) => {
  return (
    <svg width="43" height="45" viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="mask0_15_1678" maskUnits="userSpaceOnUse" x="0" y="0" width="43" height="45">
        <path
          d="M21.6885 2.34424L26.9415 6.17624L33.4445 6.16424L35.4415 12.3522L40.7095 16.1642L38.6885 22.3442L40.7095 28.5242L35.4415 32.3362L33.4445 38.5242L26.9415 38.5122L21.6885 42.3442L16.4355 38.5122L9.93248 38.5242L7.93548 32.3362L2.66748 28.5242L4.68848 22.3442L2.66748 16.1642L7.93548 12.3522L9.93248 6.16424L16.4355 6.17624L21.6885 2.34424Z"
          fill="white"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.6885 22.3442L19.6885 27.3442L29.6885 17.3442"
          stroke="black"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </mask>
      <g mask="url(#mask0_15_1678)">
        <path d="M-2.31152 -1.65576H45.6885V46.3442H-2.31152V-1.65576Z" fill="#009053" />
      </g>
    </svg>
  );
};

export default ApprovedIcon;
