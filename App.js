import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Payment from './screens/Payment';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Account from './screens/account/Account';
import Notification from './screens/account/Notification';
import Profile from './screens/account/Profile';
import Orders from './screens/account/Orders';
import Dashboard from './screens/admin/Dashboard';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}></Stack.Screen>
        <Stack.Screen name="mobile" component={About}></Stack.Screen>
        <Stack.Screen
          name="productDetails"
          component={ProductDetails}></Stack.Screen>
        <Stack.Screen name="cart" component={Cart}></Stack.Screen>
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="register"
          component={Register}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="checkout" component={Checkout}></Stack.Screen>
        <Stack.Screen name="payment" component={Payment}></Stack.Screen>
        <Stack.Screen
          name="notification"
          component={Notification}></Stack.Screen>
        <Stack.Screen name="account" component={Account}></Stack.Screen>
        <Stack.Screen name="profile" component={Profile}></Stack.Screen>
        <Stack.Screen name="orders" component={Orders}></Stack.Screen>
        <Stack.Screen name="adminPanel" component={Dashboard}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
