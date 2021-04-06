import React, { CSSProperties, ReactElement, useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import Sidenav, { Nav } from 'src/components/ui/navigation/styles/Sidenav';
import { ReactComponent as KitsuDatabaseTools } from 'src/assets/kitsuDatabaseTools.svg';
import HamburgerMenu from './HamburgerMenu';

// TODO: make it exitable on very small screens
// TODO: consider an in-between state using icons for tablets
export default function Sidebar(): ReactElement {
  const [open, setOpen] = useState(false);

  // Open/close sidebar
  const openSesame = { '--show-sidebar': open ? 'block' : 'none' };

  const { path, url } = useRouteMatch();

  return (
    <>
      <Sidenav className='sidebar' style={openSesame as CSSProperties}>
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
