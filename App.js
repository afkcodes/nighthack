import React from 'react';
import { StyleSheet, Text, StatusBar } from 'react-native';
import Shop from './src/components/Shop';
// import Firstpage from './src/screens/Firstpage';
import Login from './src/screens/Login';
import ShopScreen from './src/screens/ShopScreen';

const styles = StyleSheet.create({});

const App = () => (
  <>
    <StatusBar backgroundColor='white' barStyle='dark-content' />
    {/* <Firstpage /> */}
    {/* <Login /> */}
    <ShopScreen />
  </>
);
export default App;
