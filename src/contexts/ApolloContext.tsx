import React, { useContext } from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  from as linkFrom,
  HttpLink,
  DefaultOptions,
} from '@apollo/client';

import { relayStylePagination } from '@apollo/client/utilities';
import generatedIntrospection from 'src/types/possibleTypes.json';

import authenticationLink from 'src/apolloLinks/authentication';
import { SessionContext } from './SessionContext';

const ApolloContext: React.FC = function ApolloContext({ children }) {
  const sessionContext = useContext(SessionContext);
  const host = 'https://kitsu.io/';
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

  const link = linkFrom([
    authenticationLink(sessionContext),
    new HttpLink({ uri: `${host}api/graphql` }),
  ]);

  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
    },
  };

  const client = new ApolloClient({
    link,
    cache,
    defaultOptions,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloContext;
