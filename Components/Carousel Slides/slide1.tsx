import React from 'react';
import { Styles as styles } from '../../Styles/Common';
import { View, Text } from 'react-native';
import Footer from '../Footer';

function Slide1() {
  let DineFooterStyle = {
    position:'absolute',
    bottom:0,
    width:'100%'
  }
  return (
    <View style={styles.slidesContainer}>
      <Text style={styles.text}>This is Slide1</Text>
      <Footer style={DineFooterStyle} />
    </View>
  );
}

export default Slide1;
