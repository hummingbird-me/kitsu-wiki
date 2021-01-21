import {
  ApolloClient,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import generatedIntrospection from './types/possibleTypes.json';

const cache = new InMemoryCache({
  possibleTypes: generatedIntrospection.possibleTypes,
});
const link = new HttpLink({ uri: 'https://kitsu.io/api/graphql' });
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  },
};

const client = new ApolloClient({ link, cache, defaultOptions });

export default client;
