import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import { AuthorizationProvider } from './src/shared/contexts';
import { Routes } from './src/routes/Routes';

export default function App() {
  return (
    <AuthorizationProvider>
      <SafeAreaView style={styles.safeContent}>
        <StatusBar />
        <Routes />
      </SafeAreaView>
    </AuthorizationProvider>
  );
}

const styles = StyleSheet.create({
  safeContent: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  }
});
