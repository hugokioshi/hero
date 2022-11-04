import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Abastacimento from '../pages/abastecimento';

const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ header: () => null }}
      />
      <Stack.Screen name="Abastecimento" component={Abastacimento} options={{ header: () => null }} />
    </Stack.Navigator>
  );
};

export default Main;
