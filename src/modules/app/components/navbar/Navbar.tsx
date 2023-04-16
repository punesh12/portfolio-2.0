import React, { useState } from 'react'
import * as Styles from './style'
import HamburgerMenuLight from '../../../../assets/icons/navbar/hamburgerMenuLight.svg'
import HamburgerMenuDark from '../../../../assets/icons/navbar/hamburgerMenuDark.svg'
import CrossDark from '../../../../assets/icons/navbar/crossDark.svg'
import crossLight from '../../../../assets/icons/navbar/crossLight.svg'
import { Heading5, Heading6 } from '../../../../shared/Typography'
import { useNavigate } from 'react-router-dom'
import { rootPath } from '../../../../logic/path'

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const [isExtendedMobileNavbar, setExtendedMobileNavbar] =
    useState<boolean>(false)
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
      <Styles.HamburgerMenu
        src={isExtendedMobileNavbar ? CrossDark : HamburgerMenuDark}
        alt="menu"
        onClick={() => setExtendedMobileNavbar((prev: boolean) => !prev)}
      />

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
