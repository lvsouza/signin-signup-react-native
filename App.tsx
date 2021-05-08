import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { SignIn } from './src/pages';

export default function App() {
  return (
    <SafeAreaView style={styles.safeContent}>
      <StatusBar />
      <SignIn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContent: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  }
});
