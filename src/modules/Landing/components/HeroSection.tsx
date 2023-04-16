/** default imports */
import React from 'react'

/** custom imports */
import { CTAHeading, ParaRegular } from '../../../shared/Typography'
import * as Styles from '../styles/heroSection.style'

const HeroSection: React.FC = () => {
  return (
    <Styles.HeroSectionContainer>
      <CTAHeading className="gradientText">Hi I'm Punesh</CTAHeading>
      <CTAHeading>a creative Frontend Developer</CTAHeading>
      <ParaRegular>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non delectus
        magni dolor, debitis omnis eos.
      </ParaRegular>
    </Styles.HeroSectionContainer>
  )
}

export default HeroSection
