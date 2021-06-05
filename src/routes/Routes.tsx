import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import { Dashboard, SignIn, SignUp } from '../pages';
import { useAuth } from '../shared/hooks';

const Stack = createStackNavigator();
export const Routes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {isAuthenticated
          ? (
            <>
              <Stack.Screen
                name="Dashboard"
                component={Dashboard}
              />
            </>
          )
          : (
            <>
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
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
