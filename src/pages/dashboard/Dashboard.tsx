import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Dashboard: React.FC = () => {
  return (
    <View style={styles.contentBase}>
      <Text>Fazer login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentBase: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
