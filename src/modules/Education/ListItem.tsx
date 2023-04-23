import { Heading6, ParaRegular, ParaSmall } from '../../shared/Typography'
import {
  CompanyRoleWrapper,
  Wrapper,
} from '../WorkExperience/workExperience.style'

interface I_Props {
  institute: string
  course: string
  academicYear: string
}

const ListItem: React.FC<I_Props> = (props: I_Props) => {
  const { institute, course, academicYear } = props
  return (
    <Wrapper>
      <CompanyRoleWrapper>
        <Heading6>{institute}</Heading6>
        <ParaRegular>{course}</ParaRegular>
      </CompanyRoleWrapper>
      <ParaSmall>{academicYear}</ParaSmall>
    </Wrapper>
  )
}

export default ListItem
