import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const OrderItem = ({order}) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <Text>Order ID : {order._id}</Text>
        <Text>Date : {order.date}</Text>
      </View>
      <Text> Product Name : {order.productInfo.name}</Text>
      <Text> Price : {order.productInfo.price} $</Text>
      <Text> Quantity : {order.productInfo.qty}</Text>
      <Text> Total Amount : {order.totalAmount} $</Text>
      <Text style={styles.status}>Order Status: {order.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    margin: 12,
    padding: 8,
    borderRadius: 12,
  },
  orderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingBottom: 4,
  },
  status: {
    borderTopWidth: 1,
    fontWeight: 'bold',
    borderColor: 'lightgray',
    padding: 4,
  },
});
export default OrderItem;
