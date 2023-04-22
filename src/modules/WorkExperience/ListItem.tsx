import { Heading6, ParaRegular, ParaSmall } from '../../shared/Typography'
import { CompanyRoleWrapper, Wrapper } from './workExperience.style'

interface I_Props {
  company: string
  role: string
  date: string
}

const ListItem: React.FC<I_Props> = (props: I_Props) => {
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

export default ListItem
