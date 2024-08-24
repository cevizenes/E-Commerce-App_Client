import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const CartItem = ({item}) => {
  const [qty, setQty] = useState(1);

  const handleAddQty = () => {
    if (qty === 10) return alert('you cant add more than 10 quantity');
    setQty(prev => prev + 1);
  };
  const handleRemoveQty = () => {
    if (qty <= 1) return;
    setQty(prev => prev - 1);
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: item?.imageUrl}} style={styles.image} />
      <View>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.name}>{item?.price} $</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnQty} onPress={handleRemoveQty}>
          <Text style={styles.btnQtyText}>-</Text>
        </TouchableOpacity>
        <Text>{qty}</Text>
        <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
          <Text style={styles.btnQtyText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 8,
  },
  btnQty: {
    backgroundColor: 'lightgray',
    width: 40,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  btnQtyText: {
    fontSize: 20,
  },
});
export default CartItem;
