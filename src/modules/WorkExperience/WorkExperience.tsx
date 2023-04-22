import { Heading4 } from '../../shared/Typography'
import ListItem from './ListItem'
import * as Styles from './workExperience.style'
const workExperienceData = [
  {
    company: 'ABC Company',
    role: 'Frontend Developer',
    dates: 'Jan 2020 - Present',
  },
  { company: 'XYZ Agency', role: 'UI Designer', dates: 'Mar 2018 - Dec 2019' },
  {
    company: '123 Corporation',
    role: 'Full Stack Developer',
    dates: 'Sep 2016 - Feb 2018',
  },
]
const WorkExperience: React.FC = () => {
  return (
    <Styles.WorkExperienceWrapper>
      <Heading4>Work Experience</Heading4>
      {workExperienceData.map((item, index) => (
        <ListItem
          key={index}
          company={item.company}
          role={item.role}
          date={item.dates}
        />
      ))}
    </Styles.WorkExperienceWrapper>
  )
}

export default WorkExperience
