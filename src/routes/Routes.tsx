import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import { SignIn, SignUp } from '../pages';

const Stack = createStackNavigator();
export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false, cardStyle: { backgroundColor: '#ffffff' } }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false, cardStyle: { backgroundColor: '#ffffff' } }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
