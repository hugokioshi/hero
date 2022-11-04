import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'; //hoot pagina ser navegada retornar função abaixo const Navigation = UseNavigation(); apos chamar no Fab

// hooc para reflesh da pagina
import {useIsFocused} from '@react-navigation/native';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { List, Text, FAB } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

//chamar os metados sql GEt
import { getGastos} from '../services/GastosServicesDB';

const Gastos = () => {
  const navigation = useNavigation();

  // vetor de gastos Bando de dados
  const [gastos, setGastos] = useState([]);
  const isFocused = useIsFocused();

  //Carregar os dados do banco para inicializar
  //then para terminar sicronização assinc
  useEffect(() => { 

    getGastos().then((dados) => {
      setGastos(dados);
    });
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <List.Item
      title={
        'R$' + item.valor.toFixed(2) + ' (R$' + item.preco.toFixed(2) + ')'
      }
      description={item.odometro + 'KM'}
      left={(props) => (
        <List.Icon
          {...props}
          color={item.tipo == 0 ? 'red' : 'green'}
          icon="gas-station"
        />
      )}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {item.data}
        </Text>
      )}
      onPress={() => navigation.navigate('Abastecimento', { item })} //vai abrir tela de abastecimento
    />
  );
  return (
    <Container>
      <Header title={'Fuel Manager'} />
      <Body>
        <FlatList //Flat dados receber Gastos do banco de dados para Vizualizar data={gastos}
          data={gastos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('Abastecimento')}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Gastos;
