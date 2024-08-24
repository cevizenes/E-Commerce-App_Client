import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Layout from '../components/Layout/Layout';
import Categories from '../components/Category/Categories';
import Banner from '../components/Banner/Banner';
import Products from '../components/Products/Products';
import Header from '../components/Layout/Header';

const Home = () => {
  return (
    <Layout>
      <Header />
      <Categories />
      <Banner />
      <Products />
      <View></View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
