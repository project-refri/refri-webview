import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F1F1E7',
        'main-1': '#1FDF9A',
        'main-2': '#082F3B',
        'sub-1': '#242325',
        'sub-2': '#8D8D8D',
        'sub-3': '#E0E0E0',
        point: '#FD7109',
      },
      fontFamily: {
        'spoqa-sans': ['spoqa-sans', 'sans-serif'],
      },
      boxShadow: {
        'shadow-1': '.125rem .125rem .5rem rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
