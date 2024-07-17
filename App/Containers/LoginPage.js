/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {

  const [usernameTextInputIsActive, setUsernameTextInputIsActive] = useState(false)
  const [passwordTextInputIsActive, setPasswordTextInputIsActive] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigation = useNavigation()

  const handleToggleShowPassword = () => {
    if(showPassword) setShowPassword(false)
    else setShowPassword(true)
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.information}>Enter your login details</Text>
      <View style={[styles.textInputContainer, {borderColor: usernameTextInputIsActive ? '#F2CF4B' : '#11181E'}]}>
        <FontAwesome name={'user'} color={'#FFF'} size={24} />
        <TextInput
            placeholder='Username'
            placeholderTextColor={'#FFF'}
            style={styles.textInput}
            onFocus={() => setUsernameTextInputIsActive(true)}
            onEndEditing={() => setUsernameTextInputIsActive(false)}
        />
      </View>
      <View style={[styles.textInputContainer, {borderColor: passwordTextInputIsActive ? '#F2CF4B' : '#11181E', marginTop: 15}]}>
        <FontAwesome name={'lock'} color={'#FFF'} size={24} />
        <TextInput
            placeholder='Password'
            placeholderTextColor={'#FFF'}
            style={styles.textInput}
            secureTextEntry={!showPassword}
            onFocus={() => setPasswordTextInputIsActive(true)}
            onEndEditing={() => setPasswordTextInputIsActive(false)}
        />
        <TouchableOpacity onPress={handleToggleShowPassword}>
            <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} color={'#FFF'} size={24} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavigator')} style={styles.loginButtonContainer}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPassContainer}>
        <Text style={styles.forgotPassText}>Forgot login details?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#070A0E',
  },
  title: {
    marginTop: 50,
    fontSize: 36,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFF',
    marginBottom: 15,
    textAlign: 'center'
  },
  information: {
    fontFamily: 'Poppins-Regular',
    color: '#FFF',
    marginBottom: 35,
    textAlign: 'center'
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    backgroundColor: '#0B1014',
    marginHorizontal: 20,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    marginHorizontal: 10,
    color: '#FFF',
    flex: 1
  },
  loginButtonContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#E9C749',
    borderRadius: 30,
    marginHorizontal: 20
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16
  },
  forgotPassContainer: {
    marginTop: 40,
    alignItems: 'center'
  },
  forgotPassText: {
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold'
  }
});

export default LoginPage;
