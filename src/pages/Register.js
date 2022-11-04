import React, { useState } from 'react';
import { TextInput, Button, Headline, Alert } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { register } from '../services/auth.services';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';

const Register = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('Hugo');
  const [email, setEmail] = useState('hugo.kioshi@gmail.com');
  const [password, setPassword] = useState('senha');

  const handleRegister = () => {
    register({
      name: name,
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);
      if (res) {
        Alert.alert('Atenção', 'Usuário Cadastrado com sucesso!', [
          {
            text: 'OK',
            onPress: () => navigation.goBack()
            },
        ]);
      } else {
        Alert.alert('Usuário não cadastrado!');
      }
    });
  };

  return (
    <Container>
      <View style={styles.header}>
        <Logo />
      </View>
      <Logo />
      <Headline style={styles.textHeader}>Headline</Headline>
      <Body>
        <Input
          label="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="email" />}
        />
        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key" />}
        />
        <Button style={styles.button} mode="contained" onPress={handleRegister}>
          Registrar
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 8,
  },
  textHeader: {
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12,
  },
});

export default Register;
