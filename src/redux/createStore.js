import { createStore as createStoreRedux, applyMiddleware, compose } from 'redux';
import { middleware as apiMiddleware } from 'redux-api-call';
import { createEpicMiddleware } from 'redux-observable';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';
import routeMiddleware from './routeMiddleware';

const navigationMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);

export const addListener = createReduxBoundAddListener('root');

const createStore = (initialState = {}) => {
  const epicMiddleware = createEpicMiddleware(rootEpic);

  const reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ maxAge: 1000 })
    : compose;

  const enhancer = reduxCompose(
    applyMiddleware(apiMiddleware(), routeMiddleware, epicMiddleware, navigationMiddleware),
  );

  const store = createStoreRedux(rootReducer, initialState, enhancer);

  // hot reload
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default createStore();
