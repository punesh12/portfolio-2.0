import { createGlobalStyle } from 'styled-components';
import { getGradientString } from '@/utils/gradientHelpers';
import { gradients } from './gradients';

const topGradient = getGradientString({
  colors: gradients.background.top.colors,
  direction: gradients.background.top.direction,
  type: gradients.background.top.type,
} as any);

const bottomGradient = getGradientString({
  colors: gradients.background.bottom.colors,
  direction: gradients.background.bottom.direction,
  type: gradients.background.bottom.type,
} as any);

export const GlobalStyles = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => (theme.colors as any).mainBg || theme.colors.background};
    position: relative;
    min-height: 100vh;
    overflow-y: auto;
  }


  #__next {
    position: relative;
    z-index: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  ul {
    list-style: none;
  }
`;
