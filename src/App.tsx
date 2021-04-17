import React, { ReactElement } from 'react';
import { Media } from './routes';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import 'normalize.css';
import GlobalStyles from './styles/GlobalStyle';
import ApolloContext from './contexts/ApolloContext';
import Home from './components/home';
import { SessionContextProvider } from './contexts/SessionContext';

const App = (): ReactElement => {
  /* const [dropdownOpen, setDropdownOpen] = useState(false); */

  return (
    <>
      <GlobalStyles />
      <SessionContextProvider>
        <ApolloContext>
          <Router>
            {/* {console.log(session)}
            <nav>{session?.loggedIn ? <Link to='/'>Logout</Link> : <Link to='/'>Login</Link>}</nav> */}
            {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
          <Link to="/" className="navbar-brand">
            Kitsu Database
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                style={{ cursor: 'pointer' }}
                onClick={() => setDropdownOpen(!dropdownOpen)}>
                Resources
              </div>
              <div
                className={`dropdown-menu${dropdownOpen ? ' show' : ''}`}
                onClick={() => setDropdownOpen(false)}>
                <Link to="/media" className="dropdown-item">
                  Media
                </Link>
              </div>
            </li>
          </ul>
        </nav> */}
            <div>
              <Switch>
                <Route path='/search' component={Media} />
                <Route exact path='/'>
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </ApolloContext>
      </SessionContextProvider>
    </>
  );
};

export default App;
