import styled, { ThemeProps } from 'styled-components'
import { Theme, screenSizes } from '../../../../styles/theme'

export const StyledRoutes = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0 0.75rem;
  background: ${(props: ThemeProps<Theme>) => props.theme.background};

  @media screen and (min-width: ${screenSizes.S}px) {
    padding: 0 1rem;
  }
`
