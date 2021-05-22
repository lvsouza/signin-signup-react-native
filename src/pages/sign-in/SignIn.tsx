import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

export const SignIn: React.FC = () => {
  return (
    <View style={styles.contentBase}>
      <View style={styles.contentCenter}>

        <Text style={styles.title}>Fazer login</Text>

        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            style={styles.emailInput}
          />
          <TextInput
            placeholder="Password"
            style={styles.emailPassword}
          />

          <View style={styles.checkboxContainer}>
            <Checkbox />
            <Text>Manter conectado</Text>
          </View>

          <TouchableOpacity style={styles.signInButton}>
            <Text>Entrar</Text>
          </TouchableOpacity>
          <Text>Não tem uma conta ainda?</Text>
          <TouchableOpacity style={styles.signUpButton}>
            <Text>Cadastrar-se</Text>
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
  subTitle: {
    fontWeight: '300',
    fontSize: 22,
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 36,
  },
  form: {
    marginTop: 15,
  },
  emailInput: {
    borderColor: 'red',
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
  },
  emailPassword: {
    borderColor: 'red',
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInButton: {
    padding: 10,
    backgroundColor: 'red',
  },
  signUpButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
  }
});
