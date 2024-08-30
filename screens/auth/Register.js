import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../components/Form/InputBox';

const Register = ({navigation}) => {
  const loginImage = 'https://cdn-icons-png.flaticon.com/512/6681/6681204.png';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert('Please fill in all fields');
    }
    alert('Register Successfully');
    navigation.navigate('login');
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: loginImage}} style={styles.image} />
      <InputBox
        placeholder={'Enter your name'}
        autoComplete={'name'}
        value={name}
        setValue={setName}
      />
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
      <InputBox
        placeholder={'Enter your city'}
        autoComplete={'country'}
        value={city}
        setValue={setCity}
      />
      <InputBox
        placeholder={'Enter your address'}
        autoComplete={'address-line1'}
        value={address}
        setValue={setAddress}
      />
      <InputBox
        placeholder={'Enter your contact no'}
        autoComplete={'name'}
        value={phone}
        setValue={setPhone}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
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
  registerButton: {
    backgroundColor: '#000000',
    width: '80%',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  registerButtonText: {
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

export default Register;
