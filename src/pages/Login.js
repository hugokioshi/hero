import React, { useState } from 'react';
import { TextInput, Button, Headline } from 'react-native-paper';
import { StyleSheet,View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';

const Login = () => {

  const navigation = useNavigation();
  const {setSigned} = useUser();

  const [email, setEmail] = useState('hugo.kioshi@gmail.com');
  const [password, setPassword] = useState('senha');

  return (
    <Container>
      <View style={styles.header}>
        <Logo />
      </View>
      <Logo />
      <Headline style={styles.textHeader}>Headline</Headline>
      <Body>
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key" />}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => setSigned(true)}>
          Login
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => navigation.navigate('Register')}>
          Registrar
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
  header:{
    alignItems:'center',
    marginTop:30,
    marginBottom:12

  },
});

export default Login;
