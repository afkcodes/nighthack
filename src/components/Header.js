import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  headerMenu: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#383B70',
  },
  shopSpace: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
  imageContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageStyle: {
    resizeMode: 'contain',
    height: 40,
    width: 80,
  },
  actionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  addItem: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});
const HeaderComponent = () => (
  <View style={styles.headerMenu}>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonStyles}>
        <Image source={require('../../assets/menu-line.png')} />
      </TouchableOpacity>
    </View>
    <View style={styles.imageContainer}>
      <Image style={styles.imageStyle} source={require('../../assets/sMARKT.png')} />
    </View>
    <View style={styles.actionButton}>
      <Text style={styles.addItem}>+</Text>
    </View>
  </View>
);

export default HeaderComponent;
