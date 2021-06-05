import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

import { useAuth } from '../../shared/hooks';

export const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const { login } = useAuth();

  const [isHidePassword, setIsHidePassword] = useState(true);
  const [keepConnected, setKeepConnected] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignIn = useCallback(async () => {
    if (email.includes('@') && email.includes('.')) {
      await login(email, password);
    } else {
      alert('Email inválido.');
    }
  }, [email, password, login]);

  const handleSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <View style={styles.contentBase}>
      <View style={styles.contentCenter}>

        <Text style={styles.title}>Fazer login</Text>

        <View style={styles.form}>

          <View style={styles.emailWrapper}>
            <Ionicons
              size={25}
              color="red"
              name="person"
              style={styles.emailIcon}
            />

            <TextInput
              value={email}
              placeholder="Email"
              onChangeText={setEmail}
              style={styles.emailInput}
            />
          </View>

          <View style={styles.passwordWrapper}>
            <Ionicons
              size={25}
              name="key"
              color="red"
              style={styles.passwordIconStart}
            />

            <TextInput
              value={password}
              placeholder="Password"
              onChangeText={setPassword}
              style={styles.passwordInput}
              secureTextEntry={isHidePassword}
            />

            <Ionicons
              size={25}
              color="red"
              style={styles.passwordIconEnd}
              name={isHidePassword ? "eye-off" : "eye"}
              onPress={() => setIsHidePassword(!isHidePassword)}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <Checkbox
              color="red"
              value={keepConnected}
              onValueChange={setKeepConnected}
            />
            <Text>Manter conectado</Text>
          </View>

          <TouchableOpacity
            style={{
              ...styles.signInButton,
              opacity: (password.length < 3 || email.length) < 3 ? 0.5 : 1
            }}
            onPress={handleSignIn}
            disabled={(password.length < 3 || email.length) < 3}
          >
            <Text style={styles.signButtonText}>Entrar</Text>
          </TouchableOpacity>

          <Text style={styles.haveNoAccount}>Não tem uma conta ainda?</Text>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentBase: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentCenter: {
    width: '80%'
  },


  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 36,
  },
  subTitle: {
    fontWeight: '300',
    fontSize: 22,
  },


  form: {
    marginTop: 25,
  },


  emailIcon: {
    marginLeft: 10,
    marginRight: -35,
  },
  emailWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  emailInput: {
    borderColor: 'red',
    paddingLeft: 45,
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },

  passwordIconStart: {
    marginLeft: 10,
    marginRight: -35,
  },
  passwordIconEnd: {
    marginRight: 10,
    marginLeft: -35,
  },
  passwordWrapper: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  passwordInput: {
    borderColor: 'red',
    paddingRight: 45,
    paddingLeft: 45,
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },


  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },


  signButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  signInButton: {
    padding: 15,
    marginTop: 15,
    borderRadius: 4,
    backgroundColor: 'red',
  },


  haveNoAccount: {
    marginTop: 20,
    textAlign: 'center',
  },
  signUpButtonText: {
    color: 'red',
    textAlign: 'center',
  },
  signUpButton: {
    padding: 15,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'red',
  }
});
