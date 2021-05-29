import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextField } from '../../shared/components/TextField';

export const SignUp: React.FC = () => {
  const [isHidePassword, setIsHidePassword] = useState(true);

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = useCallback(() => {
    if (email.includes('@') && email.includes('.')) {

    } else {
      alert('Email inválido.')
    }
  }, []);

  return (
    <View style={styles.contentBase}>
      <View style={styles.contentCenter}>

        <Text style={styles.title}>Cadastrar-se</Text>

        <View style={styles.form}>

          <TextField
            value={email}
            placeholder="Email"
            onChangeText={setEmail}

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
            placeholder="Password"
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

          <TouchableOpacity
            style={{
              ...styles.signUpInButton,
              opacity: (password.length < 3 || email.length) < 3 ? 0.5 : 1
            }}
            onPress={handleSignUp}
            disabled={(password.length < 3 || email.length) < 3}
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
