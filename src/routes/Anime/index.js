import React from 'react';
import { useRouter } from '@reach/router/unstable-hooks';
import List from './List';
import Edit from './Edit';

const Anime = () => {
  const routes = useRouter({
    '.': () => <List />,
    '/:id': ({ id }) => <Edit id={id} />
  });

  return routes;
};

export default Anime;
