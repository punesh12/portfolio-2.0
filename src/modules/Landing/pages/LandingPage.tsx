/** default imports */
import React from 'react'

/** custom imports */
import HeroSection from '../components/HeroSection'
import WorkExperience from '../../WorkExperience/WorkExperience'

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <WorkExperience />
    </>
  )
}

export default LandingPage
