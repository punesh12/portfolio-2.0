/** default imports */
import React from 'react'

/** custom imports */
import Education from '../../Education/Education'
import Projects from '../../Projects/Projects'
import WorkExperience from '../../WorkExperience/WorkExperience'
import HeroSection from '../components/HeroSection'

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <WorkExperience />
      <Education />
      {/* <Projects /> */}
    </>
  )
}

export default LandingPage
