import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from "./Navigation.styles"
import { ChevronDown  } from 'react-feather';

const Navigation = ({ menu }) => {
  return (
    <Wrapper>
      <div className="main-menu">
        <nav className="nav-menu_primary">
          <ul className="menu-list">
              <li><Link to="/" className="menuitem" activeClassName="nav-active">Home</Link></li>
              {menu.map(mainItem => 
              !mainItem.parentId ? (
                <li key={mainItem.id}>
                  <Link to={mainItem.url} className="menuitem" activeClassName="nav-active">
                    {mainItem.label}
                    {mainItem.childItems.nodes.length !== 0 && <div className="arrow-box"><ChevronDown/></div>}
                  </Link>
                  {mainItem.childItems.nodes.length !== 0 ? (
                    <ul className="sub-menu">
                      {mainItem.childItems.nodes.map(childItems => (
                        <li key={childItems.id}>
                          <Link to={childItems.url} className="menuitem submenu-item" activeClassName="nav-active">
                            {childItems.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ) : null
              )}
          </ul>
        </nav>
      </div>
    </Wrapper>
  )
}

export default Navigation