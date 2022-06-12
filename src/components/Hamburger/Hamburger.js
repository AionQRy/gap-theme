import React from 'react'
import { HamburgerButton } from "./hamburger.styles";
import HamburgerIcon from '../../images/menu-icon.svg'

const Hamburger = ({ handleOverlayMenu }) => {
  return (
        <HamburgerButton onClick={handleOverlayMenu}>
            <img src={HamburgerIcon} alt="menu-hamburger"/>
        </HamburgerButton>
  )
}

export default Hamburger