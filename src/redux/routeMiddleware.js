import { NavigationActions } from 'react-navigation';
import store from './createStore';
import { TYPE_BACK, TYPE_REPLACE } from '../utils/routeAction';

const routeMiddleware = () => next => action => {
  const { type, payload, meta } = action;
  if (type === 'route') {
    if (meta.type === TYPE_REPLACE) {
      const routeAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: payload.route,
            params: meta.params,
          }),
        ],
      });
      store.dispatch(routeAction);
    } else if (meta.type === TYPE_BACK) {
      const routeAction = NavigationActions.back({
        key: payload.route,
      });
      store.dispatch(routeAction);
    } else {
      const routeAction = NavigationActions.navigate({
        routeName: payload.route,
        params: meta.params,
      });
      store.dispatch(routeAction);
    }
  }

  return next(action);
};

export default routeMiddleware;
