import styled, { ThemeProps } from 'styled-components'
import { Theme, screenSizes } from '../../../styles/theme'

export const HeroSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  background: ${(props: ThemeProps<Theme>) => props.theme.background};

  .gradientText {
    background: ${(props: ThemeProps<Theme>) => props.theme.gradient};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    cursor: pointer;
    text-align: left;
    width: -webkit-fill-available;
    letter-spacing: -1px;
  }

  p {
    margin-top: 2rem;
  }

  @media screen and (min-width: ${screenSizes.S}px) {
    text-align: center;
    height: calc(min(900px, 100vh));
    .gradientText {
      margin: 0 auto;
      text-align: center;
      letter-spacing: 2px;
    }
  }
`
