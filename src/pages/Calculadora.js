import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import Container from './../components/Container';
import Header from './../components/Header';
import Body from './../components/Body';
import Input from './../components/Input'

const Calculadora = () => {
  const [gas, setGas] = useState('');
  const [etanol, setEtanol] = useState('');
  const [res, setRes] = useState('');

const hanleCalcular = () => {
  if(!gas ||gas <=0 || !eta || eta<=0){
    alert.alert('Atenção!', 'Obrigado informar o valor da gasolina e do etanol');
  }else{
    let pct = Math.round((eta/gas)*100);
    if(pct<70){
      setRes(pct+'% Recomendamos o uso de Etanol');
    }else{
      setRes(pct+'% Recomendamos o uso de Gasolina');
    }
  }
}

  return (
    <Container>
      <Header title={'Calculadora'}></Header>

      <Body>
        <Input
          label="Gasolina"
          value={gas}
          onChangeText={(text) => setGas(text)}
        />
        <Input
          label="Etanol"
          value={etanol}
          onChangeText={(text) => setEtanol(text)}
        />
        <Button icon="" mode="contained" onPress={() => console.log('Pressed')}>
          Calcular
        </Button>
        <Text style={styles.text}>{etanol}</Text>
      </Body>
    </Container>
  );
};
const styles = StyleSheet.create({
  text: {
    margin: 28,
    textAlign: 'center',
  },
});
export default Calculadora;
