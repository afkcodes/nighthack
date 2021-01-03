import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  versionInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 87,
    width: 247,
  },
  buttonStyle: {
    backgroundColor: '#383B70',
    borderRadius: 25,
    height: 37,
    width: 198,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  introImageStyle: {
    resizeMode: 'contain',
  },
});

const Firstpage = () => (
  <View style={styles.mainContainer}>
    <View style={styles.logoContainer}>
      <Image style={styles.imageStyle} source={require('../../assets/sMARKT.png')} />
    </View>
    <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.textStyle}> LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.textStyle}> SignUp</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.imageContainer}>
      <Image style={styles.introImageStyle} source={require('../../assets/ui2.png')} />
      <Image style={styles.introImageStyle} source={require('../../assets/ui1.png')} />
    </View>
    <View style={styles.versionInfo}>
      <Text>Version 9.1.12</Text>
    </View>
  </View>
);

export default Firstpage;
