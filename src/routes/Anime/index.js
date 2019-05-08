import React from 'react';
import { Route } from 'react-router-dom';
import { parse as queryParse } from 'query-string';
import List from './List';
import Edit from './Edit';

const Anime = ({ match, location }) => (
  <>
    <Route
      path={match.path}
      exact
      render={() => <List query={queryParse(location.search)} />}
    />
    <Route
      path={`${match.path}/:id`}
      render={({ match }) => <Edit id={match.params.id} />}
    />
    <Route path={`${match.path}/add`} component={Edit} />
  </>
);

export default Anime;
