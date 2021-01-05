import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';
import { parse as queryParse } from 'query-string';
// import List from './List';
import Edit from './Edit';

const Anime = ({
  match,
  location,
}: {
  match: any;
  location: any;
}): ReactElement => (
  <>
    {/* <Route
      exact
      path={match.path}
      render={() => <List query={queryParse(location.search)} />}
    /> */}
    <Route exact path={`${match.path}/add`} component={Edit} />
    <Route
      path={`${match.path}/:id`}
      render={({ match }) => <Edit id={match.params.id} />}
    />
  </>
);

export default Anime;
