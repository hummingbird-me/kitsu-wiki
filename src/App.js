import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';

import Bebop from './Bebop';

const handleError = ({ networkError }) => {
  if (networkError) console.log(`Network error: ${networkError}`);
}

const client = new ApolloClient({
  uri: 'https://kitsu.io/api/graphql',
  onError: handleError
})

const App = () => (
  <ApolloProvider client={client}>
    <h1>Kitsu Database</h1>
    <Bebop />
  </ApolloProvider>
);

export default App;
