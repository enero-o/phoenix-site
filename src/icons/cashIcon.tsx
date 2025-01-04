import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {}

const CashIcon = (props: IconProps) => {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clip-path="url(#clip0_13_960)">
        <path
          d="M2.06348 13.7549L18.3135 13.7549C18.6587 13.7549 18.9385 13.4751 18.9385 13.1299V4.37994C18.9385 4.03477 18.6587 3.75494 18.3135 3.75494L2.06348 3.75494C1.7183 3.75494 1.43848 4.03477 1.43848 4.37994V13.1299C1.43848 13.4751 1.7183 13.7549 2.06348 13.7549Z"
          stroke="white"
          stroke-linejoin="round"
        />
        <path
          d="M2.68848 15.6299H17.6885M3.93848 17.5049H16.4385"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.1885 11.8799C11.9144 11.8799 13.3135 10.4808 13.3135 8.75494C13.3135 7.02905 11.9144 5.62994 10.1885 5.62994C8.46259 5.62994 7.06348 7.02905 7.06348 8.75494C7.06348 10.4808 8.46259 11.8799 10.1885 11.8799Z"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.9385 6.87994C18.1097 6.87994 17.3148 6.5507 16.7288 5.96465C16.1427 5.3786 15.8135 4.58375 15.8135 3.75494M1.43848 6.87994C1.84886 6.87994 2.25522 6.79911 2.63436 6.64207C3.0135 6.48502 3.358 6.25484 3.64819 5.96465C3.93837 5.67447 4.16855 5.32997 4.3256 4.95083C4.48265 4.57169 4.56348 4.16532 4.56348 3.75494M18.9385 10.6299C18.1097 10.6299 17.3148 10.9592 16.7288 11.5452C16.1427 12.1313 15.8135 12.9261 15.8135 13.7549M1.43848 10.6299C1.84886 10.6299 2.25522 10.7108 2.63436 10.8678C3.0135 11.0249 3.358 11.2551 3.64819 11.5452C3.93837 11.8354 4.16855 12.1799 4.3256 12.5591C4.48265 12.9382 4.56348 13.3446 4.56348 13.7549"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_13_960">
          <rect width="20" height="20" fill="white" transform="translate(0.188477 0.629944)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CashIcon;
