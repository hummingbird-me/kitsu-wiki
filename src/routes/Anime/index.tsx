import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import Edit from './Edit';

const Anime = ({
  match,
  location,
}: {
  match: any;
  location: any;
}): ReactElement => (
  <>
    <Switch>
      <Route
        path={`${match.path}/:id`}
        render={({ match }) => <Edit id={match.params.id} />}
      />
      {/* <Route
        path={`${match.path}/:slug`}
        render={({ match }) => <Edit slug={match.params.slug} />}
      /> */}
    </Switch>
  </>
);

export default Anime;
