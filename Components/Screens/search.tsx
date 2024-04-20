import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from '../Footer';
function Search() {
  let SearchFooterStyle = {
    position:'absolute',
    bottom:0,
    width:'100%'
  }
  return (
    <View style={styles.containerMain}>
      <ScrollView >
        <Text style={styles.text}>Search Component</Text>
      </ScrollView>
      <Footer style={SearchFooterStyle}/>
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

export default Search;