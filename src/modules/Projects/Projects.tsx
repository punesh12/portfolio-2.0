import styled from 'styled-components'
import ProjectCard from '../../shared/projectCard/ProjectCard'

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
`

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 40px;
`

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
`

const ProjectItem = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }
`

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 20px;
`

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin: 0 20px 20px;
`

const Projects = () => {
  return (
    <Section>
      <Title>Projects</Title>
      <ProjectsContainer>
        <ProjectCard
          thumbnail="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800"
          title="My Awesome Project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          liveLink="https://myawesomesite.com"
          githubLink="https://github.com/myusername/myawesomesite"
        />
        <ProjectCard
          thumbnail="https://images.pexels.com/photos/248533/pexels-photo-248533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="My Awesome Project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          liveLink="https://myawesomesite.com"
          githubLink="https://github.com/myusername/myawesomesite"
        />
        <ProjectCard
          thumbnail="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800"
          title="My Awesome Project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          liveLink="https://myawesomesite.com"
          githubLink="https://github.com/myusername/myawesomesite"
        />
        <ProjectCard
          thumbnail="https://images.pexels.com/photos/248533/pexels-photo-248533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="My Awesome Project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          liveLink="https://myawesomesite.com"
          githubLink="https://github.com/myusername/myawesomesite"
        />
        {/* Add more project items here */}
      </ProjectsContainer>
    </Section>
  )
}

export default Projects
