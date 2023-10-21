import type { SVGProps } from 'react';
const SvgArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 13" {...props}>
    <mask
      id="arrow_down_icon_svg__a"
      width={12}
      height={8}
      x={0}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#006FFD"
        fillRule="evenodd"
        d="M11.53 2.85a.736.736 0 0 0-1.06 0L6 7.446 1.53 2.85a.736.736 0 0 0-1.06 0 .786.786 0 0 0 0 1.09L6 9.625l5.53-5.684a.786.786 0 0 0 0-1.09Z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#arrow_down_icon_svg__a)">
      <path fill="#242325" d="M0 .124h11.999v12H0z" />
    </g>
  </svg>
);
export default SvgArrowDownIcon;
