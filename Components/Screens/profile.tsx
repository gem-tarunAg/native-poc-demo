import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from '../Footer';
function Profile() {
  let ProfileFooterStyle = {
    position:'absolute',
    bottom:0,
    width:'100%'
  }
  return (
    <View style={styles.containerMain}>
      <ScrollView >
        <Text style={styles.text}>Profile Component</Text>
      </ScrollView>
      <Footer style={ProfileFooterStyle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
  },
  text:{
    fontSize:24,
    alignItems:'center',
    textAlignVertical:'center',
    textAlign:'center',
    color:'red',
    marginTop:400
  }
});

export default Profile;
