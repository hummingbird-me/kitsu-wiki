import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSession } from 'src/contexts/SessionContext';

export function PrivateRoute({ ...routeProps }: RouteProps) {
  const session = useSession();

  if (session?.loggedIn) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to='/' />;
  }
}
