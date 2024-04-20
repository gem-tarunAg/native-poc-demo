import React from 'react';
import { StylesOffersPage as styles } from '../../Styles/Offers';
import { View, Text } from 'react-native';

function Offers() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a Offers Page</Text>
    </View>
  );
}

export default Offers;
