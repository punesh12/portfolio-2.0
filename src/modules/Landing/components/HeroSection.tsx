/** default imports */
import React from 'react'

/** custom imports */
import { CTAHeading, ParaRegular } from '../../../shared/Typography'
import Button from '../../../shared/button/Button'
import { ButtonWrapper } from '../../../shared/button/ButtonWrapper'
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
      <ButtonWrapper>
        <Button variant="primary" text="GET IN TOUCH" />
        <Button variant="secondary" text="VIEW ALL WORK" />
      </ButtonWrapper>
    </Styles.HeroSectionContainer>
  )
}

export default HeroSection
