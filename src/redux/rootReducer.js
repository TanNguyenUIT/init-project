import { combineReducers } from 'redux';
import { reducers as apiReducers } from 'redux-api-call';
import { NavigationActions } from 'react-navigation';
import RootNavigator from '../navigators/rootNavigator';

const initialState = RootNavigator.router.getStateForAction(NavigationActions.init());

const navReducer = (state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const rootReducer = combineReducers({
  ...apiReducers,
  nav: navReducer,
});

export default rootReducer;
