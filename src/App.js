import React from 'react';
import { Provider, connect } from 'react-redux';
import { compose } from 'recompose';
import { addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';
import store, { addListener } from './redux/createStore';
import RootNavigator from './navigators/rootNavigator';

const App = ({ dispatch, nav }) => (
  <RootNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
      addListener,
    })}
  />
);

App.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.object,
};

const HOCApp = compose(
  connect(
    state => ({
      nav: state.nav,
    }),
    {},
  ),
)(App);

const WrapApp = () => (
  <Provider store={store}>
    <HOCApp />
  </Provider>
);

export default WrapApp;
