import {
  CTAHeading,
  Heading1,
  Heading3,
  Heading5,
} from '../../../../shared/Typography'
import { PageNotFoundContainer } from './style'

const PageNotFound = () => {
  return (
    <PageNotFoundContainer>
      <CTAHeading>404</CTAHeading>
      <Heading5>Page Not Found</Heading5>
    </PageNotFoundContainer>
  )
}

export default PageNotFound
