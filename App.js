import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Payment from './screens/Payment';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}></Stack.Screen>
        <Stack.Screen
          name="mobile"
          component={About}
          options={{
            headerShown: false,
          }}></Stack.Screen>
        <Stack.Screen
          name="productDetails"
          component={ProductDetails}></Stack.Screen>
        <Stack.Screen name="cart" component={Cart}></Stack.Screen>
        <Stack.Screen name="checkout" component={Checkout}></Stack.Screen>
        <Stack.Screen name="payment" component={Payment}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
