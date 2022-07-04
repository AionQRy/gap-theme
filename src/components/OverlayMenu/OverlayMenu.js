import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Overlay } from './OverlayMenu.styles'
import LogoOverlay from '../../images/logo.svg'
import Social from '../Footer/Social/Social'
import { useFooterQuery } from '../../hook/useFooterQuery'
import { ArrowRight  } from 'react-feather';
import { X  } from 'react-feather';

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
          <X/>
        </div>
      </div>
      <div className="overlay-menu">
        <ul className="main-menu_mobile">
          <li><Link to="/" className="menuitem" activeClassName="nav-active">Home</Link></li>
          {menu.map(OvermenuItem =>
            !OvermenuItem.parentId ? (
              <li key={OvermenuItem.id}>
                <Link to={OvermenuItem.url} className="overmenuitem" activeClassName="nav-active">
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
                    <ArrowRight/>
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