import { colors } from './colors';
import { gradients } from './gradients';
import { lightTheme, darkTheme } from './themes';

export const theme = {
  light: lightTheme,
  dark: darkTheme,
  colors: {
    // Legacy colors for backward compatibility
    primary: colors.basic.blue,
    secondary: colors.basic.purple,
    background: colors.basic.white,
    surface: colors.light.gray01,
    text: colors.dark.primaryText,
    textSecondary: colors.light.primaryText,
    border: colors.light.white01,
    error: colors.basic.red,
    success: colors.basic.green,
    // New color system
    basic: colors.basic,
    light: colors.light,
    dark: colors.dark,
  },
  gradients,
  fonts: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'Menlo, Monaco, "Courier New", monospace',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
} as const;

export type Theme = typeof theme;
