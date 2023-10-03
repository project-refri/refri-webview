import type { SVGProps } from 'react';
const SvgRecipeIcon = ({
  selected,
  ...props
}: SVGProps<SVGSVGElement> & { selected?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 27" {...props}>
    <path
      fill={selected ? '#242325' : '#8D8D8D'}
      d="M21.31.948H4.484C2.922.948.6 1.982.6 4.83v18.122c0 2.85 2.322 3.884 3.883 3.884H23.5a.4.4 0 0 0 .4-.4v-1.79a.4.4 0 0 0-.4-.4H4.498c-.598-.015-1.31-.25-1.31-1.294 0-.13.012-.247.032-.353.145-.746.756-.928 1.278-.941H23.5a.4.4 0 0 0 .4-.4V3.537a2.589 2.589 0 0 0-2.59-2.59Zm0 11.057a.4.4 0 0 1-.549.37l-2.508-1.012a.4.4 0 0 0-.297 0l-2.57 1.018a.4.4 0 0 1-.547-.372V3.937c0-.221.179-.4.4-.4h5.672c.22 0 .4.179.4.4v8.068Z"
    />
  </svg>
);
export default SvgRecipeIcon;
