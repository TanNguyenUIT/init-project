import 'babel-polyfill';
import { AppRegistry, UIManager } from 'react-native';
import App from './src/App';

// Enable expirenmental animation on Android
if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

AppRegistry.registerComponent('initProject', () => App);

// Disable isMounted() false positive warning
// Remove this when upgrading to RN 0.57
console.ignoredYellowBox = ['Warning: isMounted(...) is deprecated in plain JavaScript React classes'];
