import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Wrapper, Content } from './MobileHeader.styles'
import Hamburger from '../Hamburger/Hamburger'
import Logo from '../../images/logo.svg';
import { useMenuQuery } from '../../hook/useMenuQuery';
import OverlayMenu from '../OverlayMenu/OverlayMenu';

const MobileHeader = () => {
    const {site, menu } = useMenuQuery()
    const [menuOpen, setMenuOpen] = useState(false)
    const handleOverlayMenu = () => setMenuOpen( prev => !prev )

  return (
    <Wrapper>
        <Content>
            <div className="box-logo">
                <Link to="/">
                    <img src={Logo} alt={site.siteMetadata.title} />
                </Link>
            </div>
            <Hamburger menuOpen={menuOpen} handleOverlayMenu={handleOverlayMenu} />          
        </Content>
        <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} menu={menu.menuItems.nodes} site={site} />
    </Wrapper>
  )
}

export default MobileHeader