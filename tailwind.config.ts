import type { Config } from 'tailwindcss';
import { colors } from './src/styles/colors';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        basic: colors.basic,
        light: colors.light,
        dark: colors.dark,
        // Theme-aware colors using CSS variables
        bg: {
          main: 'var(--bg-main)',
          hover: 'var(--bg-hover)',
          nav: 'var(--bg-nav)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        border: {
          DEFAULT: 'var(--border-color)',
          light: 'var(--border-light)',
        },
      },
      fontFamily: {
        primary: [
          '"Inter"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: ['Menlo', 'Monaco', '"Courier New"', 'monospace'],
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        xxl: '3rem',
      },
      screens: {
        mobile: '768px',
        tablet: '1024px',
        desktop: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
