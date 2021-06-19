import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';
import 'react-native-gesture-handler';

import { Dashboard, SignIn, SignUp } from '../pages';
import { useAuth } from '../shared/hooks';

const Stack = createStackNavigator();
export const Routes: React.FC = () => {
  const { isAuthenticated, isAuthenticatedLoading } = useAuth();

  if (isAuthenticatedLoading) return (
    <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
      <ActivityIndicator
        color="#ff0000"
        size={60}
      />
    </View>
  );

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
