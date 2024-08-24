import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProductsData} from '../data/ProductData';
import Layout from '../components/Layout/Layout';

const ProductDetails = ({route}) => {
  const [productDetails, setProductDetails] = useState('');
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const getProduct = ProductsData.find(p => {
      return p?._id === params?._id;
    });
    setProductDetails(getProduct);
  }, [params?._id]);

  const handleAddQty = () => {
    if (qty === 10) return alert("you can't added more than 10 quantity");
    setQty(prev => prev + 1);
  };

  const handleRemoveQty = () => {
    if (qty === 1) return alert("you can't removed less than 1 quantity");
    setQty(prev => prev - 1);
  };

  const {params} = route;

  return (
    <Layout>
      <View>
        <Image source={{uri: productDetails?.imageUrl}} style={styles.image} />
        <View style={styles.container}>
          <Text style={styles.title}>{productDetails?.name}</Text>
          <Text style={styles.title}> Price : {productDetails?.price} $</Text>
          <Text style={styles.description}>{productDetails?.description}</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnCard}
            onPress={() => alert(`${qty} items added to cart`)}
            disabled={productDetails?.quantity <= 0}>
            <Text style={styles.btnCardText}>
              {productDetails?.quantity > 0 ? 'ADD TO CART' : 'OUT OF STOCK'}
            </Text>
          </TouchableOpacity>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btnQty}
              onPress={() => handleRemoveQty()}>
              <Text style={styles.btnQtyText}>-</Text>
            </TouchableOpacity>
            <Text>{qty}</Text>
            <TouchableOpacity
              style={styles.btnQty}
              onPress={() => handleAddQty()}>
              <Text style={styles.btnQtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
  },
  container: {
    marginVertical: 16,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 18,
    textAlign: 'left',
  },
  description: {
    fontSize: 12,
    textTransform: 'capitalize',
    textAlign: 'justify',
    marginVertical: 12,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 12,
  },
  btnCard: {
    width: 180,
    backgroundColor: '#000000',
    //marginVertical: 12,
    borderRadius: 4,
    height: 40,
    justifyContent: 'center',
  },
  btnCardText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  btnQty: {
    backgroundColor: 'lightgray',
    width: 40,
    alignItems: 'center',
    marginHorizontal: 12,
  },
  btnQtyText: {
    fontSize: 20,
  },
});
export default ProductDetails;
