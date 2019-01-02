import React from 'react';
import { useRouter } from '@reach/router/unstable-hooks';
import { parse as queryParse } from 'query-string';
import List from './List';
import Edit from './Edit';

const Anime = () => {
  const routes = useRouter({
    '.': ({ location }) => <List query={queryParse(location.search)} />,
    '/:id': ({ id }) => <Edit id={id} />,
    '/add': () => <Edit />
  });

  return routes;
};

export default Anime;
