import { StackNavigator, SwitchNavigator } from 'react-navigation';

import LoginScreen from './loginScreen/loginIndex';
import { MAIN_NAVIGATOR, LOGIN_SCREEN } from '../utils/routeAction';

const MainNavigator = SwitchNavigator(
  {
    [LOGIN_SCREEN]: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: LOGIN_SCREEN,
    headerMode: 'none',
    navigationOptions: () => ({
      headerTintColor: 'white',
      cardStyle: {
        backgroundColor: 'white',
      },
      headerStyle: {
        backgroundColor: 'white',
      },
    }),
  },
);

const RootNavigator = StackNavigator(
  {
    [MAIN_NAVIGATOR]: {
      screen: MainNavigator,
    },
  },
  {
    initialRouteName: MAIN_NAVIGATOR,
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: () => ({
      headerTintColor: 'white',
      gesturesEnabled: false,
      cardStyle: {
        backgroundColor: 'white',
      },
      headerStyle: {
        backgroundColor: 'white',
      },
    }),
  },
);

export default RootNavigator;
