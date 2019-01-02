const changePage = (fetchMore, type, data, direction, setParams) => {
  const variables = {};
  const params = {};

  if (direction === 'next') {
    if (data.pageInfo.endCursor) {
      variables.endCursor = data.pageInfo.endCursor;
      variables.forward = true;
      params.after = data.pageInfo.endCursor;
    }
  } else {
    // if (data.pageInfo.startCursor && data.pageInfo.hasPreviousPage) {
    if (data.pageInfo.startCursor) {
      variables.startCursor = data.pageInfo.startCursor;
      variables.forward = false;
      params.before = data.pageInfo.startCursor;
    }
  }

  fetchMore({
    variables,
    updateQuery: (previousResult, { fetchMoreResult }) => {
      const { __typename } = previousResult[type];
      const { nodes, pageInfo } = fetchMoreResult[type];

      return {
        [type]: {
          __typename,
          nodes,
          pageInfo
        }
      };
    }
  });

  if (setParams) {
    setParams(params);
  }
};

export { changePage };
