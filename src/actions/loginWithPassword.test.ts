// // FIXME: fetchMock doesn't like being imported in ESM style???
// import loginWithPassword from './loginWithPassword';

// import fetchMock = require('fetch-mock');
// afterEach(() => fetchMock.reset());
// jest.mock('expo-constants');
// describe('loginWithPassword', () => {
//   test('with successful response', async () => {
//     fetchMock.post('https://kitsu.io/api/oauth/token', {
//       status: 200,
//       body: {
//         access_token: 'TOKEN',
//         token_type: 'Bearer',
//         expires_in: 30 * 24 * 60 * 60,
//         created_at: Date.now() / 1000,
//       },
//     });
//     const session = await loginWithPassword({
//       username: 'michiru',
//       password: 'ogami ear scritches',
//     });
//     expect(session).not.toBeNull();
//     expect(session?.accessToken).toBe('TOKEN');
//   });
// });
