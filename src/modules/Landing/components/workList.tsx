import styled, { ThemeProps } from 'styled-components'
import { Heading6, ParaRegular, ParaSmall } from '../../../shared/Typography'
import { Theme, screenSizes } from '../../../styles/theme'

const Wrapper = styled.div`
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

const CompanyRoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
interface I_Props {
  company: string
  role: string
  date: string
}

const WorkExperienceListItem: React.FC<I_Props> = (props: I_Props) => {
  const { company, role, date } = props
  return (
    <Wrapper>
      <CompanyRoleWrapper>
        <Heading6>{company}</Heading6>
        <ParaRegular>{role}</ParaRegular>
      </CompanyRoleWrapper>
      <ParaSmall>{date}</ParaSmall>
    </Wrapper>
  )
}

export default WorkExperienceListItem
