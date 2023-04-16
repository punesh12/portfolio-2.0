import styled, { ThemeProps } from 'styled-components'
import { Theme, screenSizes } from '../styles/theme'

export const CTAHeading = styled.h1`
font-size: 56px;
line-height: 70px;
font-weight: 700;
  font-family: Bold;
  width: auto;
  height: auto;
  color: ${(props: ThemeProps<Theme>) => props.theme.textColor};

  @media screen and (min-width: ${screenSizes.S}px) {
    font-size: 84px;
  line-height: 84px;
    font-weight: 700;
    font-family: Bold;
  }
}
`
export const Heading1 = styled.h1`
  font-size: 72px;
  line-height: 90px;
  font-weight: 700;
  font-family: Regular;
  width: auto;
  height: auto;
  color: ${(props: ThemeProps<Theme>) => props.theme.textColor};
`
export const Heading2 = styled.h2`
  font-size: 64px;
  line-height: 80px;
  font-weight: 700;
  font-family: Regular;
  width: auto;
  height: auto;
  color: ${(props: ThemeProps<Theme>) => props.theme.textColor};
`
export const Heading3 = styled.h3`
  font-size: 56px;
  line-height: 70px;
  font-weight: 700;
  font-family: Regular;
  width: auto;
  height: auto;
  color: ${(props: ThemeProps<Theme>) => props.theme.textColor};
`
export const Heading4 = styled.h4`
  font-size: 45px;
  line-height: 60px;
  font-weight: 700;
  font-family: Regular;
  width: auto;
  height: auto;
  color: ${(props: ThemeProps<Theme>) => props.theme.textColor};
`
export const Heading5 = styled.h5`
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  font-family: Regular;
  width: auto;
  height: auto;
  color: ${(props: ThemeProps<Theme>) => props.theme.textColor};
`
export const Heading6 = styled.h6`
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  font-family: Regular;
  width: auto;
  height: auto;
  color: ${(props: ThemeProps<Theme>) => props.theme.textColor};
`
export const ParaRegular = styled.p`
  font-size: 18px;
  line-height: 30px;
  font-weight: 400;
  font-family: Regular;
  width: auto;
  height: auto;
  color: ${(props: ThemeProps<Theme>) => props.theme.textColor};
`
export const ParaSmall = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  font-family: Regular;
  width: auto;
  height: auto;
  color: ${(props: ThemeProps<Theme>) => props.theme.textColor};
`
export const ParaLarge = styled.p`
  font-size: 32px;
  line-height: 38px;
  font-weight: 600;
  font-family: Regular;
  width: auto;
  height: auto;
  color: ${(props: ThemeProps<Theme>) => props.theme.textColor};
`
export const ParaLargeMobile = styled.p`
  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
  font-family: Regular;
  width: auto;
  height: auto;
  color: ${(props: ThemeProps<Theme>) => props.theme.textColor};
`
