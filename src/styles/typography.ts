export const typography = {
  sizes: {
    '9': { fontSize: '9px', lineHeight: '12px' },
    '10': { fontSize: '10px', lineHeight: '14px' },
    '11': { fontSize: '11px', lineHeight: '14px' },
    '12': { fontSize: '12px', lineHeight: '16px' },
    '13': { fontSize: '13px', lineHeight: '18px' },
    '14': { fontSize: '14px', lineHeight: '20px' },
    '15': { fontSize: '15px', lineHeight: '20px' },
    '16': { fontSize: '16px', lineHeight: '24px' },
    '18': { fontSize: '18px', lineHeight: '24px' },
    '20': { fontSize: '20px', lineHeight: '32px' },
    '24': { fontSize: '24px', lineHeight: '32px' },
    '32': { fontSize: '32px', lineHeight: '40px' },
  },
  weights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  sectionTitle: {
    desktop: { fontSize: '14px', lineHeight: 'auto' },
    mobile: { fontSize: '12px', lineHeight: 'auto' },
  },
} as const;

export type TypographySize = keyof typeof typography.sizes;
export type TypographyWeight = keyof typeof typography.weights;
