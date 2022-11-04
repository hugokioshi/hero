import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Header = (props) => {
  return <TextInput style={styles.input} 
  keyboardType='decimal-pad'
  {...props} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    marginBottom: 12, //espaço gasolina etanol calcular
  },
});

export default Header;
