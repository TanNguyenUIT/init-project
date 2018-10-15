import { Dimensions } from 'react-native';

const { scale } = Dimensions.get('window');

// calculator responsive
export default value => Math.round(value * scale);
