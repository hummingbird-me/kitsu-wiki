import React from 'react';

const Spinner = () => (
  <div className="spinner-grow text-primary" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

const RouteSpinner = () => (
  <div className="container">
    <div className="row align-items-center justify-content-center">
      <Spinner />
    </div>
  </div>
);

export { Spinner, RouteSpinner };
