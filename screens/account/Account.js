import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import {userData} from '../../data/UserData';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Account = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Image source={{uri: userData.profilePicture}} style={styles.image} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.name}>
            Hi
            <Text style={{color: 'green'}}> {userData.name}</Text>
          </Text>
          <Text>email : {userData.email}</Text>
          <Text>contact : {userData.contact}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.heading}>Account Settings</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('profile', {id: userData._id})}>
            <AntDesign name="edit" style={styles.buttonText} />
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('orders', {id: userData._idç0})}>
            <AntDesign name="bars" style={styles.buttonText} />
            <Text style={styles.buttonText}>My Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('notification')}>
            <AntDesign name="bells" style={styles.buttonText} />
            <Text style={styles.buttonText}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('adminPanel', {id: userData._id})
            }>
            <AntDesign name="windows" style={styles.buttonText} />
            <Text style={styles.buttonText}>Admin Panel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  image: {
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  name: {
    marginTop: 12,
    fontSize: 20,
  },
  buttonContainer: {
    padding: 12,
    backgroundColor: '#ffffff',
    margin: 12,
    marginVertical: 20,
    elevation: 5,
    borderRadius: 12,
    paddingBottom: 32,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 12,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    color: '#000000',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    padding: 4,
  },
  buttonText: {
    fontSize: 15,
    marginRight: 16,
    color: '#000000',
  },
});
export default Account;
