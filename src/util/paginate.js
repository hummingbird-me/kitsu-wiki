const changePage = ({
  fetchMore,
  query,
  queryKey,
  pageAmount,
  pageInfo,
  direction,
  setParams,
}) => {
  const variables = { pageAmount };
  const params = {};

  if (direction === 'forward') {
    if (pageInfo.endCursor) {
      variables.endCursor = pageInfo.endCursor;
      params.after = pageInfo.endCursor;
    }
  } else {
    if (pageInfo.startCursor && pageInfo.hasPreviousPage) {
      variables.startCursor = pageInfo.startCursor;
      params.before = pageInfo.startCursor;
    }
  }

  fetchMore({
    query,
    variables,
    updateQuery: (previousResult, { fetchMoreResult }) => ({
      [queryKey]: fetchMoreResult[queryKey],
    }),
  });

  if (setParams) {
    setParams(params);
  }
};

export { changePage };
