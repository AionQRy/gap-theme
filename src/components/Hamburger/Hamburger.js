import React from 'react'
import { HamburgerButton } from "./Hamburger.styles"

const Hamburger = ({ menuOpen, handleOverlayMenu }) => {

  return (
        <HamburgerButton menuOpen={menuOpen} onClick={handleOverlayMenu}>
            <div class="hamburger-box" >
              <div className={menuOpen ? 'hamburger active' : 'hamburger'} id="hamburger">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </div>
            </div>
        </HamburgerButton>
  )
}

export default Hamburger