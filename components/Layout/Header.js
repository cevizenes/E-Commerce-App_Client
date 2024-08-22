import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Header = () => {
  const [searchText, setSearchText] = useState('');
  const handleSearch = () => {
    console.log(searchText);
    setSearchText('');
  };
  return (
    <View style={{height: 90, backgroundColor: 'lightgray'}}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <FontAwesome name="search" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  inputBox: {
    borderWidth: 0.4,
    width: '100%',
    position: 'absolute',
    left: 16,
    height: 40,
    color: '#000000',
    backgroundColor: '#ffffff',
    paddingLeft: 12,
    fontSize: 16,
    borderRadius: 4,
  },
  searchButton: {
    position: 'absolute',
    left: '95%',
  },
  icon: {
    color: '#000000',
    fontSize: 16,
  },
});

export default Header;
