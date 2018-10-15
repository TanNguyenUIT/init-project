import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomeScreen = () => (
  <View style={styles.main}>
    <Text>This is home screen</Text>
  </View>
);

export default HomeScreen;
