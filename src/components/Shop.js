import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const styles = StyleSheet.create({
  mainConatiner: {
    height: 120,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  shopInfo: {
    flex: 2,
    padding: 10,
  },
  shopImage: {
    flex: 1,
    padding: 8,
  },
  buttonStyle: {
    backgroundColor: '#383B70',
    borderRadius: 5,
    height: 25,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  shopMeta: {},
  shopButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shopheadertext: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shopLogo: {
    height: '100%',
    width: '100%',
    borderRadius: 25,
  },
});

const Shop = () => (
  <View style={styles.mainConatiner}>
    <View style={styles.shopInfo}>
      <View style={styles.shopMeta}>
        <Text style={styles.shopheadertext}> Shop Name</Text>
        <Text> Shop Meta goes here</Text>
      </View>
      <View style={styles.shopButtons}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}> Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}> Staff</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.shopImage}>
      <Image style={styles.shopLogo} source={{ uri: 'https://via.placeholder.com/150' }} />
    </View>
  </View>
);

export default Shop;
