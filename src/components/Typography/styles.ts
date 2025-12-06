import styled, { css } from 'styled-components';
import { typography } from '@/styles/typography';
import { StyledTypographyProps } from './types';

const getTypographyStyles = (size: string, weight: string) => {
  const sizeStyle = typography.sizes[size as keyof typeof typography.sizes];
  const weightStyle = typography.weights[weight as keyof typeof typography.weights];

  // Special case: size 16 with SemiBold or Bold uses line-height 22px
  let lineHeight: string = sizeStyle?.lineHeight || '20px';
  if (size === '16' && (weight === 'semiBold' || weight === 'bold')) {
    lineHeight = '22px';
  }

  return {
    fontSize: sizeStyle?.fontSize || '14px',
    lineHeight,
    fontWeight: weightStyle || 400,
  };
};

export const StyledTypography = styled.p<StyledTypographyProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: 0;
  padding: 0;
  ${({ $size, $weight }) => {
    const styles = getTypographyStyles($size, $weight);
    return css`
      font-size: ${styles.fontSize};
      line-height: ${styles.lineHeight};
      font-weight: ${styles.fontWeight};
    `;
  }}
`;

export const StyledSectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: 0;
  padding: 0;
  font-size: ${typography.sectionTitle.mobile.fontSize};
  line-height: ${typography.sectionTitle.mobile.lineHeight};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${typography.sectionTitle.desktop.fontSize};
    line-height: ${typography.sectionTitle.desktop.lineHeight};
  }
`;
