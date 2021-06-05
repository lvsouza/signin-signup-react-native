import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { useAuth } from '../../shared/hooks';

export const Dashboard: React.FC = () => {
  const { logout } = useAuth();

  return (
    <View style={styles.contentBase}>
      <Text>Dashboard</Text>

      <TouchableOpacity style={styles.exitButton} onPress={logout}>
        <Text style={{ color: '#ffffff' }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contentBase: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exitButton: {
    margin: 10,
    padding: 10,
    borderWidth: 0,
    borderRadius: 4,
    backgroundColor: '#ff0000',
  }
});
