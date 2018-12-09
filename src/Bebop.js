import React from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from 'react-apollo-hooks';

const GET_BEBOP = gql`
  query {
    anime(id: "1") {
      edges {
        node {
          titles {
            canonical
          }
        }
      }
    }
  }
`;

const Bebop = () => {
  const { data, error, loading } = useQuery(GET_BEBOP, { suspend: false });

  if (error) return <div>Error: {error.message}</div>;
  if (loading) return <div>Loading...</div>;

  return <div>{data.anime.edges[0].node.titles.canonical}</div>;
};

export default Bebop;
