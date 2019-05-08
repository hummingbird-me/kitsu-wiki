import gql from 'graphql-tag.macro';

const pageFields = gql`
  fragment pageFields on PageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
`;

export default pageFields;
