import { colors } from './colors';

export const lightTheme = {
  mainBg: colors.basic.white,
  hoverBg: colors.light.gray01,
  navBg: colors.light.white01,
  border: colors.light.gray100,
  lightGray: colors.light.lightGray,
  primaryText: colors.light.primaryText,
  gray100: colors.light.gray100,
} as const;

export const darkTheme = {
  mainBg: colors.basic.darkBg,
  hoverBg: colors.dark.gray01,
  navBg: colors.dark.white01,
  border: colors.dark.gray100,
  lightGray: colors.dark.lightGray,
  primaryText: colors.basic.white,
  gray100: colors.dark.gray100,
} as const;

export type LightTheme = typeof lightTheme;
export type DarkTheme = typeof darkTheme;
