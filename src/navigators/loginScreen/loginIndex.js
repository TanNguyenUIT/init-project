import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const imgBackground = require('../../assets/loginBackground.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
  },
});

const Login = () => (
  <View style={styles.container}>
    <ImageBackground source={imgBackground} style={styles.imgBackground} />
  </View>
);

export default Login;
