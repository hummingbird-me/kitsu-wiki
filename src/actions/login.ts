import { addSeconds } from 'date-fns';

import { Session } from 'src/types/session';
import { LoginFailed, NetworkError } from 'src/errors';

export default async function login({
  params = {},
  init,
}: {
  params?: Record<string, string>;
  init?: RequestInit;
}): Promise<NonNullable<Session>> {
  const host = 'http://kitsu.io/';
  const body = new URLSearchParams(params);
  const response = await fetch(`${host}api/oauth/token`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
    ...init,
  }).catch((e) => {
    throw new NetworkError(e.message);
  });
  const json = await response.json();

  if (response.status === 200) {
    return {
      accessToken: json.access_token,
      refreshToken: json.refresh_token,
      loggedIn: true,
      expiresAt: addSeconds(new Date(), json.expires_in),
    };
  } else {
    switch (json.error) {
      case 'invalid_grant':
        throw new LoginFailed(json.error_description);
      default:
        throw new Error(json.error_description);
    }
  }
}
