import type { SVGProps } from 'react';
const SvgHomeIcon = ({ selected, ...props }: SVGProps<SVGSVGElement> & { selected?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 25" {...props}>
    <g fill={selected ? '#242325' : '#8D8D8D'}>
      <path
        stroke={selected ? '#242325' : '#8D8D8D'}
        strokeWidth={0.5}
        d="M19.469 24.432H6.679c-3.111 0-5.642-2.521-5.642-5.62V10.93c0-1.741.83-3.412 2.22-4.468l6.395-4.859a5.674 5.674 0 0 1 6.844 0l6.394 4.859a5.645 5.645 0 0 1 2.221 4.469v7.88c0 3.1-2.531 5.62-5.642 5.62ZM13.074 2.328c-.805 0-1.61.255-2.281.765L4.398 7.951a3.763 3.763 0 0 0-1.48 2.98v7.88c0 2.067 1.687 3.747 3.761 3.747h12.79c2.074 0 3.761-1.68 3.761-3.746V10.93a3.763 3.763 0 0 0-1.48-2.979l-6.395-4.858a3.767 3.767 0 0 0-2.281-.765Z"
      />
      <path d="m23.767 8.628-10.56-7.22L2.184 9.172l-.544 10.714 3.494 3.65h15.994l2.64-3.65V8.628Z" />
    </g>
  </svg>
);
export default SvgHomeIcon;
