import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StylesHomePage as styles } from '../../Styles/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';

function Footer() {
    const handleIconClick = (iconName:String) => {
        // Implement your logic here based on the clicked icon
        console.log(`Clicked on ${iconName}`);
    };
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={() => handleIconClick("home")}>
        <Icon name="home" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleIconClick("search")}>
        <Icon name="search" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleIconClick("bell")}>
        <Icon name="bell" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleIconClick("user")}>
        <Icon name="user" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleIconClick("cog")}>
        <Icon name="cog" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
    // <View style={styles.footer}>
    //   {/* <Text style={styles.footerText}>This is the footer</Text> */}
    //   <Button title='Button1'/>
    //   <Button title='Button2'/>

    // </View>
  );
}

export default Footer;
