import React from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.cotainer}>
      <ActivityIndicator size="large" color="1d9bf0" />
      <Text> textInComponent </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
