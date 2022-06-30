import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import FloatingWriteButton from '../components/FloatingWriteButton';

const FeedsScreen = () => {
  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;
