import styled from 'styled-components'
import { screenSizes } from '../../styles/theme'

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  height: auto;

  button {
    width: 100%;
  }
  @media screen and (min-width: ${screenSizes.S}px) {
    flex-direction: row;

    button {
      width: auto;
    }
  }
`
