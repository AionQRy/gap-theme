import React, { useState } from 'react'
import { HamburgerButton } from "./Hamburger.styles"

const Hamburger = ({ handleOverlayMenu }) => {

  const [isActive, setIsActive] = useState(false)
  const handleClick = event => {
    // toggle isActive state on click
    setIsActive(current => !current)
  }
  return (
        <HamburgerButton onClick={handleOverlayMenu}>
            <div class="hamburger-box" >
              <div className={isActive ? 'hamburger active' : 'hamburger'} id="hamburger" onClick={handleClick}>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </div>
            </div>
        </HamburgerButton>
  )
}

export default Hamburger