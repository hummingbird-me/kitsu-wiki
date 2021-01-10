import React, { useState } from 'react';
import client from './client';
import { ApolloProvider } from '@apollo/client';
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';
import { Anime, Home } from './routes';
import Media from './components/media';

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
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
        </nav>
        <div style={{ paddingTop: '75px' }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/media/anime" component={Anime} />
            <Route path="/media">
              <Media />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
