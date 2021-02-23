import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import EditId from './edit-id';
import EditSlug from './edit-slug';

import Editor from 'src/styles/layouts/editor-layout';

const Anime = ({ match, location }: { match: any; location: any }): ReactElement => (
  <Editor>
    <div className='edit-content'>
      <Switch>
        <Route
          path={`${match.path}/:id(\\d+)`}
          render={({ match }) => <EditId id={match.params.id} />}
        />
        <Route
          path={`${match.path}/:slug`}
          render={({ match }) => <EditSlug slug={match.params.slug} />}
        />
      </Switch>
    </div>
  </Editor>
);

export default Anime;
