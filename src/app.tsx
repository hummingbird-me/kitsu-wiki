import React, { ReactElement } from 'react';
import { Anime } from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import client from './client';

import Media from './routes/Home/index';

import 'normalize.css';
import GlobalStyles from './styles/GlobalStyles';

const App = (): ReactElement => {
  /* const [dropdownOpen, setDropdownOpen] = useState(false); */

  return (
    <>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <Router>
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
              <Route path='/anime' component={Anime} />
              <Route exact path='/'>
                <Media />
              </Route>
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
};

export default App;
