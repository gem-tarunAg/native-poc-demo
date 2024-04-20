import React from 'react';
import { Styles as styles } from '../../Styles/Common';
import { View, Text } from 'react-native';
import Footer from '../Footer';

function Dine() {
  let DineFooterStyle = {
    position:'absolute',
    bottom:0,
    width:'100%'
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a Dining Page</Text>
      <Footer style={DineFooterStyle} />
    </View>
  );
}

export default Dine;
