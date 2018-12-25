const changePage = (fetchMore, direction, data, type) => {
  const variables = {};

  if (direction === 'next') {
    variables.endCursor = data.pageInfo.endCursor;
  } else {
    variables.startCursor = data.pageInfo.startCursor;
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
};

export { changePage };
