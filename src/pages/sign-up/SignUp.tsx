import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextField } from '../../shared/components/TextField';
import { useNavigation } from '@react-navigation/core';
import { SignUpService } from '../../shared/services';
import { Ionicons } from '@expo/vector-icons';

export const SignUp: React.FC = () => {
  const { goBack } = useNavigation();

  const [isHidePasswordAgain, setIsHidePasswordAgain] = useState(true);
  const [isHidePassword, setIsHidePassword] = useState(true);

  const [passwordAgain, setPasswordAgain] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = useCallback(async () => {
    if ((email.includes('@') && email.includes('.'))) {
      const result = await SignUpService.signUp({ name: fullName, email, password, username: userName });

      if (result.success) {
        goBack();
      } else {
        if (!result.messages || result.messages.length === 0) {
          alert('Erro no cadastro!');
        } else {
          alert(result.messages.join(',\n'));
        }
      }
    } else {
      alert('Dados inválidos.')
    }
  }, [email, fullName, password, userName]);

  return (
    <View style={styles.contentBase}>
      <View style={styles.contentCenter}>

        <Text style={styles.title}>Cadastrar-se</Text>

        <View style={styles.form}>

          <TextField
            value={fullName}
            onChangeText={setFullName}
            placeholder="Nome completo"

            startIcon={
              <Ionicons
                size={25}
                color="red"
                name="pencil"
              />
            }
          />

          <TextField
            value={userName}
            onChangeText={setUserName}
            placeholder="Nome de usuário"
            containerStyles={{ marginTop: 15 }}

            startIcon={
              <Ionicons
                size={25}
                color="red"
                name="pencil-outline"
              />
            }
          />

          <TextField
            value={email}
            placeholder="Email"
            onChangeText={setEmail}
            containerStyles={{ marginTop: 15 }}

            startIcon={
              <Ionicons
                size={25}
                color="red"
                name="person"
              />
            }
          />

          <TextField
            value={password}
            placeholder="Senha"
            onChangeText={setPassword}
            secureTextEntry={isHidePassword}
            containerStyles={{ marginTop: 15 }}

            startIcon={
              <Ionicons
                size={25}
                name="key"
                color="red"
              />
            }
            endIcon={
              <Ionicons
                size={25}
                color="red"
                name={isHidePassword ? "eye-off" : "eye"}
                onPress={() => setIsHidePassword(!isHidePassword)}
              />
            }
          />

          <TextField
            value={passwordAgain}
            placeholder="Repita a senha"
            onChangeText={setPasswordAgain}
            secureTextEntry={isHidePassword}
            containerStyles={{ marginTop: 15 }}

            startIcon={
              <Ionicons
                size={25}
                name="key"
                color="red"
              />
            }
            endIcon={
              <Ionicons
                size={25}
                color="red"
                name={isHidePasswordAgain ? "eye-off" : "eye"}
                onPress={() => setIsHidePasswordAgain(!isHidePasswordAgain)}
              />
            }
          />

          <TouchableOpacity
            style={{
              ...styles.signUpInButton,
              opacity: (password.length < 3 || passwordAgain.length < 3 || password !== passwordAgain || email.length) < 3 ? 0.5 : 1
            }}
            onPress={handleSignUp}
            disabled={(password.length < 3 || passwordAgain.length < 3 || password !== passwordAgain || email.length) < 3}
          >
            <Text style={styles.signUpButtonText}>Cadastrar</Text>
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


  form: {
    marginTop: 25,
  },


  signUpButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  signUpInButton: {
    padding: 15,
    marginTop: 15,
    borderRadius: 4,
    backgroundColor: 'red',
  },
});
