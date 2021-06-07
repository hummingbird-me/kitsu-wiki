import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import Editor from 'src/styles/layouts/editorLayout';
import { default as AllUserSubmission } from 'src/components/userSubmission';
import EditId from '../WikiSubmission/EditId';

const UserSubmission = ({ match, location }: { match: any; location: any }): ReactElement => (
  <Editor>
    <div className='edit-content'>
      <Switch>
        <Route
          path={`${match.path}/:id(\\d+)/edit`}
          render={({ match }) => <EditId id={match.params.id} />}
        />
        <Route path={match.path} render={() => <AllUserSubmission />} />
      </Switch>
    </div>
  </Editor>
);

export default UserSubmission;
