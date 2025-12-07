/**
 * Mobile-first media query helpers
 * Usage in styled-components:
 *
 * @example
 * const StyledComponent = styled.div`
 *   padding: 1rem; // Mobile default
 *
 *   ${mediaQuery.tablet`
 *     padding: 2rem; // Tablet and up
 *   `}
 *
 *   ${mediaQuery.desktop`
 *     padding: 3rem; // Desktop and up
 *   `}
 * `;
 */
import { css } from 'styled-components';

export const mediaQuery = {
  mobile: (styles: TemplateStringsArray | string) => css`
    @media (max-width: 767px) {
      ${styles}
    }
  `,
  tablet: (styles: TemplateStringsArray | string) => css`
    @media (min-width: 768px) {
      ${styles}
    }
  `,
  desktop: (styles: TemplateStringsArray | string) => css`
    @media (min-width: 1024px) {
      ${styles}
    }
  `,
  largeDesktop: (styles: TemplateStringsArray | string) => css`
    @media (min-width: 1280px) {
      ${styles}
    }
  `,
};
