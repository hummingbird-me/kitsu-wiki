import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import { Home, Anime } from './routes';

const handleError = ({ networkError }) => {
  if (networkError) console.log(`Network error: ${networkError}`);
};

const client = new ApolloClient({
  uri: 'https://kitsu.io/api/graphql',
  onError: handleError
});

client.defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true
  }
};

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
                <Link to="/anime" className="dropdown-item">
                  Anime
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        <div style={{ paddingTop: '75px' }}>
          <Route path="/" exact component={Home} />
          <Route path="/anime" component={Anime} />
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
