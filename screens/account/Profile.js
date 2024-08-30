import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import {userData} from '../../data/UserData';
import InputBox from '../../components/Form/InputBox';

const Profile = ({navigation}) => {
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState(userData.password);
  const [profilePic, setProfilePic] = useState(userData.profilePicture);
  const [name, setName] = useState(userData.name);
  const [address, setAddress] = useState(userData.address);
  const [city, setCity] = useState(userData.city);
  const [contact, setContact] = useState(userData.contact);

  const handleUpdate = () => {
    if (!name || !email || !password || !address || !city || !contact) {
      return alert('Provide all fields');
    }
    alert('Update Profile Successfully');
    navigation.navigate('account');
  };
  return (
    <Layout>
      <View style={styles.container}></View>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: profilePic}} />
          <Pressable onPress={() => alert('profile pic dialog')}>
            <Text style={{color: 'red'}}>Update your profile pic</Text>
          </Pressable>
        </View>
        <InputBox
          value={name}
          setValue={setName}
          placeholder={'Enter your name'}
          autoComplete={'name'}
        />
        <InputBox
          value={email}
          setValue={setEmail}
          placeholder={'Enter your email'}
          autoComplete={'email'}
        />
        <InputBox
          value={password}
          setValue={setPassword}
          placeholder={'Enter your password'}
          autoComplete={'password'}
          secureTextEntry={true}
        />
        <InputBox
          value={address}
          setValue={setAddress}
          placeholder={'Enter your address'}
          autoComplete={'address-line1'}
        />
        <InputBox
          value={city}
          setValue={setCity}
          placeholder={'Enter your city'}
          autoComplete={'country'}
        />
        <InputBox
          value={contact}
          setValue={setContact}
          placeholder={'Enter your phone'}
          autoComplete={'tel'}
        />
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
          <Text style={styles.updateButtonText}>UPDATE PROFILE</Text>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  updateButton: {
    backgroundColor: '#000000',
    height: 40,
    borderRadius: 20,
    marginHorizontal: 32,
    justifyContent: 'center',
    marginTop: 12,
  },
  updateButtonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});
export default Profile;
