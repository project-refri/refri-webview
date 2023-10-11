import type { SVGProps } from 'react';
const SvgBackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 20" {...props}>
    <path
      stroke="#242325"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 18.5 1 9.056 9.5 1.5"
    />
  </svg>
);
export default SvgBackIcon;
