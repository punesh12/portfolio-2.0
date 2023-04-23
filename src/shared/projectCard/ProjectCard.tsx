import styled, { ThemeProps } from 'styled-components'
import Button from '../button/Button'
import { Theme } from '../../styles/theme'
import { Github } from '../../assets/icons/navbar/Github'
import { Heading6, ParaRegular } from '../Typography'

const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
`

const CardContent = styled.div`
  padding: 1rem;
`

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`

const Description = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
`

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`

const LiveLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.2s ease;

  button {
    width: 100%;
  }
`

const GithubLink = styled.a`
  text-decoration: none;
  transition: color 0.2s ease;
  width: auto;
  margin: 0 1rem;

  svg {
    height: 36px;
    width: 36px;
    path {
      fill: ${(props: ThemeProps<Theme>) => props.theme.gradient};
    }
  }
`

interface I_CardProps {
  thumbnail: string
  title: string
  description: string
  liveLink: string
  githubLink: string
}

const ProjectCard: React.FC<I_CardProps> = (props: I_CardProps) => {
  const { thumbnail, title, description, liveLink, githubLink } = props
  return (
    <CardContainer>
      <Thumbnail src={thumbnail} alt={`${title} thumbnail`} />
      <CardContent>
        <Heading6>{title}</Heading6>
        <ParaRegular>{description}</ParaRegular>
        <LinksContainer>
          <LiveLink href={liveLink} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" text="Live Demo" />
          </LiveLink>
          <GithubLink
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="svgLogo" />
          </GithubLink>
        </LinksContainer>
      </CardContent>
    </CardContainer>
  )
}

export default ProjectCard
