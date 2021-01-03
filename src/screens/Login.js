import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: '#A7A9CB',
    borderRadius: 25,
    height: 37,
    width: 303,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#423E6C',
  },
  inputStyle: {
    height: 40,
    width: 303,
    borderRadius: 25,
    elevation: 4,
    backgroundColor: 'white',
    marginTop: 12,
  },
  textStyle: {
    alignSelf: 'flex-start',
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerTextStyle: {
    fontSize: 27,
    color: '#FC0254',
    fontWeight: 'bold',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    fontSize: 22,
    flex: 4,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#423E6C',
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  footer: {
    flex: 3,
    justifyContent: 'space-between',
  },
});
const Login = () => (
  <ImageBackground source={require('../../assets/store.jpeg')} style={styles.mainContainer}>
    <View style={styles.overlay} />
    <View style={styles.header}>
      <Text style={styles.headerTextStyle}>LOG IN</Text>
    </View>
    <View style={styles.inputContainer}>
      <View>
        <Text style={styles.textStyle}>Your Email</Text>
        <TextInput style={styles.inputStyle} value='niharchitnis@gmail.com' placeholder='Email' />
      </View>
      <View>
        <Text style={styles.textStyle}>Password</Text>
        <TextInput
          style={styles.inputStyle}
          value='niharchitnis@gmail.com'
          placeholder='Password'
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}> LOG IN</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.footer}>
      <Text style={styles.textStyle}> Can't Login? Forgot Password</Text>
      <Text style={styles.textStyle}> Don't have an account? SignUp</Text>
    </View>
  </ImageBackground>
);

export default Login;
