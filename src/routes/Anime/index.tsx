import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import EditId from './EditId';
import EditSlug from './EditSlug';

import Editor from 'src/styles/layouts/EditorLayout';

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
