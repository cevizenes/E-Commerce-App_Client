import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {CartData} from '../data/CartData';
import PriceTable from '../components/Cart/PriceTable';
import Layout from '../components/Layout/Layout';
import CartItem from '../components/Cart/CartItem';

const Cart = ({navigation}) => {
  const [cartItems, setCartItems] = useState(CartData);

  return (
    <Layout>
      <Text style={styles.heading}>
        {cartItems?.length > 0
          ? `You have ${cartItems?.length} items`
          : 'Cart is empty'}
      </Text>
      {cartItems?.length > 0 && (
        <>
          <ScrollView>
            {cartItems.map(item => (
              <CartItem item={item} key={item._id} />
            ))}
          </ScrollView>
          <View>
            <PriceTable title={'Price'} price={999} />
            <PriceTable title={'Tax'} price={1} />
            <PriceTable title={'Shipping'} price={1} />
            <View style={styles.grandTotal}>
              <PriceTable title={'Grand Total'} price={1001} />
            </View>
            <TouchableOpacity
              style={styles.btnCheckout}
              onPress={() => navigation.navigate('checkout')}>
              <Text style={styles.btnCheckoutText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    color: 'green',
    marginTop: 12,
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#ffffff',
    padding: 4,
    margin: 4,
    marginHorizontal: 16,
  },
  btnCheckout: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#000000',
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 20,
  },
  btnCheckoutText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Cart;
