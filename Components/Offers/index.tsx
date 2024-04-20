import React from 'react';
import { StylesOffersPage as styles } from '../../Styles/Offers';
import { View, Text } from 'react-native';
import Footer from '../Footer';

function Offers() {
  let OffersFooterStyle = {
    position:'absolute',
    bottom:0,
    width:'100%'
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a Offers Page</Text>
      <Footer style={OffersFooterStyle} />
    </View>
  );
}

export default Offers;
