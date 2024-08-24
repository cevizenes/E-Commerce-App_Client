import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Layout from '../components/Layout/Layout';

const Checkout = ({navigation}) => {
  const handleCod = () => {
    alert('Your Order Has Been Placed Successfully');
  };
  const handleOnline = () => {
    navigation.navigate('payment');
  };
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>Payment Options</Text>
        <Text style={styles.price}>Total Amount: 1001 $</Text>
        <View style={styles.paymentCard}>
          <Text style={styles.paymentHeading}>Select you Payment Mode</Text>
          <TouchableOpacity style={styles.paymentButton} onPress={handleCod}>
            <Text style={styles.paymentButtonText}>Cash On Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentButton}
            onPress={() => handleOnline()}>
            <Text style={styles.paymentButtonText}>
              Online (CREDIT | DEBIT CARD)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%',
  },
  heading: {
    fontSize: 28,
    fontWeight: '500',
    marginVertical: 12,
  },
  price: {
    fontSize: 20,
    marginBottom: 12,
    color: 'gray',
  },
  paymentCard: {
    backgroundColor: '#ffffff',
    width: '90%',
    borderRadius: 10,
    padding: 28,
    marginVertical: 12,
  },
  paymentHeading: {
    color: 'gray',
    marginBottom: 12,
  },
  paymentButton: {
    backgroundColor: '#000000',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 10,
  },
  paymentButtonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});
export default Checkout;
