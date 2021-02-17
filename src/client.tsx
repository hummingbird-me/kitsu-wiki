import { ApolloClient, DefaultOptions, HttpLink, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';

import generatedIntrospection from './types/possibleTypes.json';

const cache = new InMemoryCache({
  possibleTypes: generatedIntrospection.possibleTypes,
  typePolicies: {
    Query: {
      fields: {
        // A simple helper which caches results and reuses previous variables
        // when using fetchMore to paginate data
        searchMediaByTitle: relayStylePagination(['first', 'title', 'mediaType']),
      },
    },
  },
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
