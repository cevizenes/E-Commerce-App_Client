import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useRoute} from '@react-navigation/native';

const Footer = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => alert('Home Page')}>
        <AntDesign
          style={[styles.icon, route.name == 'home' && styles.active]}
          name="home"
        />
        <Text style={[styles.iconText, route.name == 'home' && styles.active]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => alert('Notification Page')}>
        <AntDesign
          style={[styles.icon, route.name == 'notification' && styles.active]}
          name="bells"
        />
        <Text
          style={[
            styles.iconText,
            route.name == 'notification' && styles.active,
          ]}>
          Notification
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => alert('Account Page')}>
        <AntDesign
          style={[styles.icon, route.name == 'account' && styles.active]}
          name="user"
        />
        <Text
          style={[styles.iconText, route.name == 'account' && styles.active]}>
          Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => alert('Card Page')}>
        <AntDesign
          style={[styles.icon, route.name == 'card' && styles.active]}
          name="shoppingcart"
        />
        <Text style={[styles.iconText, route.name == 'card' && styles.active]}>
          Card
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => alert('Logout Page')}>
        <AntDesign
          style={[styles.icon, route.name == 'logout' && styles.active]}
          name="logout"
        />
        <Text
          style={[styles.iconText, route.name == 'logout' && styles.active]}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  menuContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
    color: '#000000',
  },
  iconText: {
    color: '#000000',
    fontSize: 10,
  },
  active: {
    color: 'blue',
  },
});
export default Footer;
