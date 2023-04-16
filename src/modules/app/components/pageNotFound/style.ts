import styled, { ThemeProps } from 'styled-components'
import { Theme } from '../../../../styles/theme'

export const PageNotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props: ThemeProps<Theme>) => props.theme.background};
`
