import type { SVGProps } from 'react';
const SvgSortIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 12" {...props}>
    <mask
      id="sort_icon_svg__a"
      width={13}
      height={12}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#006FFD"
        fillRule="evenodd"
        d="M3.183 1.038a.625.625 0 0 1 .84 0l2.2 2a.625.625 0 1 1-.84.924l-1.155-1.05V10.5a.625.625 0 1 1-1.25 0V2.913l-1.154 1.05a.625.625 0 0 1-.841-.925l2.2-2ZM9.506.875c.345 0 .625.28.625.625v7.587l1.155-1.05a.625.625 0 0 1 .84.925l-2.2 2a.625.625 0 0 1-.84 0l-2.2-2a.625.625 0 1 1 .84-.924l1.155 1.05V1.5c0-.345.28-.625.625-.625Z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#sort_icon_svg__a)">
      <path fill="#242325" d="M.557 0h12v12h-12z" />
    </g>
  </svg>
);
export default SvgSortIcon;
