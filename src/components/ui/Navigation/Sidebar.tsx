import React, { CSSProperties, ReactElement, useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import Sidenav, { Nav } from 'src/components/ui/Navigation/Styles/sidebar';
import { ReactComponent as KitsuDatabaseTools } from 'src/assets/kitsuDatabaseTools.svg';
import HamburgerMenu from './HamburgerMenu';

// TODO: make it exitable on very small screens
// TODO: consider an in-between state using icons for tablets
export default function Sidebar(): ReactElement {
  const [open, setOpen] = useState(false);

  let openSesame: CSSProperties;
  if (open) {
    openSesame = { '--show-sidebar': 'block' } as CSSProperties;
  } else {
    openSesame = { '--show-sidebar': 'none' } as CSSProperties;
  }

  const { path, url } = useRouteMatch();

  return (
    <>
      <Sidenav className='sidebar' style={openSesame}>
        <div className='kitsu-logo'>
          <KitsuDatabaseTools />
        </div>
        <div className='main-navigation'>
          <Nav>
            <ul>
              <li>
                <NavLink activeClassName='active-tab' to={url}>
                  Basic Details
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active-tab' to={url + '/links'}>
                  Media and Links
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active-tab' to={url + '/relations'}>
                  Relations
                </NavLink>
              </li>
            </ul>
          </Nav>
        </div>
      </Sidenav>
      <HamburgerMenu open={open} setOpen={setOpen} />
    </>
  );
}
