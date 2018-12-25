import { navigate } from '@reach/router';

const changePage = (fetchMore, amount, type, data, direction) => {
  const variables = {};
  let param = '';

  if (direction === 'next') {
    if (data.pageInfo.endCursor) {
      variables.endCursor = data.pageInfo.endCursor;
      variables.first = amount;
      param = `?after=${encodeURIComponent(data.pageInfo.endCursor)}`;
    }
  } else {
    // if (data.pageInfo.startCursor && data.pageInfo.hasPreviousPage) {
    if (data.pageInfo.startCursor) {
      variables.startCursor = data.pageInfo.startCursor;
      variables.last = amount;
      param = `?before=${encodeURIComponent(data.pageInfo.startCursor)}`;
    }
  }

  fetchMore({
    variables,
    updateQuery: (previousResult, { fetchMoreResult }) => {
      const { __typename } = previousResult[type];
      const { edges, pageInfo } = fetchMoreResult[type];

      return {
        [type]: {
          __typename,
          edges,
          pageInfo
        }
      };
    }
  });

  navigate(`${type}${param}`);
};

export { changePage };
