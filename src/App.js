import React, { useState } from 'react';
import { useRouter, Link } from '@reach/router/unstable-hooks';
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
    notifyOnNetworkStatusChange: true
  }
};

const App = () => {
  const routes = useRouter({
    '.': () => <Home />,
    'anime/*': () => <Anime />
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ApolloProvider client={client}>
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
      <div style={{ paddingTop: '75px' }}>{routes}</div>
    </ApolloProvider>
  );
};

export default App;
