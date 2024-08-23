import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ProductsCard = ({p}) => {
  const navigation = useNavigation();

  const handleMoreButton = id => {
    navigation.navigate('productDetails', {_id: id});
    console.log(id);
  };

  const handleAddToCardButton = () => {
    alert('Item Added');
  };
  return (
    <View style={styles.card}>
      <View>
        <Image style={styles.cardImage} source={{uri: p?.imageUrl}} />
        <Text style={styles.cardTitle}>{p?.name}</Text>
        <Text style={styles.cardDesc}>
          {p?.description.substring(0, 30)} ...more
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => handleMoreButton(p._id)}>
          <Text style={styles.btnText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnCard}
          onPress={() => handleAddToCardButton()}>
          <Text style={styles.btnText}>ADD TO CARD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'lightgray',
    marginVertical: 4,
    marginHorizontal: 8,
    width: '50%',
    padding: 12,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  cardImage: {
    height: 128,
    width: '100%',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 10,
    textAlign: 'left',
  },
  btnContainer: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#000000',
    height: 24,
    width: 78,
    borderRadius: 4,
    justifyContent: 'center',
  },
  btnCard: {
    backgroundColor: 'orange',
    height: 24,
    width: 78,
    borderRadius: 4,
    justifyContent: 'center',
  },
  btnText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ProductsCard;
