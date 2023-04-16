import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CrossDark from '../../../../assets/icons/navbar/crossDark.svg'
import crossLight from '../../../../assets/icons/navbar/crossLight.svg'
import HamburgerMenuDark from '../../../../assets/icons/navbar/hamburgerMenuDark.svg'
import HamburgerMenuLight from '../../../../assets/icons/navbar/hamburgerMenuLight.svg'
import { useTheme } from '../../../../logic/context'
import { rootPath } from '../../../../logic/path'
import { Heading5, Heading6 } from '../../../../shared/Typography'
import { Themes } from '../../../../styles/theme'
import * as Styles from './style'
import Switch from '../../../../shared/switch/Switch'

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  //@ts-ignore
  const { state, dispatch } = useTheme()

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' })
  }
  const [isExtendedMobileNavbar, setExtendedMobileNavbar] =
    useState<boolean>(false)

  const menu =
    state.theme === Themes.LIGHT ? HamburgerMenuDark : HamburgerMenuLight
  const cross = state.theme === Themes.LIGHT ? CrossDark : crossLight
  return (
    <Styles.NavbarWrapper>
      <Heading5 onClick={() => navigate(rootPath)}>Punesh</Heading5>
      <Styles.NavLinkWrapper>
        <Styles.NavLink to="about">
          <Heading6>About</Heading6>
        </Styles.NavLink>
        <Styles.NavLink to="projects">
          <Heading6>Projects</Heading6>
        </Styles.NavLink>
        <Styles.NavLink to="work">
          <Heading6>Work</Heading6>
        </Styles.NavLink>
      </Styles.NavLinkWrapper>
      <Styles.NavButtonWrapper>
        <Switch
          id="toggle"
          checked={state.theme === Themes.DARK}
          onChange={toggleTheme}
        />
        <Styles.HamburgerMenu
          src={isExtendedMobileNavbar ? cross : menu}
          alt="menu"
          onClick={() => setExtendedMobileNavbar((prev: boolean) => !prev)}
        />
      </Styles.NavButtonWrapper>

      {isExtendedMobileNavbar && (
        <Styles.MobileExtendedNavbar
          className={isExtendedMobileNavbar ? 'active' : 'inactive'}
        >
          <Styles.NavLink to="about">
            <Heading6>About</Heading6>
          </Styles.NavLink>
          <Styles.NavLink to="projects">
            <Heading6>Projects</Heading6>
          </Styles.NavLink>
          <Styles.NavLink to="work">
            <Heading6>Work</Heading6>
          </Styles.NavLink>
        </Styles.MobileExtendedNavbar>
      )}
    </Styles.NavbarWrapper>
  )
}

export default Navbar
