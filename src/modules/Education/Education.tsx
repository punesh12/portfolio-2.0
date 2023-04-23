import { Heading4 } from '../../shared/Typography'
import ListItem from './ListItem'
import * as Styles from '../WorkExperience/workExperience.style'
import ProjectCard from '../../shared/projectCard/ProjectCard'

const educationData = [
  {
    institute: 'ABC institute',
    course: 'Frontend Developer',
    academicYear: 'Jan 2020 - Present',
  },
  {
    institute: 'ABC institute',
    course: 'Frontend Developer',
    academicYear: 'Jan 2020 - Present',
  },
  {
    institute: 'ABC institute',
    course: 'Frontend Developer',
    academicYear: 'Jan 2020 - Present',
  },
]
const Education: React.FC = () => {
  return (
    <Styles.WorkExperienceWrapper>
      <Heading4>Education</Heading4>

      <Styles.ListContainer>
        {educationData.map((item, index) => (
          <ListItem
            key={index}
            institute={item.institute}
            course={item.course}
            academicYear={item.academicYear}
          />
        ))}
      </Styles.ListContainer>
    </Styles.WorkExperienceWrapper>
  )
}

export default Education
