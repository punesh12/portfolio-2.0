export const colors = {
  // Basic Colors
  basic: {
    black: '#000000',
    darkBg: '#0A0A0D',
    white: '#FFFFFF',
    yellow: '#FFD600',
    lightYellow: '#FFF9C4',
    red: '#FF3B30',
    lightRed: '#FFE5E5',
    pink: '#FF2D55',
    lightPink: '#FFE5ED',
    green: '#34C759',
    lightGreen: '#D4F4DD',
    blue: '#007AFF',
    lightBlue: '#E5F2FF',
    orange: '#FF9500',
    lightOrange: '#FFE5CC',
    purple: '#AF52DE',
  },

  // Light Theme Colors (Grays/Text)
  light: {
    primaryText: '#48484A',
    lightGray: '#8E8E93',
    gray100: '#C7C7CC',
    white01: '#E5E5EA',
    gray01: '#F2F2F7',
    newMenu01: '#F9F9F9',
  },

  // Dark Theme Colors (Grays/Text)
  dark: {
    primaryText: '#1C1C1E',
    lightGray: '#2C2C2E',
    gray100: '#3A3A3C',
    white01: '#48484A',
    gray01: '#636366',
    newMenu01: '#8E8E93',
  },
} as const;

export type ColorCategory = keyof typeof colors;
export type BasicColor = keyof typeof colors.basic;
export type LightColor = keyof typeof colors.light;
export type DarkColor = keyof typeof colors.dark;
