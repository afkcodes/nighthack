import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderComponent from '../components/Header';
import Shop from '../components/Shop';

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
  },
  shopSpace: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
const ShopScreen = () => (
  <View style={styles.mainConatiner}>
    <HeaderComponent />
    <View style={styles.shopSpace}>
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
    </View>
  </View>
);

export default ShopScreen;
