import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import Sidenav, { Nav } from 'src/styles/components/sidebar';
import { ReactComponent as KitsuDatabaseTools } from 'src/assets/kitsuDatabaseTools.svg';

/* interface Props {
  
} */

export default function Sidebar(/* {}: Props */): ReactElement {
  return (
    <Sidenav className='sidebar'>
      <div className='kitsu-logo'>
        <KitsuDatabaseTools />
      </div>
      <div className='main-navigation'>
        <Nav>
          <ul>
            <li>
              <NavLink activeClassName='active-tab' to='/user/'>
                User
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active-tab' to='/library'>
                Library
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active-tab' to='/community'>
                Community
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName='active-tab'
                to='/browse'
                isActive={(match, location) => {
                  if (!match && !/\/(anime|manga)\//.test(location.pathname)) {
                    return false;
                  }

                  return true;
                }}>
                Browse
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active-tab' to='/groups'>
                Groups
              </NavLink>
            </li>
          </ul>
        </Nav>
      </div>
    </Sidenav>
  );
}
