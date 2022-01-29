import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import {
  persistStore,
  REHYDRATE,
  PURGE,
  PAUSE,
  PERSIST,
  REGISTER,
  persistReducer,
  // persistCombineReducers,
} from 'redux-persist';
import config from './config/slice';
import { REDUX_PERSIST } from './persist';

let store;

const initialState = {};

function initStore(preloadedState = initialState) {
  return configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      config: persistReducer(REDUX_PERSIST('config'), config),
    },
    preloadedState,
  });
}
export const initializeStore = (preloadedState) => {
  // eslint-disable-next-line
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  const persistor = persistStore(store);

  return { store, persistor };
}

export function removeUndefined(state) {
  if (typeof state === 'undefined') return null;
  if (Array.isArray(state)) return state.map(removeUndefined);
  if (typeof state === 'object' && state !== null) {
    return Object.entries(state).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: removeUndefined(value),
      }),
      {},
    );
  }

  return state;
}

export const getServerSidePropsGenerator = (asyncFunc) => async (ctx) => {
  const store = initializeStore();
  const extraSSRProps = await asyncFunc(ctx, store);

  return {
    props: {
      initialReduxState: removeUndefined(store.getState()),
      ...(extraSSRProps || {}),
    },
  };
};
