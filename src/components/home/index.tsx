import React, { ReactElement } from 'react';
import { useSession } from 'src/contexts/SessionContext';
import { Media } from 'src/routes';
import LoginForm from './LoginForm';

export default function Home(): ReactElement {
  const session = useSession();

  return session?.loggedIn ? <Media /> : <LoginForm />;
}
