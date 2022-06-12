import React, { useState } from 'react'
import { GlobalStyles, Primary } from './Layout.styles'
import Hamburger from "../Hamburger/Hamburger"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => setMenuOpen(prev => !prev)
  return (
    <div>
        <GlobalStyles/>
        <Hamburger handleOverlayMenu={handleOverlayMenu} />
        <Header/>
        <Primary>{children}</Primary>
        <Footer/>
    </div>
  )
}

export default Layout;
