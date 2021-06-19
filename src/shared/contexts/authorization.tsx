import React, { createContext, useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SignInService } from '../services';
import { useEffect } from 'react';

interface IAuthorizationContextData {
  isAuthenticated: boolean;
  logout: () => Promise<void>;
  isAuthenticatedLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
}
export const AuthorizationContext = createContext<IAuthorizationContextData>({} as IAuthorizationContextData);

export const AuthorizationProvider: React.FC = ({ children }) => {
  const [isAuthenticatedLoading, setIsAuthenticatedLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loginLocal = async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');

      if (accessToken) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

      setIsAuthenticatedLoading(false);
    }

    loginLocal();
  }, []);

  const handleLogin = useCallback(async (email: string, password: string) => {
    const { success, messages, data } = await SignInService.signIn(email, password);

    if (success && data?.accessToken) {
      setIsAuthenticated(true);
      await AsyncStorage.setItem('accessToken', data.accessToken);
    } else {
      if (!messages || messages.length === 0) {
        alert('Erro no login!');
      } else {
        alert(messages.join(',\n'));
      }

      setIsAuthenticated(false);
      await AsyncStorage.removeItem('accessToken');
    }
  }, []);

  const handleLogout = useCallback(async () => {
    setIsAuthenticated(false);
    await AsyncStorage.removeItem('accessToken');
  }, []);

  return (
    <AuthorizationContext.Provider value={{ isAuthenticated, isAuthenticatedLoading, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthorizationContext.Provider>
  );
}
