import styled, { ThemeProps } from 'styled-components'
import { Theme, screenSizes } from '../../styles/theme'

export const WorkExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h4 {
    background: ${(props: ThemeProps<Theme>) => props.theme.gradient};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    cursor: pointer;
    text-align: left;
    width: auto;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid
    ${(props: ThemeProps<Theme>) => props.theme.borderColor}70;
  margin: 1rem 0;
  white-space: nowrap;

  p {
    min-width: 170px;
    text-align: left;
    width: inherit;
  }

  @media screen and (min-width: ${screenSizes.S}px) {
    margin-right: 2rem;
    flex-direction: row;

    p {
      width: auto;
    }
  }
`

export const CompanyRoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
