import gql from 'graphql-tag.macro';

const characterFields = gql`
  fragment characterFields on Character {
    id
    slug
    names {
      localized
      canonical
      alternatives
    }
    image {
      original {
        url
      }
      views {
        name
        url
      }
    }
  }
`;

export default characterFields;
