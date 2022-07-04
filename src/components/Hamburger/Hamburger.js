import React from 'react'
import { HamburgerButton } from "./Hamburger.styles"

const Hamburger = ({ menuOpen, handleOverlayMenu }) => {

  return (
        <HamburgerButton menuOpen={menuOpen} onClick={handleOverlayMenu}>
            <div className="hamburger-box" >
              <div className={menuOpen ? 'hamburger active' : 'hamburger'} id="hamburger">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>
        </HamburgerButton>
  )
}

export default Hamburger