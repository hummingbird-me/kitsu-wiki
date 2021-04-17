import React, { useState, useContext } from 'react';

import { Session } from 'src/types/session';
import * as LocalStorage from 'src/util/localStorage';

export interface SessionProps {
  session: Session;
  setSession: (newSession: Session) => void;
  clearSession: () => void;
}

export const SessionContext = React.createContext<SessionProps>({
  session: null,
  setSession: () => {}, // eslint-disable-line
  clearSession: () => {}, // eslint-disable-line
});

export const SessionContextProvider: React.FunctionComponent<Record<string, unknown>> = function ({
  children,
}) {
  const [session, _setSession] = useState<Session>(null);

  const setSession = (newSession: Session) => {
    _setSession(newSession);
    return LocalStorage.save<Session>('session', newSession);
  };
  const clearSession = () => {
    _setSession(null);
    return LocalStorage.removeItem('session');
  };

  return (
    <SessionContext.Provider
      value={{
        session,
        setSession,
        clearSession,
      }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = function (): Session {
  const { session } = useContext(SessionContext);
  return session;
};
