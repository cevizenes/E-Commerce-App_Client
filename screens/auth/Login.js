import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../components/Form/InputBox';

const Login = ({navigation}) => {
  const loginImage = 'https://cdn-icons-png.flaticon.com/512/6681/6681204.png';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      return alert('Please add email or password');
    }
    alert('Login Succesfully');
    navigation.navigate('home');
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: loginImage}} style={styles.image} />
      <InputBox
        placeholder={'Enter your email'}
        autoComplete={'email'}
        value={email}
        setValue={setEmail}
      />
      <InputBox
        placeholder={'Enter your password'}
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text>
          Don't have a account?{' '}
          <Text
            style={styles.registerTextBtn}
            onPress={() => navigation.navigate('register')}>
            Register now
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#000000',
    width: '80%',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  loginButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 18,
  },
  registerTextBtn: {
    color: 'blue',
  },
});
export default Login;
