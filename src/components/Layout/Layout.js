import React from 'react'
import { GlobalStyles, Primary } from './Layout.styles'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MobileHeader from '../MobileHeader/MobileHeader'
import "../../typography/font/kanit/stylesheet.css";

const Layout = ({ children }) => {
  return (
    <div>
        <GlobalStyles/>
        <Header/>
        <MobileHeader/>
        <Primary>{children}</Primary>
        <Footer/>
    </div>
  )
}

export default Layout;
