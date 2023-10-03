import type { SVGProps } from 'react';
const SvgProfileIcon = ({
  selected,
  ...props
}: SVGProps<SVGSVGElement> & { selected?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" {...props}>
    <path
      fill={selected ? '#242325' : '#8D8D8D'}
      d="M14.776 28.7c7.868 0 14.247-6.38 14.247-14.248 0-7.869-6.379-14.247-14.247-14.247C6.907.205.528 6.583.528 14.452c0 7.868 6.38 14.247 14.248 14.247Z"
    />
    <path
      fill="#fff"
      d="M14.774 17.085c-5.276 0-9.798 3.015-12.06 7.537 3.015 3.166 7.387 4.975 12.06 4.975 4.673 0 9.045-1.96 12.06-4.975-2.261-4.372-6.784-7.537-12.06-7.537ZM14.777 14.83a4.539 4.539 0 1 0 0-9.078 4.539 4.539 0 0 0 0 9.078Z"
    />
    <path
      stroke={selected ? '#242325' : '#8D8D8D'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2.5}
      d="M27.773 14.452c0 7.178-5.82 12.997-12.997 12.997-7.179 0-12.998-5.819-12.998-12.997S7.598 1.455 14.776 1.455c7.178 0 12.997 5.819 12.997 12.997Z"
    />
  </svg>
);
export default SvgProfileIcon;
