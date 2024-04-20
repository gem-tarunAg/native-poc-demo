import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StylesHomePage as styles } from '../../Styles/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

function Footer(props:any) {
  console.log(props)
  const navigation:any = useNavigation();
    const handleIconClick = (iconName:any) => {
        console.log(`Clicked on ${iconName}`);
        navigation.navigate(iconName);
    };
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={() => handleIconClick("Home")}>
        <Icon name="home" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleIconClick("Search")}>
        <Icon name="search" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleIconClick("Notification")}>
        <Icon name="bell" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleIconClick("Profile")}>
        <Icon name="user" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleIconClick("Setting")}>
        <Icon name="cog" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}


export default Footer;
