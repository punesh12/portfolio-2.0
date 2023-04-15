export interface Sizes {
  XXS: number | string
  XS: number | string
  S: number | string
  M: number | string
  L: number | string
  XL: number | string
  XXL: number | string
}

export const screenSizes: Partial<Sizes> = {
  XS: 480,
  S: 640,
  M: 800,
  L: 1024,
  XL: 1280,
}

export const border = {
  xs: '8px',
  s: '10px',
}

export interface Theme {
  whitePrimary: string
  whiteSecondary: string
  blackPrimary: string
  blackSecondary: string
  gradient: string
  background: string
}
export interface Colors {
  whitePrimary: string
  whiteSecondary: string
  blackPrimary: string
  blackSecondary: string
  gradient: string
}

export const colors: Colors = {
  whitePrimary: '#F0F2F5',
  whiteSecondary: '#ffffff',
  blackPrimary: '#161513',
  blackSecondary: '#1C1C22',
  gradient: 'linear-gradient(to right, #B16CEA, #FF5E69, #FF8A56, #FFA84B)',
}

export const lightTheme: Theme = {
  whitePrimary: colors.whitePrimary,
  whiteSecondary: colors.whiteSecondary,
  blackPrimary: colors.blackPrimary,
  blackSecondary: colors.blackSecondary,
  gradient: colors.gradient,
  background: colors.whitePrimary,
}

export const darkTheme: Theme = {
  whitePrimary: colors.whitePrimary,
  whiteSecondary: colors.whiteSecondary,
  blackPrimary: colors.blackPrimary,
  blackSecondary: colors.blackSecondary,
  gradient: colors.gradient,
  background: colors.blackPrimary,
}

export enum Themes {
  LIGHT,
  DARK,
}

export const getThemes = (theme: Themes) => {
  switch (theme) {
    case Themes.LIGHT:
      return lightTheme
    case Themes.DARK:
      return darkTheme
  }
}
