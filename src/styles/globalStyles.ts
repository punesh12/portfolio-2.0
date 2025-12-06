import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
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
