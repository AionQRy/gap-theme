import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Overlay } from './OverlayMenu.styles'
import LogoOverlay from '../../images/logo.svg'
import Social from '../Footer/Social/Social'
import { useFooterQuery } from '../../hook/useFooterQuery'

const OverlayMenu = ( { menuOpen, callback, site, menu } ) => {
  const { socialFooter } = useFooterQuery()

  const [isActive, setIsActive] = useState(false)
  const handleClick = event => {
    // toggle isActive state on click
    setIsActive(current => !current)
  }

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="top-overlay">
        <div className="logo-overlay">
          <Link to="/">
            <img src={LogoOverlay} alt={site.siteMetadata.title} />
          </Link>
        </div>
        <div 
          className="close-btn"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
      </div>
      <div className="overlay-menu">
        <ul className="main-menu_mobile">
          <li><Link to="/" className="menuitem" activeClassName="nav-active">Home</Link></li>
          {menu.map(OvermenuItem =>
            !OvermenuItem.parentId ? (
              <li key={OvermenuItem.id}>
                <Link to={OvermenuItem} className="overmenuitem" activeClassName="nav-active">
                  {OvermenuItem.label}
                  {OvermenuItem.childItems.nodes.length !== 0 ? (
                    <ul className="sub-menu">
                      {OvermenuItem.childItems.nodes.map( childItems => (
                        <li key={childItems.id}>
                          <Link to={childItems.url} className="menuitem submenu-item" activeClassName="nav-active">
                            {childItems.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Link>
                {OvermenuItem.childItems.nodes.length !== 0 ?(
                  <span className={ isActive ? 'arrow-sub_menu active' : 'arrow-sub_menu'} onClick={handleClick}>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                ) : null}
              </li>
            ) : null
            )}
          </ul>
        </div>
        <div className="social-overlay">
          <div className="title-overlay">
              <h4>Contact Us:</h4>
          </div>
          <Social socialFooter={socialFooter.nodes} />
        </div>
    </Overlay>
  )
}

export default OverlayMenu