import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Profile = () => (
  <View style={styles.main}>
    <Text>This is profile screen</Text>
  </View>
);

export default Profile;
