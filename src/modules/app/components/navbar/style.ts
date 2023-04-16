import styled, { ThemeProps, keyframes } from 'styled-components'
import { Theme, screenSizes } from '../../../../styles/theme'
import { Link } from 'react-router-dom'
import { Heading1, Heading6 } from '../../../../shared/Typography'

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background: ${(props: ThemeProps<Theme>) => props.theme.background};
  color: ${(props: ThemeProps<Theme>) => props.theme.textColor};
  position: relative;

  h5 {
    background: ${(props: ThemeProps<Theme>) => props.theme.gradient};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    cursor: pointer;
  }
`

export const HamburgerMenu = styled.img`
  height: 36px;
  width: 36px;
  aspect-ratio: 1;
  cursor: pointer;

  @media screen and (min-width: ${screenSizes.S}px) {
    display: none;
  }
`

export const NavLinkWrapper = styled.div`
  display: none;

  @media screen and (min-width: ${screenSizes.S}px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: auto;
  }
`
export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
  height: auto;
  margin: 1rem;

  @media screen and (min-width: ${screenSizes.S}px) {
    margin: 0 1rem;
    width: auto;
  }
`

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`

export const MobileExtendedNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 3rem;
  padding-top: 1rem;
  background: ${(props: ThemeProps<Theme>) => props.theme.background};

  &.active {
    animation: ${slideIn} 0.5s forwards;
  }

  &.inactive {
    animation: ${slideOut} 0.5s forwards;
  }
`
