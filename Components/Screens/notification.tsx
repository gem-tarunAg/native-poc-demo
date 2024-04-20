import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Footer from '../Footer';
function Notification() {
  return (
  <View style={styles.containerMain}>
        <ScrollView style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
          <Text>Notifi</Text>
        </ScrollView>
        <ScrollView >          
          <Footer />
        </ScrollView>
      </View> 
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
  }
});

export default Notification;
