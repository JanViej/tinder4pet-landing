import createFilter from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';

const whitelist = {
  auth: [
    'data',
    'token',
    'installationId',
    'isSkipLogin',
    'isFirstTime',
    'isAuthenticated',
    'refreshToken',
  ],
  carts: ['data'],
};

const makeTransforms = () =>
  Object.keys(whitelist).map((key) => createFilter(key, whitelist[key]));

export const REDUX_PERSIST = (key = 'root') => ({
  key,
  storage,
  // version: 1,
  // whitelist: Object.keys(whitelist),
  // blacklist: [],
  // transforms: makeTransforms(),
});
