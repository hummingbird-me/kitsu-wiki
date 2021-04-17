import React, { ReactElement } from 'react';
import { Media } from './routes';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import 'normalize.css';
import GlobalStyles from './styles/GlobalStyle';
import ApolloContext from './contexts/ApolloContext';
import Home from './components/home';
import { SessionContextProvider } from './contexts/SessionContext';
import { PrivateRoute } from './util/customRoute';

const App = (): ReactElement => {
  return (
    <>
      <GlobalStyles />
      <SessionContextProvider>
        <ApolloContext>
          <Router>
            <div>
              <Switch>
                <PrivateRoute path='/search' component={Media} />
                <Route exact path='/' component={Home} />
              </Switch>
            </div>
          </Router>
        </ApolloContext>
      </SessionContextProvider>
    </>
  );
};

export default App;
