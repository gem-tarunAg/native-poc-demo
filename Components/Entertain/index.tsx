import React from 'react';
import { Styles as styles } from '../../Styles/Common';
import { View, Text } from 'react-native';
import Footer from '../Footer';

function Entertain() {
  let EntertainFooterStyle = {
    position:'absolute',
    bottom:0,
    width:'100%'
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a Entertainment Page</Text>
      <Footer style={EntertainFooterStyle} />
    </View>
  );
}

export default Entertain;
