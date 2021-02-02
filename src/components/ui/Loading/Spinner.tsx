import React, { ReactElement } from 'react';

const Spinner = (): ReactElement => (
  <div className='spinner-grow text-primary' role='status'>
    <span className='sr-only'>Loading...</span>
  </div>
);

const RouteSpinner = (): ReactElement => (
  <div className='container'>
    <div className='row align-items-center justify-content-center'>
      <Spinner />
    </div>
  </div>
);

export { Spinner, RouteSpinner };
