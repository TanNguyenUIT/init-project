export const ROUTE_TYPE = 'route';
export const TYPE_BACK = 'back';
export const TYPE_REPLACE = 'replace';

export const MAIN_NAVIGATOR = 'MAIN_NAVIGATOR';

export const HOME_TAB = 'HOME_TAB';
export const PROFILE_TAB = 'PROFILE_TAB';

export const LOGIN_SCREEN = 'LOGIN_SCREEN';
export const HOMEPAGE_SCREEN = 'HOMEPAGE_SCREEN';
export const PROFILE_SCREEN = 'PROFILE_SCREEN';

export const ACTION_TYPES = {
  PUSH: 'push',
  POP: 'pop',
};

export const routeAction = (routeName, type = ACTION_TYPES.PUSH, params = {}) => ({
  type: ROUTE_TYPE,
  payload: {
    route: routeName,
  },
  meta: {
    type,
    params,
  },
});
