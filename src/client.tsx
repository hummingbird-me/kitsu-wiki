import {
  ApolloClient,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const cache = new InMemoryCache();
const link = new HttpLink({ uri: 'https://kitsu.io/api/graphql' });
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  },
};

const client = new ApolloClient({ link, cache, defaultOptions });

export default client;
